import React from "react";
import styled from "styled-components";
import picture from "../../../images/picture.png";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MybidBox = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DetailBodyBox = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
  width: 100%;
  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin-right: 20px;
    margin-bottom: 15px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const ActiveBid = () => {
  return (
    <>
      <MybidBox>
        <DetailBodyBox>
          <div>
            <img src={picture} alt="" />
            <TextBox>
              <span>Beeple's CROSSROAD #1/3</span>
              <span>Recent bid : KRW 33,965,000,000</span>
              <span>02 : 59 : 39</span>
            </TextBox>
          </div>

          <IconBox>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSignOutAlt} rotation={270} />
          </IconBox>
        </DetailBodyBox>
        <DetailBodyBox>
          <div>
            <img src={picture} alt="" />
            <TextBox>
              <span>Beeple's CROSSROAD #1/3</span>
              <span>Recent bid : KRW 33,965,000,000</span>
              <span>02 : 59 : 39</span>
            </TextBox>
          </div>

          <IconBox>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSignOutAlt} rotation={270} />
          </IconBox>
        </DetailBodyBox>
        <DetailBodyBox>
          <div>
            <img src={picture} alt="" />
            <TextBox>
              <span>Beeple's CROSSROAD #1/3</span>
              <span>Recent bid : KRW 33,965,000,000</span>
              <span>02 : 59 : 39</span>
            </TextBox>
          </div>

          <IconBox>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSignOutAlt} rotation={270} />
          </IconBox>
        </DetailBodyBox>
      </MybidBox>
    </>
  );
};

export default ActiveBid;
