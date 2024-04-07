import styled from "styled-components";
import FooterList from "./FooterList";

const socialIcons = [
  {
    id: 1,
    icon: "assets/icons/social/facebook3.svg",
    url: "facebook.com",
  },
  {
    id: 2,
    icon: "assets/icons/social/twitter3.svg",
    url: "twitter.com",
  },
  {
    id: 3,
    icon: "assets/icons/social/instagram3.svg",
    url: "instagram.com",
  },
  {
    id: 4,
    icon: "assets/icons/social/linkedin3.svg",
    url: "linkedin.com",
  },
  {
    id: 5,
    icon: "assets/icons/social/youtube3.svg",
    url: "youtube.com",
  },
];

const footerListData = [
  {
    title: "About",
    links: ["About Us", "Find store", "Categories", "Blogs"],
  },
  {
    title: "Partnership",
    links: ["About Us", "Find store", "Categories", "Blogs"],
  },
  {
    title: "Information",
    links: ["Help Center", "Money Refund", "Shipping", "Contact us"],
  },
  {
    title: "For users",
    links: ["Login", "Register", "Settings", "My Orders"],
  },
];

function Footer() {
  return (
    <StyledFooter>
      <FooterTop>
        <TopContainer>
          <LogoBox>
            <img src="assets/brand/logo-colored.svg" alt="logo" />
            <p>
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <SocialIcons>
              {socialIcons.map((icon) => (
                <a
                  target="_blank"
                  href={icon.url}
                  key={icon.id}
                  rel="noreferrer"
                >
                  <img src={icon.icon} alt="icon" />
                </a>
              ))}
            </SocialIcons>
          </LogoBox>
          {footerListData.map((list) => (
            <FooterList key={list.title} list={list} />
          ))}
          <Apps>
            <p>Get app</p>
            <a target="_blank" href="https://play.google.com" rel="noreferrer">
              <img src="assets/icons/apps/appstore.svg" alt="appstore" />
            </a>
            <a
              target="_blank"
              href="https://www.apple.com/app-store/"
              rel="noreferrer"
            >
              <img src="assets/icons/apps/playstore.svg" alt="playstore" />
            </a>
          </Apps>
        </TopContainer>
      </FooterTop>
      <FooterBottom>
        <BottomContainer>
          <p>© 2024 Ecommerce. </p>
          <Language>
            <img src="assets/flags/us.svg" alt="language" />
            <span>English</span>
            <img src="assets/icons/control/expand_less.svg" alt="arrow-down" />
          </Language>
        </BottomContainer>
      </FooterBottom>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--color-white);

  & > div:last-child {
    background-color: var(--color-gray-300);
  }
`;

const FooterTop = styled.div``;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    color: var(--color-gray-500);
  }
  img {
    height: 4.6rem;
    width: max-content;
  }
`;

const Apps = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: var(--color-gray-dark);
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  img {
    height: 4rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      filter: invert(0.5) sepia(1) saturate(3) hue-rotate(175deg);
    }
  }
`;

const FooterBottom = styled.div`
  height: 6.4rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
`;

const TopContainer = styled(Container)`
  padding: 4rem 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 2fr repeat(5, 1fr);
  @media only screen and (max-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const BottomContainer = styled(Container)`
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    width: max-content;
  }
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: max-content;
  cursor: pointer;
  span {
    transition: all 0.1s ease-in-out;
    &:hover {
      color: var(--color-gray-dark);
    }
  }
  img {
    width: 2.2rem;
  }
`;

export default Footer;
