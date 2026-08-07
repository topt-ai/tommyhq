export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "additionalType": "https://schema.org/MarketingAgency",
    "@id": "https://tommyhq.com/es-sv/#organization",
    "name": "TommyHQ",
    "url": "https://tommyhq.com/es-sv/",
    "telephone": "+50372018215",
    "email": "hola@tommyhq.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Century Tower",
      "addressLocality": "San Salvador",
      "addressRegion": "SS",
      "addressCountry": "SV"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.6929,
      "longitude": -89.2182
    },
    "areaServed": {
      "@type": "City",
      "name": "San Salvador"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
