export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageProps<T = {}> {
  params: T;
}
