import styled from "styled-components";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 3rem 0;
  text-align: left;
`;

export const Language = styled("h3")`
  font-size: 28px;
  text-transform: capitalize;
  color: #18216d;
  font-weight: bold;
  margin-bottom: 12px;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    font-size: 24px;
  }
`;

export const Para = styled("p")`
  color: #18216d;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  margin: 5px 0;
  line-height: 1.5;
`;

export const ContactLink = styled("a")`
  color: #15418e;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(255, 130, 92);
    text-decoration: underline;
  }
`;
