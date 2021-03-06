import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, EditButton, GuestButton } from '../Button';

export const ModalContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  /* background: url('../../assets/LoginVector.png'); */
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 30rem;
  border-radius: 1rem;
  position: relative;
  > div.close-btn {
    position: absolute;
    top: 2px;
    right: 7px;
    cursor: pointer;
    color: black;
    font-size: 2rem;
  }
`;

export const SignButton = styled.button`
  width: 30%;
  margin: 5%;
  position: relative;
  /* border: none; */
  padding: 1% 5%;
  border-radius: 15px;
  font-family: sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  transition: 0.25s;
  cursor: pointer;
  z-index: 999;
`;

export const TextPoint = styled.span`
  color: blueviolet;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.span`
  display: flex;
  text-align: center;
  width: 35%;
`;

export const ButtonMargin = styled.span`
  margin-left: 10%;
`;

export const Title = styled.span`
  margin-bottom: 3%;
`;

const gusetMode = () => {
  localStorage.setItem('user', 'guest');
  window.location.replace('/test');
};

export default function SignsModal({ handleModal }) {
  const navigate = useNavigate();
  return (
    <ModalContainer>
      <ModalBackdrop onClick={handleModal}>
        <ModalView
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <>
            <div className='close-btn' onClick={() => navigate('/')}>
              &times;
            </div>
            <Title>
              <h3>??? ?????? ????????? ???????????????!</h3>
            </Title>
            <Title>
              <div>
                <h4>?????? ?????????!</h4>
              </div>
              <br />
              <TextPoint>???????????? ????????? ?????????</TextPoint>
              <div>?????? ?????? ???????????? 1??? ????????? ???????????????.</div>
            </Title>
            <GuestButton onClick={gusetMode}>????????? ?????? ??????</GuestButton>
            <br />
            <div>??????</div>
          </>
          <Container>
            <a href='/signup'>
              <Button>????????????</Button>
            </a>
            <ButtonMargin>
              <a href='/login'>
                <EditButton>?????????</EditButton>
              </a>
            </ButtonMargin>
          </Container>

        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}
