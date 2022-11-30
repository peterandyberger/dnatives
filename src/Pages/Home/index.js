import React from 'react';
import FORM from '../../Components/Form';
import HEADER from '../../Layouts/Header';

const HOME = (props) => {
  return (
    <>
      <div className="wrapper">
        <HEADER></HEADER>
        <FORM error={false}></FORM>
      </div>
    </>
  );
};

export default HOME;
