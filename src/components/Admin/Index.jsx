import React, { useState } from 'react';
import { ContainerNav } from '../Secretaria/Styles'
import NavBar from '../Secretaria/NavBar';
import { LeftNav } from '../utils/LeftNav';
import {  IconInst, IconPen, IconGear, IconCaret } from '../Secretaria/Body/Styles';

const Index = (props) => {

   const [isOpen, setIsOpen] = useState(false);

   const toggleAccordion = () => {
      setIsOpen(!isOpen);
      console.log('aqui')
   };
   
   return (
      <ContainerNav>
         <NavBar />
         <main>
            <LeftNav>
               <div className='Icons hover'>
                  <IconPen />
                  <p>Bandeja de Pendientes</p>
               </div>
               <div className='Icons hover'>
                  <IconInst />
                  <p>Instruciones</p>
               </div>
               <div className={`Icons hover ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                  <IconGear />
                  <p>Administración</p>
               </div>
               <div className={`AccordionContent ${isOpen ? 'open' : ''}`}>
                  <p><span><IconCaret /></span>Usuarios PJ</p>
                  <p><span><IconCaret /></span>Usuarios Internos</p>
                  <p><span><IconCaret /></span>Edición</p>
               </div>
            </LeftNav>
         </main>
      </ContainerNav> 
   );
}

export default Index;