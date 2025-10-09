// src/pages/AlertPage.tsx
import React from 'react';
import { Stack, Button } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import DsAlert from '../components/feedback/DsAlert';

const AlertPage = () => {
  const standardCode = `
<DsAlert severity="error" title="Error">This is an error alert — check it out!</DsAlert>
<DsAlert severity="warning" title="Warning">This is a warning alert — check it out!</DsAlert>
<DsAlert severity="info" title="Info">This is an info alert — check it out!</DsAlert>
<DsAlert severity="success" title="Success">This is a success alert — check it out!</DsAlert>
  `;

  const filledCode = `
<DsAlert variant="filled" severity="error" title="Error">This is an error alert — check it out!</DsAlert>
<DsAlert variant="filled" severity="warning" title="Warning">This is a warning alert — check it out!</DsAlert>
<DsAlert variant="filled" severity="info" title="Info">This is an info alert — check it out!</DsAlert>
<DsAlert variant="filled" severity="success" title="Success">This is a success alert — check it out!</DsAlert>
  `;

  const outlinedCode = `
<DsAlert variant="outlined" severity="error" title="Error">This is an error alert — check it out!</DsAlert>
<DsAlert variant="outlined" severity="warning" title="Warning">This is a warning alert — check it out!</DsAlert>
<DsAlert variant="outlined" severity="info" title="Info">This is an info alert — check it out!</DsAlert>
<DsAlert variant="outlined" severity="success" title="Success">This is a success alert — check it out!</DsAlert>
  `;
  
  const actionCode = `
<DsAlert onClose={() => {}}>This is a closable alert.</DsAlert>
<DsAlert severity="success" action={
  <Button color="inherit" size="small" variant="outlined">
    UNDO
  </Button>
}>
  Profile successfully updated!
</DsAlert>
  `;

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Standard Alerts"
        description="The standard alert appears with a background color and icon corresponding to the severity."
        component={
          <Stack spacing={2}>
            <DsAlert severity="error" title="Error">This is an error alert — check it out!</DsAlert>
            <DsAlert severity="warning" title="Warning">This is a warning alert — check it out!</DsAlert>
            <DsAlert severity="info" title="Info">This is an info alert — check it out!</DsAlert>
            <DsAlert severity="success" title="Success">This is a success alert — check it out!</DsAlert>
          </Stack>
        }
        code={standardCode}
      />
      <ComponentShowcase
        title="Filled Alerts"
        description="Filled alerts have a more prominent appearance."
        component={
          <Stack spacing={2}>
            <DsAlert variant="filled" severity="error" title="Error">This is an error alert — check it out!</DsAlert>
            <DsAlert variant="filled" severity="warning" title="Warning">This is a warning alert — check it out!</DsAlert>
            <DsAlert variant="filled" severity="info" title="Info">This is an info alert — check it out!</DsAlert>
            <DsAlert variant="filled" severity="success" title="Success">This is a success alert — check it out!</DsAlert>
          </Stack>
        }
        code={filledCode}
      />
      <ComponentShowcase
        title="Outlined Alerts"
        description="Outlined alerts have a border and a less intrusive appearance."
        component={
          <Stack spacing={2}>
            <DsAlert variant="outlined" severity="error" title="Error">This is an error alert — check it out!</DsAlert>
            <DsAlert variant="outlined" severity="warning" title="Warning">This is a warning alert — check it out!</DsAlert>
            <DsAlert variant="outlined" severity="info" title="Info">This is an info alert — check it out!</DsAlert>
            <DsAlert variant="outlined" severity="success" title="Success">This is a success alert — check it out!</DsAlert>
          </Stack>
        }
        code={outlinedCode}
      />
      <ComponentShowcase
        title="Alerts with Actions"
        description="Alerts can include actions, such as a close button or an undo button."
        component={
          <Stack spacing={2}>
            <DsAlert onClose={() => { alert('Close button clicked!'); }}>This is a closable alert.</DsAlert>
            <DsAlert severity="success" action={
              <Button color="inherit" size="small" variant="outlined">
                UNDO
              </Button>
            }>
              Profile successfully updated!
            </DsAlert>
          </Stack>
        }
        code={actionCode}
      />
    </Stack>
  );
};

export default AlertPage;
