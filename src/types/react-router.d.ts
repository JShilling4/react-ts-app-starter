import 'react-router-dom';

declare module 'react-router-dom' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export interface RouteObject {
    children?: RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
    // Add any other properties you need
  }
}
