import React from 'react'
import { BackTop, Button, Card, Tabs, message, Row, Col, Avatar, Typography, Descriptions } from 'antd'
import 'antd/dist/antd.css'
import './VendorProfile.css'
import { company, bookings, contact, address } from './data'  //using faker to generate vendor data!


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
    const { Title } = Typography
    const ownerStatus = contact.isOwner ? <em>Business owner</em> : 'Name'

    console.log('company from data.js/faker', company)

    return (
      <div>
        <BackTop />
        {/* --------------------------------------------------------------------- */}
        <Row gutter={16}>
          <Col span={6}>
            <Avatar size={128} src={company.profileImageUrl} />
          </Col>
          <Col span={12}>
            <Title level={4}>{company.name}</Title>
            <Descriptions layout="vertical" size="small" colon={false}>
              <Descriptions.Item label={bookings.count.toLocaleString()}>No. of bookings</Descriptions.Item>
              <Descriptions.Item label={bookings.timeSaved.toLocaleString() + ' hours'}>Time saved</Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={6}>
            <Button
              icon="edit"
              type="primary"
              onClick={this.editProfile}
              style={{ float: "right" }}>
              Edit Profile
            </Button>
          </Col>
        </Row>
        {/* --------------------------------------------------------------------- */}
        <Tabs style={{ marginTop: 32 }}>
          <TabPane tab="Overview" key="1">
            <div>
              <Card bordered={true} style={{}}>
                <Title level={4}>General information</Title>
                <Descriptions layout="vertical" size="small" colon={false}>
                  <Descriptions.Item label={company.email.toLowerCase()}>E-mail</Descriptions.Item>
                  <Descriptions.Item label={company.websiteUrl}>Website</Descriptions.Item>
                  <Descriptions.Item label={company.phone}>Phone</Descriptions.Item>
                </Descriptions>
              </Card>
              <Card bordered={true} style={{ marginTop: 20}}>
                <Title level={4}>Contact information</Title>
                <Descriptions layout="vertical" size="small" colon={false}>
                  <Descriptions.Item label={`${contact.firstName} ${contact.lastName}`}>{ownerStatus}</Descriptions.Item>
                  <Descriptions.Item label={contact.jobTitle}>Title</Descriptions.Item>
                  <Descriptions.Item label={contact.email}>E-mail</Descriptions.Item>
                  <Descriptions.Item label={contact.phone}>Phone</Descriptions.Item>
                </Descriptions>
              </Card>
              <Card bordered={true} style={{ marginTop: 20}}>
                <Title level={4}>Address</Title>
                <Descriptions layout="vertical" size="small" colon={false}>
                  <Descriptions.Item label={`${address.streetSecondaryAddress}, ${address.streetAddress}`}>Address</Descriptions.Item>
                  <Descriptions.Item label={address.city}>City</Descriptions.Item>
                  <Descriptions.Item label={address.state}>State</Descriptions.Item>
                  <Descriptions.Item label={address.zipCode}>Postal code</Descriptions.Item>
                  <Descriptions.Item label={address.country}>Country</Descriptions.Item>
                </Descriptions>
              </Card>
            </div>
          </TabPane>
          <TabPane tab="Security" key="2">
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
          </TabPane>
          <TabPane tab="Membership" key="3">
            Content of Membership tab
          </TabPane>
        </Tabs>
        {/* --------------------------------------------------------------------- */}
        {/* <div>
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
        </div> */}
      </div>
    )
  }
}

export default VendorProfile