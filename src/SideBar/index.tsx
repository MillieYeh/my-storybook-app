import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { IFSideBarItem, SideBarProps } from "./SideBarPropType";

const SidebarItem = (props: IFSideBarItem) => {
  const { id, name, href, current, items, icon } = props;
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        className={`link ${pathname.includes(name) && "text-blue-600"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon size={23} className='min-w-max' />
        <p className='flex-1 capitalize'>{name}</p>
        {items && items.length > 0 && (
          <IoIosArrowDown
            className={` ${subMenuOpen && "rotate-180"} duration-200 `}
          />
        )}
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className='flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden'
      >
        {items?.map((item) => (
          <li key={item.id}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <NavLink to={item.href} className='link !bg-transparent capitalize'>
              {item.name}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

const SideBar = (props: SideBarProps) => {
  const { items, href, title } = props;
  const [open, setOpen] = useState(true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(true);
  }, [pathname]);

  const Nav_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };
  return (
    <>
      <div>
        <div
          onClick={() => setOpen(false)}
          className={` fixed inset-0 max-h-screen z-[998] bg-black/50 ${
            open ? "block" : "hidden"
          } `}
        ></div>
        <motion.div
          ref={sidebarRef}
          variants={Nav_animation}
          initial={{ x: 0 }}
          animate={open ? "open" : "closed"}
          className=' bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden fixed
         h-screen '
        >
          <div className='flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3'>
            <img
              src='https://img.icons8.com/color/512/firebase.png'
              width={45}
              alt=''
            />
            <span className='text-xl whitespace-pre'>{title}</span>
          </div>

          <div className='flex flex-col  h-full'>
            <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100  '>
              {open && (
                <div className='border-y py-5 border-slate-300 '>
                  {items?.map((item) => (
                    <div key={item.id} className='flex flex-col gap-1'>
                      <SidebarItem {...item} />
                    </div>
                  ))}
                </div>
              )}
              <li></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SideBar;
