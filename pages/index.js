import Head from "next/head";
import { useReducer } from "react";
import Layout, { siteTitle } from "../components/layout";
import MainReducer from "../hooks/mainReducer";
import utilStyles from "../styles/utils.module.css";

const InitialState = {
  short: true,
  long: false,
  speaker: false,
};

export default function Home() {
  const [state, dispatch] = useReducer(MainReducer, InitialState);
  const { short, long, speaker } = state;

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
            <a href="https://twitter.com/rodzyrm" target="blank">
              Twitter
            </a>
          </div>
          <div className={utilStyles.buttonsContainer}>
            <button
              style={{
                borderColor: short ? "#673ab7" : "#adadad",
                color: short ? "#673ab7" : "#8d8d8d",
              }}
              className={utilStyles.microbuttons}
              onClick={() => dispatch({ type: "Short" })}
            >
              Short
            </button>
            <button
              style={{
                borderColor: long ? "#2196f3" : "#adadad",
                color: long ? "#2196f3" : "#8d8d8d",
              }}
              className={utilStyles.microbuttons}
              onClick={() => dispatch({ type: "Long" })}
            >
              Long
            </button>
            <button
              style={{
                borderColor: speaker ? "#EC407A" : "#adadad",
                color: speaker ? "#880E4F" : "#8d8d8d",
              }}
              className={utilStyles.microbuttons}
              onClick={() => dispatch({ type: "Speaker" })}
            >
              Speech
            </button>
          </div>
          {short && (
            <>
              <p>
                Hey there! I'm a self tought modern web developer, currently
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
          {long && (
            <>
              <p>Long whoooooooo</p>
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
          {speaker && (
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
