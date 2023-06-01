import React from 'react';
import { ContainerBody } from './Styles'
import Tables from '../../utils/Tables';

const Index=(props)=> {

   const headers = ['Id del Caso','RUC','usuario123','Útima modificación',
      'Etapa',
      'Estado',
      'Acciones'
   ]

   const data2 = [
      {
         id: 'Id del Caso',
         RUC: 'RUC',
         Asignado: 'usuario123',
         ulmod: '14/05/2002',
         etapa: 'Asistencia Técnica',
         estado: 'registrado',
         acciones:'Acciones',
      }
   ]

   return (
      <ContainerBody>
         <h2>Bandeja de tareas pendientes</h2>
         <div className='bodyP'>
            {/* <Tables headers={headers} data={data2} /> */}
         </div>
      </ContainerBody>
   );
}

export default Index;