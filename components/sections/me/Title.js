import { useEffect, useState, useCallback, useRef } from 'react'

const Title = () => {

    const title = "JESUS ALI"
    const index = useRef(0)
    const timeout = useRef(null)
    const [sentece, setSentence] = useState("")

    const typeWritten = useCallback(() => {
        if(index.current < title.split("").length){
            const arr = title.split("")
            timeout.current = setTimeout(() => {
                setSentence(sentence => sentence+arr[index.current])
                index.current++
                typeWritten()
            },400)
        }
        return () => {
            clearTimeout(timeout.current)   
        }
    },[index,title])
    
    useEffect(() => {
        typeWritten()
    },[typeWritten])

    return (
        <div className="title-me">
            <div className="flex items-center">
                <h1 className="text-5xl md:text-7xl whitespace-pre">{sentece}</h1>
                <p className="text-5xl md:text-7xl animate-fade">|</p>
            </div>
            <p className="text-3xl md:text-4xl text-red-400">Front End Developer</p>
        </div>
    )    
}

export default Title
