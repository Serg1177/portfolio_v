import React from 'react';
import './callToAction.scss'
import {Button} from "../../commons/button/Button";

export const CallToAction = () => {
  return (
    <div className="call_to_action">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <span>READY TO DO THIS</span>
              <h2>Let's get to work</h2>
              <Button btnName={"Contact me"} btnClass={"call-to-action-btn"} url={"tel:+381629383472"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};