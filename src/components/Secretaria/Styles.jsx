import styled from 'styled-components'
import { Colors } from '../utils/Colors';
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { darken } from 'polished';



const IconMenu = styled(FaBars)`
   font-size: 2rem;
   cursor: pointer;

   & :hover{
      color: ${darken(0.2, Colors.primareyColor)};
   }
`;

export const ButtonIcon = ({ onClick }) => { 
   return (
      <IconMenu onClick={onClick}>
         <FaSignOutAlt />
      </IconMenu>
   )
}

export const CloseLogin = styled(FaSignOutAlt)`
   font-size: 1.5rem;
   margin-left: 1rem;
   cursor: pointer;

   & :hover{
      color: ${darken(0.2, Colors.primareyColor)};
   }
`;

const Container = styled.div`
   background-color: ${Colors.backgroundColor};
   width: 100%;
   height: 100%;
`;

export const ContainerNav = ({children}) => {
   return (
      <Container>
         {children}
      </Container> 
   );
}

const Nav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 50px;
   background-color: white;
   padding: 0 1.5rem 0 1.5rem;
   color: ${Colors.primareyColor};
   position: sticky;
   top: 83.56px;

   & div{
      display: flex;
      align-items: center;
   }

   & p:first-of-type{
      margin-right: 0.5rem;
      font-weight: 600;
   }
`;

export const NavTop = ({children}) => {
   return (
      <Nav>
         {children}
      </Nav> 
   );
} 


