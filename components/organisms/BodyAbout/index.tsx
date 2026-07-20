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
            <div className="description-about">
                <p className="text">
                    Hi i`m Jesus, i`m information technology engineer with 
                    experience in frontend development with little more of 6 years 
                    developing in js framework angular and the libraries react, vue.
                </p>
                <div className="flex w-full justify-center">
                    <VueIcon primaryColor="var(--primary)" secondColor="var(--secondary)"/>
                    <ReactIcon primaryColor="var(--secondary)" secondColor="var(--primary)"/>
                </div>
            </div>
            
        </div>
    )
}

export default BodyAbout