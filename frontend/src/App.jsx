import React from 'react'
import Home from './pages/home/Home';
import ThemeProvider from './context/themeContext/ThemeContext';

const App = () => {
  return (
    <ThemeProvider> {/* ✅ Yeh correct provider component hai */}
    <Home />
  </ThemeProvider>
  )
}

export default App
