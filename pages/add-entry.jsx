import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Layout from "../src/components/layout";

const AddEntry = () => {
  const router = useRouter();
  const titleCheck = () => {
    if (router.pathname === "/add-entry") {
      router.pathname = "ADD ENTRY";
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

      <Layout>
        <main className={styles.main}>
          <form>
            <input type="number" id="price" name="price" />
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>

            <button type="submit">ADD</button>
          </form>
        </main>
      </Layout>
    </div>
  );
};

export default AddEntry;