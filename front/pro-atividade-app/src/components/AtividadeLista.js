import React from 'react'
import Atividade from './Atividade';

export default function AtividadeLista(props) {
  return (
      <div className="mt-3">
        {props.ativdades.map(ativ => (
          <Atividade
            key={ativ.id}
            ativ={ativ}
            deletarAtividade={props.deletarAtividade} 
            pegartividade={props.pegartividade}
          />
        ))}

      </div>
  )
}
