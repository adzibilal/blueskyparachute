import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  article = null,
  product = null,
  structuredData = null
}) => {
  const siteTitle = 'PT Langit Biru Parasut - Manufaktur Parasut Militer & Rekreasi Indonesia';
  const siteDescription = 'PT Langit Biru Parasut (Blue Sky Parachute) adalah perusahaan manufaktur parasut terdepan di Indonesia. Kami memproduksi parasut militer, rekreasi, kargo, dan darurat dengan standar internasional untuk TNI, Polri, dan sipil.';
  const siteUrl = 'https://blueskyparachute.com';
  const defaultImage = `${siteUrl}/logo-master.png`;

  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageDescription = description || siteDescription;
  const pageImage = image || defaultImage;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;
  const pageKeywords = keywords || 'parasut, parachute, manufaktur parasut, parasut militer, parasut rekreasi, parasut kargo, parasut darurat, TNI, Polri, skydiving, static line, airborne, Indonesia';

  // Generate structured data based on page type
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": pageTitle,
      "description": pageDescription,
      "url": pageUrl,
      "isPartOf": {
        "@type": "WebSite",
        "name": siteTitle,
        "url": siteUrl
      },
      "about": {
        "@type": "Organization",
        "name": "PT Langit Biru Parasut",
        "alternateName": "Blue Sky Parachute"
      }
    };

    if (article) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": pageTitle,
        "description": pageDescription,
        "image": pageImage,
        "url": pageUrl,
        "datePublished": article.datePublished,
        "dateModified": article.dateModified || article.datePublished,
        "author": {
          "@type": "Organization",
          "name": "PT Langit Biru Parasut"
        },
        "publisher": {
          "@type": "Organization",
          "name": "PT Langit Biru Parasut",
          "logo": {
            "@type": "ImageObject",
            "url": defaultImage
          }
        }
      };
    }

    if (product) {
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": pageDescription,
        "image": pageImage,
        "url": pageUrl,
        "brand": {
          "@type": "Brand",
          "name": "PT Langit Biru Parasut"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "PT Langit Biru Parasut"
        },
        "category": product.category || "Parasut",
        "offers": product.offers ? {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "IDR",
          "seller": {
            "@type": "Organization",
            "name": "PT Langit Biru Parasut"
          }
        } : undefined
      };
    }

    if (structuredData) {
      return structuredData;
    }

    return baseData;
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="PT Langit Biru Parasut" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.datePublished} />
          {article.dateModified && (
            <meta property="article:modified_time" content={article.dateModified} />
          )}
          <meta property="article:author" content="PT Langit Biru Parasut" />
          <meta property="article:section" content={article.section || "Parasut"} />
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Product specific meta tags */}
      {product && (
        <>
          <meta property="product:brand" content="PT Langit Biru Parasut" />
          <meta property="product:availability" content="in stock" />
          <meta property="product:condition" content="new" />
          {product.category && (
            <meta property="product:category" content={product.category} />
          )}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  article: PropTypes.shape({
    datePublished: PropTypes.string,
    dateModified: PropTypes.string,
    section: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }),
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    offers: PropTypes.object
  }),
  structuredData: PropTypes.object
};

export default SEO;
