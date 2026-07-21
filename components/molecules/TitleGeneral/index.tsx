import React from 'react'
import { Divider } from 'components'

const TitleGeneral = ({ text } : { text: string }) => {
    return (
        <div className="w-max items-center mb-3 sm:mb-6">
            <h1 className="title">{text}</h1>
            <Divider/>
        </div>
    )
}

export default TitleGeneral
