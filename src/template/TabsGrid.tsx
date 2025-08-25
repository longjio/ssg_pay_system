// D:/ssg_pay_system/src/template/TabsGrid.tsx

import React, { useState, useMemo } from 'react';
// DatePicker 관련 컴포넌트들을 import 합니다.
import { Box, Select, MenuItem, TextField, IconButton, Checkbox, Tabs, Tab, Stack, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'; // MUI의 기본 DatePicker를 사용합니다.
import type { Dayjs } from 'dayjs';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { GridColDef } from '@mui/x-data-grid';
import DsDataGrid from '../components/mui_x/datagrid/DsDataGrid';
import { TitleArea, SearchArea } from '../layouts';
import {
    SearchIconButton,
    ResetButton,
    PrintButton,
} from '../components/button';
import { FormField } from '../components/form/FormField';
import { SearchFormField } from '../components/form/SearchFormField';

// --- (MenuRow, TabPanel, initialRows 등 다른 코드는 이전과 동일) ---
interface MenuRow {
    id: number;
    menuName: string;
    path: string | null;
    order: number;
    isUsed: boolean;
    depth: number;
    parentId: number | null;
    menuDescription: string;
    canSearch: boolean;
    canSave: boolean;
    canExcel: boolean;
    canPrint: boolean;
}

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
            style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%' }}
        >
            {value === index && (
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 2, height: '100%' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const initialRows: MenuRow[] = [
    { id: 1, menuName: '대시보드', path: '/dashboard', order: 1, isUsed: true, depth: 0, parentId: null, menuDescription: '메인 대시보드 화면', canSearch: true, canSave: false, canExcel: true, canPrint: true },
    { id: 2, menuName: '컴포넌트', path: null, order: 2, isUsed: true, depth: 0, parentId: null, menuDescription: 'UI 컴포넌트 그룹', canSearch: true, canSave: true, canExcel: false, canPrint: false },
    { id: 3, menuName: '버튼', path: '/button', order: 1, isUsed: true, depth: 1, parentId: 2, menuDescription: '버튼 컴포넌트 예제', canSearch: true, canSave: true, canExcel: false, canPrint: false },
    { id: 4, menuName: '데이터 그리드', path: '/data-grid', order: 2, isUsed: true, depth: 1, parentId: 2, menuDescription: '그리드 컴포넌트 예제', canSearch: true, canSave: true, canExcel: true, canPrint: true },
    { id: 5, menuName: '관리', path: null, order: 3, isUsed: true, depth: 0, parentId: null, menuDescription: '시스템 관리 기능 그룹', canSearch: true, canSave: true, canExcel: true, canPrint: true },
    { id: 6, menuName: '사용자 관리', path: '/users', order: 1, isUsed: false, depth: 1, parentId: 5, menuDescription: '사용자 정보 관리', canSearch: true, canSave: true, canExcel: true, canPrint: false },
];


const usageStatusOptions = [
    { value: 'all', label: '전체' },
    { value: 'true', label: '사용' },
    { value: 'false', label: '미사용' },
];

const transactionTypeOptions = [
    { value: 'all', label: '전체' },
    { value: 'purchase', label: '매입' },
    { value: 'sales', label: '매출' },
];

export default function TabsGridPage() {
    const [rows, setRows] = useState<MenuRow[]>(initialRows);

    const [accountingUnitCode, setAccountingUnitCode] = useState('');
    const [accountingUnitName, setAccountingUnitName] = useState('');
    const [accrualUnitCode, setAccrualUnitCode] = useState('');
    const [accrualUnitName, setAccrualUnitName] = useState('');
    const [cycleCode, setCycleCode] = useState('');
    const [cycleName, setCycleName] = useState('');
    const [partnerCode, setPartnerCode] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [menuId, setMenuId] = useState('');
    const [menuName, setMenuName] = useState('');
    const [isUsed, setIsUsed] = useState('all');
    const [transactionType, setTransactionType] = useState('all');
    const [transferDate, setTransferDate] = useState<Dayjs | null>(null);

    const [searchCriteria, setSearchCriteria] = useState('partner');
    const searchCriteriaOptions = [
        { label: '협력회사', value: 'partner' },
        { label: '주기코드', value: 'cycle' },
    ];

    const [expandedIds, setExpandedIds] = useState<Set<number | string>>(new Set([2, 5]));
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    // --- (핸들러 함수들은 이전과 동일) ---
    const handleToggleExpand = (id: number | string) => { setExpandedIds(prev => { const newSet = new Set(prev); if (newSet.has(id)) { newSet.delete(id); } else { newSet.add(id); } return newSet; }); };
    const handleSearchAccountingUnit = () => { if (accountingUnitCode === '1000') setAccountingUnitName('서울본사'); else if (accountingUnitCode === '2000') setAccountingUnitName('부산지사'); else { alert(`'${accountingUnitCode}'에 해당하는 지불회계단위를 찾을 수 없습니다.`); setAccountingUnitName(''); } };
    const handleSearchAccrualUnit = () => { if (accrualUnitCode === 'A100') setAccrualUnitName('영업1팀'); else if (accrualUnitCode === 'A200') setAccrualUnitName('영업2팀'); else { alert(`'${accrualUnitCode}'에 해당하는 발생회계단위를 찾을 수 없습니다.`); setAccrualUnitName(''); } };
    const handleSearchCycle = () => { if (cycleCode === 'M') setCycleName('매월'); else if (cycleCode === 'W') setCycleName('매주'); else { alert(`'${cycleCode}'에 해당하는 주기코드를 찾을 수 없습니다.`); setCycleName(''); } };
    const handleSearchPartner = () => { if (partnerCode === 'P001') setPartnerName('(주)신세계'); else if (partnerCode === 'P002') setPartnerName('(주)이마트'); else { alert(`'${partnerCode}'에 해당하는 협력회사를 찾을 수 없습니다.`); setPartnerName(''); } };
    const handleSearchMenu = () => { const foundMenu = initialRows.find(row => String(row.id) === menuId); if (foundMenu) setMenuName(foundMenu.menuName); else { alert(`'${menuId}'에 해당하는 메뉴를 찾을 수 없습니다.`); setMenuName(''); } };
    const handleSearch = () => { const searchConditions = [ `지불회계단위: ${accountingUnitCode} (${accountingUnitName})`, `발생회계단위: ${accrualUnitCode} (${accrualUnitName})`, `지불유형: ${menuId} (${menuName})`, `거래구분: ${transactionType}`, `지불이관일자: ${transferDate ? transferDate.format('YYYY.MM.DD') : '미선택'}`, searchCriteria === 'partner' ? `협력회사: ${partnerCode} (${partnerName})` : `주기코드: ${cycleCode} (${cycleName})`, `사용여부: ${isUsed}`, ]; alert(`검색 조건:\n${searchConditions.join('\n')}`); };
    const handleReset = () => { setAccountingUnitCode(''); setAccountingUnitName(''); setAccrualUnitCode(''); setAccrualUnitName(''); setCycleCode(''); setCycleName(''); setPartnerCode(''); setPartnerName(''); setMenuId(''); setMenuName(''); setIsUsed('all'); setTransactionType('all'); setSearchCriteria('partner'); setTransferDate(null); alert('조회 조건이 초기화되었습니다.'); };
    const columns: GridColDef<MenuRow>[] = [ { field: 'menuName', headerName: '메뉴명', flex: 1.5, minWidth: 200, renderCell: (params) => { const { row } = params; const isParent = rows.some(r => r.parentId === row.id); return ( <Box sx={{ pl: row.depth * 3, display: 'flex', alignItems: 'center', width: '100%' }}> {isParent ? ( <IconButton size="small" onClick={() => handleToggleExpand(row.id)} sx={{ mr: 1 }}> {expandedIds.has(row.id) ? <FolderOpenIcon /> : <FolderIcon />} </IconButton> ) : ( <IconButton size="small" disabled sx={{ mr: 1 }}> <ArticleOutlinedIcon /> </IconButton> )} {row.menuName} </Box> ); } }, { field: 'depth', headerName: 'LEVEL', width: 80, align: 'center' }, { field: 'id', headerName: '메뉴ID', width: 90 }, { field: 'parentId', headerName: '상위메뉴', width: 90 }, { field: 'isUsed', headerName: '사용여부', type: 'boolean', width: 90, editable: true }, { field: 'order', headerName: '정렬', type: 'number', width: 80, editable: true, align: 'center' }, { field: 'path', headerName: '전체경로', flex: 1.5, minWidth: 180, editable: true }, { field: 'menuDescription', headerName: '메뉴설명', flex: 2, minWidth: 200, editable: true }, { field: 'canSearch', headerName: '조회기능', type: 'boolean', width: 100, editable: true, align: 'center', renderCell: (params) => { const onClick = (e: React.MouseEvent) => { e.stopPropagation(); params.api.updateRows([{ id: params.id, [params.field]: !params.value }]); }; return <Checkbox checked={!!params.value} onClick={onClick} />; } }, ];
    const visibleRows = useMemo(() => { const rowMap = new Map(rows.map(row => [row.id, row])); return rows.filter(row => { let parent = row.parentId ? rowMap.get(row.parentId) : null; while (parent) { if (!expandedIds.has(parent.id)) { return false; } parent = parent.parentId ? rowMap.get(parent.parentId) : null; } return true; }); }, [rows, expandedIds]);


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3, boxSizing: 'border-box' }}>
            <TitleArea title="탭 그리드 예제">
                <PrintButton onClick={() => alert('인쇄 버튼 클릭')} />
                <ResetButton onClick={handleReset} />
            </TitleArea>

            <SearchArea>
                <Box sx={{ flexGrow: 1 }}>
                    <Stack spacing={2}>
                        {/* Row 1 */}
                        <Stack direction="row" spacing={3.75}>
                            <SearchFormField
                                label="지불회계단위"
                                codeValue={accountingUnitCode}
                                onCodeChange={(e) => setAccountingUnitCode(e.target.value)}
                                codePlaceholder="코드"
                                nameValue={accountingUnitName}
                                namePlaceholder="회계단위명"
                                onSearchClick={handleSearchAccountingUnit}
                            />
                            <SearchFormField
                                label="발생회계단위"
                                codeValue={accrualUnitCode}
                                onCodeChange={(e) => setAccrualUnitCode(e.target.value)}
                                codePlaceholder="코드"
                                nameValue={accrualUnitName}
                                namePlaceholder="회계단위명"
                                onSearchClick={handleSearchAccrualUnit}
                            />
                            {/* ★★★ 핵심 수정 사항 ★★★ */}
                            {/* DsDatePicker 대신 MUI의 기본 DatePicker를 직접 사용합니다. */}
                            <FormField label="지불이관일자" htmlFor="transfer-date-picker">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        value={transferDate}
                                        onChange={(newValue) => setTransferDate(newValue)}
                                        slotProps={{
                                            textField: {
                                                id: 'transfer-date-picker',
                                                size: 'small',
                                                sx: { width: '180px' }
                                            }
                                        }}
                                    />
                                </LocalizationProvider>
                            </FormField>
                        </Stack>
                        {/* Row 2 */}
                        <Stack direction="row" spacing={3.75}>
                            <SearchFormField
                                label="지불유형"
                                codeValue={menuId}
                                onCodeChange={(e) => setMenuId(e.target.value)}
                                codePlaceholder="유형코드"
                                nameValue={menuName}
                                namePlaceholder="유형명"
                                onSearchClick={handleSearchMenu}
                            />
                            <FormField label="거래구분" htmlFor="transaction-type-select">
                                <Select
                                    id="transaction-type-select"
                                    value={transactionType}
                                    onChange={(e) => setTransactionType(e.target.value as string)}
                                    size="small"
                                    sx={{
                                        width: '180px',
                                        '& .MuiOutlinedInput-input': {
                                            padding: '6px 12px',
                                        },
                                    }}
                                >
                                    {transactionTypeOptions.map((option) => (
                                        <MenuItem key={String(option.value)} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormField>
                        </Stack>
                        {/* Row 3 */}
                        <Stack direction="row" spacing={3.75} alignItems="center">
                            <FormField label="조회기준" htmlFor="search-criteria-group">
                                <RadioGroup
                                    id="search-criteria-group"
                                    name="searchCriteria"
                                    value={searchCriteria}
                                    onChange={(e) => setSearchCriteria(e.target.value)}
                                    row
                                >
                                    {searchCriteriaOptions.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio size="small" />}
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormField>
                        </Stack>
                        {/* Row 4 */}
                        <Stack direction="row" spacing={3.75}>
                            {searchCriteria === 'partner' && (
                                <SearchFormField
                                    label="협력회사"
                                    codeValue={partnerCode}
                                    onCodeChange={(e) => setPartnerCode(e.target.value)}
                                    codePlaceholder="코드"
                                    nameValue={partnerName}
                                    namePlaceholder="협력회사명"
                                    onSearchClick={handleSearchPartner}
                                />
                            )}
                            {searchCriteria === 'cycle' && (
                                <SearchFormField
                                    label="주기코드"
                                    codeValue={cycleCode}
                                    onCodeChange={(e) => setCycleCode(e.target.value)}
                                    codePlaceholder="코드"
                                    nameValue={cycleName}
                                    namePlaceholder="주기명"
                                    onSearchClick={handleSearchCycle}
                                />
                            )}
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
                    </Stack>
                </Box>
                <SearchIconButton onClick={handleSearch} />
            </SearchArea>

            {/* --- (Tabs, TabPanel 등 나머지 코드는 동일) --- */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
                <Tabs value={tabValue} onChange={handleTabChange} aria-label="grid tabs">
                    <Tab label="메뉴 목록" id="grid-tab-0" aria-controls="grid-tabpanel-0" />
                    <Tab label="사용자 목록" id="grid-tab-1" aria-controls="grid-tabpanel-1" />
                    <Tab label="시스템 로그" id="grid-tab-2" aria-controls="grid-tabpanel-2" />
                </Tabs>
            </Box>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex' }}>
                <TabPanel value={tabValue} index={0}>
                    <DsDataGrid rows={visibleRows} columns={columns} sx={{ flexGrow: 1 }} showRowNumber={true} checkboxSelection={true} />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <DsDataGrid rows={initialRows.filter(r => r.id > 3)} columns={columns.slice(0, 5)} sx={{ flexGrow: 1 }} showRowNumber={true} checkboxSelection={true} />
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    <DsDataGrid rows={initialRows.slice(0, 2)} columns={columns.slice(0, 3)} sx={{ flexGrow: 1 }} showRowNumber={true} checkboxSelection={true} />
                </TabPanel>
            </Box>
        </Box>
    );
}