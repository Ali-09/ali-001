import { useContext } from 'react'
//icons
import OpenTagIcon from 'public/icons/o-tag.svg'
import EndTagIcon from 'public/icons/e-tag.svg'
//context
import Context from 'context/Context'
//next
import { useRouter } from 'next/router'

const LinkItem = ({tag}) => {
    const { setSection, section } = useContext(Context)
    const router = useRouter()

    return (
        <button onClick={(e)=>{e.preventDefault();setSection(tag.section); router.push(tag.section)}} className="flex hover:opacity-80 cursor-pointer fill-current items-center text-zinc-300 mx-2 md:mx-0 my-4">
            <OpenTagIcon className="w-3 h-3 md:w-6 md:h-6"/>
                <p className={`text-md md:text-2xl px-1 font-light ${section === tag.section ? 'transition duration-1000 ease-in-out text-red-400' : null}`}>{tag.title}</p>
            <EndTagIcon className="w-3 h-3 md:w-6 md:h-6"/>
        </button>
    )
}

export default LinkItem