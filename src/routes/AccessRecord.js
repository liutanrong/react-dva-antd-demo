import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

import Layout from '../layouts/Layout'

const columns = [{
        title: 'ID',
        dataIndex: 'id',
        align: 'center',
        sorter: true,
        width: '5%',
      }, {
        title: '调用时间',
        dataIndex: 'createDateStr',
        align: 'center',
        width: '15%',
      }, {
        title: '调用IP',
        dataIndex: 'remoteIp',
        align: 'center',
        width: '10%',
      }, {
        title: '所处环境',
        dataIndex: 'cluster',
        align: 'center',
        width: '10%',
      }, {
        title: '命中系统',
        dataIndex: 'system',
        align: 'center',
        width: '10%',
      }, {
        title: '调用标识',
        dataIndex: 'identify',
        align: 'center',
        width: '10%',
      }, {
        title: '是否mock',
        dataIndex: 'mockId',
        align: 'center',
        width: '10%',
        render:mockId => {{mockId===null}},
      }, {
        title: 'MockId',
        dataIndex: 'mockId',
        align: 'center',
        width: '10%',
      }, {
        title: '请求信息',
        dataIndex: 'request',
        align: 'center',
        width: '10%',
      }, {
        title: '响应信息',
        dataIndex: 'response',
        align: 'center',
        width: '10%',
      }];

@connect(state => ({
  modle: state,
}))
export default class SystemManage extends Component {
  

 constructor(props) {
    super(props);
    // 把一级 Layout 的 children 作为菜单项
    this.state={
      loading:false,
      pagination:{pageSize:10,current:1,total:0},
      accessList:[],
      totalNum:0
    };
    
}
  
  


  componentWillReceiveProps(newProps) {
       if (newProps.modle.accessRecordModle.accessList!==this.state.envList) {
        this.setState(
          {accessList:newProps.modle.accessRecordModle.accessList}
          )
       }
       if (newProps.modle.accessRecordModle.totalNum!==this.state.pagination.total) {
        const pagination = { ...this.state.pagination };
        pagination.total = newProps.modle.accessRecordModle.totalNum;
          this.setState(
            {pagination:pagination}
            )
       }
       if (newProps.modle.accessRecordModle.currentPage!==this.state.pagination.current) {
        const pagination = { ...this.state.pagination };
        pagination.current = newProps.modle.accessRecordModle.currentPage;
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
    this.props.dispatch({ type: 'accessRecordModle/getAccessList', payload: data })
  }

  getPage(){
    let t=this;
    return (  <Table columns={columns} dataSource={t.state.accessList} rowKey='id' 
      
        loading={this.state.loading}
        onChange={this.handleTableChange.bind(t)}
        pagination={this.state.pagination} />)
  }
  render() {

    return (
      <Layout currentkey="accessRecord" content={this.getPage()}/>
    );
  }
}
