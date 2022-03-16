import React from 'react'

import possibilityImage from "../../assets/possibility.png"
import './possibility.css'

const Possibility = () => {
    return (
      <div className="gpt3_possibility section_padding" id="possibility">
        <div className="gpt3_possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3_possibility-content">
          <h4>Request Early Access to Get started</h4>
          <h1 className="gradient_text">
            The Possibilities are beyond your imagination
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo in
            debitis voluptatum non temporibus accusamus necessitatibus quasi
            tenetur laborum quam quas, aliquam vel.
          </p>
          <h4>Request Early Access To Get Started</h4>
        </div>
      </div>
    );
}

export default Possibility
