import Navbar from "../../components/Navbar/index"
import Hero from "../../components/Hero/index"
import Highlights from "../../components/Highlights/index"
import Cards from "../../components/Cards/index"
import Footer from "../../components/Footer/index"
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