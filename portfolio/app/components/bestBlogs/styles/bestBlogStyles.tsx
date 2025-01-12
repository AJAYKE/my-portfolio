import styled from "@emotion/styled";
export const BestBlogStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* #best-blog-title {
    color: blue;
  } */
  .favourite-blogs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: blue;

    .fav-blog:hover {
      text-decoration: underline;
    }
  }
`;
