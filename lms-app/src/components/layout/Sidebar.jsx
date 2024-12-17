import Link from 'next/link';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #457b9d;
  height: 100vh;
  position: fixed;
`;

const SidebarItem = styled.a`
  padding: 20px;
  display: block;
  color: #fff;
  text-decoration: none;
  &:hover {
    background-color: #1d3557;
  }
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Link href="/dashboard"><SidebarItem>Dashboard</SidebarItem></Link>
      <Link href="/courses"><SidebarItem>Courses</SidebarItem></Link>
      <Link href="/user"><SidebarItem>Profile</SidebarItem></Link>
    </SidebarWrapper>
  );
}
