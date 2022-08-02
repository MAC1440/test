import React from 'react';
import { Col, Row } from 'antd';
import Navbar from './components/navbar/navbar';
import SideNav from './components/side-nav/side-nav';
import './App.scss';
import 'antd/dist/antd.less';
import 'antd/dist/antd.css';
import NewStoryCard from './components/card/new-story-card';
import CardsGroup from './components/card-group/card-group';
import MessageBox from './components/message-box/message-box';

function App() {

  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col span={5}></Col>
        <Col span={7}>
          <Row gutter={0}>
            <Col>
              <NewStoryCard />
            </Col>
            <CardsGroup />
            <MessageBox />
          </Row>
        </Col>
        <Col span={5} >

          <SideNav />

        </Col>
      </Row>

    </div>
  );
}

export default App;
