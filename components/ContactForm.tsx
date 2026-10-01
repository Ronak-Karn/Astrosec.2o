"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-start gap-4 p-8">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
          ✓
        </span>
        <h3 className="text-xl font-semibold text-white">Message sent</h3>
        <p className="text-sm leading-relaxed text-fg-muted">
          Thanks for reaching out — we&apos;ll get back to you within one
          business day.
        </p>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">Full name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className="field-input"
          />
        </label>
        <label className="block">
          <span className="field-label">Work email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className="field-input"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="field-label">Phone (optional)</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 555 000 0000"
          className="field-input"
        />
      </label>

      <label className="mt-5 block">
        <span className="field-label">Project details</span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="What are you building, and how can we help?"
          className="field-input resize-y"
        />
      </label>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-6 w-full justify-center sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
