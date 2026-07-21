import { TitleGeneral, VueIcon, ReactIcon } from 'components'

const BodyAbout: React.FC = () => {
    return (
        <div className="about">
            <div className="title-about">
                <div className="font-mono text-[11px] text-secondary/70 uppercase tracking-widest mb-1">
                    [FIG 02 // PROFILE_SPECIFICATIONS]
                </div>
                <TitleGeneral text="ABOUT"/>
            </div>
            <div className="description-about border border-lines hover:border-accent hover:-translate-y-0.5 transition-all duration-300 rounded-md p-6 bg-surface relative group shadow-sm">
                <div className="absolute -top-2 -left-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
                <div className="absolute -top-2 -right-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
                <div className="absolute -bottom-2 -left-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
                <div className="absolute -bottom-2 -right-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
                <p className="text">
                    Hi i`m Jesus, i`m information technology engineer with 
                    experience in frontend development with little more of 6 years 
                    developing in js framework angular and the libraries react, vue.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-4 border-t border-lines/40 gap-4">
                    <div className="flex items-center gap-4">
                        <VueIcon primaryColor="var(--primary)" secondColor="var(--secondary)"/>
                        <ReactIcon primaryColor="var(--secondary)" secondColor="var(--primary)"/>
                    </div>
                    <a 
                      href="/cv-jesus-ali.pdf" 
                      download="CV_Jesus_Ali.pdf"
                      className="btn text-xs whitespace-nowrap"
                    >
                      <span>DOWNLOAD CV (PDF)</span>
                      <span className="text-accent font-bold">↓</span>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default BodyAbout