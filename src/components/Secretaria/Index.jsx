import { useState} from 'react';
import { ContainerNav } from './Styles'
import NavBar from './NavBar';
import { LeftNav, IconInst, IconPen } from './Body/Styles';
import Body from './Body/Index'

const Index = (props) => {
   
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const toggleSidebar = () => {
       setIsSidebarOpen(!isSidebarOpen);
   }

   return (
      <ContainerNav>
         <NavBar toggleSidebar={toggleSidebar } />
         <main>
            <LeftNav isopen={isSidebarOpen}>
               <div className='Icons'>
                  <IconPen />
                  <p>Bandeja de Pendientes</p>
               </div>
               <div className='Icons'>
                  <IconInst />
                  <p>Instruciones</p>
               </div>
            </LeftNav>
            <Body />
         </main>
      </ContainerNav> 
   );
}

export default Index;