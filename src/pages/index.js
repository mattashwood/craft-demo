import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet
      bodyAttributes={{
        class: "home",
      }}
    ></Helmet>
    <Seo title="Home" />
    <div className="content container">
      <header
        className="page-intro"
        // data-sal="slide-up"
        // data-sal-delay="0"
        // data-sal-easing="ease"
      >
        <h1>Welcome back, Amanda 👋</h1>
      </header>

      <section
        className="events events-current"
        // data-sal="slide-up"
        // data-sal-delay="200"
        // data-sal-easing="ease"
      >
        <h3>Your events</h3>

        <ul className="active-events">
          <li className="event-vacation">
            <h2>Trip to Everest</h2>
            <div className="meta">
              <div className="date">05/30/2022</div>
            </div>
            <p>
              <small>Next up</small>
              Purchase life insurance
            </p>
          </li>

          <li className="event-school">
            <h2>Go to University</h2>
            <div className="meta date">09/05/2022</div>
            <p>
              <small>Next up</small>
              Apply for student loan
            </p>
          </li>
          <li className="spacer"></li>
        </ul>
      </section>

      <section
        className="events event-list"
        // data-sal="slide-up"
        // data-sal-delay="250"
        // data-sal-easing="ease"
      >
        <h3>Popular life events</h3>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-home"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Buying a home</h4>
              <p className="desc">
                Borrowing strategies, finding the right place for you, & what
                makes a successful closing.
              </p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-illness"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Illness and injury</h4>
              <p className="desc">
                Understand the logistics and the emotions from insurance, to
                bills, to budgets, & more.
              </p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-caring"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Caring for aging loved ones</h4>
              <p className="desc">
                How can we—and those we love—live safely and independently for
                as long as possible?
              </p>
            </div>
          </div>
        </div>

        <Link to="/all-events/" className="btn btn-secondary action-tap">
          View all events
        </Link>
      </section>
    </div>
  </Layout>
)

export default IndexPage
