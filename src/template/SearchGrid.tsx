// D:/ssg_pay_system/src/template/SearchGrid.tsx

import React, { useState, useMemo } from 'react';
import { Box, IconButton, Checkbox, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Dayjs } from 'dayjs';
import { DsDatePicker } from '../components/input/DsDatePicker';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { GridColDef } from '@mui/x-data-grid';
import DsDataGrid from '../components/mui_x/datagrid/DsDataGrid';
import { TitleArea, SearchArea, SubTitleArea } from '../layouts';
import {
    SearchButton, // SearchButton을 import 합니다.
    ResetButton,
    PrintButton,
    AddButton,
    DeleteButton,
    SaveButton,
} from '../components/button';
import { FormField } from '../components/form/FormField';
import { SearchFormField } from '../components/form/SearchFormField'; // SearchFormField를 import 합니다.

const initialRows = [
    { id: 1, menuName: '대시보드', path: '/dashboard', order: 1, isUsed: true, depth: 0, parentId: null, menuDescription: '메인 대시보드 화면', canSearch: true, canSave: false, canExcel: true, canPrint: true },
    { id: 2, menuName: '컴포넌트', path: null, order: 2, isUsed: true, depth: 0, parentId: null, menuDescription: 'UI 컴포넌트 그룹', canSearch: true, canSave: true, canExcel: false, canPrint: false },
    { id: 3, menuName: '버튼', path: '/button', order: 1, isUsed: true, depth: 1, parentId: 2, menuDescription: '버튼 컴포넌트 예제', canSearch: true, canSave: true, canExcel: false, canPrint: false },
    { id: 4, menuName: '데이터 그리드', path: '/data-grid', order: 2, isUsed: true, depth: 1, parentId: 2, menuDescription: '그리드 컴포넌트 예제', canSearch: true, canSave: true, canExcel: true, canPrint: true },
    { id: 5, menuName: '관리', path: null, order: 3, isUsed: true, depth: 0, parentId: null, menuDescription: '시스템 관리 기능 그룹', canSearch: true, canSave: true, canExcel: true, canPrint: true },
    { id: 6, menuName: '사용자 관리', path: '/users', order: 1, isUsed: false, depth: 1, parentId: 5, menuDescription: '사용자 정보 관리', canSearch: true, canSave: true, canExcel: true, canPrint: false },
];

