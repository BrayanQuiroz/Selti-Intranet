import styled from "styled-components";
import { Colors } from "./Colors";
import { lighten } from 'polished';

const Left = styled.div`

   width: 270px;
   height: calc(100vh - (155.56px));
   background-color:white;
   position: fixed;
   transition: left 0.3s ease;
   font-weight: 600;
  


   & .Icons{
      display: flex; 
      color:${Colors.primareyColor} ;
      align-items: center;
      cursor: pointer;
      margin: 1rem;
      padding: 0.5rem  0rem 0.5rem 1rem;
      border-radius:25px;
   }

   & .hover:hover{
         background-color:${lighten(0.05,Colors.backgroundColor)};         
         cursor: pointer;
      }
`;

export const LeftNav = ({ children}) => { 

   return (
      <Left>
         {children}
      </Left> 
   );
}
