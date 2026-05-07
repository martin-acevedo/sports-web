import Info from "../../components/Info/index"
import Footer from "../../components/Footer/index"
import logo from "../../assets/github-icon.png";

function Desarrollador() {
    return  <div>
        <Info 
            nombre="Martín Acevedo"
            carrera="Ingeniería Civil Informática"
            ciudad="Talca, Chile"
            github="https://github.com/martin-acevedo"
            imagen= {logo}
        />
    </div>;
}

export default Desarrollador;