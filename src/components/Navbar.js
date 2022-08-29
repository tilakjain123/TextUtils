import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode==='light'? 'Dark' : 'light'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className={`nav-link text-${props.mode==='light'? 'Dark' : 'light'}`} aria-current="page" to="/">Home</Link>
        <Link className={`nav-link text-${props.mode==='light'? 'Dark' : 'light'}`} to="/about">About</Link>
      </div>
    <div className={`form-check d-flex form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div>
    </div>
  </div>
</nav>
  )
}
