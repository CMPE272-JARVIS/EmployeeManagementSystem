import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export const CommonGrid = (props) => {
  const columns = props.columns;

  return (
    <div style={{ height: 400, width: '100%', marginTop: '30px' }}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSize={15}
        pagination
        rowCount={10000}
        paginationMode="server"
        onPageChange={props.handlePageChange}
      />
    </div>
  );
}

export default CommonGrid;