import React from 'react';
import styled from 'styled-components';
import { Container } from '../utils/Container'
import { Colors } from './Colors';

const ContentNavBar = styled.div`
   display: flex; 
   justify-content: space-between;
   width: 100%;
   background-color: white;
   padding: 2rem;
`;

const Circle = styled.div`
   width: 45px;
   height: 45px;
   border-radius: 100%;
   background-color: ${Colors.primareyColor};
   color:white;
   display: flex;
   justify-content: center ;
   align-items: center;
   font-size: 22px;
   margin-bottom:1rem;
`;

const CircleStep = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const  NavBar =(props)=> {
   return (
      <Container>
         <ContentNavBar>
            <CircleStep>
               <Circle>
                  <p>1</p>
               </Circle>
               <p>Representante Legal</p>
            </CircleStep>
            <CircleStep>
               <Circle>
                  <p>2</p>
               </Circle>
               <p>Representante Legal</p>
            </CircleStep>
            <CircleStep>
               <Circle>
                  <p>3</p>
               </Circle>
               <p>Representante Legal</p>
            </CircleStep>
            <CircleStep>
               <Circle>
                  <p>4</p>
               </Circle>
               <p>Representante Legal</p>
            </CircleStep>
         </ContentNavBar>
      </Container>
   );
}

export default NavBar;