import React from "react";
import { Link } from "react-router-dom";

export default function Contacto() {
  return (
    <div>
        <form>
            <h1>Contacto</h1>
            <input type="text" placeholder="Ingrese su nombre" />
            <input type="email" placeholder="Ingrese su email" />
            <textarea placeholder="Ingrese su mensaje"></textarea>
            <button type="submit">Enviar</button>
            <button type="reset">Limpiar</button>
        </form>
        <Link to="/">Volver a la página de inicio</Link>
    </div>
  );
}