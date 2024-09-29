import { SideMenu, Container } from "components";
import { Header } from 'components'

const CoreTemplate = ({ children }) => {
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