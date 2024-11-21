import React, { createContext, useState } from 'react';

// Cria o contexto de imagens
export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
};
