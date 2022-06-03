import { Table } from "antd";
import dayjs from "dayjs";
import React from "react";
import { Project, User } from "./inter";


interface ListProps {
  list: Project[];
  users: User[];
  children: React.ReactNode;
}

export const List = ({ list, users, children }: ListProps) => {
  return (
    <Table
      pagination={false}
      rowKey={project=>project.id}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter:(a,b)=>a.name.localeCompare(b.name)
        },{
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },{
          title: "创建时间",
          render(value,project){
            return(
              <span>
                {project.created?dayjs(project.created).format('YYYY-MM-DD'):'无'}
              </span>
            )
          }
        },
      ]}
      dataSource={list}
    />
  );
};