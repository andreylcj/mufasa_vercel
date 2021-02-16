import React from 'react';
import styled from 'styled-components';

const InputFieldContainer = styled.div`

  input{

  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  padding: 18px 24px;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #C95206;
    outline: 0;
    box-shadow: 0;
  }
    
  }

  .border-sucessful{
  border-color: #C95206 !important;
  }

  label{
  width: 100%;
  position: relative;
  color: #8E8E8E;
  border-color: #8E8E8E;

  &:focus-within{
    .input-placeholder{
      font-size: 10px;
      top: 0;
      color: #C95206;
    }
  }

  .input-placeholder{
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    font-size: 15px;
    transition: all 0.15s;
    background-color: #fff;
    padding: 0 5px;

    &:hover{
      cursor: text;
    }
  }
  }

  .inserted-info{
  font-size: 10px !important;
  top: 0 !important;
  color: #C95206;
  }
`;

function InputField({
  submitMessage, userDataInfo, onChange, onBlur, value, initialMessage, type, autofocus, idAndName
}) {
  return (
    <InputFieldContainer className="mb-3">
      <label htmlFor={idAndName} className="form-label">
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autofocus}
          type={type}
          className={`${submitMessage ? 'border-danger' : ''}
            ${!submitMessage && userDataInfo ? ' border-sucessful' : ''}`}
          id={idAndName}
          name={type}
          onChange={onChange}
          value={value}
            // onFocus={() => console.log('onFocus')}
          onBlur={onBlur}
        />
        <InputPlaceHolder
          text={submitMessage || initialMessage}
          insertInfo={!!userDataInfo}
          wrongInfo={submitMessage}
        />
      </label>
    </InputFieldContainer>
  );
}

function InputPlaceHolder({ text, insertInfo, wrongInfo }) {
  return (
    <span className={`input-placeholder ${insertInfo ? 'inserted-info' : ''} ${wrongInfo ? 'text-danger' : ''}`}>
      {text}
    </span>
  );
}

export default InputField;
