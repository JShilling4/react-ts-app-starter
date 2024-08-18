import { ReactNode } from 'react';

export type ViewContainerProps = {
  children: ReactNode;
};

const ViewContainer = ({ children }: ViewContainerProps) => {
  return <div>ViewContainer {children}</div>;
};

export { ViewContainer };
