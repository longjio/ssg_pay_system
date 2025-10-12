
import React from 'react';
import { Stack, Typography } from '@mui/material';
import ComponentShowcase from '../components/common/ComponentShowcase';
import DsAccordion from '../components/surface/DsAccordion';

const AccordionPage = () => {
  const simpleAccordionCode = `
<DsAccordion title="Accordion 1">
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.
  </Typography>
</DsAccordion>
<DsAccordion title="Accordion 2">
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.
  </Typography>
</DsAccordion>
  `;

  const defaultExpandedCode = `
<DsAccordion title="Default Expanded Accordion" defaultExpanded>
  <Typography>
    This accordion is expanded by default.
  </Typography>
</DsAccordion>
  `;

  const disabledCode = `
<DsAccordion title="Disabled Accordion" disabled>
  <Typography>
    This content will not be visible.
  </Typography>
</DsAccordion>
  `;

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Simple Accordions"
        description="This is a simple usage of the accordion component."
        component={
          <div>
            <DsAccordion title="Accordion 1">
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </DsAccordion>
            <DsAccordion title="Accordion 2">
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </DsAccordion>
          </div>
        }
        code={simpleAccordionCode}
      />
      <ComponentShowcase
        title="Default Expanded Accordion"
        description="You can have an accordion expanded by default."
        component={
          <DsAccordion title="Default Expanded Accordion" defaultExpanded>
            <Typography>
              This accordion is expanded by default.
            </Typography>
          </DsAccordion>
        }
        code={defaultExpandedCode}
      />
      <ComponentShowcase
        title="Disabled Accordion"
        description="An accordion can be disabled."
        component={
          <DsAccordion title="Disabled Accordion" disabled>
            <Typography>
              This content will not be visible.
            </Typography>
          </DsAccordion>
        }
        code={disabledCode}
      />
    </Stack>
  );
};

export default AccordionPage;
