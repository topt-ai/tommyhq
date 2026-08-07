import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tommyhq.com';
  
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/`,
          'es-SV': `${baseUrl}/es-sv/`,
          'x-default': `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/es-sv/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'en-US': `${baseUrl}/`,
          'es-SV': `${baseUrl}/es-sv/`,
          'x-default': `${baseUrl}/`,
        },
      },
    },
    {
      url: `${baseUrl}/es-sv/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-SV': `${baseUrl}/es-sv/nosotros`,
        },
      },
    },
    {
      url: `${baseUrl}/es-sv/paginas-web`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-SV': `${baseUrl}/es-sv/paginas-web`,
        },
      },
    },
    {
      url: `${baseUrl}/es-sv/seo-local`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-SV': `${baseUrl}/es-sv/seo-local`,
        },
      },
    },
    {
      url: `${baseUrl}/es-sv/google-meta-ads`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-SV': `${baseUrl}/es-sv/google-meta-ads`,
        },
      },
    },
    {
      url: `${baseUrl}/es-sv/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          'es-SV': `${baseUrl}/es-sv/contacto`,
        },
      },
    },
    {
      url: `${baseUrl}/es-sv/politicas`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: {
        languages: {
          'es-SV': `${baseUrl}/es-sv/politicas`,
        },
      },
    }
  ];
}
