import { useState, useEffect } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

function App() {
  
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id:0});
  
  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) : 
      setIndex(Math.max.apply(Math, atividades.map(item => item.id)) + 1)
  }, [atividades])
 

  function addAtividade(ativ) {
    setAtividades([...atividades, 
      {...ativ, id: index}]
    );
  }

  function atualizarAtividade(ativ) {
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setAtividade({id: 0});
   }

   function cancelarAtividade() {
    setAtividade({id: 0});
  }

  function deletarAtividade(id) {
    const atividadesAtualizadas = atividades.filter(ativ => ativ.id !== id);
    setAtividades([...atividadesAtualizadas]);
  }

  function pegartividade(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    setAtividade(atividade[0]);
  }

  return (
    <>

      <AtividadeForm
        addAtividade={addAtividade}
        cancelarAtividade={cancelarAtividade}
        atualizarAtividade={atualizarAtividade}
        ativSelecionada={atividade}
        ativdades={atividades}
      />

      <AtividadeLista
        ativdades={atividades}
        deletarAtividade={deletarAtividade}
        pegartividade={pegartividade}
      />

    </>
  );
}

export default App;
