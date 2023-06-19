import React from "react";
import SectionTitle from "./SectionTitle";

export default function Newsletter() {
  return (
    <>
      <div className="newsLetter-ctn">
        <SectionTitle
          title="¡No te pierdas de nada!"
          text="Suscribite a nuestro newsletter para enterarte de todo antes que
nadie. Que no se corte!"
        />

        <form action="" className="form-newsletter">
          <input
            type="email"
            placeholder="Ingresa tu eMail"
            className="element-fourCards-input element-fourCards-mail"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <input
            type="submit"
            className="element-fourCards-input element-fourCards-btn"
          />
        </form>
      </div>
    </>
  );
}
