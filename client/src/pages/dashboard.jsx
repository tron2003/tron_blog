import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashBar from "../components/dashsidebar";
import Profile from "../components/dashprofile";
import DashPosts from "../components/dashboardpost.jsx";
import DashUsers  from "../components/dashusers.jsx"
import DashComments from "../components/dashcomment.jsx";
import DashboardComponent from "../components/dashboardcomponent.jsx";
export default function dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabfromurl = searchParams.get("tab");
    if (tabfromurl) {
      setTab(tabfromurl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* sideBar */}

      <div>
        <DashBar className="md:w-56" />
      </div>

      {/* profile */}

      {tab === "profile" && <Profile />}

      {/* posts */}
      {tab === "posts" && <DashPosts />}

      {/* users */}

      {tab === "users" && <DashUsers />}

      {tab ==='comments'&&<DashComments/>}

      {tab ==='dash'&&<DashboardComponent/>}
    </div>
  );
}
