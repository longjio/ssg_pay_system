// src/pages/BreadcrumbsPage.tsx
import React from 'react';
import { Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ComponentShowcase from '../components/common/ComponentShowcase';
import DsBreadcrumbs, { BreadcrumbItem } from '../components/navigation/DsBreadcrumbs';

const BreadcrumbsPage = () => {
  // Data for examples
  const basicItems: BreadcrumbItem[] = [
    { label: 'MUI', href: '#' },
    { label: 'Core', href: '#' },
    { label: 'Breadcrumbs' },
  ];

  const withIconsItems: BreadcrumbItem[] = [
    { label: 'MUI', href: '#', icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> },
    { label: 'Core', href: '#', icon: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" /> },
    { label: 'Breadcrumbs', icon: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" /> },
  ];

  const collapsedItems: BreadcrumbItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Catalog', href: '#' },
    { label: 'Accessories', href: '#' },
    { label: 'New Collection', href: '#' },
    { label: 'Belts' },
  ];

  // Code snippets for showcases
  const basicCode = `
const items: BreadcrumbItem[] = [
  { label: 'MUI', href: '#' },
  { label: 'Core', href: '#' },
  { label: 'Breadcrumbs' },
];

<DsBreadcrumbs items={items} />
  `;

  const withIconsCode = `
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
//...

const items: BreadcrumbItem[] = [
  { label: 'MUI', href: '#', icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> },
  { label: 'Core', href: '#', icon: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" /> },
  { label: 'Breadcrumbs', icon: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" /> },
];

<DsBreadcrumbs items={items} />
  `;

  const collapsedCode = `
const items: BreadcrumbItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Catalog', href: '#' },
  // ... more items
  { label: 'Belts' },
];

<DsBreadcrumbs items={items} maxItems={2} />
  `;

  const customSeparatorCode = `
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

<DsBreadcrumbs items={basicItems} separator={<NavigateNextIcon fontSize="small" />} />
  `;

  return (
    <Stack spacing={4}>
      <ComponentShowcase
        title="Basic Breadcrumbs"
        description="A simple breadcrumb trail."
        component={<DsBreadcrumbs items={basicItems} />}
        code={basicCode}
      />
      <ComponentShowcase
        title="With Icons"
        description="Breadcrumb items can include icons."
        component={<DsBreadcrumbs items={withIconsItems} />}
        code={withIconsCode}
      />
      <ComponentShowcase
        title="Collapsed Breadcrumbs"
        description="The 'maxItems' prop can be used to collapse the breadcrumb trail."
        component={<DsBreadcrumbs items={collapsedItems} maxItems={2} />}
        code={collapsedCode}
      />
      <ComponentShowcase
        title="Custom Separator"
        description="The 'separator' prop can be used to provide a custom separator."
        component={<DsBreadcrumbs items={basicItems} separator={<NavigateNextIcon fontSize="small" />} />}
        code={customSeparatorCode}
      />
    </Stack>
  );
};

export default BreadcrumbsPage;
