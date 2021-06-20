import React from 'react'
import LinkItem from '@components/LinkItem'

const SideLeft = () => {
    const tags = [
        {title:'ME', section:'me'},
        {title:'ABOUT', section:'about'},
        {title:'CONTACT', section:'contact'}
    ]

    return (
        <div className="w-full h-1/6 md:h-full md:w-1/12 flex flex-row md:flex-col md:flex-wrap justify-center">
            {
                tags.map((tag,k)=>(<LinkItem title={tag.title} section={tag.section} key={k}/>))
            }
        </div>
    )
}

export default SideLeft
