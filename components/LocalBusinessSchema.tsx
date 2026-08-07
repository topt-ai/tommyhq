export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "additionalType": "https://schema.org/MarketingAgency",
    "@id": "https://tommyhq.com/es-sv/#organization",
    "name": "TommyHQ",
    "url": "https://tommyhq.com/es-sv/",
    "telephone": "+503XXXXXXXX", // TODO: NAP real de El Salvador
    "email": "hola@tommyhq.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
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
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
