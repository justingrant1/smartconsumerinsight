// Metadata generator for Next.js 14 App Router
export function generateMetadata({
  title,
  description,
  canonical,
  ogImage = '/assets/og-image.jpg'
}: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}) {
  const fullTitle = `${title} | Smart Consumer Insight`;
  const siteUrl = 'https://smartconsumerinsight.com';
  const canonicalUrl = canonical || siteUrl;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      type: 'article',
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'Smart Consumer Insight',
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${siteUrl}${ogImage}`]
    }
  };
}

// Schema markup as a separate component
export function SchemaMarkup({
  reviews = [],
  faqs = []
}: {
  reviews?: Array<{ name: string; rating: number; author?: string; reviewBody?: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}) {
  const siteUrl = 'https://smartconsumerinsight.com';

  const reviewSchema = reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": reviews.map((review, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "name": review.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": 10
        },
        "author": {
          "@type": "Person",
          "name": review.author || "Smart Consumer Insight Editorial Team"
        }
      }
    }))
  } : null;

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
