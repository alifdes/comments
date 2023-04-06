import styled from "styled-components";

export const Comments = styled.ul`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  background: #ffffff;
  min-height: 130px;
  border-radius: 8px;
  max-width: 100%;
  flex-direction: column-reverse;
  padding: 20px;
  position: relative;
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    padding: 10px;
  }
`;

export const ReplayButton = styled.button`
  background: #5358b6;
  margin: 12px;
  border-radius: 8px;
  height: 30px;
  width: 80px;
  border: none;
  color: #fafdff;
  &:hover {
    background: #9699d6;
  }
  @media only screen and (max-width: 1000px) {
    position: absolute;
    right: 0px;
  }
`;

export const CommentInput = styled.textarea`
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  height: 100px;
  margin: 12px 0px;
  border-radius: 8px;
`;
