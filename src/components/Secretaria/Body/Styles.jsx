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

export const LeftNav = ({ children}) => { 

   return (
      <Left>
         {children}
      </Left> 
   );
}

export const ContainerBody = styled.div`
   width: calc(100% - 320px);
   height: 71vh;
   background-color:white;
   position: relative;
   top: 30px;
   right: -300px;
   padding: 1.5rem;
     
   & .ant-switch {
      margin-top: 1rem;
      margin-right: 1rem;
   }

   & button{
      margin-top: 1rem;
   }

   & p{
      margin-right: 1rem;
      margin-top:1rem;
   }

   & h2{
      font-size: 35px;
      color: ${Colors.primareyColor};
      margin-bottom: 1rem;
   }

   & .bodyP{
      width: 90%;
      height: 100%;
   }

   & .searchs{
      width: 100%;
      display: flex;
      margin-bottom: 2rem;
      border-top: 2px solid ${Colors.primareyColor};

      & div{
         display: flex;
         align-items:center;
         align-self:center      
      }
   }
`;