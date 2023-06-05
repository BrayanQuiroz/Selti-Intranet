import { styled } from "styled-components";

const Registrado = styled.span`
   color:white;
   background-color:#666666;
   width: 60px;
   height: 25px;
   padding: 0.3rem 0.5rem;
   border-radius: 25px;
   font-weight: 600;
`;

export const RegistradoButton = () => { 
   return (
      <Registrado>Registrado</Registrado>
   );
}


const Pendiente = styled.div`
   color:white;
   background-color:#F6A700;
   width: 120px;
   height: 45px;
   font-size: 13px;
   padding: 0.3rem 0.5rem;
   border-radius: 25px;
   word-wrap: break-word;
   text-align: center;
   color:black;
   font-weight: 600;
`;

export const InfPendiente = () => { 
   return (
      <Pendiente>Inf.de asistencia pendiente</Pendiente>
   );
}