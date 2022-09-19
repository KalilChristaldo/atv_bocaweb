
export const Lista=({id, nome, usuario, data_inclusao, descricao, palavras_chave})=>{
    return(
        <div className="lista">
            <div className="lista-content">
                <hr />
                <h1>{nome}</h1>
                <p>{usuario}</p>
                <p>{data_inclusao}</p>
                <p>{palavras_chave} </p>
            </div>
        </div>
    )
}

