export interface BreadcrumbsItem {
  label?: string; // 名称
  url?: string; // 导航路由
  active?: boolean; // 活跃标识
  canNavigate?: boolean; // 导航标识
}
