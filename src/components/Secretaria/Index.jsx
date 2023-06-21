import { ContainerNav } from './Styles'
import NavBar from './NavBar';
import {  IconInst, IconPen } from './Body/Styles';
import Body from './Body/Index'
import Tables from '../utils/Tables';

const Index = (props) => {
   
   return (
      <ContainerNav>
         <NavBar />
         <main>
            {/* <LeftNav>
               <div className='Icons'>
                  <IconPen />
                  <p>Bandeja de Pendientes</p>
               </div>
               <div className='Icons'>
                  <IconInst />
                  <p>Instruciones</p>
               </div>
            </LeftNav> */}
            <Body />
         </main>
      </ContainerNav> 
   );
}

export default Index;