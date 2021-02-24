import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputContain = styled.div`
position: relative;
width: 100%;
z-index: 1;
margin-bottom: 20px;

div.alert-validate{

  @media (max-width: 992px){
    &:before {
      visibility: visible !important;
      opacity: 1 !important;
    }
  }

  &:hover{
    input, textarea{
      border: 2px solid #c80000 !important;
    }
  }

  &:hover:before {
    visibility: visible;
    opacity: 1;
  }

  &:before{
    content: attr(data-validate);
    position: absolute;
    max-width: 70%;
    background-color: white;
    border: 1px solid #c80000;
    border-radius: 13px;
    padding: 4px 25px 4px 10px;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    pointer-events: none;
    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:after{
    content: "\f06a";
    font-family: 'Font Awesome 5 Free';
    display: block;
    position: absolute;
    color: #c80000;
    font-size: 15px;
    top: 50%;
    transform: translateY(-50%);
    right: 13px;
    font-weight: 600;
  }
}

textarea.beautyInput{
  min-height: 150px;
  border-radius: 32px;
  padding: 12px 30px;
}

.beautyInput{
  display: block;
  width: 100%;
  background: #e6e6e6;
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px;
  outline: none;
  border: none;
  font-weight: 700;
  transition: all 0.2s;
  border: 2px solid #e6e6e6;

  &:hover {
    border: 2px solid #ec8d50;
  }
  &:focus{
    box-shadow: 0 0 4px 2px rgb(236 141 80 / 80%);
    border: 2px solid #ec8d50 !important;
  }
  
}
`;

function InputContainer({
  inputType, inputName, inputPlaceholder, userData, setUserData, dataValidate, valid, sendClick,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (sendClick > 0) {
      setFocus(false);
    }
  }, [sendClick]);

  const [focus, setFocus] = useState(true);
  return (
    <InputContain>
      <div
        data-validate={dataValidate}
        className={!valid && !focus ? 'alert-validate' : ''}
      >
        {
        inputType
          ? (
            <input
              className="beautyInput"
              type={inputType}
              name={inputName}
              placeholder={inputPlaceholder}
              onChange={handleInputChange}
              onFocus={() => setFocus(true)}
            />
          ) : (
            <textarea
              className="beautyInput"
              name={inputName}
              placeholder={inputPlaceholder}
              style={{ marginTop: '0px', marginBottom: '0px', height: '150px' }}
              onChange={handleInputChange}
              onFocus={() => setFocus(true)}
            />
          )
      }
      </div>
    </InputContain>
  );
}

export default InputContainer;
