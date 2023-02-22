import React from 'react'


const BoaTarde = props => <h1>Boa Tarde {props.nome}</h1>
const BoaNoite = props => <h1>Boa Noite {props.nome}</h1>

export {BoaNoite, BoaTarde} //Exportando com modo destruct kkk acho que é assim
export default {BoaNoite, BoaTarde} //Objeto Padrão