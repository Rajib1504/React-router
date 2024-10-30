import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import { Outlet, useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="  border-2 border-red-700 flex flex-col gap-3 items-center text-xl">
      <Head></Head>
      {navigation.state === "loading" ? <p>Loading....</p> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Home;
