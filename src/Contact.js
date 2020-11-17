import React from 'react';

function Contact(props){
    var nm=props.name.toUpperCase()
    return(
        
        <div>
            
            <h1> {nm} Contact Page</h1>
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