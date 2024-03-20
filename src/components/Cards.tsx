import { inspireType, serviceType, teamType } from '@/utils/types';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { Card, Typography, Flex } from 'antd';
import Link from 'next/link';

export const InspireCard = ({ item }: { item: inspireType }) => {
  return (
    <Card className='mx-auto text-center fs-40 text-4xl mw-350'>
      <div className='mx-auto h-24 w-24 rounded-full border-2 border-solid border-black'>
        {item.icon}
      </div>
      <Typography.Title level={4} style={{ margin: 0 }}>
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
      cover={<img alt='example' src={item.imageUrl} />}
      className='mx-auto mw-350 service-card'
    >
      <Typography.Title level={4}>{item.title}</Typography.Title>
      <Typography.Text>{item.description}</Typography.Text>
    </Card>
  );
};

export const TeamCard = ({ item }: { item: teamType }) => {
  return (
    <Card
      cover={<img alt='example' src={item.imageUrl} />}
      className='mx-auto text-center border-2 shadow-none team-card mw-350'
    >
      <Typography.Title level={4}>{item.name}</Typography.Title>
      <Flex gap='small' justify='center'>
        <Link href={item?.social?.facebook}>
          <FaFacebook className='text-2xl' />
        </Link>
        <Link href={item?.social?.instagram}>
          <FaInstagram className='text-2xl' />
        </Link>
      </Flex>
    </Card>
  );
};
