import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Colors } from './Colors';

const Inputs = styled.input`
  display: block;
  width:100%;
  padding: .375rem .75rem;
  height: 28px;
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
  margin-right: 1rem; 
  margin-top: 0.5rem;
`;

const InputWrapper = styled.div`
  width: ${props => props.width || '100%'}; 
  padding-top: 1.5rem;
  margin-right: 1rem;
  color:${Colors.secundaryColor};
`;


const RestrictedInput = ({ restriction, label, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    let inputValue = event.target.value;

    if (restriction === 'numeric') {
      // Filtrar solo números
      inputValue = inputValue.replace(/[^0-9]/g, '');
    } else if (restriction === 'alphanumeric') {
      // Filtrar solo caracteres alfanuméricos
      inputValue = inputValue.replace(/[^a-zA-Z0-9]/g, '');
    }

    setValue(inputValue);
  };

  return (
    <InputWrapper {...props}>
      <Label>{label}</Label>
      <Inputs type="text" value={value} onChange={handleChange} placeholder={`Ingrese ${restriction === 'numeric' ? 'solo números' : 'caracteres alfanuméricos'}`} />
    </InputWrapper>
  );
};

RestrictedInput.propTypes = {
  restriction: PropTypes.oneOf(['numeric', 'alphanumeric']).isRequired,
  label: PropTypes.string.isRequired,
};

export default RestrictedInput;





