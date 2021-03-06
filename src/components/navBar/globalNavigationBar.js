import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../common/logo/logo";
import NavIcon from "./navIcon";
import PresentationContents from "./presentationContents";

const GlobalNavigationBar = () => {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);

    const navItems = [
        { title: "탐색", route: "/wdlist" },
        { title: "커리어 성장", route: "/b" },
        { title: "직군별 연봉", route: "/c" },
        { title: "이력서", route: "/d" },
        { title: "매치업", route: "/e" },
        { title: "프리랜서", route: "/f" },
    ];

    return (
        <Container>
            <MobileNavContainer className={isLoggedIn ? "member" : "nonmember"}>
                <LogoLink className="nonmember" to="/">
                    <Logo />
                </LogoLink>
                <MobileSignup to="/">회원가입하기</MobileSignup>
            </MobileNavContainer>
            <NavContainer>
                <LogoLink to="/">
                    <Logo />
                </LogoLink>
                <NavList>
                    <HomeItemTitle
                        key="홈"
                        isselected={location.pathname === "/"}
                    >
                        <Link to="/">홈</Link>
                    </HomeItemTitle>
                    {navItems.map((item) => (
                        <ItemTitle
                            key={item.title}
                            isselected={location.pathname === item.route}
                            onMouseEnter={() =>
                                item.title === "탐색"
                                    ? setOpen(true)
                                    : setOpen(false)
                            }
                        >
                            <Link to={item.route}>{item.title}</Link>
                        </ItemTitle>
                    ))}
                </NavList>
                <NavIcon
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                />
            </NavContainer>
            <Presentation className={open ? "show" : "hidden"}>
                <ExploreContainer
                    className={open ? "show" : "hidden"}
                    onMouseLeave={() => setOpen(false)}
                >
                    <PresentationContents />
                </ExploreContainer>
            </Presentation>
        </Container>
    );
};

export default GlobalNavigationBar;

const Container = styled.div`
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const NavContainer = styled.nav`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    height: 50px;
    max-width: 1280px;

    @media screen and (max-width: 1280px) {
        width: 90%;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        height: 57px;
        padding-top: 4px;
    }
`;

const LogoLink = styled(Link)`
    @media screen and (max-width: 767px) {
        display: none;

        &.nonmember {
            display: block;
        }
    }
`;
const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline-start: 0px;
    margin: 0;

    @media screen and (min-width: 768px) and (max-width: 965px) {
        flex: 1;
        justify-content: space-evenly;
    }
`;

const ItemTitle = styled.li`
    height: inherit;
    display: inline-block;

    a {
        text-decoration: none;
        font-size: 14px;
        color: #333;
        line-height: 20px;
        font-weight: 600;
        padding: 15px;
        display: inline-block;
        vertical-align: middle;
    }

    @media screen and (min-width: 768px) and (max-width: 965px) {
        a {
            padding-right: 0;
            padding-left: 0;
            font-size: 13px;
        }
    }
    @media screen and (max-width: 767px) {
        :nth-child(n + 4) {
            display: none;
        }
    }
    box-shadow: ${(props) =>
        props.isselected ? "inset 0 -2px #258bf7" : "none"};

    :hover {
        box-shadow: inset 0 -2px lightgrey;
    }
`;

const HomeItemTitle = styled(ItemTitle)`
    @media (min-width: 768px) {
        display: none;
    }
`;

const Presentation = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 50px;
    background-color: rgba(0, 0, 0, 0.4);
    height: 0;
    opacity: 0;
    overflow: hidden;
    -webkit-transition: 0.5s;
    transition: 0.5s;

    @media screen and (max-width: 767px) {
        display: none;
    }
    &.show {
        height: auto;
        opacity: 1;
    }
`;

const ExploreContainer = styled.div`
    position: relative;
    height: 0%;
    max-height: 400px;
    background-color: #fff;
    transition: 0.5s;

    &.show {
        height: 100%;
    }
`;

const MobileNavContainer = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        &.nonmember {
            display: flex;
            width: 100%;
            padding: 15px 20px 0;
            align-items: center;
            justify-content: space-between;
        }

        &.member {
            display: none;
        }
    }
`;

const MobileSignup = styled(Link)`
    color: #36f;
    font-size: 14px;
    line-height: 32px;
    height: 34px;
    border: 1px solid #36f;
    border-radius: 17px;
    padding: 0 14px;
    text-decoration: none;
`;
