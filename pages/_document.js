import Document, { Html, Head, Main, NextScript } from "next/document";
import { siteTitle } from "../components/layout";
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta
                        property="og:image"
                        content={`https://avatars1.githubusercontent.com/u/49137701?s=400&u=35e7614cc3215c045b58b4e352bd0616b9d795fd&v=4`}
                    />
                    <meta name="og:title" content={siteTitle} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
