
import React, { createContext, useContext, useEffect, useState } from 'react';

export const QuartoContext = createContext();

const QuartoProvider = ({ children }) => {

  const [quarto, setQuarto] = useState(
    {
      tipo: 1,
      nome: "Suite Standart",
      fotos: "",
      descricao: "",
      color: '#ccaacc'
    }
  )

  return (
    <QuartoContext.Provider
      value={{
        quarto, setQuarto
      }}
    >
      {children}
    </QuartoContext.Provider>
  )
}

export default QuartoProvider