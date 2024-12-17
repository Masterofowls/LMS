import Link from 'next/link';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1d3557;
  color: #fff;
`;

const NavLinks = styled.nav`
  a {
    margin-right: 20px;
    color: #fff;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>LMS</h1>
      <NavLinks>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/user">Profile</Link>
      </NavLinks>
      <FaBell size={24} />
    </HeaderWrapper>
  );
}
