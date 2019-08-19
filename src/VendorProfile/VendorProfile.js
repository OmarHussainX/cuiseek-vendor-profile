import React from 'react'
import { BackTop, Button, Card, Tabs, message, Row, Col, Avatar, Typography, Descriptions } from 'antd'
import 'antd/dist/antd.css'
import './VendorProfile.css'
import { company, bookings, contact, address } from './data'  //using faker to generate vendor data!


class VendorProfile extends React.Component {
  state = {
    date: null,
  }

  // COMMENTING THIS OUT UNTIL I FIGURE OUT HOW TO PROPERLY (asynchronously) LOAD THE MAP!!!

  componentDidMount() {
    // let latitude = parseFloat(this.props.location.state.selectedSpace.lat)
    // let longitude = parseFloat(this.props.location.state.selectedSpace.long)

    //hardcoding coordinates for Calgary Place for now (Suite 1800, 330 5 Ave.)
    let latitude = 51.0478868
    let longitude = -114.0682998

    if (isNaN(latitude) || isNaN(longitude)) {
      latitude = 37.4220041
      longitude = -122.0862462
    }

    let map = new window.google.maps.Map(document.getElementById('map-canvas'), {
      center: { lat: latitude, lng: longitude },
      zoom: 18,
    })

    let marker = new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      animation: window.google.maps.Animation.DROP,
      title: 'Placeholder Title',
    })

    marker.setMap(map) //is this needed? Seems OK even without it... :/
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
        {/* ------------------------------------------------------------------ */}
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
              <Row gutter={16}>
                <Col span={16}>
                  <Card bordered={true} style={{ marginTop: 20 }}>
                    <Title level={4}>Contact information</Title>
                    <Descriptions layout="vertical" size="small" colon={false}>
                      <Descriptions.Item label={`${contact.firstName} ${contact.lastName}`}>{ownerStatus}</Descriptions.Item>
                      <Descriptions.Item label={contact.jobTitle}>Title</Descriptions.Item>
                      <Descriptions.Item label={contact.email}>E-mail</Descriptions.Item>
                      <Descriptions.Item label={contact.phone}>Phone</Descriptions.Item>
                    </Descriptions>
                  </Card>
                  <Card bordered={true} style={{ marginTop: 20 }}>
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
                    {/* <Title level={4}>Map</Title> */}
                    <div id="map-canvas-container">
                      <div style={{ height: 250 }} id="map-canvas" />
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </TabPane>
          {/* ------------------------------------------------------------------ */}
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
          {/* ------------------------------------------------------------------ */}
          <TabPane tab="Membership" key="3">
            Content of Membership tab
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default VendorProfile