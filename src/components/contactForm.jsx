function ContactForm(){
    return <>
        <div id="form">
            <form action="/">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <div id="emailTel">
            <input type="email" placeholder="email ID" />
            <input type="tel" placeholder="Phone Number" />
            </div>
            <div id="formsend">
            <textarea style={{resize:"none"}} placeholder="Message"></textarea>
            <button type="button">Send!<img src="./src/assets/sendIcon.png" alt="Send Icon" /></button>
            </div>
            </form>
        </div>
    </>
}

export default ContactForm;