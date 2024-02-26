import React from 'react';
import {
  SidebarMenu, SidebarMenuLink, SidebarSearch, SidebarSearchInput,
  SidebarSearchLabel, SidebarWrapper,
} from './styled';

const Sidebar = ({ handleInputChange }) => (
  <SidebarWrapper>
    <SidebarSearch>
      <SidebarSearchLabel>Search Quizz:</SidebarSearchLabel>
      <SidebarSearchInput type="text" onChange={handleInputChange} />
    </SidebarSearch>
    <SidebarMenu>
      <SidebarMenuLink to={'/quizzes'}>Home</SidebarMenuLink>
      <SidebarMenuLink to={'/quizzes/create'}>Create New Quiz</SidebarMenuLink>
      <SidebarMenuLink to={'/quizzes/favourite'}>Favourite Quizzes</SidebarMenuLink>
    </SidebarMenu>
  </SidebarWrapper>
);

export default Sidebar;
