import { useContext } from 'react'
//icons
import OpenTagIcon from '@icons/o-tag.svg'
import EndTagIcon from '@icons/e-tag.svg'
//context
import Context from '@ctx/Context'
//next
import { useRouter } from 'next/router'

const LinkItem = ({tag}) => {
    const { setSection, section } = useContext(Context)
    const router = useRouter()

    return (
        <button onClick={(e)=>{e.preventDefault();setSection(tag.section); router.push(tag.section)}} className="flex cursor-pointer fill-current items-center text-gray-300 mx-2 md:mx-0 my-4">
            <OpenTagIcon className="w-3 h-3 md:w-4 md:h-4"/>
                <p className={`text-md md:text-xl px-1 font-light ${section === tag.section ? 'transition duration-1000 ease-in-out text-red-400' : null}`}>{tag.title}</p>
            <EndTagIcon className="w-4 h-3 md:w-4 md:h-4"/>
        </button>
    )
}

export default LinkItem
