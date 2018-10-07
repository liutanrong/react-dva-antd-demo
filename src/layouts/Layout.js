import React from 'react';
import PropTypes from 'react';
import { connect } from 'dva';

import { Layout, Menu } from 'antd';
import { Link } from 'dva/router';


const { Header, Content, Sider } = Layout;


function AppLayout({
  content, currentkey, 
}) 
{

  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <h1 style={{color:'#ffffff'}}>Mock</h1>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[currentkey]}
          style={{ height: '100%', borderRight: 0 }}
        >
         <Menu.Item key="1">Mock列表</Menu.Item>
         <Menu.Item key="2">
          <Link to="/123">调用记录</Link>
         </Menu.Item>
         <Menu.Item key="envManage">
         <Link to="/envManage">环境管理</Link></Menu.Item>
         <Menu.Item key="systemManage">
          <Link to="/systemManage">系统管理</Link>
         </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
        {content}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}


AppLayout.propTypes = {
  content: PropTypes.object,
  currentkey: PropTypes.string
};

export default connect()(AppLayout);
