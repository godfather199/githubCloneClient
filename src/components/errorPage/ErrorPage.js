import React from 'react'
import { Link } from 'react-router-dom'
import './errorPage.css'

function ErrorPage() {


  return (
    <div className="errorContainer">
      <div className="errorWrapper">
        <span className="errorTitle" onClick = {() => window.location.reload()}>Github Clone</span>
        <span className="errorMessage">Please Enter A valid username</span>
      </div>
    </div>
  )
}

export default ErrorPage