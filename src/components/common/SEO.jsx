import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
    title,
    description,
    keywords,
    author,
    ogImage,
    ogUrl,
    twitterHandle,
}) => {
    const siteTitle = "Seu Nome - Portfólio";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription =
        "Portfólio profissional mostrando projetos e habilidades em desenvolvimento web.";
    const defaultKeywords =
        "desenvolvedor web, programador, frontend, backend, fullstack, react, javascript";
    const defaultAuthor = "Seu Nome";
    const defaultImage = "/og-image.jpg"; // Adicione uma imagem padrão para compartilhamento
    const defaultUrl = "https://seu-site.com"; // Substitua pela URL do seu site

    return (
        <Helmet>
            {/* Metadados básicos */}
            <title>{fullTitle}</title>
            <meta
                name="description"
                content={description || defaultDescription}
            />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content={author || defaultAuthor} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl || defaultUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta
                property="og:description"
                content={description || defaultDescription}
            />
            <meta property="og:image" content={ogImage || defaultImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={ogUrl || defaultUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta
                name="twitter:description"
                content={description || defaultDescription}
            />
            <meta name="twitter:image" content={ogImage || defaultImage} />
            {twitterHandle && (
                <meta name="twitter:creator" content={twitterHandle} />
            )}

            {/* Metadados adicionais */}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Portuguese" />
            <meta name="revisit-after" content="7 days" />

            {/* Favicon */}
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Canonical URL */}
            <link rel="canonical" href={ogUrl || defaultUrl} />
        </Helmet>
    );
};

export default SEO;
