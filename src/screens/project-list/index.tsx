import React from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useState,useEffect} from "react";
import {cleanObject, useDebounce} from "../../utils";
import {useHttp} from "../../utils/http";
import styled from "@emotion/styled";


export const ProjectListScreen = () => {
  //
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const debouncedParam = useDebounce(param,200)
  //
  const [list,setList] = useState([])
  const [users,setUsers] = useState([])
  //
  const client = useHttp()


  useEffect(()=>{
    client('projects',{data:cleanObject(debouncedParam)}).then(setList)
  },[debouncedParam])

  useEffect(()=>{
    client('users').then(setUsers)
  },[])

  return (
    <Container>
      <h2>项目列表</h2>
      <SearchPanel param={param} setParam={setParam} users={users}/>
      <List list={list} users={users}><h1>111</h1></List>
    </Container>
  )
}

const Container = styled.div`
  padding: 3.2rem;
`
