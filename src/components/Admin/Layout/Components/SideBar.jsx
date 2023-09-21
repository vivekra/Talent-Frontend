import React from 'react'
import { Icon } from '@iconify/react';

const SideBarValues = [
  {
    icon: "iconoir:developer",
    path: "/admin/profiles"
  },
  {
    icon: "flat-color-icons:settings",
    path: "/admin/settings"
  },
  {
    icon: "flat-color-icons:data-configuration",
    path: "/admin/configure"
  },
]

const SideBar = () => {
  return (
    <aside className='bg-amber-200 h-[90vh] w-[8vw] d-flex gap-12 pt-4 flex-col static'>
      {SideBarValues.map((bar) => <a  href={bar.path} className='d-flex justify-center rounded-xl'>
      <Icon icon={bar.icon} className='h-12 w-12' />
      </a>)}
    </aside>
  )
}

export default SideBar