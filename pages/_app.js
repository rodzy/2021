import { ModeProvider } from "../context/ModeContext";
import { motion } from "framer-motion";
import "../styles/global.css";

export default function App({ Component, pageProps, router }) {
    return (
        <ModeProvider>
            <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                    pageInitial: {
                        opacity: 0,
                    },
                    pageAnimate: {
                        opacity: 1,
                    },
                }}
            >
                <Component {...pageProps} />
            </motion.div>
        </ModeProvider>
    );
}
