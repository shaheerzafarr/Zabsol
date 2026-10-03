# System Architecture and Flows

This document outlines the architecture, data flows, and component structure of the application.

## 1. High-Level Architecture
- **Framework:** Next.js (App Router)
- **State Management:** Redux Toolkit + Redux Persist
- **Styling:** CSS Modules + Global Design Tokens (`src/styles`)
- **Component Pattern:** Atomic Design (`atoms`, `molecules`, `organisms`, `ui`, `layout`)
- **Networking:** Axios client instance with auth interceptor (`src/interceptor/useAxios.js`)
- **Real-time Updates:** WebSocket connection provider (`src/context/SocketContext.jsx`)

## 2. Directory Layout
```text
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── (app)/            # Authenticated application shell & pages
│   ├── admin/            # Admin console pages
│   └── (auth)/           # Authentication flows (login, register, reset, otp)
├── components/           # Atomic components and UI library
│   ├── atoms/            # Basic building block inputs/buttons
│   ├── molecules/        # Composed interactive components
│   ├── organisms/        # Complex feature blocks, tables, and modals
│   ├── layout/           # App navigation headers, sidebars, shells
│   └── ui/               # Radix UI / headless UI components
├── config/               # Application configuration constants
├── context/              # React context providers (e.g., WebSockets)
├── data/                 # Data schemas and mock collections
├── formik/               # Form schemas and validation
├── hooks/                # Custom React hooks
├── interceptor/          # API client and interceptor configurations
├── lib/                  # Utilities and i18n dictionaries
├── resources/            # Domain constants and helper utilities
├── store/                # Redux Toolkit store and slices
└── styles/               # Design tokens, variables, typography
```

## 3. Data Flow
1. **User Authentication:** Auth state is stored in `store/auth/authSlice.js` and persisted via `redux-persist`.
2. **API Requests:** `useAxios` injects authorization tokens and handles automatic session recovery / refresh tokens.
3. **Real-time Events:** `SocketProvider` establishes WebSocket connections when authenticated.
