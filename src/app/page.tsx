'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Menu, Layout, Typography } from 'antd';
import type { MenuProps } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { BarsOutlined } from '@ant-design/icons';
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
    </Content>
  );
};

export default App;

const Title = () => {
  return (
    <Typography style={{ color: 'white', fontSize: 20 }}>
      Raghuvir Foundation
    </Typography>
  );
};
