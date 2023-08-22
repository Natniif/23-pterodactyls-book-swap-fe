import './bookreturn.css'

function BookReturnForm (){

    <form className='return-form'>
        <p className='heading'>want to return this book?</p>
        <div className='input'>
        <label className="label" htmlFor="user">Email</label>
        <input className='input' type="text" id="email" placeholder='Email'></input>
        </div>
        <input className="claim-button" type="submit" value="Return"></input>
    </form>


}

export default BookReturnForm