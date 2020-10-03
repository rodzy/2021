import { motion, AnimatePresence } from "framer-motion";
import { ReactQueryCacheProvider, QueryCache } from "react-query";
import { Hydrate } from "react-query/hydration";
import "../styles/global.css";

const queryCache = new QueryCache();

export default function App({ Component, pageProps, router }) {
    return (
        <ReactQueryCacheProvider queryCache={queryCache}>
            <AnimatePresence exitBeforeEnter={true}>
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
                    <Hydrate state={pageProps.dehydratedState}>
                        <Component {...pageProps} />
                    </Hydrate>
                </motion.div>
            </AnimatePresence>
        </ReactQueryCacheProvider>
    );
}
