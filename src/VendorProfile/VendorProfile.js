import React from 'react'
import { BackTop, Button, Card, Tabs, message, Row, Col, Avatar, Typography, Descriptions } from 'antd'
import 'antd/dist/antd.css'
import './VendorProfile.css'
import { company, bookings, contact, address } from './data'  //using faker to generate vendor data!
import Map from './Map'

class VendorProfile extends React.Component {
  state = {
    date: null,
  }

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`)
    this.setState({ date })
  }

  editProfile = () => {
    message.info('Add modal to edit account')
  }

  render() {
    // ant.design components
    const { TabPane } = Tabs
    const { Title } = Typography

    // Used to highlight the contact if they own the business
    const ownerStatus = contact.isOwner ? <em>Business owner</em> : 'Name'

    // Getting latitude & longitude from faker
    const latitudeLongitude = {
      lat: parseFloat(address.lat), lng: parseFloat(address.lng)
    }

    return (
      <div>
        {/* 'back to top' control for when content exceeds viewport */}
        <BackTop />

        {/* --------------------------------------------------------------------- 
          === HEADER AREA ===

          - 1/4 width column containing:
            vendor pic/avatar

          - 1/2 width column containing:
            business name, no. of bookings, time saved

          - 1/4 width column containing:
            'Edit Profile' button
        */}
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
        <Tabs style={{ marginTop: 32 }}>
          {/* --------------------------------------------------------------------- 
            === 'Overview' TAB ===

            - full-width 'General information' card:
              (e-mail, website, phone)

            - 2/3 width column containing two cards:
              1. 'Contact information' card:
                  (Name/Bus. owner, title, e-mail, phone)
              2. 'Address' card:
                  (Street address, city, state, etc.)

            - 1/3 width column containing Google map
          */}
          <TabPane tab="Overview" key="1">
            <Card bordered={true} style={{}}>
              <Title level={4}>General information</Title>
              <Descriptions layout="vertical" size="small" colon={false}>
                <Descriptions.Item label={company.email.toLowerCase()}>E-mail</Descriptions.Item>
                <Descriptions.Item label={company.websiteUrl}>Website</Descriptions.Item>
                <Descriptions.Item label={company.phone}>Phone</Descriptions.Item>
              </Descriptions>
            </Card>
            <Row gutter={16}>
              <Col span={16}>
                <Card bordered={true} style={{ marginTop: 20 }} id="contact-card">
                  <Title level={4}>Contact information</Title>
                  <Descriptions layout="vertical" size="small" colon={false}>
                    <Descriptions.Item label={`${contact.firstName} ${contact.lastName}`}>{ownerStatus}</Descriptions.Item>
                    <Descriptions.Item label={contact.jobTitle}>Title</Descriptions.Item>
                    <Descriptions.Item label={contact.email}>E-mail</Descriptions.Item>
                    <Descriptions.Item label={contact.phone}>Phone</Descriptions.Item>
                  </Descriptions>
                </Card>
                <Card bordered={true} style={{ marginTop: 20 }} id="address-card">
                  <Title level={4}>Address</Title>
                  <Descriptions layout="vertical" size="small" colon={false}>
                    <Descriptions.Item label={`${address.streetSecondaryAddress}, ${address.streetAddress}`}>Address</Descriptions.Item>
                    <Descriptions.Item label={address.city}>City</Descriptions.Item>
                    <Descriptions.Item label={address.state}>State</Descriptions.Item>
                    <Descriptions.Item label={address.zipCode}>Postal code</Descriptions.Item>
                    <Descriptions.Item label={address.country}>Country</Descriptions.Item>
                  </Descriptions>
                </Card>
              </Col>
              <Col span={8}>
                <Card bordered={true} style={{ marginTop: 20 }}>
                  {/* Load <Map> component, providing it with props:
                      - 'id' of the <div> the Google map will be rendered in
                      - 'options' Object whose properties contain map settings
                      - 'onMapLoad()' function which the <Map> component will
                        execute *after* it has loaded the Google Maps API script,
                        *and* created a new map Object...
                  */}
                  <Map
                    id="myMap"
                    options={{
                      center: latitudeLongitude,
                      // https://developers.google.com/maps/documentation/javascript/tutorial#zoom-levels
                      zoom: 1,
                      disableDefaultUI: true,
                    }}
                    // this function will create a place marker on the map
                    onMapLoad={ newMap => {
                      new window.google.maps.Marker({
                        position: latitudeLongitude,
                        map: newMap,
                        animation: window.google.maps.Animation.DROP,
                        title: company.name
                      })
                    }}
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          {/* --------------------------------------------------------------------- 
            === 'Security' TAB ===
          */}
          <TabPane tab="Security" key="2">
            <div style={{ background: '#ECECEC', padding: '30px' }}>
              <Card title="Card one" bordered={false} style={{ width: 300 }}>
                <p>Card one content</p>
              </Card>
              <Card title="Card two" bordered={false} style={{ width: 300, marginTop: 20 }}>
                <p>Card two content</p>
              </Card>
            </div>
          </TabPane>
          {/* --------------------------------------------------------------------- 
            === 'Membership' TAB ===
          */}
          <TabPane tab="Membership" key="3">
            Membership tab content...
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default VendorProfile