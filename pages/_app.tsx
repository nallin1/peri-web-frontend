import "@/styles/globals.css";
import "../components/SearchTopo/SearchTopo.css";
import "../components/Notification/Notification.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
