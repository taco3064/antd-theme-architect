import { Row, Col, List, Typography, Divider } from 'antd';
import type { DemoContainerProps } from './types';

export default function DemoContainer({
  ColProps = { md: 12 },
  children,
  items,
  title,
}: DemoContainerProps) {
  return (
    <Row justify="center">
      <Col {...ColProps} xs={24}>
        {!items ? (
          children
        ) : (
          <List
            split={false}
            header={
              <Typography.Title className="m-0 text-gray" level={4}>
                {title}
              </Typography.Title>
            }
            dataSource={Object.entries(items)}
            renderItem={([key, Demo]) => (
              <List.Item key={key}>
                <List.Item.Meta
                  description={<Demo />}
                  title={
                    <Divider orientation="left">
                      <Typography.Title level={5}>{key}</Typography.Title>
                    </Divider>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </Col>
    </Row>
  );
}
