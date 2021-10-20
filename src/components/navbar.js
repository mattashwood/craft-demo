import * as React from "react"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import { useEffect } from "react"
import Weather from "../images/animated/day.svg"

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="top-bar position-fixed row">
      <div className="col">
        <button className="action-btn action-weather has-label">
          <object type="image/svg+xml" data={Weather}>
            svg-animation
          </object>
          16º C
        </button>

        <button
          className="action-btn action-back no-label"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
      <div className="col text-end action-group">
        <button className="action-btn action-notifications no-label">
          Notifications
        </button>
        <button className="action-btn action-search no-label">Search</button>
        <button className="action-btn action-profile no-label">Profile</button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
