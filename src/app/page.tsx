'use client';
import React, { useState } from 'react';

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

type formType = {
  email: string;
  message: string;
};

const FormItem = Form.Item<formType>;

const values: formType = {
  email: '',
  message: '',
};

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState('home');
  const [menuShow, setShowMenu] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const showNotification = () => {
    api['success']({
      message: 'Thank you for join us.',
    });
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    menuShow && setShowMenu(!menuShow);
    setCurrent(e.key);
  };

  const handleSubmit: FormProps<formType>['onFinish'] = (values) => {
    showNotification();
    form.resetFields();
  };

  return (
    <Layout>
      <Header className='sticky top-0 z-10 px-12 max-[320px]:px-3 max-[640px]:px-6'>
        {/* Desktop */}
        <div className='desktop-menu flex justify-between items-center bg-color-001529'>
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
        <div className='mobile-menu flex justify-between items-center h-full bg-color-001529'>
          <div className='flex justify-between items-center h-full'>
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
      </Header>
      <Content>
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
      <Footer className='px-0 py-0 bg-gray-800 text-white'>
        <div className='px-12 py-6 cl max-[320px]:px-3 max-[640px]:px-6'>
          <Row gutter={[16, 32]}>
            <Col sm={24} md={11} xl={6}>
              <div
              // className='max-w-80'
              >
                <div className='max-[640px]:text-center'>
                  <p className='text-2xl font-bold'>Tailwind Practice</p>
                  <p className='text-xl text-gray-300'>
                    There are many variations of passages of Lorem Ipsum
                  </p>
                  <p className='text-gray-300 text-right'> - Lorem Ipsum</p>
                </div>
                <div className='flex space-x-4 mt-2 max-[640px]:justify-center'>
                  <a href='#' className='text-gray-300 hover:text-gray-400'>
                    <FaFacebook className='text-4xl' />
                  </a>
                  <a href='#' className='text-gray-300 hover:text-gray-400'>
                    <FaTwitter className='text-4xl' />
                  </a>
                  <a href='#' className='text-gray-300 hover:text-gray-400'>
                    <FaInstagram className='text-4xl' />
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={24}
              md={2}
              xl={1}
              className='text-center'
              // className='max-w-2'
            >
              <Divider
                type='vertical'
                className='bg-white  top-0 w-auto sm:h-full max-[640px]:w-full h-px m-0'
              />
            </Col>
            <Col xs={24} md={11} xl={6}>
              <Flex vertical gap='middle' justify='center'>
                <Flex align='center' gap='small'>
                  <FaLocationDot className='text-lg' />
                  <Typography.Text className='text-gray-300 text-base'>
                    1234 Example Street, City, Country
                  </Typography.Text>
                </Flex>
                <Flex align='center' gap='small'>
                  <MdCall className='text-lg' />
                  <Typography.Text className='text-gray-300 text-base'>
                    7874800000
                  </Typography.Text>
                </Flex>
                <Flex align='center' gap='small'>
                  <MdEmail className='text-lg' />
                  <Typography.Text className='text-gray-300 text-base'>
                    info.practice@gmail.com
                  </Typography.Text>
                </Flex>
                <Flex align='center' gap='small'>
                  <MdAccessTime className='text-lg' />
                  <Typography.Text className='text-gray-300 text-base'>
                    Mon - Fri 9:00 AM - 9:00 PM
                  </Typography.Text>
                </Flex>
              </Flex>
            </Col>
            <Col
              xs={24}
              md={0}
              xl={1}
              className='text-center'
              // className='max-w-2'
            >
              <Divider
                type='vertical'
                className='bg-white  top-0 w-auto sm:h-full max-[640px]:w-full h-px m-0'
              />
            </Col>
            <Col xs={24} md={11} xl={4}>
              <div>
                <ul className='flex flex-col space-y-2'>
                  <li>
                    <a href='#' className='hover:text-gray-300 text-base'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-gray-300 text-base'>
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-gray-300 text-base'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              xs={24}
              md={2}
              xl={1}
              className='text-center'
              // className='max-w-2'
            >
              <Divider
                type='vertical'
                className='bg-white  top-0 w-auto sm:h-full max-[640px]:w-full h-px m-0'
              />
            </Col>
            <Col xs={24} md={11} xl={5}>
              <div>
                <Form
                  form={form}
                  className='news-letter-form'
                  onFinish={handleSubmit}
                >
                  <FormItem
                    name='email'
                    rules={[{ required: true, message: 'Please enter email.' }]}
                  >
                    <Input
                      placeholder='Email'
                      className='max-[640px]:min-h-12'
                    />
                  </FormItem>
                  <FormItem
                    name='message'
                    rules={[
                      { required: true, message: 'Please enter message.' },
                    ]}
                  >
                    <Input
                      placeholder='Message'
                      className='max-[640px]:min-h-12'
                    />
                  </FormItem>
                  <FormItem>
                    <Button
                      type='default'
                      htmlType='submit'
                      className='mt-1 w-full text-gray-300 sm:text-base max-[640px]:min-h-12 text-xl'
                    >
                      Submit
                    </Button>
                  </FormItem>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
        <div className='flex justify-between  sm:flex-row max-[640px]:px-6 flex-col gap-y-3.5'></div>
        <div className='py-4 bg-gray-700'>
          {/* <p className='text-center'>&copy; 2024 Shree Raghuvir Foundation</p> */}
          <p className='text-center'>&copy; 2024 Tailwind Practice</p>
        </div>
      </Footer>
      {contextHolder}
    </Layout>
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
