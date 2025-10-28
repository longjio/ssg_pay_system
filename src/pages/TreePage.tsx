import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import DsTreeView, { TreeNode } from '../components/mui_x/tree/DsTreeView';
import { DsTreeItem } from '../components/mui_x/tree/DsTreeItem';
import ComponentShowcase from '../components/common/ComponentShowcase';

export default function TreePage() {
    const [treeData] = React.useState<TreeNode[]>([
        { id: 'data-components', label: 'Components', children: [{ id: 'data-inputs', label: 'Inputs' }] },
        { id: 'data-foundation', label: 'Foundation', children: [{ id: 'data-colors', label: 'Colors' }] },
    ]);
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

    const simpleTreeCode = `
<DsTreeView aria-label="simple-tree" defaultExpandedItems={["foundation"]}>
    <DsTreeItem itemId="foundation" label="Foundation" />
    <DsTreeItem itemId="components" label="Components">
        <DsTreeItem itemId="inputs" label="Inputs" />
    </DsTreeItem>
</DsTreeView>
    `;

    const dataDrivenTreeCode = `
const [treeData] = React.useState<TreeNode[]>([
    { id: 'data-components', label: 'Components', children: [{ id: 'data-inputs', label: 'Inputs' }] },
    { id: 'data-foundation', label: 'Foundation', children: [{ id: 'data-colors', label: 'Colors' }] },
]);
const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

<DsTreeView
    items={treeData}
    checkboxSelection
    defaultExpandedItems={['data-components']}
    selectedItems={selectedItem}
    onSelectedItemsChange={(event, id) => setSelectedItem(id)}
/>
    `;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
            <Stack spacing={4}>
                <Box>
                    <Typography color="text.secondary" sx={{ mb: 4 }}>
                        계층적인 데이터를 목록 형태로 보여주는 컴포넌트입니다.
                    </Typography>
                </Box>

                <ComponentShowcase
                    title="기본 TreeView"
                    description="DsTreeItem 컴포넌트를 자식으로 사용하여 간단한 트리 구조를 만듭니다."
                    component={
                        <Box sx={{ width: '100%', maxWidth: 400 }}>
                            <DsTreeView aria-label="simple-tree" defaultExpandedItems={["foundation"]}>
                                <DsTreeItem itemId="foundation" label="Foundation" />
                                <DsTreeItem itemId="components" label="Components">
                                    <DsTreeItem itemId="inputs" label="Inputs" />
                                </DsTreeItem>
                            </DsTreeView>
                        </Box>
                    }
                    code={simpleTreeCode}
                />

                <ComponentShowcase
                    title="데이터 기반 및 선택 가능한 TreeView"
                    description="'items' prop에 데이터 배열을 전달하여 동적으로 트리를 생성합니다. 'checkboxSelection'으로 체크박스를, 'onSelectedItemsChange'로 선택 이벤트를 처리할 수 있습니다."
                    component={
                        <Box sx={{ width: '100%', maxWidth: 400 }}>
                            <DsTreeView
                                items={treeData}
                                checkboxSelection
                                defaultExpandedItems={['data-components']}
                                selectedItems={selectedItem}
                                onSelectedItemsChange={(event: React.SyntheticEvent<Element, Event> | null, id: string | null) => setSelectedItem(id)}
                            />
                        </Box>
                    }
                    code={dataDrivenTreeCode}
                />
            </Stack>
        </Box>
    );
}