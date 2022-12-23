import { Home } from './components/Home/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Contact } from './components/Contacto/Contact';
import { Layout } from './components/Layout';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        {/* <Route path="/contacto" element={<Contact />} /> */}
      </Route>
    </Routes>
  )
}

export default App;
