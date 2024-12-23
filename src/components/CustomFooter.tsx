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

import { Footer } from 'antd/es/layout/layout';

// Third Party Imports
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdCall, MdEmail, MdAccessTime } from 'react-icons/md';

type formType = {
  email: string;
  message: string;
};

const FormItem = Form.Item<formType>;

const values: formType = {
  email: '',
  message: '',
};

const CustomFooter = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const showNotification = () => {
    api['success']({
      message: 'Thank you for join us.',
    });
  };

  const handleSubmit: FormProps<formType>['onFinish'] = (values) => {
    showNotification();
    form.resetFields();
  };

  return (
    <Footer className='px-0 py-0 bg-gray-800 text-white'>
      <div className='px-12 py-6 cl max-[320px]:px-3 max-[640px]:px-6'>
        <Row gutter={[16, 32]}>
          <Col sm={24} md={11} xl={6}>
            <div
            // className='max-w-80'
            >
              <div className='max-[640px]:text-center'>
                <p className='text-2xl font-bold'>Raghuvir Foundation</p>
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
                  <Input placeholder='Email' className='max-[640px]:min-h-12' />
                </FormItem>
                <FormItem
                  name='message'
                  rules={[{ required: true, message: 'Please enter message.' }]}
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
        <p className='text-center'>&copy; 2024 Raghuvir Foundation</p>
      </div>
      {contextHolder}
    </Footer>
  );
};
export default CustomFooter;
