# Ahmed Hamdi Portfolio

Production portfolio for Ahmed Hamdi, a Senior Full Stack Engineer building
AI-enabled enterprise platforms, frontend architectures, dashboards, and
secure internal tools.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Environment

Copy `.env.example` to `.env.local` and configure:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=ahmedhamdi352@gmail.com
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL=
```

`NEXT_PUBLIC_SITE_URL` must be the canonical production origin, for example
`https://example.com`, with no trailing path.

## Required production asset

Place the real CV at:

```text
public/files/Ahmed_Hamdi_Senior_FullStack_Engineer_CV.pdf
```

## Deployment

Deploy to Vercel, configure the environment variables above, and verify the
contact form after the Resend sender/domain is approved.
