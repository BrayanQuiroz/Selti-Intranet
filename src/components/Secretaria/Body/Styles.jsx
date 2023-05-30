import styled from "styled-components";
import { BsClipboard, BsBookmark } from "react-icons/bs";
import { Colors } from "../../utils/Colors";
import { lighten } from 'polished';

export const IconPen = styled(BsBookmark)`
   font-size: 2rem;
   margin-right:1rem;
`;

export const IconInst = styled(BsClipboard)`
   font-size: 2rem;
   margin-right:1rem;
`;

const Left = styled.div`

   width: 270px;
   height: calc(100vh - (155.56px));
   background-color:white;
   position: fixed;
   left: ${({ isopen }) => (isopen ? '0' : '-270px')};
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

   :hover{
         background-color:${lighten(0.05,Colors.backgroundColor)};         
      }
`;

export const LeftNav = ({ children, isopen }) => { 

   return (
      <Left isopen={isopen}>
         {children}
      </Left> 
   );
}