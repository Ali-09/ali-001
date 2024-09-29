import { TitleGeneral } from 'components';

const BodyContact = () => {
  return (
    <div className="contact">
        <div className="title-contact">
            <TitleGeneral text="CONTACT"/>
        </div>
        <div className="form-email">
            <form className="flex flex-col">
                <p className="text">Email:</p>
                <input type="text"></input>
                <button className="btn my-1" onClick={(e)=>e.preventDefault()}>SEND</button>
                <p className='text-info'>
                    The use of the information provided is only to send you a pdf document 
                    by email to the email address provided in this form
                </p>
            </form>
        </div>
    </div>
  )
}

export default BodyContact;