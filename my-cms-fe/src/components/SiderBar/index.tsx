import React, { FC, useState } from 'react'
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import { Layout,Menu } from 'antd';
const { Sider } = Layout;

export const SiderBar:FC = () => {
   const [collapsed, setcollapsed] = useState<boolean>(true)
    return (
        <div>
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        </Layout>
        </div>
    )
}