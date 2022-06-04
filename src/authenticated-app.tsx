import React from "react";
import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { NoStyleItemContext } from "antd/lib/form/context";
import { Row } from "components/lib";
import { ReactComponent as SoftWareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "screens/project";
import { resetRoute } from "utils";

export const AuthenticatedApp = () => {
  return (
    <div>
      <PageHeader />
      <Main>
        <Router>
          <Routes>
            <Route path={"/projects"} element={<ProjectListScreen />} />
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            />
            <Route path={"*"} element={<Navigate to={"/projects"} replace={true}/>} />
          </Routes>
        </Router>
      </Main>
    </div>
  );
};

const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button type={'link'} onClick={()=> resetRoute()}>
        <SoftWareLogo width={"18rem"} color={"rgb(38,132,255)"} />
        </Button>

        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Button type={"link"} onClick={logout}>
                登出
              </Button>
            </Menu>
          }
        >
          <Button type={"link"} onClick={(e) => e.preventDefault()}>
            Hi, {user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const Header = styled(Row)`
  height: 6rem;
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderItem = styled.h3`
  margin-right: 3rem;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main`
  height: calc(100vh - 6rem);
`;
