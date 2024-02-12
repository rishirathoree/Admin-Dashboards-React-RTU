import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from '../../../assets/images/profile.avif'
import {
  SignOut,
  User,
  Calendar,
  X,
  Warning,
  House,
  Gear,
  Envelope,
  Key,
  UserFocus,
  BellSimpleRinging,
  Chats,
  Notebook,
  LockSimpleOpen,
  Suitcase,
  Bed,
  Receipt,
  ThumbsUp,
  ArrowsHorizontal
} from "phosphor-react";

import cycLogo from '../../../assets/images/cyclogo.png'
import { TurnSiebarOpen } from "../../../Store/Slices/AppSlice";

const Sidebar = () => {

  const [logoutShow, setLogoutShow] = useState(false)

  const sidebars = [
    {
      block: "Dashboard",
      icon: "",
      menus: [
        {
          name: "Home",
          link: "/",
          inActiveIcon: House,
          ActiveIcon: House,
        },
        {
          name: "Calendar",
          link: "/calendar",
          inActiveIcon: Calendar,
          ActiveIcon: Calendar,
        },
      ],
    },
    {
      block: "Reservations",
      icon: "",
      menus: [
        {
          name: "Booking  ",
          inActiveIcon: Suitcase,
          ActiveIcon: Suitcase,
          link: "/booking/reservations",
          subMenus: [
            {
              title: "All Bookings",
              icon: Receipt,
              link: "/bookings/booking",
            },
            {
              title: "Create Bookings",
              icon: Receipt,
              link: "/bookings/create",
            },
            {
              title: "Online Bookings",
              icon: Receipt,
              link: "/bookings/online",
            },
          ]
        },
        {
          name: "Rooms",
          inActiveIcon: Bed,
          ActiveIcon: Bed,
          link: "/booking/checkins",
          subMenus: [
            {
              title: "Create Rooms",
              icon: Receipt,
              link: "/rooms/create",
            },
            {
              title: "All Rooms",
              icon: Receipt,
              link: "/rooms/list",
            },
          ]
        },
      ],
    },
    {
      block: "Settings",
      icon: "",
      menus: [
        {
          name: "Settings",
          inActiveIcon: Gear,
          ActiveIcon: Gear,
          link: "/booking/checkins",
          subMenus: [
            {
              title: "Notifications",
              icon: BellSimpleRinging,
              link: "/settings/notifications",
            },
            // {
            //   title: "Terms & Conditions",
            //   icon: Notebook,
            //   link: "/settings/termsandcondition",
            // },
            // {
            //   title: "Chats Support",
            //   icon: Chats,
            //   link: "/settings/chats",
            // },
            // {
            //   title: "Privacy Policy",
            //   icon: LockSimpleOpen,
            //   link: "/settings/privacypolicy",
            // },
            // {
            //   title: "Feedbacks",
            //   icon: ThumbsUp,
            //   link: "/settings/feedbacks",
            // },
          ]
        },
      ],
    },
    {
      block: "Account",
      icon: "",
      menus: [
        {
          name: "Hotel Account Settings",
          inActiveIcon: User,
          ActiveIcon: User,
          link: "/booking/checkins",
          subMenus: [
            {
              title: "General",
              icon: User,
              link: "/account/general",
            },
            // {
            //   title: "Email",
            //   icon: Envelope,
            //   link: "/account/termsandcondition",
            // },
            {
              title: "Security",
              icon: Key,
              link: "/account/security",
            },
            // {
            //   title: "Account Activity",
            //   icon: UserFocus,
            //   link: "/account/privacypolicy",
            // },
          ]
        },
      ],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const [activeDropdown, setActiveDropDown] = useState(1);

  useEffect(() => {
    const foundMenu = sidebars.find((block, blockIdx) =>
      block.menus.some((menu, menuIdx) =>
        menu.subMenus
          ? menu.subMenus.some((subMenu) =>
            location.pathname.endsWith(subMenu.link)
          )
          : false
      )
    );
    if (foundMenu) {
      const blockIdx = sidebars.indexOf(foundMenu);
      const foundMenuIdx = foundMenu.menus.findIndex((menu) =>
        menu.subMenus
          ? menu.subMenus.some((subMenu) =>
            location.pathname.endsWith(subMenu.link)
          )
          : false
      );
      setActiveDropDown(`${blockIdx}-${foundMenuIdx}`);
    } else {
      setActiveDropDown(null);
    }
  }, [location.pathname]);

  return (
    <>
      <aside className="w-[280px] fixed left-0 top-0 z-50 bg-gray-200/20 h-full overflow-hidden overflow-y-auto flex flex-col justify-between scroll custom-scroll">

        <div className="space-y-4 ">
          {/* <img src={cycLogo} className="scale-75 drop-shadow-xl" alt="" /> */}
          {/* <ArrowsHorizontal size={15} className="absolute z-50 -right-2 p-2 top-8 rounded-md bg-gray-100/70 w-min h-min"/> */}
          <p className="px-6 py-2 pt-4 font-black text-4xl -tracking-[2px] capitalize text-red-500">DESC.</p>
          <ul>
            {sidebars.map((blocks, blockIdx) => (
              <li key={blockIdx} className="">
                {blocks.block && (
                  <p className="text-gray-500 tracking-normal px-6 py-2 text-[10px] font-medium">
                    {blocks.block}
                  </p>
                )}
                {blocks.menus.map((menus, menuIdx) => (
                  <div key={menuIdx}>
                    <div
                      onClick={() => {
                        setActiveDropDown((prevValue) =>
                          prevValue === `${blockIdx}-${menuIdx}`
                            ? null
                            : `${blockIdx}-${menuIdx}`
                        );

                        if (!menus.subMenus) {
                          navigate(menus.link);
                        }
                      }}
                      className={`px-6 py-4 w-full cursor-pointer flex items-center justify-between gap-2
${!menus.subMenus && location.pathname.endsWith(menus.link)
                          ? "bg-red-400 text-white"
                          : "hover:bg-white text-gray-900 "
                        }
`}
                    >
                      <span className="flex items-center gap-2">
                        <menus.ActiveIcon size={20} weight="light" />
                        <p
                          className={`first-letter:uppercase font-medium leading-none tracking-tighter  text-[12px] dark:text-white`}
                        >
                          {menus.name}
                        </p>
                      </span>
                      {menus.subMenus && (
                        <i
                          className={`bx bx-chevron-up duration-700 ${activeDropdown === `${blockIdx}-${menuIdx}`
                              ? ""
                              : "rotate-180"
                            }`}
                        ></i>
                      )}
                    </div>
                    <div
                      className={`overflow-hidden  ${activeDropdown === `${blockIdx}-${menuIdx}`
                          ? "max-h-[400px] visible opacity-100 duration-1000 "
                          : "duration-200 max-h-0 invisible opacity-0"
                        }`}
                    >
                      {menus.subMenus &&
                        menus.subMenus.map((submenus, submenuIdx) => (
                          <Link to={submenus.link} key={submenuIdx}>
                            <span
                              className={`w-full flex items-center cursor-pointer gap-2 pl-12  py-4
               ${location.pathname.endsWith(submenus.link)
                                  ? "bg-red-400 text-white"
                                  : "hover:bg-red-400 hover:text-white text-gray-800"
                                }
               `}
                            >
                              <submenus.icon
                                weight={'thin'} size={20} />
                              <p className=" tracking-normal text-[10px] font-medium">
                                {submenus.title}
                              </p>
                            </span>
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>



        <ul className="
">

          <li className="m-2 bg-white p-2 rounded-lg ring-black/5 ring-[1px] flex items-center justify-between ">
            <span className="flex items-center gap-1 rounded-lg">
              <img src={profile} className="object-cover rounded-md w-8 h-8" alt="" />
              <span>
                <p className="font-semibold text-[10px]">Rishi Rathore</p>
                <p className="font-semibold text-gray-400 text-[10px]">Hotelier : 212</p>
              </span>
            </span>
            <div className="relative">
              <UserFocus className="scale-x-[-1]" size={20} />

            </div>
          </li>
        </ul>

      </aside>
    </>
  );
};

export default Sidebar;
