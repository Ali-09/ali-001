import { SideMenu, Container } from "components";
import { Header } from 'components'

interface IProps {
  children: React.ReactNode
}

const CoreTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <div className="main flex flex-col justify-between h-screen overflow-hidden">
      <Header/>
      <div className="content">
          <SideMenu />
          <Container>{children}</Container>
      </div>
      {/* Pie de página tipo Bloque de Título de Ingeniería CAD */}
      <footer className="w-full border-t border-lines/40 py-2 px-8 flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] text-secondary/60 tracking-wider">
        <div className="flex items-center gap-3">
          <span>ENG.ID: JESUS ALI</span>
          <span className="hidden sm:inline">|</span>
          <span>ROLE: SENIOR FRONTEND DEVELOPER</span>
        </div>
        <div className="flex items-center gap-2 my-1 sm:my-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-secondary/80">SYSTEM STATUS: ONLINE [NOMINAL]</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span>FRAMEWORK: NEXT.JS 16</span>
          <span>|</span>
          <span>ENGINE: TURBOPACK</span>
        </div>
      </footer>
    </div>
  )
}

export default CoreTemplate