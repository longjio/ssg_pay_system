// D:/ssg_pay_system/src/template/TabsGrid.tsx

import React, { useState, useMemo } from 'react';
import {
    Box,
    Select,
    MenuItem,
    IconButton,
    Checkbox,
    Tabs,
    Tab,
    Stack,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { Dayjs } from 'dayjs';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { GridColDef, GridColumnGroupingModel } from '@mui/x-data-grid';
import DsDataGrid from '../components/mui_x/datagrid/DsDataGrid';
import { TitleArea, SearchArea } from '../layouts';
import {
    SearchButton,
    ResetButton,
    PrintButton,
} from '../components/button';
import { FormField } from '../components/form/FormField';
import { SearchFormField } from '../components/form/SearchFormField';

// --- 기존 메뉴 그리드 관련 타입 및 데이터 (다른 탭에서 사용) ---
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

const initialRows: MenuRow[] = [
    { id: 1, menuName: '대시보드', path: '/dashboard', order: 1, isUsed: true, depth: 0, parentId: null, menuDescription: '메인 대시보드 화면', canSearch: true, canSave: false, canExcel: true, canPrint: true },
    { id: 2, menuName: '컴포넌트', path: null, order: 2, isUsed: true, depth: 0, parentId: null, menuDescription: 'UI 컴포넌트 그룹', canSearch: true, canSave: true, canExcel: false, canPrint: false },
    { id: 3, menuName: '버튼', path: '/button', order: 1, isUsed: true, depth: 1, parentId: 2, menuDescription: '버튼 컴포넌트 예제', canSearch: true, canSave: true, canExcel: false, canPrint: false },
    { id: 4, menuName: '데이터 그리드', path: '/data-grid', order: 2, isUsed: true, depth: 1, parentId: 2, menuDescription: '그리드 컴포넌트 예제', canSearch: true, canSave: true, canExcel: true, canPrint: true },
    { id: 5, menuName: '관리', path: null, order: 3, isUsed: true, depth: 0, parentId: null, menuDescription: '시스템 관리 기능 그룹', canSearch: true, canSave: true, canExcel: true, canPrint: true },
    { id: 6, menuName: '사용자 관리', path: '/users', order: 1, isUsed: false, depth: 1, parentId: 5, menuDescription: '사용자 정보 관리', canSearch: true, canSave: true, canExcel: true, canPrint: false },
];

// --- TabPanel (기존과 동일) ---
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
            {value === index && (<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 2, height: '100%' }}>{children}</Box>)}
        </div>
    );
}


// --- 새로운 그리드 관련 정의 ---
interface PaymentDataRow {
    id: number;
    partnerCode: string;
    partnerName: string;
    alias: string;
    businessRegNo: string;
    subWorkplaceNo: string;
    category: string;
    categoryName: string;
    accountingUnit: string;
    accountingUnitName: string;
    paymentAmount: number;
}

const paymentInitialRows: PaymentDataRow[] = [
    { id: 1, partnerCode: 'P001', partnerName: '(주)신세계', alias: '신세계', businessRegNo: '123-45-67890', subWorkplaceNo: '0001', category: 'C01', categoryName: '식품', accountingUnit: 'A100', accountingUnitName: '영업1팀', paymentAmount: 1500000 },
    { id: 2, partnerCode: 'P002', partnerName: '(주)이마트', alias: '이마트', businessRegNo: '234-56-78901', subWorkplaceNo: '0002', category: 'C02', categoryName: '가전', accountingUnit: 'A200', accountingUnitName: '영업2팀', paymentAmount: 3200000 },
    { id: 3, partnerCode: 'P003', partnerName: '스타벅스코리아', alias: '스벅', businessRegNo: '345-67-89012', subWorkplaceNo: '0003', category: 'C01', categoryName: '식품', accountingUnit: 'A100', accountingUnitName: '영업1팀', paymentAmount: 850000 },
];

