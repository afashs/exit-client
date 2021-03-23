import React, { useState } from "react";
import styled from "styled-components";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: -200px;
  left: 0px;
  bottom: 0;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  outline: 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  height: 500px;
  width: 350px;
  max-width: 960px;
  top: 10%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 15px 20px;
  color: black;
  outline: none;
  form div button {
    display: flex;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 18px;
    &:hover {
      background-color: #ce7777;
      color: white;
      transition: 0.3s ease-in-out;
    }
    &:active {
      box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.3);
    }
  }
`;

const BackBtn = styled(FontAwesomeIcon)`
  width: 100px;
  font-size: 25px;
  height: 50px;
  cursor: pointer;
`;
const SignupBox = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    margin-top: 20px;
  }
  input {
    height: 50px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    font-size: 15px;
    padding-left: 10px;
  }
`;

const SignUpTitle = styled.h1`
  text-align: center;
  font-size: 35px;
  color: #ce7777;
  font-weight: 600;
`;

const ErrorMsg = styled.div`
  width: 100%;
  margin-top: 30px;
  font-size: 16px;
  color: red;
  text-align: center;
  div {
    width: 100%;
    height: 16px;
  }
`;

function SignUp({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const [validate, setValidate] = useState(true);

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const validateCheck = (e) => {
    e.preventDefault();

    if (e.target[1].value !== e.target[2].value) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          <BackBtn
            onClick={maskClosable ? onMaskClick : null}
            icon={faChevronLeft}
          />
          <SignUpTitle>Sign Up</SignUpTitle>
          <form onSubmit={validateCheck}>
            <SignupBox>
              <div>
                <span>Email</span>
                <input type="email" required placeholder="email"></input>
              </div>

              <div>
                <span>Password</span>
                <input type="password" required placeholder="password"></input>
              </div>

              <div>
                <span>Confirm Password</span>
                <input type="password" required placeholder="password"></input>
              </div>
            </SignupBox>
            {validate ? (
              <ErrorMsg>
                <div></div>
              </ErrorMsg>
            ) : (
              <ErrorMsg>
                <span>비밀번호가 맞지 않습니다</span>
              </ErrorMsg>
            )}
            <div>
              <button>Sign up and Login</button>
            </div>
          </form>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}
export default SignUp;