import { ReactElement } from 'react';

const MainViewContainer = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return <>{children}</>;
};
export default MainViewContainer;
