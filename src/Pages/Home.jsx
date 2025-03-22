import AllCategories from "../Categories/AllCategories";
import Layout from "../Components/Layout";
import LatestProduct from "./LatestProduct";

const Home = () => {
  return ( 
    <Layout>
        <div>
            <AllCategories/>
            <LatestProduct />
        </div>
    </Layout>
  );
};

export default Home;
