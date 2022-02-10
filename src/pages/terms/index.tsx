import type { NextPage } from "next";
import { Card } from "../../components/common/card";
import { AdminLayout } from "../../components/layouts/adminLayout";

const Simulator: NextPage = () => {
  return (
    <AdminLayout title={"Terminos y condiciones"}>
      <div className="flex flex-row justify-center w-full">
        <Card width="w-1/2">
          <p className="mb-5">Terminos y condiciones:</p>
          <p>CLÁUSULAS</p>
          <p>
            PRIMERA.- OBJETO. En virtud del presente reglamento EL BANCO
            establece los términos y condiciones para la utilización de EL
            SERVICIO que se pone a disposición de EL CLIENTE.
          </p>
          <br/>
          <p>
            PARÁGRAFO PRIMERO- Se entiende por CLIENTE, para los efectos del
            presente reglamento, toda persona natural o jurídica previamente
            vinculada a EL BANCO a través de los productos de Cuenta de Ahorros
            o Cuenta Corriente, ofrecidos a través de la red de EL BANCO, o a
            través de aquellos respecto de los cuales se habilite a futuro EL
            SERVICIO. PARÁGRAFO SEGUNDO- Podrá tener acceso a EL SERVICIO, EL
            CLIENTE persona natural que sea titular de al menos uno de los
            productos en estado activo mencionados, cuya condición de manejo o
            titularidad sea individual o alternativa. No obstante lo anterior, y
            únicamente para efectos de acceder al Servicio de Pago Electrónico
            Integrado de Aportes a la Seguridad Social y Parafiscales, y para
            acceder al comercio virtual con el sistema proveedor de servicios
            electrónicos (PSE), tendrá acceso EL CLIENTE persona jurídica que
            sea titular de los productos mencionados, cuya condición de manejo o
            titularidad sea individual, alternativa o conjunta. En este último
            caso, EL CLIENTE persona jurídica titular de productos con condición
            de manejo o titularidad conjunta expresamente acepta que cualquier
            transacción hecha a través de EL SERVICIO se entenderá efectuada por
            la totalidad de los titulares conjuntos y de conformidad con las
            condiciones previamente establecidas para el manejo del respectivo
            producto. PARÁGRAFO TERCERO- Las políticas de privacidad del manejo
            de datos que se adjuntan al presente reglamento y que EL CLIENTE
            manifiesta aceptar mediante el uso del SERVICIO, hacen parte
            integral del mismo como Anexo 1. PARAGRAFO CUARTO- EL SERVICIO se
            regulará por los contratos o reglamentos del respectivo producto o
            servicio, o en su defecto, por las normas legales que les sean
            aplicables.
          </p>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Simulator;
