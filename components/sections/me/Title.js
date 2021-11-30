import { useEffect, useState,useCallback } from 'react'

const Title = () => {

    const title = "JESUS ALI"
    let index = 0
    const [sentece, setSentence] = useState("")

    useEffect(() => {
        return () => {
            return(
                clearTimeout(),
                setSentence("")
            )
        }
    }, [])

    const typeWritten = useCallback(() => {
        if(index<title.split("").length){
            const arr = title.split("")
            setTimeout(() => { 
                setSentence(sentence => sentence+arr[index])
                index++
                typeWritten()
            },300)
        }
    },[index,title])
    
    useEffect(() => {
        typeWritten()
    },[typeWritten])

    return (
        <div className="fixed md:relative self-center md:w-2/6">
            <div className="flex items-center">
                <h1 className="text-5xl md:text-8xl whitespace-pre">{sentece}</h1>
                <p className="text-5xl md:text-8xl animate-fade">|</p>
            </div>
            <p className="text-3xl md:text-4xl text-red-400">Front End Developer</p>
        </div>
    )    
}

export default Title
