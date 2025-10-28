import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
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
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Accordion은 확장 가능한 패널로 콘텐츠를 접거나 펼칠 수 있는 컴포넌트입니다.
          </Typography>
        </Box>
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
    </Box>
  );
};

export default AccordionPage;
