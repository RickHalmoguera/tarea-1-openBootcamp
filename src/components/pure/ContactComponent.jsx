import React from 'react'
import PropTypes from 'prop-types'
import {Contact} from "../models/contact.class"


function ContactComponent({Contact}) {

  return (
    <div>
        <h1>Nombre: {Contact.name} </h1>
        <h2>Apellido: {Contact.lastname}</h2>
        <h3>Email: {Contact.email}</h3>
        <h4>Online: {Contact.online? "Contacto En Linea": "Contacto No Disponible"}</h4>
    </div>
  )
}

ContactComponent.propTypes = {
  Contact: PropTypes.instanceOf(Contact)
}


export default ContactComponent
