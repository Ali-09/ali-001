import React from 'react'
import TitleGeneral from '@components/TitleGeneral.js'

const Contact = () => {
    return (
        <div className="contact">
            <div className="title-contact">
                <TitleGeneral text="CONTACT"/>
            </div>
            <div className="form-email">
                <form className="flex flex-col">
                    <p className="text">Email:</p>
                    <input type="text"></input>
                    <button className="btn my-1" onClick={(e)=>e.preventDefault()}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
