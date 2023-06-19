import React from "react";
import imgEquipaje from "../../assets/fistSection/equipaje.svg";
import imgPromociones from "../../assets/fistSection/promociones.svg";
import imgVoucher from "../../assets/fistSection/voucher.svg";

export default function FirstSection() {
  return (
    <>
      <section>
        <div className="content-wrapp">
          <div className="threeCards-ctn">
            <div className="threeCards-card">
              <img loading="lazy" src={imgEquipaje} alt="" />
              <h2>COMPRÁ TUS EXTRAS ONLINE</h2>
              <p>
                ¿Querés comprar tu valija, elegir tu asiento o viajar con tu
                mascota?{" "}
                <a
                  href="https://flybondi.com/ar/adicionales"
                  className="threeCards-anchor"
                >
                  Click acá.
                </a>
              </p>
            </div>

            <div className="threeCards-card">
              <img loading="lazy" src={imgVoucher} alt="" />
              <h2>CONSULTÁ TU VOUCHER</h2>
              <p>
                Ingresá{" "}
                <a
                  href="https://flybondi.com/ar/vouchers"
                  className="threeCards-anchor"
                >
                  acá
                </a>{" "}
                los datos de tu voucher para conocer el saldo disponible
              </p>
            </div>

            <div className="threeCards-card">
              <img loading="lazy" src={imgPromociones} alt="" />
              <h2>PROMOCIONES Y FINANCIACIÓN</h2>
              <p>
                Hacé{" "}
                <a
                  href="https://flybondi.com/ar/promociones"
                  className="threeCards-anchor"
                >
                  click acá
                </a>{" "}
                y conocé todas las promociones y opciones de financiación que
                tenemos para que viajes aun más ultra low cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
