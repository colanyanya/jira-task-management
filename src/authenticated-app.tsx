import React from "react";
import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { NoStyleItemContext } from "antd/lib/form/context";
import { Row } from "components/lib";
import { ReactComponent as SoftWareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <div>
      <PageHeader between={true}>
        <HeaderLeft gap={true}>
          <SoftWareLogo width={"18rem"} color={"rgb(38,132,255)"} />
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Button type={"link"} onClick={logout}>登出</Button>
              </Menu>
            }
          >
            <Button type={"link"} onClick={(e) => e.preventDefault()}>Hi, {user?.name}</Button>
          </Dropdown>
        </HeaderRight>
      </PageHeader>
      <Main>
        <ProjectListScreen />
      </Main>
    </div>
  );
};

const PageHeader = styled(Row)`
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
