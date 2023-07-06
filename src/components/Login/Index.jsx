import React, { useContext,useState } from 'react';
import Title from './Styles';
import { Container } from '../utils/Container';
import InputCustom from '../utils/Inputs';
import Button from '../utils/Buttons';
import jwt_decode from 'jwt-decode'; 
import axios from 'axios'
import config from '../../config/url';
import { AuthContext } from '../context/AuthContext'

const Index = () => {

   const api = axios.create({
      baseURL:config.apiUrl
   })
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseToken, setResponseToken] = useState('');

  const { setAuthData } = useContext(AuthContext);

   const handleLogin = async (e) => {
      e.preventDefault();
     
     try {
       const response = await api.post('/login/', {
        numdoc: username,
        passusu: password,
       })
       const { token } = response.data;
       setResponseToken(token)
       console.log(responseToken)
       const decodedToken = jwt_decode(token); 
       const userId = decodedToken.id;
       const usernameid = decodedToken.numdoc;
       const nameuser = decodedToken.nombre;
       const roleName = decodedToken.rol;

       console.log(userId + usernameid + roleName + nameuser);
       setAuthData({ usernameid, nameuser, roleName });

     } catch (error) {
       
      }
  };

  return (
    <Container>
      <Title text="Inicio de sesión">
        <form action="">
          <InputCustom
            label="Usuario"
            placeholder="Ingrese usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          <InputCustom
            label="Contraseña"
            placeholder="Ingrese contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="ButtonContainer">
            <Button text="Ingresar" onClick={handleLogin} />
          </div>
        </form>
      </Title>
    </Container>
  );
};

export default Index;
