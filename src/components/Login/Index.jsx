import React from 'react';
import Title  from './Styles'
import { Container } from '../utils/Container'
import InputCustom from '../utils/Inputs';
import Button from '../utils/Buttons';

const  Index = (props)=> {
   return (
      <Container>
         <Title text='Inicio de sesión'>
            <form action="">
               <InputCustom label='Usuario' placeholder='Ingrese usuario' />
               <InputCustom label='Contraseña' placeholder='Ingrese contraseña'/>
               <div className='ButtonContainer'>
                  <Button  text='Ingresar'/>
               </div>
            </form>
         </Title> 
      </Container>
   );
}

export default Index;