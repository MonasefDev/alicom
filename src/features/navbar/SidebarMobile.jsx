import { useState } from "react";
import styled from "styled-components";

const SidebarData = [
  [
    { icon: "/assets/icons/control/home.svg", name: "Home", link: "/" },
    {
      icon: "/assets/icons/control/list.svg",
      name: "Categories",
      link: "/categories",
    },
    {
      icon: "/assets/icons/control/favorite_border.svg",
      name: "Favorites",
      link: "/favorites",
    },
    {
      icon: "/assets/icons/control/inventory_2.svg",
      name: "My Orders",
      link: "/cart",
    },
  ],
  [
    {
      icon: "/assets/icons/control/language.svg",
      name: "English | USD",
      link: "/",
    },
    {
      icon: "/assets/icons/control/headset_mic.svg",
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      icon: "/assets/icons/control/business.svg",
      name: "About Us",
      link: "/about-us",
    },
  ],
  [
    {
      name: "User agreement",
      link: "/user-agreement",
    },
    {
      name: "Partnership",
      link: "/partnership",
    },
    {
      name: "Privacy policy",
      link: "/privacy-policy",
    },
  ],
];

function SidebarMobile({ onClose, isOpen }) {
  const [selected, setSelected] = useState(SidebarData[0][0]);
  const onselect = (name) => {
    setSelected(name);
    onClose();
  };
  const length = (Arr, index) => {
    let count = 0;
    for (let i = 0; i < index; i++) {
      count += Arr[i].length;
    }
    return count;
  };
  return (
    <StyleSidebar
      $isOpen={isOpen}
      style={{
        transitionDelay: isOpen
          ? "0ms"
          : `${length(SidebarData, SidebarData?.length) + 3}00ms`,
      }}
    >
      <Sidebar $isOpen={isOpen}>
        <Profile>
          <CloseIcon
            onClick={() => onClose()}
            src="/assets/icons/control/close.svg"
            alt="close"
          />
          <img src="/assets/icons/profile.svg" alt="profile" />
          <ButtonContainer>
            <Button>Login</Button>
            <Button>Register</Button>
          </ButtonContainer>
        </Profile>
        {SidebarData.map((list, index1) => (
          <List $isOpen={isOpen} key={index1}>
            {list.map((item, index2) => (
              <ListItem
                $isOpen={isOpen}
                key={index2}
                $icon={Boolean(item.icon)}
                className={selected === item.name ? "active" : ""}
                onClick={() => onselect(item.name)}
                style={{
                  transitionDelay: `${
                    length(SidebarData, index1) + index2 + 3
                  }00ms`,
                }}
              >
                {item.icon && <img src={item.icon} alt={item.name} />}
                <span>{item.name}</span>
              </ListItem>
            ))}
          </List>
        ))}
      </Sidebar>
    </StyleSidebar>
  );
}

const StyleSidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-gray-500);
  height: 100vh;
  transition: all 0.3s ease-in-out;
  width: ${(pros) => (pros.$isOpen ? "100%" : "0")};
  overflow: hidden;
`;

const Sidebar = styled.div`
  height: 100%;
  width: 30rem;
  background-color: var(--color-white);
  overflow-y: auto;
`;

const Profile = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  background-color: var(--color-gray-200);
  img {
    height: 4.4rem;
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 3rem !important;
  width: 3rem;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 0 1rem;
  &:hover {
    background-color: var(--color-gray-300);
  }
  &:first-child {
    border-right: 2px solid var(--color-gray-500);
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: border 0.3s ease-in-out;
  padding: 1rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
  }
  .active {
    background-color: var(--color-gray-200);
    color: var(--color-blue-dark);
    img {
      filter: invert(0.5) sepia(1) saturate(3) hue-rotate(175deg);
    }
  }
`;

const ListItem = styled.li`
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  opacity: ${(pros) => (pros.$isOpen ? "1" : "0")};
  transform: translate(${(pros) => (pros.$isOpen ? "0" : "100%")});
  cursor: pointer;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  padding-left: ${(pros) => !pros.$icon && "5.4rem"};
  &:hover {
    background-color: var(--color-gray-300);
  }
`;

export default SidebarMobile;
