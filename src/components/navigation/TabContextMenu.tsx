import React from 'react';
import { Menu, MenuItem as MuiMenuItem } from '@mui/material';
import { MenuItem } from '../../types/menu'; // MenuItem 타입 정의 경로에 따라 수정 필요

interface TabContextMenuProps {
    contextMenu: { mouseX: number; mouseY: number; tab: MenuItem; } | null;
    handleCloseContextMenu: () => void;
    handleCloseThisTab: () => void;
    handleCloseOthers: () => void;
    handleCloseAllTabs: () => void;
}

const TabContextMenu: React.FC<TabContextMenuProps> = ({
    contextMenu,
    handleCloseContextMenu,
    handleCloseThisTab,
    handleCloseOthers,
    handleCloseAllTabs,
}) => {
    return (
        <Menu
            open={contextMenu !== null}
            onClose={handleCloseContextMenu}
            anchorReference="anchorPosition"
            anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}
        >
            <MuiMenuItem onClick={handleCloseThisTab} disabled={contextMenu?.tab.path === '/app'}>
                이 탭 닫기
            </MuiMenuItem>
            <MuiMenuItem onClick={handleCloseOthers}>다른 탭 모두 닫기</MuiMenuItem>
            <MuiMenuItem onClick={handleCloseAllTabs}>전체 탭 닫기</MuiMenuItem>
        </Menu>
    );
};

export default TabContextMenu;