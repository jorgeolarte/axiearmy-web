import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className='dark scroll-smooth'>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <script async src='https://tally.so/widgets/embed.js'></script>
        <meta name='theme-color' content='#232426' />
        <link rel='apple-touch-icon' href='/pwa/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body className='bg-black text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
