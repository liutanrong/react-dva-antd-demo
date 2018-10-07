import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

import Layout from '../layouts/Layout'


@connect(state => ({
  modle: state,
}))

export default class EnvModel extends Component {
  state = {}

 constructor(props) {
    super(props);
    // 把一级 Layout 的 children 作为菜单项
    const columns = [{
        title: 'ID',
        dataIndex: 'id',
        width: 150,
      }, {
        title: '创建时间',
        dataIndex: 'createDateStr',
        width: 150,
      }, {
        title: '创建人',
        dataIndex: 'creator',
      }, {
        title: '环境名称',
        dataIndex: 'name',
      }, {
        title: '归属产品',
        dataIndex: 'belongProducts',
      }, {
        title: '包含ip',
        dataIndex: 'ips',
      }, {
        title: '备注',
        dataIndex: 'description',
      }];


    this.state = {
        columns: columns
      };
    console.log("1")
    
}
  
  


  componentWillReceiveProps(newProps) {
       if (newProps.modle.envManageModle.envList!==this.state.envList) {
        this.setState(
          {envList:newProps.modle.envManageModle.envList}
          )
       }
       if (newProps.modle.envManageModle.totalNum!==this.state.totalNum) {
        this.setState(
          {totalNum:newProps.modle.envManageModle.totalNum}
          )
       }
  }
  

  getPage(){
    let t=this;
    return (  <Table columns={t.state.columns} dataSource={t.state.envList} rowKey='id' pagination={{ pageSize: 10,total:this.state.totalNum }} scroll={{ y: 240 }} />)
  }
  render() {

    return (
      <Layout currentkey="envModel" content={this.getPage()}/>
    );
  }
}
