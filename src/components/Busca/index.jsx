
export const Busca=({busca, buscaODA, odas})=>{
    return(
        <div className="busca">
            <h3>Consultas de Objetos Digitais de Audiodescrição</h3>
            <p>
                <input
                    name='busca'
                    type='text'
                    value={busca}
                    placeholder='Digite sua busca'
                    onChange={buscaODA}
                />
            </p>
            <div id="number-odas" type="text">{odas.length}</div>

        </div>
        
    )
}
