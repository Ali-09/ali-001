import React from 'react'
import Divider from '@components/Divider'

const Contact = () => {
    return (
        <div className="flex flex-row w-full md:w-3/6 h-full">
            <div className="self-center w-full">
                <div className="w-max">
                    <h1 className="title mb-2">CONTACT</h1>
                    <Divider/>
                </div>
                <form className="flex flex-col">
                    <p className="text">Name:</p>
                    <input defaultValue=""/>
                    <p className="text">Subject:</p>
                    <input defaultValue=""/>
                    <p className="text">Content:</p>
                    <input defaultValue=""/>
                </form>
            </div>
        </div>
    )
}

export default Contact
