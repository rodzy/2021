import styles from "./layout.module.css";
import Link from "next/link";

export default function TheHeader() {
  return (
    <div className={styles.theheaderWrapper}>
      <div className={styles.theheaderInsider}>
        <div className={styles.theheaderInsiderInsider}>
          <div className={styles.theheadercontentdiv}>
            <div
              style={{
                overflow: "auto",
              }}
            >
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <Link href="/projects">
                <a
                  style={{
                    paddingLeft: 10,
                  }}
                >
                  Projects
                </a>
              </Link>
              <button className={styles.theheaderButton} name="Switch button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="svg-moon"
                >
                  <path d="M22 12c0 5.514-4.486 10-10 10-4.826 0-8.864-3.436-9.797-7.99 3.573.142 6.903-1.818 8.644-5.013 1.202-2.206 1.473-4.679.83-6.992 5.608-.194 10.323 4.338 10.323 9.995zm-10-12c-1.109 0-2.178.162-3.197.444 3.826 5.933-2.026 13.496-8.781 11.128l-.022.428c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
