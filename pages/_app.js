import "C/styles/globals.css";
import Header from "C/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div className="pt-[80px]">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
