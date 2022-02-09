import type { NextPage } from "next";
import { Layout } from "../../components/common/layout";

const Simulator: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Simulador</h1>
      <div className="m-2 bg-slate-800">
        <p>Ingrese los siguientes datos</p>
      </div>
    </Layout>
  );
};

export default Simulator;
