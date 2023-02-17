import Head from "next/head";
import { VscGithubInverted } from "react-icons/vsc";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>D-Warden</title>
        <meta
          name="description"
          content="A decentralized vault to securely store your passwords, documents, and private information"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Decentralized Vault you were looking for!</p>
          <div>
            <a
              href="https://github.com/joshi-kaushal/D-Wardern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithubInverted className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <h1>D-Warden</h1>
        </div>

        <div className={styles.grid}>
          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Passwords <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Stop writing down your log-in credentials, private keys on a
              paper.
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Documents <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Be in-charge of your documents and choose who can access them.
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Private Information <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Save your sensitive data securely, with no fear of data breach.
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Card Details <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Don't waste time looking at your card. The session is
              expiring.&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
