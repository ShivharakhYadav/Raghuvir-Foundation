'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

//Antd Imports
import { Menu, Layout, Typography, Row, Col, Flex } from 'antd';
import type { MenuProps } from 'antd';

// Import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Static Data
import { inspiredArray, serviceArray, teamArray } from '@/static-data/static';
import { InspireCard, ServiceCard, TeamCard } from '@/components/Cards';
import { BarsOutlined } from '@ant-design/icons';
import Image from 'next/image';

// Destructure
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

const App: React.FC = () => {
  const u = usePathname();
  const [current, setCurrent] = useState('home');
  const [menuShow, setShowMenu] = useState(false);
  // console.log('u.pathname', u);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    menuShow && setShowMenu(!menuShow);
    setCurrent(e.key);
  };

  return (
    <Content style={{ maxWidth: 1536 }}>
      {/* Desktop */}
      <div className='desktop-menu flex justify-between items-center p-5 sticky top-0 z-10 bg-color-001529'>
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
      <div className=' mobile-menu flex justify-between items-center  p-5 bg-color-001529'>
        <div className='flex justify-between items-center'>
          <Title />
          <BarsOutlined
            className='text-white text-4xl'
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

      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop
          className='h-96 swiper'
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
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
            <img src='/1.jpg' className='h-full w-full object-cover' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/2.jpg' className='h-full w-full object-cover' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/1.jpg' className='h-full w-full object-cover' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/2.jpg' className='h-full w-full object-cover' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/1.jpg' className='h-full w-full object-cover' />
          </SwiperSlide>
        </Swiper>

        <Flex vertical className='p-6' gap='middle'>
          <Row gutter={[16, 16]}>
            {inspiredArray?.map((item) => {
              return (
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={8}
                  key={item.title}
                >
                  <InspireCard item={item} />
                </Col>
              );
            })}
          </Row>

          <Row gutter={[16, 16]}>
            {serviceArray?.map((item) => {
              return (
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={8}
                  key={item.title}
                >
                  <ServiceCard item={item} />
                </Col>
              );
            })}
          </Row>

          <Row gutter={[16, 16]}>
            {teamArray?.map((item) => {
              return (
                <Col
                  xs={24}
                  sm={12}
                  md={8}
                  lg={8}
                  xl={8}
                  xxl={8}
                  key={item.name}
                >
                  <TeamCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Flex>
      </div>
    </Content>
  );
};

export default App;

const Title = () => {
  return (
    <Typography className='text-white text-2xl font-bold'>
      Tailwind Practice
    </Typography>
  );
};
