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
import { Header } from 'antd/es/layout/layout';
import type { FormProps, MenuProps } from 'antd';
import { BarsOutlined, MailFilled, MailOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: <Link href='/'>Home</Link>,
    key: '/',
    className: 'd',
  },
  {
    label: <Link href='/about'>About</Link>,
    key: '/about',
    className: 'd',
  },
  {
    label: <Link href='/gallery'>Gallery</Link>,
    key: '/gallery',
    className: 'd',
  },
  {
    label: <Link href='/blog'>Blog</Link>,
    key: '/blog',
    className: 'd',
  },
  {
    label: <Link href='/contact'>Contact</Link>,
    key: '/contact',
    className: 'd',
  },
];

const CustomHeader = () => {
  let key = usePathname();
  const [menuShow, setShowMenu] = useState(false);
  const onClick: MenuProps['onClick'] = (e) => {
    menuShow && setShowMenu(!menuShow);
  };

  return (
    <Header className='sticky top-0 z-10 px-12 max-[320px]:px-3 max-[640px]:px-6'>
      {/* Desktop */}
      <div className='desktop-menu flex justify-between items-center bg-color-001529'>
        <Title />
        <Menu
          onClick={onClick}
          selectedKeys={[key]}
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
            selectedKeys={[key]}
            mode='inline'
            items={items}
            className='test absolute left-0'
            theme='dark'
          />
        )}
      </div>
    </Header>
  );
};
export default CustomHeader;

const Title = () => {
  return (
    <Typography className='text-white text-2xl font-bold'>
      Raghuvir Foundation
    </Typography>
  );
};
