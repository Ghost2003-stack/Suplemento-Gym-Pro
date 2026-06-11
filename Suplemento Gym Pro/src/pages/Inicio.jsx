import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio(){
  return (
    <main className="container">
      <section style={{textAlign:'center', padding:24}}>
        <h2>Bienvenido a Suplementos Gym Pro</h2>
        <p>Encuentra suplementos de calidad para mejorar tu rendimiento y recuperación.</p>
        <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:18}}>
          <Link to="/productos"><button>Ver Productos</button></Link>
          <Link to="/registro"><button>Registrarse</button></Link>
          <Link to="/contacto"><button>Contacto</button></Link>
        </div>
      </section>

      <section style={{marginTop:30}}>
        <h3>Productos destacados</h3>
        <p>Proteína Whey, Creatina Monohidrato y BCAA Complex — revisa la sección de productos para más detalle.</p>
      </section>
    </main>
  )
}
