import Link from "next/link";

const Header = (props) => {
  return (
    <header>
      <h1>{props.content}</h1>
      <nav>
        <Link href="/">
          <a>Journal </a>
        </Link>

        <Link href="/add-entry">
          <a> Add entry</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
