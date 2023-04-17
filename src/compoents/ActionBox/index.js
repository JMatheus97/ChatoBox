import React from 'react';
import { Typography } from 'antd';
import styles from './index.less';

const { Title, Link } = Typography;

export default function ActionBox({
  title,
  subtitle,
  description,
  buttonText,
  buttonType,
}) {
  return (
    <>
      <Title level={3} className={styles.title}>
        {title}
      </Title>

      <p className={styles.subtitle}>
        {subtitle}{' '}
        <Link href={buttonType} target="_blank">
          {buttonText}
        </Link>
      </p>

      <p>{description}</p>
    </>
  );
}
