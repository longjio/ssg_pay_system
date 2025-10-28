// src/pages/PaginationPage.tsx
import React, { useState } from 'react';
import { Box, Stack, TablePagination, Typography } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import DsPagination from '../components/navigation/DsPagination';

const PaginationPage = () => {
  const basicCode = `
// In your component...
const [page, setPage] = useState(1);
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
};

<DsPagination count={10} page={page} onChange={handleChange} />
  `;

  const variantsCode = `
<DsPagination count={10} variant="outlined" color="primary" />
<DsPagination count={10} variant="text" color="secondary" />
  `;

  const shapesCode = `
<DsPagination count={10} shape="rounded" variant="outlined" />
<DsPagination count={10} shape="circular" />
  `;

  const buttonsCode = `
<DsPagination count={10} showFirstButton showLastButton />
<DsPagination count={10} hidePrevButton hideNextButton />
  `;

  const tablePaginationCode = `
// In your component...
const [page, setPage] = useState(0); // TablePagination is 0-based
const [rowsPerPage, setRowsPerPage] = useState(10);

const handleChangePage = (
  event: React.MouseEvent<HTMLButtonElement> | null,
  newPage: number,
) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};

<TablePagination
  component="div"
  count={100}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
  `;

  // Self-contained component for the interactive example
  const InteractivePagination = () => {
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };
    return <DsPagination count={10} page={page} onChange={handleChange} />;
  };

  const InteractiveTablePagination = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Pagination은 많은 양의 콘텐츠를 여러 페이지로 나누어 탐색할 수 있게 하는 컴포넌트입니다.
          </Typography>
        </Box>
        <ComponentShowcase
        title="Basic Pagination"
        description="A simple, controlled pagination component."
        component={<InteractivePagination />}
        code={basicCode}
      />
      <ComponentShowcase
        title="Variants"
        description="Pagination supports 'text' (default) and 'outlined' variants."
        component={
          <Stack spacing={2}>
            <DsPagination count={10} variant="outlined" color="primary" />
            <DsPagination count={10} variant="text" color="secondary" />
          </Stack>
        }
        code={variantsCode}
      />
      <ComponentShowcase
        title="Shapes"
        description="Pagination supports 'circular' (default) and 'rounded' shapes."
        component={
          <Stack spacing={2}>
            <DsPagination count={10} shape="rounded" variant="outlined" />
            <DsPagination count={10} shape="circular" />
          </Stack>
        }
        code={shapesCode}
      />
      <ComponentShowcase
        title="Buttons"
        description="You can show or hide the first, last, previous, and next page buttons."
        component={
          <Stack spacing={2}>
            <DsPagination count={10} showFirstButton showLastButton />
            <DsPagination count={10} hidePrevButton hideNextButton />
          </Stack>
        }
        code={buttonsCode}
      />
      <ComponentShowcase
        title="Disabled"
        description="The pagination component can be disabled."
        component={<DsPagination count={10} disabled />}
        code={'<DsPagination count={10} disabled />'}
      />
      <ComponentShowcase
        title="Table Pagination"
        description="For use with tables, the TablePagination component is more suitable."
        component={<InteractiveTablePagination />}
        code={tablePaginationCode}
      />
      </Stack>
    </Box>
  );
};

export default PaginationPage;
