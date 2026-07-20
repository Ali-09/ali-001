import { LinkedInLink, GithubLink } from "components"

const Header: React.FC = () => {
    return (
        <div className="header border-b border-lines/40 pb-4">
            <div className="title-header flex items-center justify-between">
                <h1 className="name-header">JESUS ALI</h1>
                <div className="hidden md:flex items-center gap-3 font-mono text-[11px] text-secondary/70 uppercase tracking-widest">
                    <span>● SYS.REF: CAD-001</span>
                    <span>|</span>
                    <span>REV 2.4</span>
                    <span>|</span>
                    <span>SCALE 1:1</span>
                </div>
            </div>
            <div className='social'>
                <LinkedInLink/>
                <GithubLink/>
            </div>
        </div>
    )
}

export default Header