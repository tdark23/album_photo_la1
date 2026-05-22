import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Album photo de la classe L1A de l'IAI, promotion 2025-2026."
          />
          <meta property="og:site_name" content="iai-l1a-album.vercel.app" />
          <meta
            property="og:description"
            content="Revivez les moments forts de notre classe L1A à l'IAI, promo 2025-2026."
          />
          <meta property="og:title" content="Album Photo L1A - IAI (2025-2026)" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Album Photo L1A - IAI (2025-2026)" />
          <meta
            name="twitter:description"
            content="Revivez les moments forts de notre classe L1A à l'IAI, promo 2025-2026."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
