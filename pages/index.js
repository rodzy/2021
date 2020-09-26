import Head from "next/head";
import Link from "next/link";
import { useReducer } from "react";
import Layout, { siteTitle } from "../components/layout";
import MainReducer from "../hooks/mainReducer";
import utilStyles from "../styles/utils.module.css";

const InitialState = {
  intro: false,
  stack: true,
  more: false,
};

export default function Home() {
  const [state, dispatch] = useReducer(MainReducer, InitialState);
  const { intro, stack, more } = state;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Software Engineer in Costa Rica."
        ></meta>
      </Head>
      <Layout home>
        <section className={utilStyles.headingMd}>
          <div className={utilStyles.socialsContainer}>
            <a href="mailto:irod2899@gmail.com">Email</a>
            <a href="https://github.com/rodzy" target="blank">
              GitHub
            </a>
            <a href="https://ko-fi/rodzy" target="blank">
              Ko-fi
            </a>
            <a href="#!" target="blank">
              LinkedIn
            </a>
            <a href="https://npmjs.com/~rodzy" target="blank">
              npm
            </a>
            <a href="https://twitter.com/rodzyrm" target="blank">
              Twitter
            </a>
          </div>
          <div className={utilStyles.buttonsContainer}>
            <button
              style={{
                borderColor: intro ? "#673ab7" : "#adadad",
                color: intro ? "#673ab7" : "#8d8d8d",
              }}
              className={utilStyles.microbuttons}
              onClick={() => dispatch({ type: "Intro" })}
            >
              About me
            </button>
            <button
              style={{
                borderColor: stack ? "#2196f3" : "#adadad",
                color: stack ? "#2196f3" : "#8d8d8d",
              }}
              className={utilStyles.microbuttons}
              onClick={() => dispatch({ type: "Stack" })}
            >
              Tech stack
            </button>
            <button
              style={{
                borderColor: more ? "#EC407A" : "#adadad",
                color: more ? "#880E4F" : "#8d8d8d",
              }}
              className={utilStyles.microbuttons}
              onClick={() => dispatch({ type: "More" })}
            >
              More about me
            </button>
          </div>
          {intro && (
            <>
              <p>
                Hey there! I'm a self taught modern web developer, currently
                doing freelance work and focusing on getting a gig at a great
                company that highly values professionals.
              </p>
              <p>
                As a side note I'm spending most of free time doing Open Source
                contributions and just started my new big side project{" "}
                <small>(Private info 👀)</small>.
              </p>
              <p>
                If you are intrested on any of my work checkout my{" "}
                <a href="https://github.com/rodzy">GitHub</a>, I'm very active
                on there and I got some public and very intresting projects to
                check out or even contribute to them.
              </p>
            </>
          )}
          {stack && (
            <>
              <p>
                Well hello there! I know you're curious about what my tech stack
                is and what tools I'm using, well right now I'm feeling
                comfortable with:
              </p>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>GraphQL</li>
              </ul>
              <p>
                That's my prefered stack when I'm working on a full on server +
                client project, however right now I'm enjoying a lot working on
                the frontend and with the JAMstack architecture, my prefered
                technologies for this are:
              </p>
              <ul>
                <li>
                  Next.js{" "}
                  <small>
                    <i>(The React framework for production)</i>
                  </small>
                </li>
                <li>
                  Gatsby.js{" "}
                  <small>
                    <i>
                      (Just for <span style={{ color: "blueviolet" }}>F</span>
                      <span style={{ color: "blue" }}>U</span>
                      <span style={{ color: "green" }}>N</span>, Whenever I want
                      to hook up some of the plugins with a headless CMS)
                    </i>
                  </small>
                </li>
                <li>
                  TailwindCSS{" "}
                  <small>
                    <i>(It's just magical ✨)</i>
                  </small>
                </li>
                <li>
                  Chakra UI{" "}
                  <small>
                    <i>(One of the greatest components libraries for React)</i>
                  </small>
                </li>
                <li>
                  CSS modules{" "}
                  <small>
                    <i>(A clean way to quickly get JSCSS)</i>
                  </small>
                </li>
              </ul>
              <p>
                So, yeah that's my core tech stack currently I've been doing a
                lot of SSG/SSR and overall having a good time with it. Of course
                there are a lot of other tools/libraries that I use for
                utilities, data fetching, quering information, caching for those
                here are some honorable mentions:
              </p>
              <ul>
                <li>React Query</li>
                <li>React SWR</li>
                <li>TypeGraphQL</li>
                <li>TypeORM</li>
                <li>Lodash</li>
              </ul>
              <p>
                There's a lot more to cover, if you're still intrested of
                knowing more in depth of why I use these tech stack, Check my{" "}
                <Link href="/posts/faq">
                  <a>FAQ</a>
                </Link>
              </p>
            </>
          )}
          {more && (
            <>
              <p>Boringggggg!!!!!!</p>
              <p>
                As a side note I'm spending most of free time doing Open Source
                contributions and just started my new big side project{" "}
                <small>(Private info 👀)</small>.
              </p>
              <p>
                If you are intrested on any of my work checkout my{" "}
                <a href="https://github.com/rodzy">GitHub</a>, I'm very active
                on there and I got some public and very intresting projects to
                check out or even contribute to them.
              </p>
            </>
          )}
        </section>
      </Layout>
    </>
  );
}
