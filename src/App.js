import React from 'react'
import { Button, Card, DatePicker, Tabs, message } from 'antd'
import 'antd/dist/antd.css'

const { TabPane } = Tabs
const operations = <Button>Edit Profile</Button>

class App extends React.Component {
  state = {
    date: null,
  }

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`)
    this.setState({ date })
  }

  render() {
    const { date } = this.state
    return (
      <div style={{ width: '80%', margin: '100px auto' }}>
        <DatePicker onChange={this.handleChange} />
        <div style={{ marginTop: 20 }}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div>
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
            <p>Card content</p>
          </Card>
          <Card title="Card two" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
    )
  }
}

export default App