// ★ 1. rowspan 효과를 줄 컬럼에 `headerClassName`을 추가합니다.
const paymentColumns: GridColDef<PaymentDataRow>[] = [
    // '협력회사' 그룹에 속한 컬럼들
    { field: 'partnerCode', headerName: '코드', width: 100, align: 'center', headerAlign: 'center' },
    { field: 'partnerName', headerName: '회사명', width: 150, headerAlign: 'center' },
    { field: 'alias', headerName: '별칭', width: 120, headerAlign: 'center' },
    { field: 'businessRegNo', headerName: '사업자번호', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'subWorkplaceNo', headerName: '종사업장번호', width: 150, align: 'center', headerAlign: 'center' },
    // rowspan 효과가 적용될 컬럼들
    { field: 'category', headerName: '분류', width: 100, align: 'center', headerAlign: 'center', headerClassName: 'rowspan-header' },
    { field: 'categoryName', headerName: '분류명', width: 120, headerAlign: 'center', headerClassName: 'rowspan-header' },
    { field: 'accountingUnit', headerName: '회계단위', width: 120, align: 'center', headerAlign: 'center', headerClassName: 'rowspan-header' },
    { field: 'accountingUnitName', headerName: '회계단위명', width: 150, headerAlign: 'center', headerClassName: 'rowspan-header' },
    { field: 'paymentAmount', headerName: '지불금액', width: 130, type: 'number', align: 'right', headerAlign: 'center', headerClassName: 'rowspan-header' },
];

const paymentColumnGroupingModel: GridColumnGroupingModel = [
    {
        groupId: '협력회사',
        headerAlign: 'center',
        children: [
            { field: 'partnerCode' },
            { field: 'partnerName' },
            { field: 'alias' },
            { field: 'businessRegNo' },
            { field: 'subWorkplaceNo' },
        ],
    },
];

const usageStatusOptions = [
    { value: 'true', label: '협력회사' },
    { value: 'false', label: '주기코드' },
];

