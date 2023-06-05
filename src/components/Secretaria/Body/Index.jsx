import React, { useState} from 'react';
import { ContainerBody } from './Styles'
import { Table,Switch } from 'antd';
import Inputs from '../../utils/Inputs'
import Select from '../../utils/Selects';
import {columns, EtapaSelect, Edicion} from './Exports';
import Button from '../../utils/Buttons';
import {RegistradoButton,InfPendiente} from './Estados/'

const Index = (props) => {


      const onChange = (checked) => {
         console.log(`switch to ${checked}`);
       };
       
   const dataSource = [
      {
         key: '1',
         id: 'SELTI-0001',
         ruc: '10725169910',
         asignado: 'usuario1223',
         ultmod: '10-10-2023',
         etapa: 'Asistencia Técnica',
         estado: <RegistradoButton />,
         acciones: <button>Accion</button>
         
      },
      {
         key: '2',
         id: 'SELTI-0002',
         ruc: '10725169910',
         asignado: 'usuario1678678',
         ultmod: '10-10-2023',
         etapa: 'Asistencia Técnica',
         estado: <InfPendiente />,
         acciones: <button>Accion</button>
      }
    ];
    

   const [selectedOption, setSelectedOption] = useState('');

   const handleSelectChange = (event) => {
     setSelectedOption(event.target.value);
   };

   const [selectedOption2, setSelectedOption2] = useState('');

   const handleSelectChange2 = (event) => {
     setSelectedOption2(event.target.value);
   };
   
   return (
      <ContainerBody>
         <h2>Bandeja de tareas pendientes</h2>
         <div className='searchs'>
            <Inputs label='RUC' width='170px' restriction="numeric"/>
            <Select
               width='240px'
               label="Etapa"
               options={EtapaSelect}
               value={selectedOption}
               onChange={handleSelectChange} />
            <Select
               width='150px'
               label="Edición"
               options={Edicion}
               value={selectedOption2}
               onChange={handleSelectChange2} />
            <div className='switch'>
               <p>Solo sin realizar</p>
               <Switch defaultChecked onChange={onChange} />
               <Button width='100px' text='Filtar'/>
            </div>
         </div>
         <div className='bodyP'>
            <Table dataSource={dataSource} columns={columns}  pagination={false}/>
         </div>

      </ContainerBody>
   );
}

export default Index;