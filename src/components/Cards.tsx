import { inspireType, serviceType, teamType } from '@/utils/types';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { Card, Typography, Flex } from 'antd';
import Link from 'next/link';

export const InspireCard = ({ item }: { item: inspireType }) => {
  return (
    <Card style={{ textAlign: 'center', fontSize: 40 }} className='common-card'>
      <div
        style={{
          height: 100,
          width: 100,
          borderRadius: '50%',
          border: '2px solid black',
        }}
        className='mx-auto'
      >
        {item.icon}
      </div>
      <Typography.Title level={3} style={{ margin: 0 }}>
        {item.title}
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0 }}>
        {item.paragraph}
      </Typography.Title>
    </Card>
  );
};

export const ServiceCard = ({ item }: { item: serviceType }) => {
  return (
    <Card
      hoverable
      className='common-card service card'
      cover={<img alt='example' src={item.imageUrl} />}
    >
      <Typography.Title level={3}>{item.title}</Typography.Title>
      <Typography.Text>{item.description}</Typography.Text>
    </Card>
  );
};

export const TeamCard = ({ item }: { item: teamType }) => {
  return (
    <Card
      hoverable
      className='common-card team-card'
      cover={<img alt='example' src={item.imageUrl} />}
    >
      <Typography.Title level={3}>{item.name}</Typography.Title>
      {/* <Typography.Text>{item.description}</Typography.Text> */}
      <Flex gap='small'>
        <Link href={item.social.instagram}>
          <InstagramOutlined style={{ fontSize: 30 }} />
        </Link>
        <Link href={item.social.facebook}>
          <FacebookOutlined style={{ fontSize: 30 }} />
        </Link>
      </Flex>
    </Card>
  );
};
