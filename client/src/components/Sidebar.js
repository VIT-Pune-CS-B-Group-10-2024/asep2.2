import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FiHome,
  FiTrendingUp,
  FiBarChart2,
  FiDollarSign,
  FiSettings
} from 'react-icons/fi';

const SidebarContainer = styled.div`
  background: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.sidebarText};
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ sidebarOpen }) => (sidebarOpen ? '0' : '-250px')};
  transition: left 0.3s ease;
  z-index: 100;
  padding-top: 70px;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: 0.75rem 1.5rem;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.sidebarText};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <SidebarContainer sidebarOpen={sidebarOpen}>
      <SidebarMenu>
        <MenuItem>
          <MenuLink to="/" onClick={() => setSidebarOpen(false)}>
            <FiHome /> Dashboard
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/competitors" onClick={() => setSidebarOpen(false)}>
            <FiDollarSign /> Competitor Analysis
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/forecasting" onClick={() => setSidebarOpen(false)}>
            <FiTrendingUp /> Market Forecasting
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/simulation" onClick={() => setSidebarOpen(false)}>
            <FiBarChart2 /> Simulation
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/settings" onClick={() => setSidebarOpen(false)}>
            <FiSettings /> Settings
          </MenuLink>
        </MenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
}

export default Sidebar;