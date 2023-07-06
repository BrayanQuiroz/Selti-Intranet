import { NavTop,ButtonIcon,CloseLogin } from '../../Secretaria/Styles'

const NavBar = ()=> {
   return (
      <NavTop>
         <ButtonIcon />
         <div>
            <div className='content-rol'>
               <p>Rol:</p>
               <p>Secretaría SELTI</p>
            </div>
            <div>
               <p>Usuario: </p>
               <p>ADIAZ</p>
               <CloseLogin />
            </div>
         </div>

      </NavTop>
   );
}

export default NavBar;

