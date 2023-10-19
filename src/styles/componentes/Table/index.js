"use client";

import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useMemo } from 'react';

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export function Table() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = useMemo(
    () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns],
  );

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector className='toolbar-density'/>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <Box 
      height="400px"
      width="100%"
    >
      <DataGrid
        {...data}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        //disableColumnSelector
        //disableDensitySelector
        onRowDoubleClick={e => console.log(e)}
        onRowSelectionModelChange={e => console.log(e)}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
          toolbar: GridToolbar
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterExcludeHiddenColumns: true,
            },
          },
        }}
      />
    </Box>
  )
}