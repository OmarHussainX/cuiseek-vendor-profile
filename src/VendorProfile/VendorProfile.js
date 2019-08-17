import React from 'react'
import { BackTop, Button, Card, Tabs, message, Row, Col, Avatar } from 'antd'
import 'antd/dist/antd.css'
import Surveys from './Surveys'
import {company} from './data'  //using faker to generate vendor data!


class VendorProfile extends React.Component {
  state = {
    date: null,
  }


  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`)
    this.setState({ date })
  }

  editProfile = () => {
    message.info('Add modal to edit account');
  }

  render() {
    const { TabPane } = Tabs

    console.log('company from data.js/faker', company)

    return (
      <div>
        <BackTop />
          <Row gutter={16} style={{ marginBottom: 20 }}>
            <Col span={18}>
            <Avatar size={128} src={company.profileImageUrl} />
            </Col>
            <Col span={6}><Button icon="edit" type="primary" onClick={this.editProfile}>Edit Profile</Button></Col>
          </Row>
        <Tabs>
          <TabPane tab="Membership" key="1">
            Content of Membership tab
          </TabPane>
          <TabPane tab="Security" key="2">
            Content of Security tab
          </TabPane>
          <TabPane tab="Bookings" key="3">
            Content of Bookings tab
          </TabPane>
        </Tabs>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title="Card one" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="Card two" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div>
          <Row gutter={16}>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </div>
        <Surveys />
      </div>
    )
  }
}

export default VendorProfile