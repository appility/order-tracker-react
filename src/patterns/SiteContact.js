import React from 'react'

function SiteContact(props) {
    const { Email, FirstName, HomePhone, LastName, Title, WorkPhone } = props
    return (
      <span>
          { Title && <span>{Title} </span> }
          { FirstName && <span>{FirstName} </span> }
          { LastName && <span>{LastName}<br/></span> }
          { Email && <span>{Email}<br/></span> }
          { HomePhone && <span>{HomePhone}<br/></span> }
          { WorkPhone && <span>{WorkPhone}<br/></span> }
        </span>
    )
  }

export default SiteContact
