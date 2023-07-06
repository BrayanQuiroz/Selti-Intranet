import { NavTop,ButtonIcon,CloseLogin } from './Styles'

const NavBar = ()=> {
   return (
      <NavTop>
         <ButtonIcon/>
         <div>
            <p>Usuario: </p>
            <p>ADIAZ</p>
            <CloseLogin />
         </div>
      </NavTop>
   );
}

export default NavBar;


