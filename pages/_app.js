import { motion, AnimatePresence } from "framer-motion";
import "../styles/global.css";

export default function App({ Component, pageProps, router }) {
    return (
        <AnimatePresence initial={false} exitBeforeEnter={true}>
            <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                variants={{
                    pageInitial: {
                        opacity: 0,
                    },
                    pageAnimate: {
                        opacity: 1,
                    },
                    pageExit: {
                        opacity: 0,
                    },
                }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}
