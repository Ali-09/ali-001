import React from 'react'
import TitleGeneral from '@components/TitleGeneral.js'

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row md:content-center w-full h-full justify-center">
            <div className="text-left flex items-center md:w-2/5 w-full">
                <TitleGeneral text="CONTACT"/>
            </div>
            <div className="md:w-3/5 w-full md:self-center">
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
