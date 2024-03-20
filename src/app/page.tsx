'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Menu, Layout, Typography, Row, Col } from 'antd';
import type { MenuProps } from 'antd';

// Import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Static Data
import { inspiredArray, serviceArray, teamArray } from '@/static-data/static';
import { InspireCard, ServiceCard, TeamCard } from '@/components/Cards';
import { BarsOutlined } from '@ant-design/icons';

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
  console.log('u.pathname', u);
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    menuShow && setShowMenu(!menuShow);
    setCurrent(e.key);
  };

  return (
    <Content style={{ maxWidth: 1536 }}>
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

      <div>
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
        </Swiper>

        <div
          style={{
            marginTop: 20,
            padding: '0 20px',
          }}
        >
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
        </div>

        <div
          style={{
            marginTop: 20,
            padding: '0 20px',
          }}
        >
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
        </div>
        {/* Our Team */}

        <div
          style={{
            marginTop: 20,
            padding: '0 20px',
          }}
        >
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
        </div>
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
      Tailwind Practice
    </Typography>
  );
};

{
  /* <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: 20,
          }}
        >
          {inspiredArray?.map((item) => (
            <InspireCard item={item} key={item.title} />
          ))}
        </div> */
}

{
  /* <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            gap: 20,
          }}
        >
          {serviceArray?.map((item) => (
            <ServiceCard item={item} key={item.title} />
          ))}
        </div> */
}
