import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Highlights from "../../components/Highlights"
import Cards from "../../components/Cards"
import Footer from "../../components/Footer"
import { DUMMY_DATOS } from "../../dummy/dummy-info"

function HomePage(){
    return <div>
        <Navbar />
        <Hero />
        <Highlights />

        <section className="datos-section">
            <h2>FEATURED <span>ANALYSTS</span></h2>
            <div className="datos-grid">
                {DUMMY_DATOS.map((analyst) => (
                <Cards key={analyst.id} data={analyst} />
            ))}
            </div>
        </section>

    <Footer />
    </div>
}

export default HomePage