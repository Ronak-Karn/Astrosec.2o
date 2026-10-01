import { site } from "@/lib/data";

const RESEND_API_URL = "https://api.resend.com/emails";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  // Honeypot: bots fill hidden fields. Pretend success, do nothing.
  if (typeof body.company === "string" && body.company.length > 0) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and project details are required." },
      { status: 400 }
    );
  }

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length > 5000
  ) {
    return Response.json({ error: "Invalid input." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "AstroSec <onboarding@resend.dev>";

  if (!apiKey) {
    // No key configured yet — keep the site working, log instead of send.
    console.warn(
      "[contact] RESEND_API_KEY not set — message logged, not delivered:",
      JSON.stringify({ name, email, phone, message })
    );
    return Response.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New project inquiry from ${name}`,
        html: `
          <h2>New project inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
          <hr />
          <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("[contact] Resend error:", res.status, error);
      return Response.json(
        { error: "Could not send your message. Please email us directly." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return Response.json(
      { error: "Could not send your message. Please email us directly." },
      { status: 502 }
    );
  }
}
