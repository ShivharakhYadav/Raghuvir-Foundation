'use client';
import React, { useState } from 'react';

//Antd Imports
import { usePathname } from 'next/navigation';
import Link from 'next/link';

//Antd Imports
import {
  Menu,
  Layout,
  Typography,
  Row,
  Col,
  Flex,
  Input,
  Button,
  Form,
  Space,
  notification,
  Divider,
} from 'antd';
import type { FormProps, MenuProps } from 'antd';

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
import { BarsOutlined, MailFilled, MailOutlined } from '@ant-design/icons';

// Third Party Imports
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall, MdEmail, MdAccessTime } from 'react-icons/md';

// Destructure
const { Header, Footer, Content } = Layout;

const items: MenuProps['items'] = [
  {
    label: <Link href='/'>Home</Link>,
    key: 'home',
    className: 'd',
  },
  {
    label: <Link href='/about'>About</Link>,
    key: 'about',
    className: 'd',
  },
  {
    label: <Link href='/gallery'>Gallery</Link>,
    key: 'gallery',
    className: 'd',
  },
  {
    label: <Link href='/blog'>Blog</Link>,
    key: 'blog',
    className: 'd',
  },
  {
    label: <Link href='/contact'>Contact</Link>,
    key: 'contact',
    className: 'd',
  },
];

const App: React.FC = () => {
  const pathName = usePathname();
  console.log('pathName', pathName);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
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
        <div>
          <div className='text-center mb-4'>
            <Typography.Title level={3}>Our Services</Typography.Title>
            <Typography.Text className='text-base'>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Maxime
              Totam Quo, Ducimus Aliquid Quisquam Minima Perspiciatis
              Repellendus, Minus Tenetur Reiciendis Quis? Consequatur
              Perferendis Deleniti, Rerum Delectus Consectetur Modi Praesentium
              Deserunt.
            </Typography.Text>
          </div>
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
        <div>
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
      </Flex>
    </div>
  );
};

export default App;

const Title = () => {
  return (
    <Typography className='text-white text-2xl font-bold'>
      Raghuvir Foundation
    </Typography>
  );
};
