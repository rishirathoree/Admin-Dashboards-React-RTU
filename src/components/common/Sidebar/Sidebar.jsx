import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from '../../../assets/images/profile.avif'
import {
  SignOut,
  Calendar,
  X,
  Warning,
  House,
  Gear,
  BellSimpleRinging,
  Chats,
  Notebook,
  LockSimpleOpen,
  Suitcase,
  Bed,
  Money,
  File,
  Coins,
  Receipt,
  Wallet,
  ChartLineUp,
  ChartPie,
  Check,
  ThumbsDown,
  ThumbsUp,
  PresentationChart,
  Vault,
  Bank,
  Tag,
  UsersThree,
  Strategy,
} from "phosphor-react";
import cycLogo from '../../../assets/images/cyclogo.png'
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
        // {
        //   name: "message",
        //   link: "/messages",
        //   inActiveIcon: Chats,
        //   ActiveIcon: Chats,
        // },
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
              title: "Booked Rooms",
              icon: Receipt,
              link: "/bookings/booked",
            },
            {
              title: "Available Rooms",
              icon: Receipt,
              link: "/bookings/available",
            },
            {
              title: "Blocked Rooms ",
              icon: Receipt,
              link: "/bookings/blocked",
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
            {
              title: "Terms & Conditions",
              icon: Notebook,
              link: "/settings/termsandcondition",
            },
            {
              title: "Chats Support",
              icon: Chats,
              link: "/settings/chats",
            },
            {
              title: "Privacy Policy",
              icon: LockSimpleOpen,
              link: "/settings/privacypolicy",
            },
            {
              title: "Feedbacks",
              icon: ThumbsUp,
              link: "/settings/feedbacks",
            },
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
      <aside className="w-[280px] z-50 bg-gray-200/20 h-full overflow-hidden overflow-y-auto flex flex-col justify-between scroll custom-scroll">

        <div className="space-y-4">
          {/* <img src={cycLogo} className="scale-75 drop-shadow-xl" alt="" /> */}
          <p className="px-6 py-2 pt-4 font-black text-2xl tracking-tighter capitalize text-gray-500">Square.</p>
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
                          ? "bg-blue-500 text-white"
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
                                  ? "bg-blue-500 text-white"
                                  : "hover:bg-blue-500 hover:text-white text-gray-800"
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
            <span className="flex items-center gap-1">
              <img src={profile} className="w-12 h-12" alt="" />
              <span>
                <p className="font-semibold text-[10px]">Rishi Rathore</p>
                <p className="font-semibold text-gray-400 text-[10px]">Hotelier : 212</p>
              </span>
            </span>
            <div className="relative">
              <SignOut onClick={() => { setLogoutShow(p => !p) }} className="scale-x-[-1]" size={20} />

            </div>
          </li>
        </ul>

      </aside>
      <div className={`w-full h-full bg-black/50 z-[100] fixed top-0 left-0 flex items-center justify-center ${logoutShow ? 'visibile opacity-100' : 'invisible opacity-0'}`}>
        <div className="w-1/2 h-min bg-white rounded-xl">
          <span className=" border-b-[1px] flex items-center justify-between p-6">
          <p className="font-semibold text-[12px]">Logout Warning</p>
          <X onClick={()=>{setLogoutShow(false)}} size={20} />
          </span>
          <div className="">
          <span className="p-8 block space-y-4">
          <Warning size={20} />
          <p className="font-bold text-lg text-gray-600">Are you sure, you want to logout?</p>
          <p className="font-medium text-gray-500 text-md ">Logging out will end your current session and you will need to sign in again to access your account.</p>
          </span>
          <span className="space-x-4 block px-6 py-4 border-t-[1px]">
          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">Logout</button>
          <button type="button" onClick={()=>{setLogoutShow(false)}} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5">Cancel</button>
          </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
