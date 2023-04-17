import styles from './index.less';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import ChatBox from '/src/compoents/ChatBox';

export default function IndexPage() {
  return (
    <Row justify="center" align="middle" className={styles.main}>
      <Col>
        <ChatBox />
      </Col>
    </Row>
  );
}
