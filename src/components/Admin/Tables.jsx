import React, { useState } from 'react';
import { Table, Segment } from 'semantic-ui-react';

const MyTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const data = [
    { id: 1, name: 'John Doe', age: 25, address: '123 Street' },
    { id: 2, name: 'Jane Smith', age: 30, address: '456 Avenue' },
    { id: 3, name: 'Bob Johnson', age: 35, address: '789 Road' },
  ];

  const handleRowClick = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((row) => (
          <React.Fragment key={row.id}>
            <Table.Row onClick={() => handleRowClick(row.id)} active={expandedRow === row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.age}</Table.Cell>
              <Table.Cell>{row.address}</Table.Cell>
            </Table.Row>
            {expandedRow === row.id && (
              <Table.Row>
                <Table.Cell colSpan="3">
                  <Segment>
                    <p>Additional Information:</p>
                    <p>{`Address: ${row.address}`}</p>
                  </Segment>
                </Table.Cell>
              </Table.Row>
            )}
          </React.Fragment>
        ))}
      </Table.Body>
    </Table>
  );
};

export default MyTable;
