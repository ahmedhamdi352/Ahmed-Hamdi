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
import { budgetOptions, inquiryTypes, timelineOptions } from "@/data/contact";
import { contactSchema, type ContactInput } from "@/lib/validations";

const inputClasses =
  "h-12";

const selectClasses =
  "h-12 w-full rounded-xl border border-input bg-card px-4 text-sm text-foreground outline-none transition-[border-color,box-shadow] focus:border-ring focus:ring-3 focus:ring-ring/10 disabled:cursor-not-allowed disabled:opacity-50";

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
      timeline: undefined,
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
      id="inquiry-form"
      className="editorial-card scroll-mt-24 p-7 sm:p-10"
    >
      <div>
        <p className="section-label">
          Project or role inquiry
        </p>
        <h2 className="font-display mt-3 text-4xl tracking-[-0.03em] text-foreground">
          Share the useful details.
        </h2>
        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
          The goal, constraints, and timing help me reply with a practical next step.
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

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.company)}>
            <FieldLabel htmlFor="company">
              Company
              <span className="font-normal text-muted-foreground">(optional)</span>
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

          <Field data-invalid={Boolean(errors.inquiryType)}>
            <FieldLabel htmlFor="inquiryType">Inquiry type</FieldLabel>
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

        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(errors.budget)}>
            <FieldLabel htmlFor="budget">
              Budget / Package range
              <span className="font-normal text-muted-foreground">(optional)</span>
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

          <Field data-invalid={Boolean(errors.timeline)}>
            <FieldLabel htmlFor="timeline">Timeline</FieldLabel>
            <select
              id="timeline"
              aria-invalid={Boolean(errors.timeline)}
              className={selectClasses}
              defaultValue=""
              {...register("timeline")}
            >
              <option value="" disabled>Select a timeline</option>
              {timelineOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            <FieldError>{errors.timeline?.message}</FieldError>
          </Field>
        </div>

        <Field data-invalid={Boolean(errors.message)}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            rows={7}
            aria-invalid={Boolean(errors.message)}
            placeholder="Tell me about the role, project, timeline, scope, or the problem you’re trying to solve."
            className="min-h-44 resize-y"
            {...register("message")}
          />
          <FieldError>{errors.message?.message}</FieldError>
        </Field>

        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            {...register("website")}
          />
        </div>
      </FieldGroup>

      {result ? (
        <div
          role={result.success ? "status" : "alert"}
          className={`mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
            result.success
              ? "border-primary/20 bg-primary/[0.07] text-primary"
              : "border-red-700/20 bg-red-50 text-red-800"
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
        className="button-primary mt-7 disabled:cursor-not-allowed disabled:opacity-60"
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
