// src/pages/AutocompletePage.tsx
import React from 'react';
import { Stack, TextField } from '@mui/material';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import ComponentShowcase from '../components/common/ComponentShowcase';
import { DsAutoComplete } from '../components/input/DsAutoComplete';

// Sample data
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

export default function AutocompletePage() {
  const basicCode = `
<DsAutoComplete
  options={top100Films}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/>
  `;

  const multipleCode = `
<DsAutoComplete
  multiple
  options={top100Films}
  getOptionLabel={(option) => option.label}
  defaultValue={[top100Films[1]]}
  filterSelectedOptions
  sx={{ width: 500 }}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Filter selected options"
      placeholder="Favorites"
    />
  )}
/>
  `;

  const freeSoloCode = `
<DsAutoComplete
  freeSolo
  options={top100Films.map((option) => option.label)}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Free solo" />}
/>
  `;

  const disabledCode = `
<DsAutoComplete
  disabled
  options={top100Films}
  defaultValue={top100Films[0]}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Disabled" />}
/>
  `;

  const sizesCode = `
<DsAutoComplete
  options={top100Films}
  sx={{ width: 300 }}
  renderInput={(params) => (
    <TextField {...params} label="Movie" size="small" />
  )}
/>
<DsAutoComplete
  options={top100Films}
  sx={{ width: 300 }}
  renderInput={(params) => (
    <TextField {...params} label="Movie" size="medium" />
  )}
/>
  `;

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Basic Autocomplete"
        description="The user can type to search for an option from a predefined list."
        component={
          <DsAutoComplete
            options={top100Films}
            getOptionLabel={(option) => option.label}
            sx={{ width: 300 }}
            renderInput={(params: AutocompleteRenderInputParams) => (
              <TextField {...params} label="Movie" />
            )}
          />
        }
        code={basicCode}
      />
      <ComponentShowcase
        title="Multiple Values"
        description="The 'multiple' prop allows the user to select more than one option."
        component={
          <DsAutoComplete
            multiple
            options={top100Films}
            getOptionLabel={(option) => option.label}
            defaultValue={[top100Films[1]]}
            filterSelectedOptions
            sx={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Multiple selection"
                placeholder="Favorites"
              />
            )}
          />
        }
        code={multipleCode}
      />
      <ComponentShowcase
        title="Free Solo"
        description="The 'freeSolo' prop allows the user to enter arbitrary values that are not in the options list."
        component={
          <DsAutoComplete
            freeSolo
            options={top100Films.map((option) => option.label)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Free solo" />}
          />
        }
        code={freeSoloCode}
      />
      <ComponentShowcase
        title="Disabled"
        description="The 'disabled' prop prevents user interaction."
        component={
          <DsAutoComplete
            disabled
            options={top100Films}
            getOptionLabel={(option) => option.label}
            defaultValue={top100Films[0]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Disabled" />}
          />
        }
        code={disabledCode}
      />
      <ComponentShowcase
        title="Sizes"
        description="The 'size' prop on the TextField in 'renderInput' can be used to control the size."
        component={
          <Stack spacing={2}>
            <DsAutoComplete
              options={top100Films}
              getOptionLabel={(option) => option.label}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Small" size="small" />
              )}
            />
            <DsAutoComplete
              options={top100Films}
              getOptionLabel={(option) => option.label}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Medium" size="medium" />
              )}
            />
          </Stack>
        }
        code={sizesCode}
      />
    </Stack>
  );
}
