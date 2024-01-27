  import React from "react";
  import { HomePage, LoginPage, SidebarMain,Navbar, Toaster, UnavailablePage, ReservationsPage, Breadcrumbs, CheckinPage } from "./components/Layout";
  import { Route, Routes, useRoutes } from "react-router-dom";
  import 'boxicons/css/boxicons.min.css'
  const App = () => {
    const routes = useRoutes([
      { path: "/login", element: <LoginPage /> },
      // {path:"*", element: <UnavailablePage/>},
      {path:'/*',element:(
        <div className="parent-container flex bg-white h-screen">
          <SidebarMain />
        <div className="right-container-page h-full w-[calc(100%-300px)] rounded-l-md bg-gray-50 max-h-full min-h-screen overflow-hidden overflow-y-auto custom-scroll">
          <Navbar />
          <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/booking/reservations" element={<ReservationsPage/>} />
          <Route path="/booking/checkins" element={<CheckinPage/>} />
        </Routes>
        </div>
        </div>
      )}
    ]);
    
    return routes;
  };

  export default App;
