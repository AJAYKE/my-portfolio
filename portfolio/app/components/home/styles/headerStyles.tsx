import styled from "@emotion/styled";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  height: 45px;
  border-bottom: 1px solid black;

  #my-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  #my-blog:hover {
    cursor: pointer;
  }
`;
