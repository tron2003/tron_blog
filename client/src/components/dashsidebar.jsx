import React from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Sidebar, SidebarItem } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function dashsidebar() {
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
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={"User"}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
          {/* <Sidebar.Item active icon={HiUser} label={"User"} labelColor="dark">
            Profile
          </Sidebar.Item> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
