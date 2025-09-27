


export default function LandingPage() {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <img src="assets/kave.png" className="logo" alt="Kave logo" />
        <p className="slogan">Conectando viajes, personas y destinos</p>
        <p>La nueva forma de viajar con tu cooperativa: fácil, rápido y seguro.</p>
        <div className="cta">
          <a href="https://wa.me/57XXXXXXXXX" className="btn-primary">Reserva tu viaje ahora</a>
          <a href="#" className="btn-secondary">Soy conductor</a>
        </div>
      </section>

      {/* Beneficios */}
      <section className="benefits">
        <h2>Beneficios Clave</h2>
        <div className="grid">
          <div>
            <h3>Para pasajeros</h3>
            <p>Reserva tu viaje sin filas ni llamadas.</p>
            <p>Elige conductor de confianza.</p>
            <p>Compra cupo o fleta el vehículo.</p>
          </div>
          <div>
            <h3>Para conductores</h3>
            <p>Controla tus viajes en una sola app.</p>
            <p>Recibe notificaciones en tiempo real.</p>
            <p>Gestiona tu estado activo/inactivo.</p>
          </div>
          <div>
            <h3>Para la cooperativa</h3>
            <p>Tablero en tiempo real.</p>
            <p>Liquidaciones automáticas.</p>
            <p>Trazabilidad de todos los viajes.</p>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="steps">
        <h2>¿Cómo funciona?</h2>
        <ol>
          <li>Escribe en WhatsApp → Origen, destino y fecha.</li>
          <li>Confirma tu viaje → Precio y conductor.</li>
          <li>Viaja tranquilo → Ticket digital y notificaciones.</li>
        </ol>
      </section>

      {/* Servicios */}
      <section className="services">
        <h2>Servicios Destacados</h2>
        <ul>
          <li>🚐 Viajes compartidos: paga solo tu cupo.</li>
          <li>🚌 Flete completo: contrata el vehículo entero.</li>
          <li>📦 Encomiendas: envía paquetes rápido y seguro.</li>
        </ul>
      </section>

      {/* Testimonios */}
      <section className="testimonials">
        <h2>Lo que dicen nuestros usuarios</h2>
        <blockquote>“Antes tenía que llamar al terminal, ahora reservo en 2 minutos por WhatsApp.” – María G.</blockquote>
        <blockquote>“La app de conductores me facilita todo, ya no pierdo tiempo organizando pasajeros.” – José P.</blockquote>
      </section>

      {/* Seguridad */}
      <section className="security">
        <h2>Seguridad y Transparencia</h2>
        <p>✅ Conductores verificados y afiliados.</p>
        <p>🔒 Datos protegidos bajo Ley 1581/2012.</p>
        <p>💳 Pagos seguros con Wompi/ePayco.</p>
      </section>

      {/* Call to action */}
      <section className="cta2">
        <h2>Miles de viajes, un solo canal. Haz parte de Kave hoy.</h2>
        <a href="https://wa.me/57XXXXXXXXX" className="btn-primary">Escríbenos en WhatsApp</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Kave. Todos los derechos reservados.</p>
        <div className="social">
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}
