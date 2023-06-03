import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Colors } from './Colors';

const Inputs = styled.input`
  display: block;
  width:100%;
  padding: .375rem .75rem;
  height: 30px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${Colors.secundaryColor};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #8c8c8c;
  border-radius: ${({ isRounded }) => isRounded ? ".25rem 0 0 .25rem" : ".25rem"};
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  
   &:focus{
      color: #495057;
      background-color: #fff;
      border-color: #6c757d;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.25);
   }
   
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight:600;
`;

const InputWrapper = styled.div`
  width: ${props => props.width || '100%'}; 
  padding-top: 1rem;
  color:${Colors.secundaryColor};
`;

const InputCustom = ({ label,...props }) => (
  <InputWrapper {...props}>
     <Label>{label}</Label>
    <Inputs {...props} />
   </InputWrapper>
 );
 
 InputCustom.propTypes = {
   label: PropTypes.string.isRequired,
   width: PropTypes.string,
 };
 
 export default InputCustom;





