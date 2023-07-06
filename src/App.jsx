// App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/utils/Header';
import Login from './components/Login/Index';
import Footer from './components/utils/Footer';
import Secretaria from './components/Secretaria/Index';
import Edicion from './components/Admin/Edicion/Index';
import Admin from './components/Admin/Index';
import { AuthContext,AuthProvider  } from './components/context/AuthContext'

// function ProtectedRoute({ element, role }) {
//   const { roleName } = useContext(AuthContext);

//   if (!roleName || roleName !== role) {
//     return null;
//   } else {
//     return element; // Si el usuario tiene el rol correcto, renderiza el componente
//   }
// }

function App() {
  return (

    <>
      <Header />
      <Edicion></Edicion>
      {/* <Secretaria /> */}
      <Footer />
    </>
    // <AuthProvider>
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/admin" element={<ProtectedRoute element={<Admin />} role='ADMINISTRADOR' />} />
    //     <Route path="/secretaria" element={<ProtectedRoute element={<Secretaria />} role='SECRETARIA' />} />
    //   </Routes>
    //   <Footer />
    // </Router>
    // </AuthProvider>
  );
}

export default App;
