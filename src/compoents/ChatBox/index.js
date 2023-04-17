import React from 'react';

import { Row, Col, Card, Avatar } from 'antd';
import Buttons from '/src/compoents/Button';
import ActionBox from '/src/compoents/ActionBox';

import styles from './index.less';

export default function ChatBox() {
  return (
    <Card className={styles.chatbox}>
      <ActionBox
        title="Lorem Ipsum is simply dummy text"
        subtitle="with"
        description=" Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book."
        buttonText="Test"
        buttonType="https://test.com"
      />
      <Row justify="space-between" align="bottom">
        <Col xs={24} md={18}>
          <div>Chat with:</div>
          <Avatar.Group size="large">
            <Avatar src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          </Avatar.Group>
        </Col>
        <Col xs={24} md={6} style={{ marginTop: '1rem' }}>
          <Buttons text="Chat No" type="primary" size="large" />
        </Col>
      </Row>
    </Card>
  );
}
