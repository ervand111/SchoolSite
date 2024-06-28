import React, {useState} from 'react';
import {categories, icons} from "@/utility/db";
import {CaretRightOutlined} from "@ant-design/icons";
import Link from "next/link";
import {Menu, Dropdown, Button, Drawer} from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import {log} from "next/dist/server/typescript/utils";
import Image from "next/image";

const {SubMenu} = Menu;
const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [subMenuVisible1, setSubMenuVisible1] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    setSubMenuVisible(false);
    setSubMenuVisible1(false);
  };

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };
  const toggleSubMenu2 = () => {
    setSubMenuVisible1(!subMenuVisible1);
  };
  const menu = (
    <Menu>
      <SubMenu title="First Menu">

      </SubMenu>

    </Menu>
  );
  return (
    <>
      <header className="w-full h-32  flex justify-center items-center border-b border-black">

        <div className="w-full h-full flex  justify-around items-center rowheader ">
          <div className='menuBars'>
  <span className='text-2xl cursor-pointer' onClick={showDrawer}>
    <MenuOutlined/>
  </span>
            <Drawer
              title="Menu"
              placement="right"
              closable={true}
              onClose={closeDrawer}
              visible={drawerVisible}

            >
              <Menu mode="inline" className='main-menu'>
                {categories.map((category, index) => (
                  <div key={`category-${index}`} className='category'>
                    <Menu.Item onClick={category.drb ? toggleSubMenu : null} key={`category-item-${index}`}>
                      <Link href={category?.path}>
                        {category.name}
                      </Link>
                    </Menu.Item>
                    {category.drb && (
                      <div className='sub-menu'>
                        {subMenuVisible && (
                          <Menu mode="vertical">
                            {category.drb.map((item, index) => (
                              <div key={`item-${index}`} className='sub-category'>
                                <Menu.Item onClick={item.drb ? toggleSubMenu2 : null} key={`sub-item-${index}`}>
                                  <Link href={item?.path}> {item.label}</Link>
                                </Menu.Item>
                                {item.drb && (
                                  <div className='sub-menu'>
                                    {subMenuVisible1 && (
                                      <Menu mode="vertical">
                                        {item.drb.map((subItem, index) => (
                                          <div key={`sub-item-${index}`} className='sub-sub-category'>
                                            <Menu.Item key={`sub-sub-item-${index}`}>
                                              <Link href={subItem?.path}> {subItem.label}</Link>
                                            </Menu.Item>
                                          </div>
                                        ))}
                                      </Menu>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </Menu>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </Menu>
            </Drawer>
          </div>
          <div className='w-52  h-5/6 flex justify-center  logo '>
            <Link href='/' className='w-full h-full'>
              <Image className='w-full h-full  object-contain' src="/logo.png" width={1000} height={1000} alt=""/>
            </Link>
          </div>
          <div className="w-9/11 ml-5 h-full relative flex justify-center  items-center info">
            <ul className="flex w-full h-full justify-center items-center">
              {categories.map((category) => (
                <li
                  className="text-sm  ml-5 p-2 flex items-end hover:text-slate-500 cursor-pointer relative"
                  key={category.id}>
                  <Link href={category?.path}>
                    {category.name}
                  </Link>
                  {category.drb ?
                    <div className='pt-14 absolute top-0 z-50 group'>
                      <ul
                        className='h-auto  bg-white z-50 rounded-l justify-start items-center flex-wrap shadow-gray-900 shadow-xl'>
                        <Link href="/activity">
                          <li className="p-2 text-sm">Գործունեություն</li>
                        </Link>

                        <Link href="/stuff">
                          <li className="p-2 text-sm">Աշխատակազմ</li>
                        </Link>
                        <Link href="/history">
                          <li className="p-2 text-sm">Պատմություն</li>

                        </Link>
                        <li className="p-2 text-sm relative">Խորհուրդներ
                          <CaretRightOutlined className='ml-2 text-xs'/>
                          <div className="absolute w-auto left-full top-0 pl-1 z-50 dropDown-children ">
                            <ul className=' bg-white h-auto  rounded-l  shadow-gray-900 shadow-xl'>
                              <Link href='/pedagogic'>
                                <li className="p-2">Մանկավարժական</li>
                              </Link>
                              <Link href='/parentalAdvice'>
                                <li className="p-2">Ծնողական</li>
                              </Link>
                              <Link href='/students'>
                                <li className="p-2">Աշակերտական</li>
                              </Link>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-24 h-1/2 flex items-center iconsParent">
            {icons.map((icon) => (
              <a
                className="text-3xl p-2 mr-2 text-gray-800 animate-pulse hover:text-blue-600 transition-colors duration-300 rounded-full bg-gray-200 hover:bg-gray-300"
                key={icon.id}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.name}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  )
    ;
};

export default Header;