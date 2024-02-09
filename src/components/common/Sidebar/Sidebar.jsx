import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  SignOut,
  Calendar,
  House,
  Gear,
  Chats,
  Storefront,
  ChartLine,
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
          name: "message",
          link: "/messages",
          inActiveIcon: Chats,
          ActiveIcon: Chats,
        },
        {
          name: "analytics",
          link: "/analytics",
          inActiveIcon: ChartLine,
          ActiveIcon: ChartLine,
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

    // {
    //   block: "Financials",
    //   icon: "",
    //   menus: [
    //     {
    //       name: "Transactions",
    //       link: "/transactions",
    //       inActiveIcon: "bxs-rupees",
    //       ActiveIcon: "bx-rupee",
    //       subMenus: [
    //         {
    //           title: "Invoices",
    //           icon: Receipt,
    //           link: "/transactions/invoices",
    //         },
    //         {
    //           title: "Payments",
    //           icon: Coins,
    //           link: "/transactions/payments",
    //         },
    //         {
    //           title: "Expenses",
    //           icon: Wallet,
    //           link: "/transactions/expenses",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Reports",
    //       link: "/reports",
    //       inActiveIcon: "bxs-report",
    //       ActiveIcon: "bxs-report",
    //       subMenus: [
    //         {
    //           title: "Financial Reports",
    //           icon:PresentationChart,
    //           link: "/reports/financial",
    //         },
    //         {
    //           title: "Profit and Loss",
    //           icon: ChartLineUp,
    //           link: "/reports/profit-loss",
    //         },
    //         {
    //           title: "Balance Sheet",
    //           icon: ChartPie,
    //           link: "/reports/balance-sheet",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Accounts",
    //       link: "/accounts",
    //       inActiveIcon: "bxs-wallet",
    //       ActiveIcon: "bx-wallet",
    //       subMenus: [
    //         {
    //           title: "Manage Accounts",
    //           icon: Vault,
    //           link: "/accounts/manage",
    //         },
    //         {
    //           title: "Bank Accounts",
    //           icon: Bank,
    //           link: "/accounts/bank",
    //         },
    //       ],
    //     },
    //   ],
    // },

    // {
    //   block: "Overview",
    //   icon: "",
    //   menus: [
    //     {
    //       name: "Review Summary",
    //       link: "/overview/review-summary",
    //       inActiveIcon: Receipt,
    //       ActiveIcon: Receipt,
    //     },
    //     {
    //       name: "Reviews",
    //       link: "/overview/reviews",
    //       inActiveIcon: Check,
    //       ActiveIcon: Check,
    //       subMenus: [
    //         {
    //           title: "All Reviews",
    //           icon: Tag,
    //           link: "/overview/reviews/all",
    //         },
    //         {
    //           title: "Positive Reviews",
    //           icon: ThumbsUp,
    //           link: "/overview/reviews/positive",
    //         },
    //         {
    //           title: "Negative Reviews",
    //           icon: ThumbsDown,
    //           link: "/overview/reviews/negative",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Performance Metrics",
    //       link: "/overview/performance-metrics",
    //       inActiveIcon: "bxs-chart",
    //       ActiveIcon: "bx-chart",
    //       subMenus: [
    //         {
    //           title: "Revenue",
    //           icon: "bx-dollar",
    //           link: "/overview/metrics/revenue",
    //         },
    //         {
    //           title: "Occupancy Rate",
    //           icon: Strategy,
    //           link: "/overview/metrics/occupancy",
    //         },
    //         {
    //           title: "Customer Satisfaction",
    //           icon: UsersThree,
    //           link: "/overview/metrics/satisfaction",
    //         },
    //       ],
    //     },
    //   ],
    // },

    {
      block: "Maintenance",
      icon: "",
      menus: [
        {
                name: "Staffs",
                link: "/maintenance/staffs",
                inActiveIcon: UsersThree,
                ActiveIcon: UsersThree,
        }
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
  ${
    !menus.subMenus && location.pathname.endsWith(menus.link)
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
                      className={`bx bx-chevron-up duration-700 ${
                        activeDropdown === `${blockIdx}-${menuIdx}`
                          ? ""
                          : "rotate-180"
                      }`}
                    ></i>
                  )}
                </div>
                <div
                  className={`overflow-hidden  ${
                    activeDropdown === `${blockIdx}-${menuIdx}`
                      ? "max-h-[400px] visible opacity-100 duration-1000 "
                      : "duration-200 max-h-0 invisible opacity-0"
                  }`}
                >
                  {menus.subMenus &&
                    menus.subMenus.map((submenus, submenuIdx) => (
                      <Link to={submenus.link} key={submenuIdx}>
                        <span
                          className={`w-full flex items-center cursor-pointer gap-2 pl-12  py-4
                     ${
                       location.pathname.endsWith(submenus.link)
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
        <li onClick={()=>{setActiveDropDown('setting')}} className={`px-6 py-4 flex items-center gap-2 ${activeDropdown === 'setting' ? 'bg-blue-500 text-white' : ''}`}>
          <Gear size={20} />
        <p className="tracking-normal text-[10px] font-medium">Setting</p>
        </li>
        <li className="px-6 py-4 flex items-center gap-2">
          <SignOut size={20} />
        <p className="tracking-normal text-[10px] font-medium">Logout</p>
        </li>
      </ul>

    </aside>
  );
};

export default Sidebar;
