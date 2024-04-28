// Base code from: https://tailwindui.com/components/marketing/elements/flyout-menus

import { Fragment } from "react"
import classNames from "classnames";
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { navList } from "@/components/utils";

interface MenuProps {
  extraClass?: string,
}

const Menu = ({ extraClass }: MenuProps) => {
  const popoverClass = classNames("relative", extraClass)

  return (
    <Popover className={popoverClass}>
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6">
        <span>Menu</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className={ "w-screen max-w-md flex-auto overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 bg-violet-50 dark:bg-slate-900"}>
            <div className="p-4">
              {navList.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-fuchsia-200/20 hover:dark:bg-zinc-700">
                  <a href={item.href} className="font-semibold">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Menu;
