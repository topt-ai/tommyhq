export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://tommyhq.com/#organization",
    "name": "TommyHQ",
    "url": "https://tommyhq.com/",
    "email": "tommy@tommyhq.com",
    "sameAs": [
      "https://twitter.com/tommyhq"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
