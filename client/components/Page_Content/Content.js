import React from 'react';
import statesList from './statesList';
import makesList from './makesList';

class Content extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

  render() {
  
  return(
    <div id="main-content">
      <div id="select-location">
        <h3 id="select-location-text">
          Please select your location
        </h3>
        <select name="state-location" id="state-location" className="browser-default">
          <option value="none">--Select your state--</option>
          {statesList}
        </select>
      </div>
      <div id="vehicle-information">
        <h3 id="vehicle-information-text">
          Vehicle Information:
        </h3>
        {console.log(makesList[0][0])}
        <select name="vehicle-make" id="vehicle-make" className="browser-default">
          {makesList}
        </select>
      </div>
    </div>
  )
  }
};

export default Content;