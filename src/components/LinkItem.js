import React, { useContext } from 'react'
//icons
import { ReactComponent as OpenTagIcon } from '@icons/o-tag.svg'
import { ReactComponent as EndTagIcon } from '@icons/e-tag.svg'
//context
import Context from '@ctx/Context'

const LinkItem = ({title, section}) => {
    const { setSection } = useContext(Context)

    return (
        <button onClick={(e)=>{e.preventDefault();setSection(section)}} className="flex cursor-pointer fill-current items-center text-gray-200 mx-2 md:mx-0 my-4">
            <OpenTagIcon className="w-3 h-3 md:w-4 md:h-4"/>
                <p className="text-md md:text-xl px-1 font-light">{title}</p>
            <EndTagIcon className="w-3 h-3 md:w-4 md:h-4"/>
        </button>
    )
}

export default LinkItem
