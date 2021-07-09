import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../common/avatar/avatar";
import { NotiIcon, SearchIcon } from "../../res/svgIcon";
import NotiModal from "./notiModal";
import ProfileModal from "./profileModal";

const NavIcon = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMyProfile, setIsMyProfile] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

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
                        >
                            <Avatar border={isMyProfile} />
                        </StyledButton>
                        {isMyProfile && <ProfileModal />}
                    </li>
                </>
            ) : (
                <StyledButton onClick={() => setIsLoggedIn(true)}>
                    회원가입/로그인
                </StyledButton>
            )}
            <Divider />
            <DashboardButton to="/dashboard">기업 서비스</DashboardButton>
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
`;

const Divider = styled.div`
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
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
`;
