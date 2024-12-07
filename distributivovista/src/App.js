

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  DistriLista from './components/DistriLista';
import DistriFormu from './components/DistriFormu';
import { Container } from "@mui/material";
import Menu from './components/Navbarra';


function App() {
  return (
   <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path ="/" element={<DistriLista />} />
          <Route path ="/Formulario" element={<DistriFormu />} />
        </Routes>
      </Container>
   </BrowserRouter>
  );
};

export default App;
