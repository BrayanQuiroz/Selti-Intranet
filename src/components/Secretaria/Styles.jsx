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
   font-size: 20px;

   & .content-rol{
      margin-right: 2rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   & div{
      display: flex;
      align-items: center;
      /* justify-content: center ;; */
   }

   & p:first-of-type{
      margin-right: 0.5rem;
      font-weight: 700;
   }

   & p:nth-child(2){
      /* margin-right: 0.5rem; */
      font-weight: 500;
   }
`;

export const NavTop = ({children}) => {
   return (
      <Nav>
         {children}
      </Nav> 
   );
} 


