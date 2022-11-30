import React from 'react';
import CALCULATOR from '../../Components/Calculator';
import FORM from '../../Components/Form';
import HEADER from '../../Layouts/Header';

const HOME = (props) => {
  return (
    <>
      <div className="wrapper">
        <HEADER></HEADER>
        <FORM error={false}></FORM>
        <CALCULATOR />
      </div>
    </>
  );
};

export default HOME;
