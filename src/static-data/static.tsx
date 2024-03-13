import { inspireType, serviceType, teamType } from '@/utils/types';
import {
  BarsOutlined,
  BulbOutlined,
  DollarOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const inspiredArray: Array<inspireType> = [
  {
    icon: <BulbOutlined className='h-full' />,
    title: 'Get Inspired',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  },
  // {
  //   icon: <DollarOutlined className='h-full' />,
  //   title: 'Give Donation',
  //   paragraph:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  // },
  {
    icon: <UserOutlined className='h-full' />,
    title: 'Become A Volunteer',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  },
  {
    icon: <SmileOutlined className='h-full' />,
    title: 'Help The Children',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  },
];

export const serviceArray: Array<serviceType> = [
  {
    title: 'MEDICAL FACILITIES',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor',
    imageUrl: '/service/1.jpg',
  },
  {
    title: `LET'S BUILD SOME HOMES`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor',
    imageUrl: '/service/2.jpg',
  },
  {
    title: 'PURE WATER FOR POOR PEOPLE',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor',
    imageUrl: '/service/3.jpg',
  },
  {
    title: 'RAISE FUND FOR HEALTHY FOOD',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor',
    imageUrl: '/service/4.jpg',
  },
  {
    title: 'MASSIVE DONATION TO POOR',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor',
    imageUrl: '/service/5.jpg',
  },
  {
    title: 'PROMOTING THE RIGHTS OF CHILDREN',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor',
    imageUrl: '/service/6.jpg',
  },
];

export const teamArray: Array<teamType> = [
  {
    imageUrl: '/images/team/1.jpg',
    name: 'Hover',
    social: {
      facebook: 'test',
      instagram: 'test1',
    },
  },
  {
    imageUrl: '/images/team/2.jpg',
    name: 'Hover',
    social: {
      facebook: 'test',
      instagram: 'test1',
    },
  },
  {
    imageUrl: '/images/team/3.jpg',
    name: 'Hover',
    social: {
      facebook: 'test',
      instagram: 'test1',
    },
  },
  // {
  //   imageUrl: '/images/team/4.jpg',
  //   name: 'Hover',
  //   social: {
  //     facebook: 'test',
  //     instagram: 'test1',
  //   },
  // },
];
