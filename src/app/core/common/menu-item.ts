export interface MenuItem {
  label?: string; // 菜单名称
  icon?: string; // 菜单图标
  routerLink?: string; // 菜单路由
  expanded?: boolean; // 是否展开,当hasChild为true时有效
  cache_expanded?: boolean; // 缓存菜单展开状态,当hasChild为true时有效
  hasChild?: boolean; // 是否有子菜单
  children?: MenuItem[]; // 子菜单
}
