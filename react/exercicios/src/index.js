import React from 'react';
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>    
, document.getElementById('root'))








//OUTRAS AULAS
// import BomDia from './componentes/BomDia';
// import Multi, {BoaNoite, BoaTarde} from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//     <div>
//         {/* <Multi.BoaTarde nome="JUJU" />   */}
//         {/* <BoaNoite nome="CARANELO" />   */}
//         {/* <BoaTarde nome="CARANELO" />   */}
//         <Saudacao tipo="Bom dia" nome="João"/>

//     </div>, document.getElementById('root')
// )



// ReactDOM.render(< BomDia nome="Vazilão" idade={10}/>, document.getElementById('root'))