'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import {
  Menu,
  Layout,
  Typography,
  Carousel,
  Image,
  Card,
  Row,
  Col,
} from 'antd';
import type { MenuProps } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import {
  BarsOutlined,
  BulbOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from '@ant-design/icons';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const { Content } = Layout;

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
    className: 'd',
  },
  {
    label: 'About',
    key: 'about',
    className: 'd',
  },
  {
    label: 'Gallery',
    key: 'gallery',
    className: 'd',
  },
  {
    label: 'Blog',
    key: 'blog',
    className: 'd',
  },
  {
    label: 'Contact',
    key: 'contact',
    className: 'd',
  },
];

type inspireType = {
  icon: any;
  title: string;
  paragraph: string;
};

const App: React.FC = () => {
  const u = usePathname();
  const [current, setCurrent] = useState('home');
  const [menuShow, setShowMenu] = useState(false);
  console.log('u.pathname', u);
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    menuShow && setShowMenu(!menuShow);
    setCurrent(e.key);
  };

  return (
    <Content>
      {/* Desktop */}
      <div
        className='desktop-menu flex justify-between items-center'
        style={{ background: '#001529', padding: 20 }}
      >
        <Title />
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
          className='test'
          theme='dark'
        />
      </div>
      {/* Mobile */}
      <div
        className=' mobile-menu flex justify-between items-center'
        style={{ background: '#001529', padding: 20 }}
      >
        <div className='flex justify-between items-center'>
          <Title />
          <BarsOutlined
            style={{ color: 'white', fontSize: 36 }}
            onClick={() => setShowMenu(!menuShow)}
          />
        </div>
        {menuShow && (
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode='inline'
            items={items}
            className='test'
            theme='dark'
          />
        )}
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        //   enabled: true,
        // }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop
        className='h-96 swiper'
        breakpoints={{
          320: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            // spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img
            src='/1.jpg'
            className='h-full w-full object-cover'
            // className='h-full w-full min-[420px]:object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/2.jpg'
            className='h-full w-full object-cover'
            // className='h-full w-full min-[420px]:object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/1.jpg'
            className='h-full w-full object-cover'
            // className='h-full w-full min-[420px]:object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/2.jpg'
            className='h-full w-full object-cover'
            // className='h-full w-full min-[420px]:object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/1.jpg'
            className='h-full w-full object-cover'
            // className='h-full w-full min-[420px]:object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover'
          />
        </SwiperSlide>

        {/* <div className='swiper-button-prev'>
          <button>Test</button>
        </div>
        <div className='swiper-button-next'>
          <button>Test</button>
        </div> */}
      </Swiper>

      <div style={{ marginTop: 20, padding: '0 20px' }}>
        <Row gutter={[16, 16]}>
          {inspiredArray?.map((item) => {
            return (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={6}
                xxl={8}
                key={item.title}
              >
                <InspireCard item={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </Content>
  );
};

export default App;

const Title = () => {
  return (
    <Typography
      style={{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
      }}
    >
      Raghuvir Foundation
    </Typography>
  );
};

const InspireCard = ({ item }: { item: inspireType }) => {
  return (
    <Card
      style={{ textAlign: 'center', fontSize: 40 }}
      styles={
        {
          // body: {
          //   maxWidth: 300,
          // },
        }
      }
    >
      {/* {item.icon} */}
      <BarsOutlined />
      <Typography.Title level={3} style={{ margin: 0 }}>
        {item.title}
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0 }}>
        {item.paragraph}
      </Typography.Title>
    </Card>
  );
};

const inspiredArray: Array<inspireType> = [
  {
    icon: '',
    title: 'Get Inspired',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  },
  {
    icon: '',
    title: 'Get Inspired',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  },
  {
    icon: '',
    title: 'Get Inspired',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  },
  {
    icon: '',
    title: 'Get Inspired',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
  },
];
