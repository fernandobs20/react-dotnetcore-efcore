import React from 'react'
import AtividadeItem from './AtividadeItem';

export default function AtividadeLista(props) {
  return (
      <div className="mt-3">
        {props.ativdades.map(ativ => (
          <AtividadeItem
            key={ativ.id}
            ativ={ativ}
            pegartividade={props.pegartividade}
            handleConfirmModal={props.handleConfirmModal}
          />
        ))}

      </div>
  )
}
