import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const sidebars = [
    {
      block: "Dashboard",
      icon: "",
      menus: [
        {
          name: "Home",
          link: "/",
          inActiveIcon: "bxs-home",
          ActiveIcon: "bx-home",
        },
        {
          name: "message",
          link: "/messages",
          inActiveIcon: "bxs-home",
          ActiveIcon: "bx-chat",
        },
        {
          name: "analytics",
          link: "/analytics",
          inActiveIcon: "bxs-home",
          ActiveIcon: "bx-chart",
        },
      ],
    },

    {
      block: "Management",
      icon: "",
      menus: [
        {
          name: "Booking",
          link: "/",
          inActiveIcon: "bxs-hotel",
          ActiveIcon: "bx-book",
          subMenus: [
            {
              title: "Reservations",
              icon: "bx-briefcase",
              link: "/booking/reservations",
            },
            {
              title: "Check-ins",
              icon: "bx-calendar-check",
              link: "/booking/checkins",
            },
          ],
        },
      ],
    },

    {
      block: "Financials",
      icon: "",
      menus: [
        {
          name: "Transactions",
          link: "/transactions",
          inActiveIcon: "bxs-rupees",
          ActiveIcon: "bx-rupee",
          subMenus: [
            {
              title: "Invoices",
              icon: "bx-briefcase",
              link: "/transactions/invoices",
            },
            {
              title: "Payments",
              icon: "bx-dollar",
              link: "/transactions/payments",
            },
            {
              title: "Expenses",
              icon: "bx-receipt",
              link: "/transactions/expenses",
            },
          ],
        },
        {
          name: "Reports",
          link: "/reports",
          inActiveIcon: "bxs-report",
          ActiveIcon: "bxs-report",
          subMenus: [
            {
              title: "Financial Reports",
              icon: "bx-bar-chart",
              link: "/reports/financial",
            },
            {
              title: "Profit and Loss",
              icon: "bx-line-chart",
              link: "/reports/profit-loss",
            },
            {
              title: "Balance Sheet",
              icon: "bx-pie-chart",
              link: "/reports/balance-sheet",
            },
          ],
        },
        {
          name: "Accounts",
          link: "/accounts",
          inActiveIcon: "bxs-wallet",
          ActiveIcon: "bx-wallet",
          subMenus: [
            {
              title: "Manage Accounts",
              icon: "bxs-bank",
              link: "/accounts/manage",
            },
            {
              title: "Chart of Accounts",
              icon: "bx-list-ul",
              link: "/accounts/chart",
            },
            {
              title: "Bank Accounts",
              icon: "bx-building",
              link: "/accounts/bank",
            },
          ],
        },
      ],
    },

    {
      block: "Overview",
      icon: "",
      menus: [
        {
          name: "Review Summary",
          link: "/overview/review-summary",
          inActiveIcon: "bx-star",
          ActiveIcon: "bx-star",
        },
        {
          name: "Reviews",
          link: "/overview/reviews",
          inActiveIcon: "bxs-message-square-detail",
          ActiveIcon: "bx-message-square-detail",
          subMenus: [
            {
              title: "All Reviews",
              icon: "bx-list-ul",
              link: "/overview/reviews/all",
            },
            {
              title: "Positive Reviews",
              icon: "bx-like",
              link: "/overview/reviews/positive",
            },
            {
              title: "Negative Reviews",
              icon: "bx-dislike",
              link: "/overview/reviews/negative",
            },
          ],
        },
        {
          name: "Performance Metrics",
          link: "/overview/performance-metrics",
          inActiveIcon: "bxs-chart",
          ActiveIcon: "bx-chart",
          subMenus: [
            {
              title: "Revenue",
              icon: "bx-dollar",
              link: "/overview/metrics/revenue",
            },
            {
              title: "Occupancy Rate",
              icon: "bx-calendar",
              link: "/overview/metrics/occupancy",
            },
            {
              title: "Customer Satisfaction",
              icon: "bx-smile",
              link: "/overview/metrics/satisfaction",
            },
          ],
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
    <aside className="w-[300px] h-full overflow-hidden overflow-y-auto scroll custom-scroll">
      <span className="flex gap-2 px-6 py-4 items-center">
        <h1 className="uppercase font-black leading-none tracking-tighter text-2xl text-black/50 dark:text-white">
          ORECERY
        </h1>
      </span>

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
                    <i className={`bx ${menus.ActiveIcon}`}></i>
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
                  className={`overflow-hidden ${
                    activeDropdown === `${blockIdx}-${menuIdx}`
                      ? "max-h-[400px] visible opacity-100 duration-1000"
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
                          <i className={`bx ${submenus.icon}`}></i>
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
    </aside>
  );
};

export default Sidebar;
