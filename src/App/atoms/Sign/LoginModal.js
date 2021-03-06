import React, { useState } from "react";
import styled from "styled-components";
import gmailImg from "../../../images/gmail.png";
import SignUp from "../SignUp/SignUp";
import { useDispatch } from "react-redux";
import { fetchUser, signin, oAuthGoogleLogin } from "../../../reducers/user";
import { GoogleLogin } from "react-google-login";

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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ModalBtn = styled.button`
  background-color: #ce7777;
  color: white;
  border: none;
  margin: 0px 3px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
  /* &:hover {
    background-color: #ce7777;
    color: white;
    transition: background-color 0.3s ease-in-out;
  } */
  &:active {
    transform: translate3d(2px, 2px, 0px);
  }
`;
const ModalBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid rgba(20, 20, 20, 0.3);
`;

const LogInInfo = styled.div`
  font-size: 1rem;
  span {
    opacity: 0.5;
  }
`;

const ForgotPasswordBox = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const GoogleLogInBtnBox = styled.div`
  border-top: 1px solid rgba(20, 20, 20, 0.2);
  border-bottom: 1px solid rgba(20, 20, 20, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;
  padding: 15px 0px;
  width: 100%;
`;

const SignUpTextBtn = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  text-decoration: underline;
`;

const GmailImg = styled.img`
  width: 70%;
  height: 70%;
`;
const LogoBox = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AllLogoBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const OrStlye = styled.span`
  font-size: 1rem;
  position: absolute;
  bottom: 303px;
  width: 40px;
  text-align: center;
  background-color: rgba(255, 255, 255, 1);
`;

// const CloseBtn = styled.button``;

const GoogleStyle = styled(GoogleLogin)`
  outline: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    transform: translate3d(2px, 2px, 0px);
  }
`;

const ValidateStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-bottom: 5px;
  opacity: 1;
  color: red;
`;
function LoginModal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  // todo: ??????,exitgift?????? ????????????
  // todo: axios email, password post??????
  // todo: OAuth ?????? ???????????????
  // todo: sign up ????????? ????????????????????? ??????
  const [signUpModal, SetSignUpModal] = useState(false);
  const [isValidate, setIsValidate] = useState(true);

  const handleSignOn = (e) => {
    SetSignUpModal(true);
  };
  const handleSignOff = (e) => {
    onClose(e);
  };

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: "",
  });

  const { user_email, user_password } = inputs;

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const responseGoogle = (response) => {
    dispatch(oAuthGoogleLogin(response.tokenObj.id_token));
    dispatch(signin());
    onClose(response);
  };
  const validateCheck = (e) => {
    if (user_email && user_password) {
      setIsValidate(false);
    }
  };
  // todo:??????????????? ??????????????? ????????????????????? ?????? Invailid account????????? ?????? css???????????????

  return (
    <>
      {!signUpModal ? (
        <>
          <ModalOverlay visible={visible} />
          <ModalWrapper
            onClick={maskClosable ? onMaskClick : null}
            className={className}
            tabIndex="-1"
            visible={visible}
          >
            <ModalInner tabIndex="0" className="modal-inner">
              <AllLogoBox>
                {/* <LogoBox>
              <GmailImg src={gmailImg} alt="gmail" />
            </LogoBox> */}
                <LogoBox>
                  <GmailImg src={gmailImg} alt="gmail" />
                </LogoBox>
              </AllLogoBox>
              <GoogleLogInBtnBox>
                <GoogleStyle
                  clientId="724060049648-nnacpoao7gftdukk1gurp600rfgme79k.apps.googleusercontent.com"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </GoogleLogInBtnBox>
              <OrStlye>Or</OrStlye>
              <LogInInfo>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div>
                    <span>Email</span>
                    <ModalInput
                      required
                      type="email"
                      name="user_email"
                      onChange={(e) => {
                        inputHandler(e);
                      }}
                    />
                    <span>Password</span>
                    <ModalInput
                      required
                      type="password"
                      name="user_password"
                      onChange={(e) => {
                        inputHandler(e);
                      }}
                    />
                  </div>
                  <ValidateStyle>
                    {isValidate ? (
                      <>
                        <span></span>
                      </>
                    ) : (
                      <>
                        <span>Invalid Email or Password</span>
                      </>
                    )}
                  </ValidateStyle>
                  <ModalBtnBox>
                    <ModalBtn
                      onClick={async (e) => {
                        const login = await dispatch(
                          fetchUser({ user_password, user_email })
                        );
                        if (!login) {
                          return;
                        }
                        if (login.type === "user/fetchUser/rejected") {
                          validateCheck();
                          return;
                        }
                        dispatch(signin());
                        onClose(e);
                        return;
                      }}
                    >
                      Login
                    </ModalBtn>
                  </ModalBtnBox>
                  {/* todo: ???????????? ???????????? ??????????????? Login */}
                </form>

                <ForgotPasswordBox>
                  <SignUpTextBtn onClick={handleSignOn}> Sign up</SignUpTextBtn>
                </ForgotPasswordBox>
              </LogInInfo>
              {/* 
              {closable && (
                <CloseBtn className="modal-close" onClick={close}>
                  ??????
                </CloseBtn>
              )} */}
              {children}
            </ModalInner>
          </ModalWrapper>
        </>
      ) : (
        <>
          <SignUp
            visible={signUpModal}
            closable={true}
            maskClosable={true}
            onClose={handleSignOff}
          />
        </>
      )}
    </>
  );
}

export default LoginModal;
