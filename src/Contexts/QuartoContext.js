
import React, { createContext, useContext, useEffect, useState } from 'react';

export const QuartoContext = createContext();

const QuartoProvider = ({ children }) => {

  const [quarto, setQuarto] = useState(null)

  const chooseTypeRoom = (tipo) => {
    setQuarto(tipo)
  }

  return (
    <QuartoContext.Provider
      value={{
        quarto, setQuarto,
        chooseTypeRoom
      }}
    >
      {children}
    </QuartoContext.Provider>
  )
}

export default QuartoProvider