"use client";

import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import CodeBlock from "@/components/molecules/CodeBlock/CodeBlock";
import { API_ORIGIN } from "@/config";
import shared from "@/styles/shared.module.css";

const SAMPLE_CODE = `// Example API Request
fetch("${API_ORIGIN}/api/v1/health", {
  method: "GET",
  headers: {
    "Authorization": "Bearer <YOUR_TOKEN>",
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => console.log(data));`;

export default function DocsPage() {
  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Documentation"
        subtitle="Developer guides and API reference documentation."
      />

      <SectionCard title="Getting Started">
        <p style={{ marginBottom: "1rem" }}>
          Welcome to the developer documentation. Integrate with the API using standard HTTP requests.
        </p>
        <CodeBlock code={SAMPLE_CODE} language="javascript" title="Quickstart Example" />
      </SectionCard>

      <SectionCard title="Authentication">
        <p>
          Authenticate your requests by including your bearer token or API key in the authorization header:
        </p>
        <pre style={{ padding: "1rem", background: "hsl(var(--muted))", borderRadius: "8px", marginTop: "0.5rem" }}>
          <code>Authorization: Bearer &lt;YOUR_API_KEY&gt;</code>
        </pre>
      </SectionCard>
    </div>
  );
}
