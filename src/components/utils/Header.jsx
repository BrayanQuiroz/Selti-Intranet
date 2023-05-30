import React from 'react';
import logo from '../../assets/logoperu.png'
import styled from 'styled-components';
import { Colors } from './Colors';

const HeaderContainer = styled.header`
   background-color: ${Colors.primareyColor};
   position: sticky;
   top: 0px;

   & div{
      max-width: 85rem;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      @media (min-width: 640px) {
         padding-left: 1.5rem;
         font-weight: 700;
         padding-right: 1.5rem;
      }
      @media (min-width: 1024px) {
         padding-left: 2rem;
         padding-right: 2rem;
      }

      & img{
         height: 3rem;
         width: auto;         
      }
      & h1{
         color: #fff;
         font-size: 1.1rem;
         line-height: 1.75rem;
         font-weight: 600;
      }
   }
`;

const  Header= (props)=> {
   return (
      <HeaderContainer >
         <div>
            <img src={logo} alt="Logo" />
            <h1>SELLO LIBRE DE TRABAJO INFANTIL</h1>
         </div>
    </HeaderContainer>
   );
}

export default Header;