import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home2 = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [isopen, setIsOpen] = useState(true);
  return (
    <StyledSidebar>
      <SidebarContainer $isOpen={isopen}>
        <Sidebar>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !isopen && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    isopen && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </Sidebar>
      </SidebarContainer>
      <ToggleIcon>
        <HiMenuAlt3 onClick={() => setIsOpen(!isopen)} />
      </ToggleIcon>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        REACT TAILWIND
      </div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  display: flex;
  gap: 2rem;
`;

const SidebarContainer = styled.div`
  background-color: var(--color-gray-500);
  height: 100vh;
  width: ${(pros) => (pros.$isOpen ? "30rem" : "0")};
  transition: 0.3s ease-in-out;
  overflow: hidden;
`;

const Sidebar = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const ToggleIcon = styled.div`
  cursor: pointer;
  svg {
    width: 6rem;
    height: 6rem;
  }
`;

export default Home2;
