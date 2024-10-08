import { TitleGeneral, VueIcon, ReactIcon } from 'components'

const BodyAbout = () => {
    return (
        <div className="about">
            <div className="title-about">
                <TitleGeneral text="ABOUT"/>
            </div>
            <div className="description-about">
                <p className="text">
                    Hi i`m Jesus, i`m information technology engineer with 
                    experience in frontend development with little more of 5 years 
                    developing in js and the libraries react and vue.
                </p>
                <div className="flex w-full justify-center">
                    <VueIcon primaryColor="#FFFFFF" secondColor="#9CA3AF"/>
                    <ReactIcon primaryColor="#9CA3AF" secondColor="#FFFFFF"/>
                </div>
            </div>
            
        </div>
    )
}

export default BodyAbout