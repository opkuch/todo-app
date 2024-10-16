import { Stack, StackProps } from '@mui/material'
import { ReactNode } from 'react';

interface MainLayoutProps extends StackProps {
    children: ReactNode;
    spacing?: number;
    padding?: number | string;
  }
  
  const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    spacing = 2, 
    padding = 2,
    ...rest 
  }) => {
    return (
      <Stack
        spacing={spacing}
        padding={padding}
        {...rest}
      >
        {children}
      </Stack>
    );
  };
  
  export default MainLayout;