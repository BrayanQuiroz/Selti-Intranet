import React, { useState} from 'react';
import { ContainerBody } from './Styles'
import Tables from '../../utils/Tables';
import { Table } from 'antd';
import { Colors } from '../../utils/Colors';
import Inputs from '../../utils/Inputs'
import Select from '../../utils/Selects';


const Index = (props) => {

   const headers = ['Id del Caso', 'RUC', 'usuario123', 'Útima modificación',
      'Etapa',
      'Estado',
      'Acciones'
   ]

   const data2 = 
      {
         id: 'Id del Caso',
         RUC: 'RUC',
         Asignado: 'Asignado',
         ulmod: 'Última modificación',
         etapa: 'Etapa',
         estado: 'registrado',
         acciones: 'Acciones',
      }
   

      const data3 = [[
         <span>{data2.id}</span>,
         <span>{data2.RUC}</span>,
         <span>{data2.Asignado}</span>,
         <span>{data2.ulmod}</span>,
         <span>{data2.etapa}</span>,
         <span>{data2.estado}</span>,
         <span>{data2.acciones}</span>]
   ]
   
   const dataSource = [
      {
        key: '1',
        name: 'John Doe',
        age: 25,
        address: '123 Street, City',
      },
      {
        key: '2',
        name: 'Jane Smith',
        age: 30,
        address: '456 Avenue, Town',
      }
    ];
    
    const columns = [
      {
        title: 'Id del caso',
        dataIndex: 'name',
          key: 'name',
          style: {  color: 'red' }
      },
      {
        title: 'RUC',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Asignado',
        dataIndex: 'address',
        key: 'address',
       },
       {
         title: 'Asignado',
         dataIndex: 'address',
         key: 'address',
       },
       
      {
         title: 'Asignado',
         dataIndex: 'address',
         key: 'address',
       },
      
       {
         title: 'Asignado',
         dataIndex: 'address',
         key: 'address',
       },
       
      {
         title: 'Asignado',
         dataIndex: 'address',
         key: 'address',
        },
      
   ];

   const [selectedOption, setSelectedOption] = useState('');

   const handleSelectChange = (event) => {
     setSelectedOption(event.target.value);
   };
   
   const options = [
      { value: '03', label: 'DOCUMENTO DE IDENTIDAD' },
      { value: '06', label: 'CARNET DE EXTRANJERÍA' },
      { value: '26', label: 'CARNET DE PERMISO TEMPORAL DE PERMANENCIA' },
    ];

   return (
      <ContainerBody>
         <h2>Bandeja de tareas pendientes</h2>
         <div className='searchs'>
            <Inputs label='Razón social' width='25%' />
            <Select
                  label="Tipo de documento*"
                  options={options}
                  value={selectedOption}
                  onChange={handleSelectChange} />
         </div>
         <div className='bodyP'>
            <Table dataSource={dataSource} columns={columns}  pagination={false}/>
         </div>
      </ContainerBody>
   );
}

export default Index;