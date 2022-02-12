import TitleGeneral from '@components/TitleGeneral'
import Vue from '@components/sections/about/Vue'
import React from '@components/sections/about/React'
import Description from '@components/sections/about/Description'

const About = () => {
    return (
        <div className="about">
            <div className="title-about">
                <TitleGeneral text="ABOUT"/>
            </div>
            <div className="description-about">
                <Description/>
                <div className="flex w-full justify-center">
                    <Vue primaryColor="#FFFFFF" secondColor="#9CA3AF"/>
                    <React primaryColor="#9CA3AF" secondColor="#FFFFFF"/>
                </div>
            </div>
            
        </div>
    )
}

export default About
