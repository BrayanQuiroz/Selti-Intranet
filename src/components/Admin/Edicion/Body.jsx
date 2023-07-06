import React, { useEffect, useState} from 'react';
import { ContainerBody } from '../../Secretaria/Body/Styles'
import {IconBlocked,IconSend, IconEdit } from '../../utils/Icons'
import { Table, Modal } from 'antd';
import { ContentInputButton,RowContainer } from '../../utils/Container'
import Inputs from '../../utils/Inputs'
import Select from '../../utils/Selects';
import {columnsInterno, EtapaSelect, Edicion} from '../../Secretaria/Body/Exports';
import Button from '../../utils/Buttons';
import config from '../../../config/url'
import axios from 'axios'


const Index = (props) => {

   const [modalVisible, setModalVisible] = useState(false);
   const [modalForm, setModalForm] = useState(false);
   const [selectedRow, setSelectedRow] = useState(null);

   const api = axios.create({
      baseURL: config.apiUrl
   })

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

         Rol: '72516991',
         acceso: '10-10-2023',
         Correo:'brayanquiroz1995@gmail.com',
         estado: 'Bloqueado',        
      },
      {
         key: '2',
         id: 'SELTI-0001',
         Rol: '72516991',
         acceso: '10-10-2023',
         Correo:'brayanquiroz1995@gmail.com',
         estado: 'Bloqueado',        
      },
    ];
    
   const [selectOptions, setSelectedOptions] = useState([]);

   useEffect(() => { 
      const fetchData = async () => { 
         try {
            const response = await api.get('/apiRoles/');
            setSelectedOptions(response.data);
         } catch (error) { 
            console.error('Error al obtener los roles:', error)
         }
      }
      fetchData();
   },[])

   return (
      <ContainerBody>
         <div className='title'>
            <h2>Gestor de ediciones</h2>
            <button className='addUser'onClick={() => setModalForm(true)}>+ Crear edición</button>
         </div>
         <div className='searchs'>
            <Inputs label='Edición' width='170px' restriction="numeric"/>
            <Inputs label='Versión' width='170px' restriction="numeric"/>
            <div className='switch'>
               <Button width='100px' text='Filtar'/>
            </div>
         </div>
         <div className='bodyP'>
            <Table dataSource={dataSource} columns={columnsInterno}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => handleRowClick(record),
                  };
                }}
               pagination={false} />
         </div>
         <Modal
            className="my-custom-modal"
            title="Crear Edición"
            open={modalForm}
            onCancel={() => setModalForm(false)}
            okText="Crear"
            width={400}
            okButtonProps={{ style: { backgroundColor: '#DC2626' } }}>
            <form action="">
            <Inputs label='Nombre de edición' width='100%' type='text' />
               <Inputs label='Fecha de inicio' width='100%' type='date'/>
               <Inputs label='Fecha fin' width='100%' type='date'/>
            </form>
         </Modal>
         <Modal
        title="Última "
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