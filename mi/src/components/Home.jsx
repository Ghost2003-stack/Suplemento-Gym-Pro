import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <h1>Que pasa choro</h1>
            <p>Bienvenido a la página de inicio</p>
            <Link to="/Contacto">Ir a Contacto</Link>
        </div>
    );
}