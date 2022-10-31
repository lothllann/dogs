import React from 'react';

const App = () => {
    const nome = "nick";
    const ativo = false;
    return <div className={ativo ? 'ativo' : 'inativo'}>Meu App {nome}</div>
}

export default App;