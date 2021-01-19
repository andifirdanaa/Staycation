import React, { Component } from 'react'
import InputNumber from "elements/form/inputNumber";
import InputDate from "elements/form/inputDate";
import Breadcumb from "elements/breadcumb";
import Breadcrumb from 'elements/breadcumb';

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
           <Breadcumb data={breadcrumbList}/>
          </div>
        </div>
      </div>
    );
  }
}
