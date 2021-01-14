import React from 'react'
import Button from 'elements/button'
import IconText from './IconText'

export default function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-4" style={{marginRight:15}}>
              <IconText />
              <p className="brand-tagline">
                We kaboom your beauty holiday instanly and memorable
              </p>
            </div>
            <div className="col-2 mr-5">
              <h6 className="mt-2">For Begginers</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button href="/register" type="link">
                    New Account
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button href="/properties" type="link">
                    Start Booking Room
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button href="/use-payments" type="link">
                    Use Payment
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-2 mr-5">
              <h6 className="mt-2">Explore Us</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button href="/career" type="link">
                    Our Career
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button href="/privacy" type="link">
                    Privacy
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button href="/terms" type="link">
                    Terms & condition
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h6 className="mt-2">Connect Us</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button
                    isExternal
                    href="mailto:support@staycation.id"
                    type="link"
                  >
                    Support@staycation.id
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button isExternal href="tel:+622122081196" type="link">
                    021 - 2208 -1196
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>Staycation, Kemang, Jakarta</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright 2021 • All rights reserved • Staycation
            </div>
          </div>
        </div>
      </footer>
    );
}
