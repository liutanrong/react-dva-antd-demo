import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

import Layout from '../layouts/Layout'

const columns = [{
        title: 'ID',
        dataIndex: 'id',
          sorter: true,

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

@connect(state => ({
  modle: state,
}))
export default class EnvModel extends Component {
  

 constructor(props) {
    super(props);
    // 把一级 Layout 的 children 作为菜单项
    this.state={
      loading:false,
      pagination:{pageSize:10,current:1,total:0},
      envList:[],
      totalNum:0
    };
    
}
  
  


  componentWillReceiveProps(newProps) {
       if (newProps.modle.envManageModle.envList!==this.state.envList) {
        this.setState(
          {envList:newProps.modle.envManageModle.envList}
          )
       }
       if (newProps.modle.envManageModle.totalNum!==this.state.pagination.total) {
        const pagination = { ...this.state.pagination };
        pagination.total = newProps.modle.envManageModle.totalNum;
          this.setState(
            {pagination:pagination}
            )
       }
       if (newProps.modle.envManageModle.currentPage!==this.state.pagination.current) {
        const pagination = { ...this.state.pagination };
        pagination.current = newProps.modle.envManageModle.currentPage;
          this.setState(
            {pagination:pagination}
            )
       }
  }
  handleTableChange = (pagination, filters, sorter) =>{
      debugger
    
    let data={
      pageSize: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    }
    this.props.dispatch({ type: 'envManageModle/getEnvList', payload: data })
  }

  getPage(){
    let t=this;
    return (  <Table columns={columns} dataSource={t.state.envList} rowKey='id' 
      
        loading={this.state.loading}
        onChange={this.handleTableChange.bind(t)}
        pagination={this.state.pagination} />)
  }
  render() {

    return (
      <Layout currentkey="envModel" content={this.getPage()}/>
    );
  }
}
