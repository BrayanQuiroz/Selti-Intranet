import styled from 'styled-components'
import PropTypes from 'prop-types';
import { CenterLogin } from '../utils/Container'
import { Colors } from '../utils/Colors';

const ContainerLogin = styled.div`
   width: 600px;
   height: 400px;
   background-color: white;
   margin-top:3rem;
   padding: 2rem;

   & .Content{
      border-top: 2px solid ${Colors.primareyColor};
      display: flex;
      justify-content: center;
      padding-top:1rem;     

   }   
   & form{
         width: 70%;
      }

   & .ButtonContainer{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
   }
`;

const TitleStyled = styled.h2`
   color: ${Colors.primareyColor};
   font-weight: 600;
   text-align: center;
   padding-bottom: 1rem;
`;


 const Title = ({ text, children}) => { 
   return (
      <CenterLogin>
         <ContainerLogin >
            <TitleStyled>{text}</TitleStyled>
            <div className='Content' >
               {children}
            </div>
         </ContainerLogin>    
      </CenterLogin>
   );
}
Title.propTypes = {
   text: PropTypes.string.isRequired,
}

export default Title;
