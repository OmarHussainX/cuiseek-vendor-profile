import React from 'react'
import { Layout, Typography } from 'antd'
import 'antd/dist/antd.css'
import VendorProfile from './VendorProfile/VendorProfile'

class App extends React.Component {

  render() {
    const { Content, Footer } = Layout
    const { Title } = Typography

    return (
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <Title level={4}>Profile</Title>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <VendorProfile />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>footer</Footer>
      </Layout>
    )
  }
}

export default App