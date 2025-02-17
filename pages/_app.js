import "C/styles/globals.css";
import Header from "C/components/Header";
import Footer from "C/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
     {/* Script Google Analytics */}
     <Script
     strategy="afterInteractive"
     src={`https://www.googletagmanager.com/gtag/js?id=G-MY4YMF7G9V`}
   />
   <Script
     id="google-analytics"
     strategy="afterInteractive"
     dangerouslySetInnerHTML={{
       __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-MY4YMF7G9V');
       `,
     }}
   />
    <div className="pt-[80px]">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  );
}