export default function SearchGridPage() {
    const [rows, setRows] = useState(initialRows);

    // ★ 1. 새로운 조회 조건을 위한 상태(State)들을 추가합니다.
    const [accountingUnitCode, setAccountingUnitCode] = useState('');
    const [accountingUnitName, setAccountingUnitName] = useState('');
    const [accrualUnitCode, setAccrualUnitCode] = useState('');
    const [accrualUnitName, setAccrualUnitName] = useState('');
    const [transferDate, setTransferDate] = useState<Dayjs | null>(null);
    const [transactionType, setTransactionType] = useState('');
    const [transactionTypeName, setTransactionTypeName] = useState('');
    const [menuId, setMenuId] = useState('');
    const [menuName, setMenuName] = useState('');
    const [cycleCode, setCycleCode] = useState('');
    const [cycleName, setCycleName] = useState('');
    const [cycleCount, setCycleCount] = useState('');

    const [expandedIds, setExpandedIds] = useState<Set<number | string>>(new Set([2, 5]));

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

    // ★ 2. 새로운 조회 필드를 위한 핸들러 함수들을 추가합니다.
    const handleSearchAccountingUnit = () => { if (accountingUnitCode === '1000') setAccountingUnitName('서울본사'); else if (accountingUnitCode === '2000') setAccountingUnitName('부산지사'); else { alert(`'${accountingUnitCode}'에 해당하는 지불회계단위를 찾을 수 없습니다.`); setAccountingUnitName(''); } };
    const handleSearchAccrualUnit = () => { if (accrualUnitCode === 'A100') setAccrualUnitName('영업1팀'); else if (accrualUnitCode === 'A200') setAccrualUnitName('영업2팀'); else { alert(`'${accrualUnitCode}'에 해당하는 발생회계단위를 찾을 수 없습니다.`); setAccrualUnitName(''); } };
    const handleSearchTransactionType = () => { if (transactionType === 'purchase') setTransactionTypeName('매입'); else if (transactionType === 'sales') setTransactionTypeName('매출'); else { alert(`'${transactionType}'에 해당하는 거래구분을 찾을 수 없습니다.`); setTransactionTypeName(''); } };
    const handleSearchMenu = () => { const foundMenu = initialRows.find(row => String(row.id) === menuId); if (foundMenu) setMenuName(foundMenu.menuName); else { alert(`'${menuId}'에 해당하는 메뉴를 찾을 수 없습니다.`); setMenuName(''); } };
    const handleSearchCycle = () => { if (cycleCode === 'M') setCycleName('매월'); else if (cycleCode === 'W') setCycleName('매주'); else { alert(`'${cycleCode}'에 해당하는 주기코드를 찾을 수 없습니다.`); setCycleName(''); } };
    const handleSearchCycleCount = () => { alert(`주기회차 '${cycleCount}' 검색`); };


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
        {
            field: 'canSave',
            headerName: '저장기능',
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
        {
            field: 'canExcel',
            headerName: '엑셀기능',
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
        {
            field: 'canPrint',
            headerName: '인쇄기능',
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

    // ★ 3. handleSearch와 handleReset 함수를 새로운 조회 조건에 맞게 수정합니다.
    const handleSearch = () => {
        const searchConditions = [
            `지불회계단위: ${accountingUnitCode} (${accountingUnitName})`,
            `발생회계단위: ${accrualUnitCode} (${accrualUnitName})`,
            `지불이관일자: ${transferDate ? transferDate.format('YYYY.MM.DD') : '미선택'}`,
            `거래구분: ${transactionType} (${transactionTypeName})`,
            `지불유형: ${menuId} (${menuName})`,
            `주기코드: ${cycleCode} (${cycleName})`,
            `주기회차: ${cycleCount}`,
        ];
        alert(`검색 조건:\n${searchConditions.join('\n')}`);
    };

    const handleReset = () => {
        setAccountingUnitCode(''); setAccountingUnitName('');
        setAccrualUnitCode(''); setAccrualUnitName('');
        setTransferDate(null);
        setTransactionType(''); setTransactionTypeName('');
        setMenuId(''); setMenuName('');
        setCycleCode(''); setCycleName('');
        setCycleCount('');
        alert('조회 조건이 초기화되었습니다.');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, p: 3 }}>
            <TitleArea title="메뉴 관리">
                {/* ★ 4. TitleArea에 SearchButton을 추가합니다. */}
                <SearchButton onClick={handleSearch} />
                <PrintButton onClick={() => alert('인쇄 버튼 클릭')} />
                <ResetButton onClick={handleReset} />
            </TitleArea>

            {/* ★ 5. SearchArea 내부를 요청하신 필드들로 교체합니다. */}
            <SearchArea>
                <Box sx={{ flexGrow: 1 }}>
                    <Stack spacing={2}>
                        {/* Row 1 */}
                        <Stack direction="row" sx={{ flexWrap: 'wrap', columnGap: '16px', rowGap: '8px' }}>
                            <SearchFormField label="지불회계단위" codeValue={accountingUnitCode} onCodeChange={(e) => setAccountingUnitCode(e.target.value)} codePlaceholder="코드" nameValue={accountingUnitName} namePlaceholder="회계단위명" onSearchClick={handleSearchAccountingUnit} />
                            <SearchFormField label="발생회계단위" codeValue={accrualUnitCode} onCodeChange={(e) => setAccrualUnitCode(e.target.value)} codePlaceholder="코드" nameValue={accrualUnitName} namePlaceholder="회계단위명" onSearchClick={handleSearchAccrualUnit} />
                            <FormField label="지불이관일자" htmlFor="transfer-date-picker">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DsDatePicker
                                        value={transferDate}
                                        onChange={(newValue) => setTransferDate(newValue)}
                                    />
                                </LocalizationProvider>
                            </FormField>
                            <SearchFormField label="거래구분" codeValue={transactionType} onCodeChange={(e) => setTransactionType(e.target.value)} codePlaceholder="코드" nameValue={transactionTypeName} namePlaceholder="거래구분명" onSearchClick={handleSearchTransactionType} />
                        </Stack>
                        {/* Row 2 */}
                        <Stack direction="row" sx={{ flexWrap: 'wrap', columnGap: '16px', rowGap: '8px' }}>
                            <SearchFormField label="지불유형" codeValue={menuId} onCodeChange={(e) => setMenuId(e.target.value)} codePlaceholder="유형코드" nameValue={menuName} namePlaceholder="유형명" onSearchClick={handleSearchMenu} />
                            <SearchFormField label="주기코드" codeValue={cycleCode} onCodeChange={(e) => setCycleCode(e.target.value)} codePlaceholder="코드" nameValue={cycleName} namePlaceholder="주기명" onSearchClick={handleSearchCycle} />
                            <SearchFormField label="주기회차" codeValue={cycleCount} onCodeChange={(e) => setCycleCount(e.target.value)} codePlaceholder="회차" nameValue="" onSearchClick={handleSearchCycleCount} hideNameField={true} codeTextFieldProps={{ sx: { width: '132px' } }} />
                            <SearchFormField label="통화코드" codeValue={cycleCount} onCodeChange={(e) => setCycleCount(e.target.value)} codePlaceholder="회차" nameValue="" onSearchClick={handleSearchCycleCount} hideNameField={true} codeTextFieldProps={{ sx: { width: '120px' } }} />
                        </Stack>
                    </Stack>
                </Box>
            </SearchArea>

            <SubTitleArea title="메뉴 목록">
                <AddButton onClick={() => alert('추가 버튼 클릭')} />
                <DeleteButton onClick={() => alert('선택 삭제 버튼 클릭')} />
                <SaveButton onClick={() => alert('그리드 변경사항 저장 버튼 클릭')} />
            </SubTitleArea>

            <DsDataGrid
                rows={visibleRows}
                columns={columns}
                sx={{ flexGrow: 1 }}
                processRowUpdate={(updatedRow, originalRow) => {
                    setRows(rows.map((row) => (row.id === updatedRow.id ? updatedRow : row)));
                    return updatedRow;
                }}
                showRowNumber={true}
                checkboxSelection={true}
            />
        </Box>
    );
}