import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #1d3557;
  color: #fff;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>© 2024 LMS Project</p>
    </FooterWrapper>
  );
}
