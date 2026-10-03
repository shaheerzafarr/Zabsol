# Production Readiness Checklist

This document provides a production readiness template for your Next.js application.

## 1. Environment & Configuration
- [ ] Configure production environment variables in `.env.production`.
- [ ] Ensure `NEXT_PUBLIC_API_BASE_URL` points to the production API gateway.
- [ ] Verify secret keys and sensitive tokens are not exposed to the client bundle.

## 2. Security & Compliance
- [ ] HTTPS enforced across all endpoints.
- [ ] Secure cookies configured (`Secure`, `HttpOnly`, `SameSite=Strict`).
- [ ] CORS policies appropriately restricted on backend services.
- [ ] Content Security Policy (CSP) headers verified.

## 3. Performance & Build
- [ ] Run `npm run build` to verify standard bundle generation without errors.
- [ ] Audit bundle sizes and lazy-load heavy client components.
- [ ] Optimize images and static assets via Next.js Image component.

## 4. Monitoring & Logging
- [ ] Error tracking service (e.g. Sentry) integration.
- [ ] Server log aggregation and health-check ping endpoint configured.
