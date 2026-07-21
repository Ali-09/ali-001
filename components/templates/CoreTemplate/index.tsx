import { SideMenu, Container, Header, CADBlueprintOverlay } from "components";

interface IProps {
  children: React.ReactNode
}

const CoreTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <div className="main flex flex-col justify-between h-screen overflow-hidden relative">
      <CADBlueprintOverlay />
      <Header/>
      <div className="content relative z-10">
          <SideMenu />
          <Container>{children}</Container>
      </div>
      {/* Pie de página tipo Bloque de Título de Ingeniería CAD */}
      <footer className="w-full py-2 px-8 flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] text-secondary/60 tracking-wider relative z-10 bg-transparent">
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