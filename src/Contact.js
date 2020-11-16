import React from 'react';

function Contact(){
    return(
        <div>
            <label>Email ID</label>
            <input type="text"/>
            <br/>
            <label>Massage</label>
            <textarea>
                Hai, How are you?
            </textarea>
            <br/>
            <button>Send</button>

        </div>
    )
}

export default Contact;