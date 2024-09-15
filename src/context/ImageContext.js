// src/context/ImageContext.js
import React, { createContext, useState } from 'react';

// Criação do contexto
export const ImageContext = createContext();

// Componente provedor do contexto
export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]); // Estado para armazenar imagens

  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
};
