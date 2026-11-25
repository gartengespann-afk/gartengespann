# Security review: Zod dependency

## Finding

| Severity | Component | Location | Finding | Status |
|---|---|---|---|---|
| High | Zod, CVE-2023-54404 | `package.json:67`, `bun.lock:1189` | Hostinger reported the resolved direct dependency `zod@3.25.76` as vulnerable to memory exhaustion when validating oversized unconstrained arrays. | Fixed |

## Remediation

Updated the direct dependency requirement to `zod@^4.6.6`. The Bun lockfile now resolves it to `zod@4.6.7`.

The application's only direct Zod schema use is a search schema containing optional strings in `src/routes/shop.tsx`; it does not define an array schema.

## Validation

- `npx tsc --noEmit` passed.
- `npm run build` passed.

Deploy the updated dependency manifest and Bun lockfile to Hostinger so its installed dependency tree picks up the fixed version.
