import React from 'react'
import Atividade from './Atividade';

export default function AtividadeLista(props) {
  return (
      <div className="mt-3">
        {props.ativdades.map(ativ => (
          <Atividade
            key={ativ.id}
            ativ={ativ}
            pegartividade={props.pegartividade}
            handleConfirmModal={props.handleConfirmModal}
          />
        ))}

      </div>
  )
}
