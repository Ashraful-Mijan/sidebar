import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaHome, } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { ImBlogger } from 'react-icons/im';
import { GrServices } from 'react-icons/gr';
import { RiContactsLine } from 'react-icons/ri';
import { AiFillFilter } from 'react-icons/ai';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar, handleCollapsedChange }) => {
  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      // breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <div className='text-center'>
            {collapsed ?
              <svg
                onClick={handleCollapsedChange}
                viewBox="0 0 100 80"
                width="40" height="25">
                <rect width="100" height="15" fill="#fff"></rect>
                <rect y="30" width="100" height="15" fill="#fff"></rect>
                <rect y="60" width="100" height="15" fill="#fff"></rect>
              </svg>
              :
              <svg onClick={handleCollapsedChange} data-name="Layer 1" viewBox="0 0 64 64" width="40" height="25">
                <line x1="9.37" x2="54.63" y1="9.37" y2="54.63" fill="none" stroke="#fff" strokeMiterlimit="10" stroke-width="12" />
                <line x1="9.37" x2="54.63" y1="54.63" y2="9.37" fill="none" stroke="#fff" strokeMiterlimit="10" stroke-width="12" />
              </svg>

            }

          </div>

        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaHome className='fs-4' />}
          >
            Home
          </MenuItem>
          <MenuItem icon={<GoPerson className='fs-4' />}>
            About
          </MenuItem>
          <MenuItem icon={<ImBlogger className='fs-4' />}> Blog </MenuItem>
          <MenuItem icon={<GrServices className='fs-4' />}> Services </MenuItem>
          <MenuItem icon={<RiContactsLine className='fs-4' />}> Contacts </MenuItem>
          <MenuItem icon={<AiFillFilter className='fs-4' />}> Filter </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;