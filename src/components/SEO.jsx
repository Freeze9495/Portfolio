import { Helmet } from 'react-helmet-async';

export const SEO = ({
    title = 'Raphaël Piechocki - Portfolio',
    description = 'Portfolio de Raphaël Piechocki, étudiant en développement web et design UX/UI au BUT MMI - Bobigny. En recherche de stage avril-juin 2026.',
    keywords = 'développement web, UX/UI, portfolio, Raphaël Piechocki, stage développeur, BUT MMI, React, JavaScript, Figma, design',
    image = '/images/raph.png',
    url = 'https://votre-domaine.com'
}) => {
    return (
        <Helmet>
            {/* Meta tags de base */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Raphaël Piechocki" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Autres meta tags importants */}
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};
