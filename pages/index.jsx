import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const Home = () => {
  const router = useRouter();
  const titleCheck = () => {
    if (router.pathname === "/") {
      router.pathname = "MAIN PAGE";
    }
    return router.pathname;
  };
  console.log(router.pathname);

  return (
    <div className={styles.container}>
      <Head>
        <title>{titleCheck()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header content="Dashboard" />

      <main className={styles.main}>
        <table>
          <thead>
            <tr>
              <th>INCOMMING</th>
              <th>OUTGOING</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>data +</td>
              <td>data -</td>
            </tr>
            <tr>
              <td>total + </td>
              <td>total -</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="2">Result</td>
            </tr>
          </tfoot>
        </table>
      </main>

      <Footer content="Rohat" />
    </div>
  );
};

export default Home;
