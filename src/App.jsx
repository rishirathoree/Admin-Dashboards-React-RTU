  import React from "react";
  import { HomePage, LoginPage, SidebarMain,Navbar, Toaster, UnavailablePage, Breadcrumbs, NotificationsPop, BookingAlertPop, CreateRooms, AllRooms, BookingsAllPage, CreateBookingsPage, BookingOnlinePage, GeneralSettingPage, SecuritySettingPage, NotificationsSettingPage, TariffPlansPage, WalletPage } from "./components/Layout";
  import { Route, Routes, useRoutes } from "react-router-dom";
  import 'boxicons/css/boxicons.min.css'
import Calendar from "./components/Calendar/Calendar";
import { useDispatch, useSelector } from "react-redux";
  const App = () => {
    
    const routes = useRoutes([
      { path: "/login", element: <LoginPage /> },
      // {path:"*", element: <UnavailablePage/>},
      {path:'/*',element:(
        <div className="parent-container flex bg-white h-screen">
          <SidebarMain />
        <div className={`right-container-page h-full fixed top-0 w-[calc(100%-280px)] right-0 rounded-l-md bg-white max-h-full min-h-screen overflow-hidden overflow-y-auto custom-scroll duration-500
        `}>
          <Navbar />
          <BookingAlertPop />
          <NotificationsPop />
          <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/wallet" element={<WalletPage/>} />
          <Route path="/rooms/create" element={<CreateRooms/>} />
          <Route path="/bookings/booking" element={<BookingsAllPage/>} />
          <Route path="/bookings/create" element={<CreateBookingsPage/>} />
          <Route path="/bookings/online" element={<BookingOnlinePage/>} />
          <Route path="/account/general" element={<GeneralSettingPage/>} />
          <Route path="/account/security" element={<SecuritySettingPage/>} />
          <Route path="/settings/notifications" element={<NotificationsSettingPage/>} />
          <Route path="/settings/plans" element={<TariffPlansPage/>} />
          <Route path="/rooms/list" element={<AllRooms/>} />
          <Route path="/calendar" element={<Calendar/>} />
        </Routes>
        </div>
        </div>
      )}
    ]);
    
    return routes;
  };

  export default App;
