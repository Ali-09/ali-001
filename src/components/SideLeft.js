import React from 'react'
import LinkItem from '@components/LinkItem'

const SideLeft = () => {
    const tags = [
        {title:'ME', section:'me'},
        {title:'ABOUT', section:'about'},
        {title:'CONTACT', section:'contact'}
    ]

    return (
        <div className="w-1/12 flex flex-col flex-wrap justify-center">
            {
                tags.map((tag,k)=>(<LinkItem title={tag.title} section={tag.section} key={k}/>))
            }
        </div>
    )
}

export default SideLeft
