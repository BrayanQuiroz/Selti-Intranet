import React, { useState} from 'react';
import { ContainerBody } from '../../Secretaria/Body/Styles'
import {IconBlocked,IconSend, IconEdit } from '../../utils/Icons'
import { Table,Modal  } from 'antd';
import Inputs from '../../utils/Inputs'
import Select from '../../utils/Selects';
import {columnsAdmin, EtapaSelect, Edicion} from '../../Secretaria/Body/Exports';
import Button from '../../utils/Buttons';

const Index = (props) => {

   const onChange = (checked) => {
      console.log(`switch to ${checked}`);
      };
   const [modalVisible, setModalVisible] = useState(false);
   const [selectedRow, setSelectedRow] = useState(null);

   const handleRowClick = (record) => {
      setSelectedRow(record);
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };

   const dataSource = [
      {
         key: '1',
         id: 'SELTI-0001',
         RUC: '10725169910',
         DNI: '72516991',
         ultmod: '10-10-2023',
         Correo:'brayanquiroz1995@gmail.com',
         estado: 'Bloqueado',
         acciones: [
            <IconBlocked />,
            <IconSend />,
            <IconEdit/>
         ]         
      },
      {
         key: '2',
         id: 'SELTI-0002',
         RUC: '10725169910',
         DNI: '72516991',
         ultmod: '10-10-2023',
         Correo:'bquiroz-prov@trabajo.gob.pe',
         estado: 'Activo',
         acciones: [
            <IconBlocked />,
            <IconSend />,
            <IconEdit/>
         ]         
      },
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
         <h2>Bandeja Persona Juridica</h2>
         <div className='searchs'>
            <Inputs label='Caso' width='170px' restriction="numeric"/>
            <Inputs label='RUC' width='170px' restriction="numeric"/>
            <Inputs label='DNI' width='170px' restriction="numeric"/>
            <div className='switch'>
               <Button width='100px' text='Filtar'/>
            </div>
         </div>
         <div className='bodyP'>
            <Table dataSource={dataSource} columns={columnsAdmin}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => handleRowClick(record),
                  };
                }}
               pagination={false} />
         </div>
         <Modal
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {selectedRow && (
          <div>
            <p>ID: {selectedRow.id}</p>
            <p>RUC: {selectedRow.RUC}</p>
            <p>DNI: {selectedRow.DNI}</p>
            <p>Ult. Mod.: {selectedRow.ultmod}</p>
            <p>Correo: {selectedRow.Correo}</p>
            <p>Estado: {selectedRow.estado}</p>
          </div>
        )}
      </Modal>

      </ContainerBody>
   );
}

export default Index;