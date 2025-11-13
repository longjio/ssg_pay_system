import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Paper,
} from '@mui/material';

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: PropDefinition[];
  title?: string;
}

export default function PropsTable({ props, title = 'Props' }: PropsTableProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', width: '20%' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '25%' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>Default</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '40%' }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.map((prop) => (
              <TableRow key={prop.name} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <code style={{ fontWeight: 'medium' }}>{prop.name}</code>
                    {prop.required && (
                      <Chip
                        label="required"
                        size="small"
                        color="error"
                        sx={{ height: 18, fontSize: '0.65rem' }}
                      />
                    )}
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    component="code"
                    variant="body2"
                    sx={{
                      bgcolor: 'action.hover',
                      px: 1,
                      py: 0.5,
                      borderRadius: 0.5,
                      fontSize: '0.8rem',
                      fontFamily: 'monospace',
                    }}
                  >
                    {prop.type}
                  </Typography>
                </TableCell>
                <TableCell>
                  {prop.defaultValue ? (
                    <Typography
                      component="code"
                      variant="body2"
                      sx={{
                        color: 'success.main',
                        fontFamily: 'monospace',
                        fontSize: '0.8rem',
                      }}
                    >
                      {prop.defaultValue}
                    </Typography>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      -
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{prop.description}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
