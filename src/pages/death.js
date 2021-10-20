import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AllEvents = () => (
  <Layout>
    <Seo title="Page two" />
    <div className="content container">
      <header className="event-intro event-death">
        <h1>Dealing with the death of a loved one.</h1>
        <p>
          We’re sorry for your loss and are here to help you plan ahead for the
          coming days, weeks, and beyond.
        </p>
        <div className="d-grid gap-4 d-flex">
          <button className="btn btn-primary action-tap">Track</button>
          <button className="action-btn action-add-later no-label">
            Add later
          </button>
        </div>
      </header>

      <div className="events event-list">
        <section className="step-group">
          <h3>What happens next?</h3>

          <Link to="/death-steps/" className="tile action-tap">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-checklist"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">Checklist: Steps after a death</h4>
                <p className="desc">
                  Wrapping up financial accounts and legal relationships may
                  take some time.
                </p>
              </div>
            </div>
          </Link>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-death"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">End of life and funeral planning</h4>
                <p className="desc">
                  Knowing what to expect can help as you make arrangements and
                  plan a memorial.
                </p>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-organize"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">Get organized after a death</h4>
                <p className="desc">
                  Take some time to gather these important documents and
                  records.
                </p>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-executor"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">
                  Role of executor and obtaining the death certificate
                </h4>
                <p className="desc">
                  Settling the estate is the job of the executor. The death
                  certificate is key to doing that.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="step-group">
          <h3>Legal proceedings and inheritances</h3>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-probate"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">Settling the estate: Probate</h4>
                <p className="desc">
                  Probate is a legal process for settling an estate. Find out
                  what you need to know.
                </p>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-assets"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">
                  What to do with a home, digital assets, or business after a
                  death
                </h4>
                <p className="desc">
                  Knowing what to expect can help as you make arrangements and
                  plan a memorial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="step-group">
          <h3>Financial matters</h3>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-checklist"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">Planning for an inheritance</h4>
                <p className="desc">
                  Wrapping up financial accounts and legal relationships may
                  take some time.
                </p>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-estate"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">Settling the estate: Taxes</h4>
                <p className="desc">
                  Federal estate taxes may not be a concern for most people, but
                  there are other tax issues to consider.
                </p>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-accounts"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">Accounts and insurance</h4>
                <p className="desc">
                  Beneficiaries may need to learn about inherited accounts in
                  order to make the most of them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="step-group">
          <h3>Grief and loss</h3>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-caring"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">Bereavement and grief</h4>
                <p className="desc">
                  Recovering from the loss of a loved one can be a long process
                  that never really ends.
                </p>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="row align-items-center">
              <div class="col-auto icon-wrapper align-items-center align-self-center">
                <div className="icon icon-health"></div>
              </div>

              <div className="tile-details col">
                <h4 className="title">Caring for yourself and your family</h4>
                <p className="desc">
                  Maintaining your health and wellbeing - and that of your
                  family - is a priority during the healing process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default AllEvents
