import { NavTop,ButtonIcon,CloseLogin } from './Styles'

const NavBar = ({toggleSidebar })=> {
   return (
      <NavTop>
         <ButtonIcon onClick={toggleSidebar} />
         <div>
            <p>Usuario: </p>
            <p>ADIAZ</p>
            <CloseLogin />
         </div>
      </NavTop>
   );
}

export default NavBar;


