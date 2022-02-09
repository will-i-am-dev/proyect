import type { NextPage } from "next";
import { Layout } from "../../components/common/layout";

const FinishStep: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold ">Respuesta</h1>
      <p>End Message</p>
    </Layout>
  );
};

export default FinishStep;
