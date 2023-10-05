import React from "react";
import Washing from "./wasing.jpg";
import Oil from "./oil change.jpg";
import Wheels from './wheels.jpg';

const Card = () => {
  return (
    <div className="d-flex justify-content-around mt-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={Washing} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Bike washing</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Booked
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={Oil} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Oil Change</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Booked
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={Wheels} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Wheels Repair</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Booked
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={Washing} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Bike washing</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Booked
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
