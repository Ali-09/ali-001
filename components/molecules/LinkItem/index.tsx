import { useContext } from 'react'
//icons
import OpenTagIcon from 'public/icons/o-tag.svg'
import EndTagIcon from 'public/icons/e-tag.svg'
//context
import Context from 'context/Context'
//next
import { useRouter } from 'next/router'

interface IProps {
    tag: {
        section: string;
        title: string;
    }
}

const LinkItem = ({ tag }: IProps) => {
    const context = useContext(Context);
  
    if (!context) {
      throw new Error("Container debe estar dentro del proveedor de contexto");
    }

    const { section, setSection } = context;
    const isActive = section === tag.section;
    const router = useRouter()
 
    return (
        <button 
          onClick={(e)=>{e.preventDefault();setSection(tag.section); router.push(tag.section)}} 
          className={`flex items-center hover:translate-x-1.5 transition-all duration-200 ease-out cursor-pointer mx-2 md:mx-0 my-4 ${
            isActive ? 'text-accent' : 'text-secondary hover:text-primary'
          }`}
        >
            <OpenTagIcon className="w-3.5 h-3.5 md:w-6 md:h-6 shrink-0 opacity-100"/>
            <p className={`text-md md:text-2xl px-1.5 font-medium ${
              isActive ? 'transition duration-300 ease-in-out text-accent' : ''
            }`}>{tag.title}</p>
            <EndTagIcon className="w-3.5 h-3.5 md:w-6 md:h-6 shrink-0 opacity-100"/>
        </button>
    )
}

export default LinkItem