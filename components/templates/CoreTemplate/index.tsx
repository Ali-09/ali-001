import { SideMenu, Container } from "components";
import { Header } from 'components'

interface IProps {
  children: React.ReactNode
}

const CoreTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <div className="main">
      <Header/>
      <div className="content">
          <SideMenu />
          <Container>{children}</Container>
      </div>
    </div>
  )
}

export default CoreTemplate