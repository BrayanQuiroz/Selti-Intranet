export const columns = [
   {
     title: 'Id del caso',
     dataIndex: 'id',
       key: 'id',
   },
   {
     title: 'RUC',
     dataIndex: 'ruc',
     key: 'ruc',
   },
    {
      title: 'Asignado',
      dataIndex: 'asignado',
      key: 'asignado',
    },
    
   {
      title: 'Última modificación',
      dataIndex: 'ultmod',
      key: 'ultmod',
  },
  {
    title: 'Etapa',
    dataIndex: 'etapa',
    key: 'etapa',
  },
   
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
    },
    
   {
      title: 'Acciones',
      dataIndex: 'acciones',
      key: 'acciones',
     },
   
];

export const EtapaSelect = [
  { value: '01', label: 'Asistencia Técnica' },
  { value: '02', label: 'Postulación' },
  { value: '03', label: 'Evaluación' },
  { value: '04', label: 'Otrogamiento' },
];

export const Edicion = [
  { value: '01', label: '1ra' },
  { value: '02', label: '2da' },
  { value: '03', label: '3ra' },
  { value: '04', label: '4ta' },
];