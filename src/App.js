import './App.css';
import { Component } from "react";
import { Lista } from './components/Lista';
import { Busca } from './components/Busca'; 
import { Rodape } from './components/Rodape';
import { Cabecalho } from './components/Cabecalho';

class App extends Component{
  //Criação dos estados da classe
  state={
    busca: '',
    odas:[]
} 


componentDidMount(){
  this.carregaODAs();
}     

carregaODAs(){
  const {busca} = this.state;
  fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
  .then(response => response.json())
  .then(odas => this.setState({odas}))
  console.log({busca})
}

buscaODA = (evento)=>{
  this.setState({busca: evento.target.value});
  this.carregaODAs();
}
 
  render() {
    const {odas}=this.state; 
    
    return(
      <section className="container">
        <Cabecalho/>
        <main className="container-main">
          <div className='container-esquerda'>
            <Busca
                busca={this.state.busca}
                buscaODA={this.buscaODA}
                odas={odas}
              />
            <div className="container-texto">
              
                <h3>O SEU PORTAL DE AUDIODESCRIÇÃO</h3>
                
                <p>O <strong>BocaWeb</strong> é um portal onde pessoas
                com deficiência visual terão acesso a 
                informações contidas em imagens
                por meio de <strong>audiodescrição</strong>.
                </p>
                
            </div>

          </div>

            <div className="container-lista">
              <h3>Objetos Digitais de Audiodescrição</h3>
          
              <div>
              {odas.map(oda =>(
                  <Lista
                    key={oda._id}
                    nome= {oda.nome}
                    usuario= {oda.usuario}
                    data_inclusao= {oda.data_inclusao}
                    descricao= {oda.descricao}
                    palavras_chave= {oda.palavras_chave}
                    />
                ))}
              </div>
            </div>
        </main>
          
        <Rodape/> 
      </section> 
    )
  }
}

export default App; 

/* comando para comentar tudo= shift + alt + A */
