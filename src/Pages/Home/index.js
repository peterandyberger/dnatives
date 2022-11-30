import React from 'react';
import Calculator from '../../Components/Calculator';
import FORM from '../../Components/Form';
import RESULT from '../../Components/Result';
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
