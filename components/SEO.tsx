import Head from 'next/head';

interface FAQItem {
  question: string;
  answer: string;
}

interface ReviewItem {
  name: string;
  rating: number;
  bestRating?: number;
  author?: string;
  reviewBody?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  reviews?: ReviewItem[];
  faqs?: FAQItem[];
  lastModified?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = '/assets/og-image.jpg',
  reviews = [],
  faqs = [],
  lastModified
}: SEOProps) {
  const fullTitle = `${title} | Smart Consumer Insight`;
  const siteUrl = 'https://smartconsumerinsight.com';
  const canonicalUrl = canonical || siteUrl;

  // Review Schema
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
          "bestRating": review.bestRating || 10
        },
        "author": {
          "@type": "Person",
          "name": review.author || "Smart Consumer Insight Editorial Team"
        },
        "reviewBody": review.reviewBody || `Comprehensive review of ${review.name}`
      }
    }))
  } : null;

  // FAQ Schema
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

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": "Smart Consumer Insight"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smart Consumer Insight",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/assets/logo.png`
      }
    },
    "dateModified": lastModified || new Date().toISOString(),
    "datePublished": lastModified || new Date().toISOString()
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Smart Consumer Insight" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* JSON-LD Schemas */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </Head>
  );
}