export default function TabsGridPage() {
    // --- 상태 및 핸들러 (기존과 동일) ---
    const [rows, setRows] = useState<MenuRow[]>(initialRows);
    const [accountingUnitCode, setAccountingUnitCode] = useState('');
    const [accountingUnitName, setAccountingUnitName] = useState('');
    const [accrualUnitCode, setAccrualUnitCode] = useState('');
    const [accrualUnitName, setAccrualUnitName] = useState('');
    const [transferDate, setTransferDate] = useState<Dayjs | null>(null);
    const [transactionType, setTransactionType] = useState('');
    const [transactionTypeName, setTransactionTypeName] = useState('');
    const [menuId, setMenuId] = useState('');
    const [menuName, setMenuName] = useState('');
    const [partnerCode, setPartnerCode] = useState('');
    const [partnerName, setPartnerName] = useState('');
    const [cycleCode, setCycleCode] = useState('');
    const [cycleName, setCycleName] = useState('');
    const [cycleCount, setCycleCount] = useState('');
    const [isUsed, setIsUsed] = useState('all');
    const [expandedIds, setExpandedIds] = useState<Set<number | string>>(new Set([2, 5]));
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => setTabValue(newValue);
    const handleSearchAccountingUnit = () => { if (accountingUnitCode === '1000') setAccountingUnitName('서울본사'); else if (accountingUnitCode === '2000') setAccountingUnitName('부산지사'); else { alert(`'${accountingUnitCode}'에 해당하는 지불회계단위를 찾을 수 없습니다.`); setAccountingUnitName(''); } };
    const handleSearchAccrualUnit = () => { if (accrualUnitCode === 'A100') setAccrualUnitName('영업1팀'); else if (accrualUnitCode === 'A200') setAccrualUnitName('영업2팀'); else { alert(`'${accrualUnitCode}'에 해당하는 발생회계단위를 찾을 수 없습니다.`); setAccrualUnitName(''); } };
    const handleSearchTransactionType = () => { if (transactionType === 'purchase') setTransactionTypeName('매입'); else if (transactionType === 'sales') setTransactionTypeName('매출'); else { alert(`'${transactionType}'에 해당하는 거래구분을 찾을 수 없습니다.`); setTransactionTypeName(''); } };
    const handleSearchMenu = () => { const foundMenu = initialRows.find(row => String(row.id) === menuId); if (foundMenu) setMenuName(foundMenu.menuName); else { alert(`'${menuId}'에 해당하는 메뉴를 찾을 수 없습니다.`); setMenuName(''); } };
    const handleSearchPartner = () => { if (partnerCode === 'P001') setPartnerName('(주)신세계'); else if (partnerCode === 'P002') setPartnerName('(주)이마트'); else { alert(`'${partnerCode}'에 해당하는 협력회사를 찾을 수 없습니다.`); setPartnerName(''); } };
    const handleSearchCycle = () => { if (cycleCode === 'M') setCycleName('매월'); else if (cycleCode === 'W') setCycleName('매주'); else { alert(`'${cycleCode}'에 해당하는 주기코드를 찾을 수 없습니다.`); setCycleName(''); } };
    const handleSearchCycleCount = () => { alert(`주기회차 '${cycleCount}' 검색`); };
    const handleSearch = () => {
        const searchConditions = [
            `지불회계단위: ${accountingUnitCode} (${accountingUnitName})`,
            `발생회계단위: ${accrualUnitCode} (${accrualUnitName})`,
            `지불이관일자: ${transferDate ? transferDate.format('YYYY.MM.DD') : '미선택'}`,
            `거래구분: ${transactionType} (${transactionTypeName})`,
            `지불유형: ${menuId} (${menuName})`,
            `협력회사: ${partnerCode} (${partnerName})`,
            `주기코드: ${cycleCode} (${cycleName})`,
            `주기회차: ${cycleCount}`,
            `사용여부: ${isUsed}`,
        ];
        alert(`검색 조건:\n${searchConditions.join('\n')}`);
    };
    const handleReset = () => {
        setAccountingUnitCode(''); setAccountingUnitName('');
        setAccrualUnitCode(''); setAccrualUnitName('');
        setTransferDate(null);
        setTransactionType(''); setTransactionTypeName('');
        setMenuId(''); setMenuName('');
        setPartnerCode(''); setPartnerName('');
        setCycleCode(''); setCycleName('');
        setCycleCount('');
        setIsUsed('all');
        alert('조회 조건이 초기화되었습니다.');
    };
    const handleToggleExpand = (id: number | string) => { setExpandedIds(prev => { const newSet = new Set(prev); if (newSet.has(id)) { newSet.delete(id); } else { newSet.add(id); } return newSet; }); };

    const columns: GridColDef<MenuRow>[] = [ { field: 'menuName', headerName: '메뉴명', flex: 1.5, minWidth: 200, renderCell: (params) => { const { row } = params; const isParent = rows.some(r => r.parentId === row.id); return ( <Box sx={{ pl: row.depth * 3, display: 'flex', alignItems: 'center', width: '100%' }}> {isParent ? ( <IconButton size="small" onClick={() => handleToggleExpand(row.id)} sx={{ mr: 1 }}> {expandedIds.has(row.id) ? <FolderOpenIcon /> : <FolderIcon />} </IconButton> ) : ( <IconButton size="small" disabled sx={{ mr: 1 }}> <ArticleOutlinedIcon /> </IconButton> )} {row.menuName} </Box> ); } }, { field: 'depth', headerName: 'LEVEL', width: 80, align: 'center' }, { field: 'id', headerName: '메뉴ID', width: 90 }, { field: 'parentId', headerName: '상위메뉴', width: 90 }, { field: 'isUsed', headerName: '사용여부', type: 'boolean', width: 90, editable: true }, { field: 'order', headerName: '정렬', type: 'number', width: 80, editable: true, align: 'center' }, { field: 'path', headerName: '전체경로', flex: 1.5, minWidth: 180, editable: true }, { field: 'menuDescription', headerName: '메뉴설명', flex: 2, minWidth: 200, editable: true }, { field: 'canSearch', headerName: '조회기능', type: 'boolean', width: 100, editable: true, align: 'center', renderCell: (params) => { const onClick = (e: React.MouseEvent) => { e.stopPropagation(); params.api.updateRows([{ id: params.id, [params.field]: !params.value }]); }; return <Checkbox checked={!!params.value} onClick={onClick} />; } }, ];
    const visibleRows = useMemo(() => { const rowMap = new Map(rows.map(row => [row.id, row])); return rows.filter(row => { let parent = row.parentId ? rowMap.get(row.parentId) : null; while (parent) { if (!expandedIds.has(parent.id)) { return false; } parent = parent.parentId ? rowMap.get(parent.parentId) : null; } return true; }); }, [rows, expandedIds]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3, boxSizing: 'border-box' }}>
            <TitleArea title="지불이관 명세서">
                <SearchButton onClick={handleSearch} />
                <PrintButton onClick={() => alert('인쇄 버튼 클릭')} />
                <ResetButton onClick={handleReset} />
            </TitleArea>

            <SearchArea>
                <Box sx={{ flexGrow: 1 }}>
                    <Stack spacing={2}>
                        {/* Row 1 */}
                        <Stack direction="row" spacing={3.75}>
                            <SearchFormField label="지불회계단위" codeValue={accountingUnitCode} onCodeChange={(e) => setAccountingUnitCode(e.target.value)} codePlaceholder="코드" nameValue={accountingUnitName} namePlaceholder="회계단위명" onSearchClick={handleSearchAccountingUnit} />
                            <SearchFormField label="발생회계단위" codeValue={accrualUnitCode} onCodeChange={(e) => setAccrualUnitCode(e.target.value)} codePlaceholder="코드" nameValue={accrualUnitName} namePlaceholder="회계단위명" onSearchClick={handleSearchAccrualUnit} />
                            <FormField label="지불이관일자" htmlFor="transfer-date-picker">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker value={transferDate} onChange={(newValue) => setTransferDate(newValue)} sx={{ width: '170px' }} slotProps={{ textField: { id: 'transfer-date-picker', size: 'small' } }} />
                                </LocalizationProvider>
                            </FormField>
                            <SearchFormField label="거래구분" codeValue={transactionType} onCodeChange={(e) => setTransactionType(e.target.value)} codePlaceholder="코드" nameValue={transactionTypeName} namePlaceholder="거래구분명" onSearchClick={handleSearchTransactionType} />
                        </Stack>
                        {/* Row 2 */}
                        <Stack direction="row" spacing={3.75}>
                            <SearchFormField label="지불유형" codeValue={menuId} onCodeChange={(e) => setMenuId(e.target.value)} codePlaceholder="유형코드" nameValue={menuName} namePlaceholder="유형명" onSearchClick={handleSearchMenu} />
                            <SearchFormField label="주기코드" codeValue={cycleCode} onCodeChange={(e) => setCycleCode(e.target.value)} codePlaceholder="코드" nameValue={cycleName} namePlaceholder="주기명" onSearchClick={handleSearchCycle} />
                            <SearchFormField label="주기회차" codeValue={cycleCount} onCodeChange={(e) => setCycleCount(e.target.value)} codePlaceholder="회차" nameValue="" onSearchClick={handleSearchCycleCount} hideNameField={true} codeTextFieldProps={{ sx: { width: '132px' } }} />
                            <SearchFormField label="통화코드" codeValue={cycleCount} onCodeChange={(e) => setCycleCount(e.target.value)} codePlaceholder="회차" nameValue="" onSearchClick={handleSearchCycleCount} hideNameField={true} codeTextFieldProps={{ sx: { width: '120px' } }} />
                        </Stack>
                        {/* Row 3 */}
                        <Stack direction="row" spacing={3.75}>
                            <FormField label="조회기준" htmlFor="usage-status-group">
                                <RadioGroup row id="usage-status-group" value={isUsed} onChange={(e) => setIsUsed(e.target.value)} sx={{ height: '34px', alignItems: 'center', width: '282px' }}>
                                    {usageStatusOptions.map((option) => (
                                        <FormControlLabel key={option.value} value={option.value} control={<Radio size="small" />} label={option.label} sx={{ mr: 2 }} />
                                    ))}
                                </RadioGroup>
                            </FormField>
                            <SearchFormField label="협력회사" codeValue={partnerCode} onCodeChange={(e) => setPartnerCode(e.target.value)} codePlaceholder="코드" nameValue={partnerName} namePlaceholder="협력회사명" onSearchClick={handleSearchPartner} />
                        </Stack>
                    </Stack>
                </Box>
            </SearchArea>

            <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
                <Tabs value={tabValue} onChange={handleTabChange} aria-label="grid tabs">
                    <Tab label="협력회사별 지불내역" id="grid-tab-0" aria-controls="grid-tabpanel-0" />
                    <Tab label="지불이관 명세서" id="grid-tab-1" aria-controls="grid-tabpanel-1" />
                    <Tab label="보류분 지불 명세서" id="grid-tab-2" aria-controls="grid-tabpanel-2" />
                </Tabs>
            </Box>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex' }}>
                <TabPanel value={tabValue} index={0}>
                    <DsDataGrid
                        rows={paymentInitialRows}
                        columns={paymentColumns}
                        columnGroupingModel={paymentColumnGroupingModel}
                        sx={{
                            flexGrow: 1,
                            // ★★★ 핵심 수정 사항 ★★★
                            // `rowspan-header` 클래스를 가진 헤더의 세로 정렬을 'center'로 지정합니다.
                            '& .rowspan-header .MuiDataGrid-columnHeaderTitleContainer': {
                                alignItems: 'center',
                            },
                        }}
                        showRowNumber={true}
                        checkboxSelection={true}
                    />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    {/* 이 탭은 기존 메뉴 그리드를 그대로 사용합니다. */}
                    <DsDataGrid rows={initialRows.filter(r => r.id > 3)} columns={columns.slice(0, 5)} sx={{ flexGrow: 1 }} showRowNumber={true} checkboxSelection={true} />
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    {/* 이 탭도 기존 메뉴 그리드를 그대로 사용합니다. */}
                    <DsDataGrid rows={initialRows.slice(0, 2)} columns={columns.slice(0, 3)} sx={{ flexGrow: 1 }} showRowNumber={true} checkboxSelection={true} />
                </TabPanel>
            </Box>
        </Box>
    );
}