// D:/ssg_pay_system/src/template/TabsGrid.tsx

import React, { useState, useMemo } from 'react';
import { Box, Select, MenuItem, TextField, IconButton, Checkbox, Tabs, Tab, Stack } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { GridColDef } from '@mui/x-data-grid';
import DsDataGrid from '../components/mui_x/datagrid/DsDataGrid';
import { TitleArea, SearchArea, SubTitleArea } from '../layouts';
import {
    SearchIconButton,
    ResetButton,
    PrintButton,
    AddButton,
    DeleteButton,
    SaveButton,
} from '../components/button';
import { FormField } from '../components/form/FormField';

// --- Helper Component for Tabs ---
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            // TabPanel이 남은 공간을 모두 차지하고, 내부적으로 flex-column 레이아웃을 갖도록 수정
            style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%' }}
        >
            {value === index && (
                // pt: 2를 주어 탭과 그리드 사이에 약간의 여백을 줍니다.
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 2, height: '100%' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

// --- Sample Data (from Menu.tsx) ---
const initialRows = [
    { id: 1, menuName: '대시보드', path: '/dashboard', order: 1, isUsed: true, depth: 0, parentId: null, menuDescription: '메인 대시보드 화면', canSearch: true, canSave: false, canExcel: true, canPrint: true },
    { id: 2, menuName: '컴포넌트', path: null, order: 2, isUsed: true, depth: 0, parentId: null, menuDescription: 'UI 컴포넌트 그룹', canSearch: true, canSave: true, canExcel: false, canPrint: false },
    { id: 3, menuName: '버튼', path: '/button', order: 1, isUsed: true, depth: 1, parentId: 2, menuDescription: '버튼 컴포넌트 예제', canSearch: true, canSave: true, canExcel: false, canPrint: false },
    { id: 4, menuName: '데이터 그리드', path: '/data-grid', order: 2, isUsed: true, depth: 1, parentId: 2, menuDescription: '그리드 컴포넌트 예제', canSearch: true, canSave: true, canExcel: true, canPrint: true },
    { id: 5, menuName: '관리', path: null, order: 3, isUsed: true, depth: 0, parentId: null, menuDescription: '시스템 관리 기능 그룹', canSearch: true, canSave: true, canExcel: true, canPrint: true },
    { id: 6, menuName: '사용자 관리', path: '/users', order: 1, isUsed: false, depth: 1, parentId: 5, menuDescription: '사용자 정보 관리', canSearch: true, canSave: true, canExcel: true, canPrint: false },
];

const systemOptions = [
    { value: 'all', label: '전체' },
    { value: 'ds_mui_new', label: 'DS MUI NEW' },
    { value: 'legacy_system', label: '레거시 시스템' },
];

const usageStatusOptions = [
    { value: 'all', label: '전체' },
    { value: 'true', label: '사용' },
    { value: 'false', label: '미사용' },
];

export default function TabsGridPage() {
    const [rows, setRows] = useState(initialRows);
    const [system, setSystem] = useState('all');
    const [menuId, setMenuId] = useState('');
    const [menuName, setMenuName] = useState('');
    const [isUsed, setIsUsed] = useState('all');
    const [expandedIds, setExpandedIds] = useState<Set<number | string>>(new Set([2, 5]));

    // State for Tabs
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleToggleExpand = (id: number | string) => {
        setExpandedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const columns: GridColDef[] = [
        {
            field: 'menuName',
            headerName: '메뉴명',
            flex: 1.5,
            minWidth: 200,
            renderCell: (params) => {
                const { row } = params;
                const isParent = rows.some(r => r.parentId === row.id);
                return (
                    <Box sx={{ pl: row.depth * 3, display: 'flex', alignItems: 'center', width: '100%' }}>
                        {isParent ? (
                            <IconButton size="small" onClick={() => handleToggleExpand(row.id)} sx={{ mr: 1 }}>
                                {expandedIds.has(row.id) ? <FolderOpenIcon /> : <FolderIcon />}
                            </IconButton>
                        ) : (
                            <IconButton size="small" disabled sx={{ mr: 1 }}>
                                <ArticleOutlinedIcon />
                            </IconButton>
                        )}
                        {row.menuName}
                    </Box>
                );
            }
        },
        { field: 'depth', headerName: 'LEVEL', width: 80, align: 'center' },
        { field: 'id', headerName: '메뉴ID', width: 90 },
        { field: 'parentId', headerName: '상위메뉴', width: 90 },
        { field: 'isUsed', headerName: '사용여부', type: 'boolean', width: 90, editable: true },
        { field: 'order', headerName: '정렬', type: 'number', width: 80, editable: true, align: 'center' },
        { field: 'path', headerName: '전체경로', flex: 1.5, minWidth: 180, editable: true },
        { field: 'menuDescription', headerName: '메뉴설명', flex: 2, minWidth: 200, editable: true },
        {
            field: 'canSearch',
            headerName: '조회기능',
            type: 'boolean',
            width: 100,
            editable: true,
            align: 'center',
            renderCell: (params) => {
                const onClick = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    params.api.updateRows([{ id: params.id, [params.field]: !params.value }]);
                };
                return <Checkbox checked={!!params.value} onClick={onClick} />;
            }
        },
    ];

    const visibleRows = useMemo(() => {
        const rowMap = new Map(rows.map(row => [row.id, row]));
        return rows.filter(row => {
            let parent = row.parentId ? rowMap.get(row.parentId) : null;
            while (parent) {
                if (!expandedIds.has(parent.id)) {
                    return false;
                }
                parent = parent.parentId ? rowMap.get(parent.parentId) : null;
            }
            return true;
        });
    }, [rows, expandedIds]);

    const handleSearch = () => {
        alert(`검색 조건:\n시스템: ${system}\n메뉴ID: ${menuId}\n메뉴명: ${menuName}\n사용여부: ${isUsed}`);
    };

    const handleReset = () => {
        setSystem('all');
        setMenuId('');
        setMenuName('');
        setIsUsed('all');
        alert('조회 조건이 초기화되었습니다.');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3, boxSizing: 'border-box' }}>
            <TitleArea title="탭 그리드 예제">
                <PrintButton onClick={() => alert('인쇄 버튼 클릭')} />
                <ResetButton onClick={handleReset} />
            </TitleArea>

            <SearchArea>
                {/* flexGrow: 1을 주어 검색 필드 영역이 남은 공간을 모두 차지하도록 합니다. */}
                <Box sx={{ flexGrow: 1 }}>
                    <Stack spacing={2}>
                        {/* Row 1 */}
                        <Stack direction="row" spacing={3.75}>
                            <FormField label="시스템" htmlFor="system-select">
                                <Select
                                    id="system-select"
                                    value={system}
                                    onChange={(e) => setSystem(e.target.value)}
                                    size="small"
                                    sx={{
                                        width: '180px',
                                        '& .MuiOutlinedInput-input': {
                                            padding: '6px 12px',
                                        },
                                    }}
                                >
                                    {systemOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormField>
                            <FormField label="메뉴ID" htmlFor="menu-id-input">
                                <TextField
                                    id="menu-id-input"
                                    value={menuId}
                                    onChange={(e) => setMenuId(e.target.value)}
                                    placeholder="메뉴ID를 입력하세요"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        width: '200px',
                                        '& .MuiOutlinedInput-input': {
                                            padding: '6px 12px',
                                        },
                                    }}
                                />
                            </FormField>
                        </Stack>
                        {/* Row 2 */}
                        <Stack direction="row" spacing={3.75}>
                            <FormField label="메뉴명" htmlFor="menu-name-input">
                                <TextField
                                    id="menu-name-input"
                                    value={menuName}
                                    onChange={(e) => setMenuName(e.target.value)}
                                    placeholder="메뉴명을 입력하세요"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        width: '200px',
                                        '& .MuiOutlinedInput-input': {
                                            padding: '6px 12px',
                                        },
                                    }}
                                />
                            </FormField>
                            <FormField label="사용여부" htmlFor="usage-status-select">
                                <Select
                                    id="usage-status-select"
                                    value={isUsed}
                                    onChange={(e) => setIsUsed(e.target.value as string)}
                                    size="small"
                                    sx={{
                                        width: '180px',
                                        '& .MuiOutlinedInput-input': {
                                            padding: '6px 12px',
                                        },
                                    }}
                                >
                                    {usageStatusOptions.map((option) => (
                                        <MenuItem key={String(option.value)} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormField>
                        </Stack>
                        {/* Row 3 (추가 필드를 위해 비워둠) */}
                        <Stack direction="row" spacing={3.75}>
                            {/* 향후 추가될 검색 필드를 여기에 배치할 수 있습니다. */}
                        </Stack>
                    </Stack>
                </Box>
                {/* 검색 버튼은 SearchArea의 직접적인 자식으로 두어 오른쪽 정렬을 유지합니다. */}
                <SearchIconButton onClick={handleSearch} />
            </SearchArea>

            {/* Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
                <Tabs value={tabValue} onChange={handleTabChange} aria-label="grid tabs">
                    <Tab label="메뉴 목록" id="grid-tab-0" aria-controls="grid-tabpanel-0" />
                    <Tab label="사용자 목록" id="grid-tab-1" aria-controls="grid-tabpanel-1" />
                    <Tab label="시스템 로그" id="grid-tab-2" aria-controls="grid-tabpanel-2" />
                </Tabs>
            </Box>

            {/* Tab Panels */}
            <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex' }}>
                <TabPanel value={tabValue} index={0}>
                    <DsDataGrid
                        rows={visibleRows}
                        columns={columns}
                        sx={{ flexGrow: 1 }}
                        showRowNumber={true}
                        checkboxSelection={true}
                    />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    {/* For demonstration, using a subset of columns and rows */}
                    <DsDataGrid
                        rows={initialRows.filter(r => r.id > 3)}
                        columns={columns.slice(0, 5)}
                        sx={{ flexGrow: 1 }}
                        showRowNumber={true}
                        checkboxSelection={true}
                    />
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    {/* For demonstration, using different data */}
                    <DsDataGrid
                        rows={initialRows.slice(0, 2)}
                        columns={columns.slice(0, 3)}
                        sx={{ flexGrow: 1 }}
                        showRowNumber={true}
                        checkboxSelection={true}
                    />
                </TabPanel>
            </Box>
        </Box>
    );
}