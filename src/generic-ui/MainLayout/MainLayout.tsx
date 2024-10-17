import { Container, ContainerProps } from '@mui/material'
import { ReactNode } from 'react'

interface MainLayoutProps extends ContainerProps {
  children: ReactNode
  spacing?: number
  padding?: number | string
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  spacing = 2,
  padding = 2,
  ...rest
}) => {
  return (
    <Container component="div" spacing={spacing} padding={padding} {...rest}>
      {children}
    </Container>
  )
}

export default MainLayout
