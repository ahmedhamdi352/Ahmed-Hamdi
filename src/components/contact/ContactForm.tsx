"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  sendContactMessage,
  type ContactActionResult,
} from "@/app/contact/actions";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { budgetOptions, inquiryTypes } from "@/data/contact";
import { contactSchema, type ContactInput } from "@/lib/validations";

const inputClasses =
  "h-11 border-white/10 bg-white/[0.03] px-3 text-white placeholder:text-slate-500 focus-visible:border-emerald-400/60 focus-visible:ring-emerald-400/15";

const selectClasses =
  "h-11 w-full rounded-lg border border-white/10 bg-[#0b1220] px-3 text-sm text-white outline-none transition-colors focus:border-emerald-400/60 focus:ring-3 focus:ring-emerald-400/15 disabled:cursor-not-allowed disabled:opacity-50";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ContactActionResult | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setResult(null);

    startTransition(async () => {
      const formData = new FormData();
      for (const [key, value] of Object.entries(values)) {
        if (typeof value === "string") {
          formData.set(key, value);
        }
      }

      const actionResult = await sendContactMessage(formData);
      setResult(actionResult);

      if (!actionResult.success && actionResult.fieldErrors) {
        for (const [field, messages] of Object.entries(
          actionResult.fieldErrors,
        )) {
          const message = messages?.[0];
          if (message) {
            setError(field as keyof ContactInput, { type: "server", message });
          }
        }
      }

      if (actionResult.success) {
        reset();
      }
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-400">
          Send a message
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
          Tell me what you&apos;re working on.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Share enough context for me to understand the opportunity or problem.
        </p>
      </div>

      <FieldGroup className="mt-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.name)}>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              className={inputClasses}
              {...register("name")}
            />
            <FieldError>{errors.name?.message}</FieldError>
          </Field>

          <Field data-invalid={Boolean(errors.email)}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              className={inputClasses}
              {...register("email")}
            />
            <FieldError>{errors.email?.message}</FieldError>
          </Field>
        </div>

        <Field data-invalid={Boolean(errors.company)}>
          <FieldLabel htmlFor="company">
            Company / Organization
            <span className="font-normal text-slate-500">(optional)</span>
          </FieldLabel>
          <Input
            id="company"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            className={inputClasses}
            {...register("company")}
          />
          <FieldError>{errors.company?.message}</FieldError>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.inquiryType)}>
            <FieldLabel htmlFor="inquiryType">
              What are you reaching out about?
            </FieldLabel>
            <select
              id="inquiryType"
              aria-invalid={Boolean(errors.inquiryType)}
              className={selectClasses}
              defaultValue=""
              {...register("inquiryType")}
            >
              <option value="" disabled>
                Select an inquiry type
              </option>
              {inquiryTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError>{errors.inquiryType?.message}</FieldError>
          </Field>

          <Field data-invalid={Boolean(errors.budget)}>
            <FieldLabel htmlFor="budget">
              Budget / Package range
              <span className="font-normal text-slate-500">(optional)</span>
            </FieldLabel>
            <select
              id="budget"
              aria-invalid={Boolean(errors.budget)}
              className={selectClasses}
              {...register("budget")}
            >
              <option value="">Select a range</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError>{errors.budget?.message}</FieldError>
          </Field>
        </div>

        <Field data-invalid={Boolean(errors.message)}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            rows={7}
            aria-invalid={Boolean(errors.message)}
            placeholder="Tell me about the role, project, timeline, scope, or the problem you’re trying to solve."
            className="min-h-44 resize-y border-white/10 bg-white/[0.03] px-3 py-3 text-white placeholder:text-slate-500 focus-visible:border-emerald-400/60 focus-visible:ring-emerald-400/15"
            {...register("message")}
          />
          <FieldError>{errors.message?.message}</FieldError>
        </Field>

        <div className="absolute -left-[10000px] top-auto size-px overflow-hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
      </FieldGroup>

      {result ? (
        <div
          role={result.success ? "status" : "alert"}
          className={`mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
            result.success
              ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-200"
              : "border-red-500/25 bg-red-500/10 text-red-200"
          }`}
        >
          {result.success ? (
            <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          ) : (
            <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          )}
          {result.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-500 px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? (
          <>
            <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send aria-hidden="true" className="size-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
