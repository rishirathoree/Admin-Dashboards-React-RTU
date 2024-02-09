  import React from "react";
  import { HomePage, LoginPage, SidebarMain,Navbar, Toaster, UnavailablePage, ReservationsPage, Breadcrumbs, CheckinPage, NotificationsPop, BookingAlertPop, CreateRooms, AllRooms } from "./components/Layout";
  import { Route, Routes, useRoutes } from "react-router-dom";
  import 'boxicons/css/boxicons.min.css'
import Calendar from "./components/Calendar/Calendar";
  const App = () => {
    const routes = useRoutes([
      { path: "/login", element: <LoginPage /> },
      // {path:"*", element: <UnavailablePage/>},
      {path:'/*',element:(
        <div className="parent-container flex bg-white h-screen">
          <SidebarMain />
        <div className="right-container-page h-full w-[calc(100%-280px)] rounded-l-md bg-white max-h-full min-h-screen overflow-hidden overflow-y-auto custom-scroll">
          <Navbar />
          <BookingAlertPop />
          <NotificationsPop />
          <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/bookings/booked" element={<ReservationsPage/>} />
          <Route path="/bookings/available" element={<ReservationsPage/>} />
          <Route path="/bookings/blocked" element={<ReservationsPage/>} />
          <Route path="/rooms/create" element={<CreateRooms/>} />
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
