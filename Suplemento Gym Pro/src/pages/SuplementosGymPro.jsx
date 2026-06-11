import React, { useEffect } from 'react'
import { initApp } from '../js/app'

export default function Suplementos() {
  useEffect(() => {
    initApp()
  }, [])

  return (
    <main id="main-content">
      <p id="welcomeMessage" className="form-message" role="status" aria-live="polite"></p>

      <section className="carrusel">
        <h2>Carrusel de productos</h2>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators" role="tablist" aria-label="Indicadores del carrusel">
            <button type="button" className="active" aria-current="true" aria-label="Slide 1" role="tab"></button>
            <button type="button" aria-label="Slide 2" role="tab"></button>
            <button type="button" aria-label="Slide 3" role="tab"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/Imagenes/ImCarrusel_1.jpg" className="d-block w-100" alt="Suplemento Proteína Whey" />
            </div>
            <div className="carousel-item">
              <img src="/Imagenes/ImCarrusel_2.jpg" className="d-block w-100" alt="Suplemento Creatina" />
            </div>
            <div className="carousel-item">
              <img src="/Imagenes/ImCarrusel_3.jpg" className="d-block w-100" alt="Suplemento BCAA" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" id="anterior" aria-label="Diapositiva anterior">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" id="siguiente" aria-label="Diapositiva siguiente">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </section>

      <section className="productos" aria-labelledby="productos-title">
        <h2 id="productos-title">Productos destacados</h2>
        <p id="cartMessage" className="form-message" role="status" aria-live="polite"></p>

        <article className="producto">
          <img src="/Imagenes/Proteina.jpg" alt="Proteína Whey para recuperación muscular" />
          <div className="info">
            <h3>Proteína Whey</h3>
            <p>Proteína de alta calidad para recuperación muscular.</p>
            <table className="inputs" aria-label="Detalles del producto Proteína Whey">
              <tbody>
                <tr>
                  <td><label htmlFor="precio1">Precio ($)</label></td>
                  <td><input type="number" id="precio1" name="precio1" placeholder="$30.000" min="0" step="0.01" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="cantidad1">Cantidad (Gramos por porción)</label></td>
                  <td><input type="number" id="cantidad1" name="cantidad1" placeholder="1 scoop de proteína" min="0" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="stock1">Stock disponible</label></td>
                  <td><input type="number" id="stock1" name="stock1" placeholder="100" min="0" /></td>
                </tr>
                <tr>
                  <td colSpan="2"><button type="button" data-product="Proteína Whey" data-price="30000" aria-label="Agregar Proteína Whey al carrito">Agregar al carrito</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="producto">
          <img src="/Imagenes/Creatina.jpg" alt="Creatina monohidrato para fuerza y resistencia" />
          <div className="info">
            <h3>Creatina Monohidrato</h3>
            <p>Aumenta fuerza y resistencia en entrenamientos intensos.</p>
            <table className="inputs" aria-label="Detalles del producto Creatina Monohidrato">
              <tbody>
                <tr>
                  <td><label htmlFor="precio2">Precio ($)</label></td>
                  <td><input type="number" id="precio2" name="precio2" placeholder="$40.000" min="0" step="0.01" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="dosis2">Dosis (Gramos por porción)</label></td>
                  <td><input type="number" id="dosis2" name="dosis2" placeholder="1 gramo por 10 kg" min="0" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="stock2">Stock disponible</label></td>
                  <td><input type="number" id="stock2" name="stock2" placeholder="150" min="0" /></td>
                </tr>
                <tr>
                  <td colSpan="2"><button type="button" data-product="Creatina Monohidrato" data-price="40000" aria-label="Agregar Creatina Monohidrato al carrito">Agregar al carrito</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="producto">
          <img src="/Imagenes/Bcaa.jpg" alt="BCAA complex para rendimiento deportivo" />
          <div className="info">
            <h3>BCAA Complex</h3>
            <p>Aminoácidos ramificados para mayor rendimiento.</p>
            <table className="inputs" aria-label="Detalles del producto BCAA Complex">
              <tbody>
                <tr>
                  <td><label htmlFor="precio3">Precio ($)</label></td>
                  <td><input type="number" id="precio3" name="precio3" placeholder="$15.000" min="0" step="0.01" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="proporcion3">Proporción (1:1:1)</label></td>
                  <td><input type="number" id="proporcion3" name="proporcion3" placeholder="250" min="0" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="stock3">Stock disponible</label></td>
                  <td><input type="number" id="stock3" name="stock3" placeholder="80" min="0" /></td>
                </tr>
                <tr>
                  <td colSpan="2"><button type="button" data-product="BCAA Complex" data-price="15000" aria-label="Agregar BCAA Complex al carrito">Agregar al carrito</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>

      <section className="comparacion" aria-labelledby="comparacion-title">
        <h2 id="comparacion-title">Comparación de Suplementos</h2>
        <table>
          <caption>Comparación de beneficios y precios de suplementos</caption>
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Beneficio Principal</th>
              <th scope="col">Precio Aproximado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Proteína Whey</td>
              <td>Recuperación muscular</td>
              <td>$30.000</td>
            </tr>
            <tr>
              <td>Creatina Monohidrato</td>
              <td>Fuerza y resistencia</td>
              <td>$40.000</td>
            </tr>
            <tr>
              <td>BCAA Complex</td>
              <td>Rendimiento y recuperación</td>
              <td>$15.000</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="contacto" aria-labelledby="contacto-title">
        <h2 id="contacto-title">Contáctanos</h2>
        <form id="contactForm" noValidate>
          <div className="form-group">
            <label htmlFor="contactName">Nombre</label>
            <input type="text" id="contactName" name="contactName" required minLength="2" maxLength="80" />
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Correo electrónico</label>
            <input type="email" id="contactEmail" name="contactEmail" required maxLength="254" autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="contactMessageInput">Mensaje</label>
            <textarea id="contactMessageInput" name="contactMessage" rows="4" required minLength="10" maxLength="500"></textarea>
          </div>
          <button type="submit">Enviar</button>
          <p id="contactMessage" className="form-message" role="status" aria-live="polite"></p>
        </form>
      </section>
    </main>
  )
}
