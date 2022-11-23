
import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null)

  return (
    <AuthContext.Provider
      value={{
        usuario, setUsuario
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider