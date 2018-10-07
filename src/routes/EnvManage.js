import React from 'react';
import { connect } from 'dva';

import {Breadcrumb, Icon,Table } from 'antd';
import Layout from '../layouts/Layout'


function EnvManage() {

  const columns = [{
  title: 'ID',
  dataIndex: 'id',
  width: 150,
}, {
  title: '创建时间',
  dataIndex: 'createDataStr',
  width: 150,
}, {
  title: '创建人',
  dataIndex: 'creator',
}, {
  title: '环境名称',
  dataIndex: 'name',
}, {
  title: '归属产品',
  dataIndex: 'products',
}, {
  title: '包含Ip',
  dataIndex: 'ips',
}, {
  title: '备注',
  dataIndex: 'description',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    id:i,
    createDataStr:'2018-10-07 12:00:00',
    creator:'tanrong',
    name : `env ${i}`,
    products:`product ${i}`,
    ips: '1234',
    description:'sssss',
  });
}

const content=(
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
  );

return (

  <Layout currentkey="envManage" content={content}/>
    
 
 );
}

EnvManage.propTypes = {
};

export default connect()(EnvManage);