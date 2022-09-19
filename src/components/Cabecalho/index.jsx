
import logo from "../../img/Logo-cabecalho.png";

export function Cabecalho(){
    return(
        <nav> 
            <div className="cabecalho">
                <div className="quadradologo">
                    <img src={logo} alt='logo Bocaweb'/>
                </div>
            </div>
            
        </nav>
    )
}

export default Cabecalho;