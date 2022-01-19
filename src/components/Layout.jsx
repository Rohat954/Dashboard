import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
