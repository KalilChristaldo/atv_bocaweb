
import logoRodape from "../../img/Logo-rodape.png";

export function Rodape(){
    return(
        <div className="rodape">
            <div>
                <h3>IFMS Dourados | Trabalho de Frameworks2</h3>
                <h3>Kalil Christaldo e Maykon S. Ferreira</h3>
            </div>
            <img src={logoRodape} alt="logoRodape" />
        </div>

    )
}

export default Rodape;