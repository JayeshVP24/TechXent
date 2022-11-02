import Header from "../components/Header";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import {IKContext} from "imagekitio-react"
import Footer from "../components/Footer";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IKContext urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URLENDPOINT} publicKey={process.env.NEXT_PUBLIC_PUBLICAPIKEY} >
    <div >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    </IKContext>
  );
}
