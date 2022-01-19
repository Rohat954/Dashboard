import styles from "/styles/Home.module.css";

const Footer = (props) => {
  return <footer className={styles.footer}>Bonjour {props.content}</footer>;
};

export default Footer;
