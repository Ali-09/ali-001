import React from 'react'
import { Divider } from 'components'

const TitleGeneral = ({text}) => {
    return (
        <div className="w-max items-center">
            <h1 className="title">{text}</h1>
            <Divider/>
        </div>
    )
}

export default TitleGeneral
