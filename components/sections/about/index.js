import TitleGeneral from '@components/TitleGeneral'
import Vue from '@components/sections/about/Vue'
import React from '@components/sections/about/React'
import Description from '@components/sections/about/Description'

const About = () => {
    return (
        <div className="about">
            <div className="text-left flex items-center md:w-2/5 w-full flex-col justify-center">
                <TitleGeneral text="ABOUT"/>
            </div>
            <div className="md:w-3/5 w-full md:self-center">
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
