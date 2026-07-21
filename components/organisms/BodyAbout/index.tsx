import React, { useContext } from 'react';
import Context from 'context/Context';
import { TitleGeneral, VueIcon, ReactIcon } from 'components';

const BodyAbout: React.FC = () => {
    const context = useContext(Context);
    const t = context?.t;

    return (
        <div className="about">
            <div className="title-about">
                <div className="font-mono text-[11px] text-secondary/70 uppercase tracking-widest mb-1">
                    {t?.about.fig02 || "[FIG 02 // PROFILE_SPECIFICATIONS]"}
                </div>
                <TitleGeneral text={t?.about.title || "ABOUT"}/>
            </div>
            <div className="description-about border border-lines hover:border-accent hover:-translate-y-0.5 transition-all duration-300 rounded-md p-4 sm:p-6 bg-surface relative group shadow-sm">
                <div className="absolute -top-2 -left-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
                <div className="absolute -top-2 -right-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
                <div className="absolute -bottom-2 -left-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
                <div className="absolute -bottom-2 -right-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
                <p className="text">
                    {t?.about.bio || "Hi, I'm Jesus. I'm an information technology engineer with more than 6 years of experience in frontend development, building high-performance web applications with Angular, React, and Vue."}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-8 pt-3 sm:pt-4 border-t border-lines/40 gap-3 sm:gap-4">
                    <div className="flex items-center gap-4">
                        <VueIcon primaryColor="var(--primary)" secondColor="var(--secondary)"/>
                        <ReactIcon primaryColor="var(--secondary)" secondColor="var(--primary)"/>
                    </div>
                    <a 
                      href="/cv-jesus-ali.pdf" 
                      download="CV_Jesus_Ali.pdf"
                      className="btn text-xs whitespace-nowrap"
                    >
                      <span>{t?.about.downloadCv || "DOWNLOAD CV (PDF)"}</span>
                      <span className="text-accent font-bold">↓</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BodyAbout;