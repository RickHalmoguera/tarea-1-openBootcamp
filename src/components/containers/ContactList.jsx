import React from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from '../pure/ContactComponent';


const ContactList = () => {
    const newContact= new Contact("Ricardo","Halmoguera","halmoguerar@gmail.com",false)
    return (
        <div>
            <ContactComponent Contact = {newContact}/>
        </div>
    );
};




export default ContactList;
