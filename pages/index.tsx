import type { NextPage } from "next";
import { Layout } from "../components/common/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Inicio de Sesion BCS</h1>
      <div className="m-2 bg-slate-800">
        <p>Ingrese los siguietnes datos</p>
      </div>
    </Layout>
  );
};

export default Home;
