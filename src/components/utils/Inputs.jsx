import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Colors } from './Colors';

const Inputs = styled.input`
  display: block;
  width:100%;
  /* padding: .375rem .75rem; */
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
  /* margin-right: 1rem; 
  margin-left: 1rem;  */
  margin-top: 0.5rem;
`;

const InputWrapper = styled.div`
  width: ${props => props.width || '100%'}; 
  color:${Colors.secundaryColor};
`;


const InputCustom = ({ restriction, maxNumbers, label, isValidate, isBackground,isEmail,isDisabled, ...props }) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    let inputValue = event.target.value;

    if (restriction === 'numeric') {
      // Filtrar solo números
      inputValue = inputValue.replace(/[^0-9]/g, '');

      if (maxNumbers && inputValue.length > maxNumbers) {
        inputValue = inputValue.slice(0, maxNumbers);
      }
    } else if (restriction === 'alpha') {
      // Filtrar solo caracteres alfanuméricos
      inputValue = inputValue.replace(/[^a-zA-Z]/g, '');
    }

    event.target.value = inputValue; // Actualizar el valor del input directamente

    if (isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        setErrorMessage('Ingrese un correo válido');
      } else {
        setErrorMessage('');
      }
    }

    if (isValidate) {
      const isValidNumeroCelular = inputValue.length === 9 && inputValue.startsWith('0');
      if (!isValidNumeroCelular) {
        setErrorMessage('No se olvide ingresa el código de departamento');
      } else {
        setErrorMessage('');
      }
    }
  };



  return (
    <InputWrapper {...props}>
      <Label>{label}</Label>
      <Inputs {...props} isBackground={isBackground} isValidate={isValidate}
              disabled={isDisabled} restriction={restriction}
              maxNumbers={maxNumbers} onChange={handleChange} />
    </InputWrapper>
  );
};

InputCustom.propTypes = {
  restriction: PropTypes.oneOf(['numeric', 'alpha']),
  maxNumbers: PropTypes.number,
  width: PropTypes.string,
  label: PropTypes.string,
  isBackground: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isValidate:PropTypes.bool,
  isEmail: PropTypes.bool,
};

export default InputCustom;



