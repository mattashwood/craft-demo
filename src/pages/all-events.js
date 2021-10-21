import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AllEvents = () => (
  <Layout>
    <Seo title="Page two" />
    <div className="content container">
      <header className="page-intro">
        <h1>All life events</h1>
      </header>

      <section className="events event-list all-events">
        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-ailing"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Ailing parent</h4>
              <p className="desc">Section description goes here</p>
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
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <Link to="/death/" className="tile action-tap">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-death"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Death of a loved one</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </Link>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-disability"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Disability</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-home"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Buying a home</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-divorce"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Divorce</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-empty-nest"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Empty nest</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-market"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Family cottage issues</h4>
              <p className="desc">Section description goes here</p>
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
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-expert"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Leaving a job</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-newcomers"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Newcomers</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-products"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Owning and managing a small business</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-parenthood"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Parenthood</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-retiring"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Retiring</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-selling"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">
                Selling or transferring a small business
              </h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>

        <div className="tile">
          <div className="row align-items-center">
            <div class="col-auto icon-wrapper align-items-center align-self-center">
              <div className="icon icon-starting-out"></div>
            </div>

            <div className="tile-details col">
              <h4 className="title">Starting out</h4>
              <p className="desc">Section description goes here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default AllEvents
