import React from 'react'
import { BackTop, Button, Card, DatePicker, Tabs, message } from 'antd'
import 'antd/dist/antd.css'
import Surveys from './Surveys'

// BackTop not working... why?

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
    const { date } = this.state
    const { TabPane } = Tabs
    const operations = <Button icon="edit" type="primary" onClick={this.editProfile}>Edit Profile</Button>

    return (
      <div>
        <BackTop />
        {/* <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div> */}
        <Tabs tabBarExtraContent={operations}>
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
        <Surveys />
      </div>
    )
  }
}

export default VendorProfile