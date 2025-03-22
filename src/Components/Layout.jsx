import Footer from "./Footer";
import Header from "./Header";
import HeaderSlider from "./HeaderSlider";

const Layout = ({children}) => {
  return ( 
    <>
      <Header />
      <HeaderSlider />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
