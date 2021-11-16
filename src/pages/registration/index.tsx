import React, { useState } from 'react';

import InputBox from '../../components/TextBox';
import {PrimaryButton} from '../../components/Button';

const Registration = () => {
  return (
    <>
    <h3 className = "title">Registration</h3>
    <br/>
    <div>
      <InputBox placeholder = "Email"/>
      <InputBox placeholder = "Full Name"/>
      <InputBox placeholder = "Company Name"/>
      <InputBox placeholder = "Password" type ="password"/>
      <InputBox placeholder = "Confirm Password" type ="password"/>
      <PrimaryButton title = "Register"/>
      </div>
    </>
  );
};

export default Registration;