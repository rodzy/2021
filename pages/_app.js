import { ModeProvider } from "../context/ModeContext";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <ModeProvider>
      <Component {...pageProps} />
    </ModeProvider>
  );
}
