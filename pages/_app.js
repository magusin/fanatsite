import "C/styles/globals.css";
import Header from "C/components/Header";
import Footer from "C/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="pt-[80px] flex flex-col min-h-screen">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
