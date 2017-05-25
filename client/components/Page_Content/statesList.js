import React from 'react';
let statesList = ["Arizona", "Texas", "Colorado"];

statesList = statesList.map( (state) => {
        return(<option value={state}>{state}</option>)
    });
export default statesList;