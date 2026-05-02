import Navbar from "../../components/Navbar/navbar"
import Hero from "../../components/Hero"
import Highlights from "../../components/Highlights"
import Cards from "../../components/Cards"
import Footer from "../../components/Footer"
import { EQUIPO_VENTAS } from "../../dummy/dummy-info"

function HomePage(){
    return <div>
        <Navbar />
        <Hero />
        <Highlights />

        <section className="cards-section">
            <h2 className="text">COLABORADORES</h2>
            <div className="cards-grid">
                {EQUIPO_VENTAS.map((persona) => (
                <Cards key={persona.id} member={persona} />
            ))}
            </div>
        </section>

    <Footer />
    </div>
}

export default HomePage;