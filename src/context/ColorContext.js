import React, { createContext, useContext, useState } from 'react';

// Definindo as paletas de cores para cada filtro de daltonismo

// Tema normal (claro)
const normalLightTheme = {
  background: '#f0f4f7',
  text: '#333333',
  buttonBackground: '#007bff',
  buttonText: '#ffffff',
  inputBackground: '#ffffff',
  placeholderText: '#cccccc',
  border: '#dddddd',
};

// Tema normal (escuro)
const normalDarkTheme = {
  background: '#1c1c1c',
  text: '#ffffff',
  buttonBackground: '#5A67D8',
  buttonText: '#ffffff',
  inputBackground: '#2C2C2C',
  placeholderText: '#777777',
  border: '#444444',
};

// Temas para diferentes tipos de daltonismo (claro e escuro)
const deuteranopiaLightTheme = {
  background: '#f4f1c9',
  text: '#3b3b3b',
  buttonBackground: '#ff9933',
  buttonText: '#000000',
  inputBackground: '#ffffff',
  placeholderText: '#777777',
  border: '#dddddd',
};
const deuteranopiaDarkTheme = {
  background: '#2d2d2d',
  text: '#f4f1c9',
  buttonBackground: '#ffb366',
  buttonText: '#000000',
  inputBackground: '#2C2C2C',
  placeholderText: '#777777',
  border: '#444444',
};

const protanopiaLightTheme = {
  background: '#f4e8c7',
  text: '#4b3b3b',
  buttonBackground: '#ff7f7f',
  buttonText: '#000000',
  inputBackground: '#ffffff',
  placeholderText: '#777777',
  border: '#dddddd',
};
const protanopiaDarkTheme = {
  background: '#3c2c2c',
  text: '#f4e8c7',
  buttonBackground: '#ff9a9a',
  buttonText: '#000000',
  inputBackground: '#2C2C2C',
  placeholderText: '#777777',
  border: '#444444',
};

const tritanopiaLightTheme = {
  background: '#e0f0ff',
  text: '#333b4b',
  buttonBackground: '#ffaf40',
  buttonText: '#000000',
  inputBackground: '#ffffff',
  placeholderText: '#777777',
  border: '#dddddd',
};
const tritanopiaDarkTheme = {
  background: '#1e2d3d',
  text: '#e0f0ff',
  buttonBackground: '#ffb366',
  buttonText: '#000000',
  inputBackground: '#2C2C2C',
  placeholderText: '#777777',
  border: '#444444',
};

// Criação do contexto
const ColorContext = createContext();

// Provedor do contexto de cores
export const ColorProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorblindFilter, setColorblindFilter] = useState(null); // Filtro de daltonismo selecionado

  // Alterna entre modo escuro e claro
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Alterna o filtro de daltonismo
  const applyColorblindFilter = (filter) => {
    setColorblindFilter(filter);
  };

  // Escolhe o tema apropriado com base nos estados
  let colors;
  if (colorblindFilter === 'deuteranopia') {
    colors = isDarkMode ? deuteranopiaDarkTheme : deuteranopiaLightTheme;
  } else if (colorblindFilter === 'protanopia') {
    colors = isDarkMode ? protanopiaDarkTheme : protanopiaLightTheme;
  } else if (colorblindFilter === 'tritanopia') {
    colors = isDarkMode ? tritanopiaDarkTheme : tritanopiaLightTheme;
  } else {
    colors = isDarkMode ? normalDarkTheme : normalLightTheme;
  }

  return (
    <ColorContext.Provider value={{ colors, toggleDarkMode, applyColorblindFilter, colorblindFilter, isDarkMode }}>
      {children}
    </ColorContext.Provider>
  );
};

// Hook para acessar o contexto em qualquer componente
export const useColorTheme = () => useContext(ColorContext);
