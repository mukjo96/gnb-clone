import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../common/avatar/avatar";
import { HamburgerIcon, NotiIcon, SearchIcon } from "../../res/svgIcon";
import HamburgerMenu from "./hamburgerMenu";
import NotiModal from "./notiModal";
import ProfileModal from "./profileModal";

const NavIcon = ({ isLoggedIn, setIsLoggedIn }) => {
    const [isMyProfile, setIsMyProfile] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

    return (
        <Container>
            <StyledButton>
                <SearchIcon />
            </StyledButton>
            {isLoggedIn ? (
                <>
                    <li>
                        <StyledButton
                            onClick={() => {
                                setIsMyProfile(false);
                                setIsNotification(!isNotification);
                            }}
                            className={isNotification ? "on" : "off"}
                        >
                            <NotiIcon
                                color={isNotification ? "#fff" : "#333"}
                            />
                        </StyledButton>
                        {isNotification && <NotiModal />}
                    </li>
                    <li>
                        <StyledButton
                            onClick={() => {
                                setIsNotification(false);
                                setIsMyProfile(!isMyProfile);
                            }}
                            className="profile"
                        >
                            <Avatar border={isMyProfile} />
                        </StyledButton>
                        {isMyProfile && (
                            <ProfileModal setIsLoggedIn={setIsLoggedIn} />
                        )}
                    </li>
                    <li>
                        <StyledButton
                            className="hamburger"
                            onClick={() => setShowHamburgerMenu(true)}
                        >
                            <HamburgerIcon />
                        </StyledButton>
                        {showHamburgerMenu && (
                            <HamburgerMenu
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                                setShowHamburgerMenu={setShowHamburgerMenu}
                            />
                        )}
                    </li>
                </>
            ) : (
                <>
                    <StyledButton
                        className="signUp"
                        onClick={() => setIsLoggedIn(true)}
                    >
                        ????????????/?????????
                    </StyledButton>
                    <li>
                        <StyledButton
                            className="hamburger"
                            onClick={() => setShowHamburgerMenu(true)}
                        >
                            <HamburgerIcon />
                        </StyledButton>
                        {showHamburgerMenu && (
                            <HamburgerMenu
                                isLoggedIn={isLoggedIn}
                                setIsLoggedIn={setIsLoggedIn}
                                setShowHamburgerMenu={setShowHamburgerMenu}
                            />
                        )}
                    </li>
                </>
            )}
            <Divider />
            <DashboardButton to="/dashboard">?????? ?????????</DashboardButton>
        </Container>
    );
};

export default NavIcon;

const Container = styled.ul`
    display: flex;
    align-items: center;
`;

const StyledButton = styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    padding: 0 10px;
    text-align: center;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;

    :hover {
        cursor: pointer;
    }

    &.on {
        border-radius: 50%;
        background-color: #36f;
        width: 28px;
        margin: 0 5px;
        height: 28px;

        svg {
            margin: 0 -100%;
        }
    }

    &.profile {
        @media screen and (max-width: 767px) {
            display: none;
        }
    }

    &.hamburger {
        display: none;
        @media screen and (max-width: 767px) {
            display: inline-block;
        }
    }

    &.signUp {
        @media screen and (max-width: 767px) {
            display: none;
        }
    }
`;

const Divider = styled.div`
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const DashboardButton = styled(Link)`
    font-size: 13px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    margin: 0 0 0 15px;
    font-weight: 400;
    text-decoration: none;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;
