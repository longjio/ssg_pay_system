// D:/ds_mui_new/src/menu-data.ts

import { appRoutes, menuGroups } from './app-config';
import { AppRouteConfig } from './app-config';
import { MenuGroup, MenuItem } from './types/menu';

// [데이터 1] 라우팅 가능한 모든 페이지 목록
const processRoutesToFlatList = (routes: AppRouteConfig[], basePath = '/app'): MenuItem[] => {
    let items: MenuItem[] = [];

    routes.forEach(route => {
        // 부모 메뉴 아이템 자체는 라우팅 목록에 추가하지 않음 (path가 '#' 등일 수 있음)
        if (route.path && route.path !== '#') {
            // [수정] 모든 경로에 basePath를 올바르게 추가
            // - path가 '/'인 경우 (home): basePath만 사용 → '/app'
            // - path가 '/'로 시작하는 경우: basePath + path → '/app/button'
            // - 그 외의 경우: basePath + '/' + path → '/app/button'
            let newPath: string;
            if (route.path === '/') {
                newPath = basePath;
            } else if (route.path.startsWith('/')) {
                newPath = `${basePath}${route.path}`;
            } else {
                newPath = `${basePath}/${route.path}`;
            }

            items.push({
                id: route.id,
                text: route.menu?.text ?? route.id,
                path: newPath,
                component: route.component,
                icon: route.menu?.icon,
            });
        }

        // 자식들이 있으면 재귀적으로 처리
        if (route.children) {
            // 자식 경로를 만들 때 부모의 경로를 사용하지 않음 (app-config에서 절대 경로를 사용하므로)
            items = [...items, ...processRoutesToFlatList(route.children, basePath)];
        }
    });

    return items;
};
export const routableItems: MenuItem[] = processRoutesToFlatList(appRoutes);


// [데이터 2] 왼쪽 메뉴 UI를 위한 계층 구조 데이터 (로직 전면 수정)

/**
 * [핵심 수정]
 * appRoutes의 중첩 구조를 그대로 MenuItem의 중첩 구조로 변환하는 재귀 함수.
 */
const buildMenuTree = (routes: AppRouteConfig[]): MenuItem[] => {
    return routes
        .filter(route => route.menu) // 메뉴 정보가 있는 라우트만 필터링
        .map(route => {
            const routableItem = routableItems.find(item => item.id === route.id);

            const menuItem: MenuItem = {
                id: route.id,
                text: route.menu!.text,
                // 클릭 불가능한 부모 메뉴는 path가 없을 수 있음
                path: routableItem?.path,
                icon: route.menu!.icon,
                // 재귀적으로 자식 메뉴를 구성
                children: route.children ? buildMenuTree(route.children) : undefined,
            };
            return menuItem;
        });
};

// menuGroups와 appRoutes를 조합하여 최종 메뉴 구조를 생성합니다.
export const menuStructure: MenuGroup[] = menuGroups.map(groupInfo => {
    // appRoutes에서 현재 그룹에 해당하는 최상위 라우트들을 찾습니다.
    let topLevelRoutesForGroup = appRoutes.filter(route => route.menu?.group === groupInfo.id);

    // menu가 없지만 children이 있는 경우 (예: Components 그룹)
    // children을 직접 사용하여 1depth를 건너뜁니다.
    if (topLevelRoutesForGroup.length === 0) {
        const parentRoute = appRoutes.find(route =>
            route.id === groupInfo.id && route.children && route.children.length > 0
        );
        if (parentRoute?.children) {
            topLevelRoutesForGroup = parentRoute.children;
        }
    }

    // 각 그룹에 대해 계층적인 메뉴 아이템들을 생성합니다.
    return {
        ...groupInfo,
        items: buildMenuTree(topLevelRoutesForGroup),
    };
});
