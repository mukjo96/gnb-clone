import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../common/avatar/avatar";
import { NotiIcon, SearchIcon } from "../../res/svgIcon";

const NavIcon = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <Container>
            <StyledButton>
                <SearchIcon />
            </StyledButton>
            {isLoggedIn ? (
                <>
                    <StyledButton>
                        <NotiIcon />
                    </StyledButton>
                    <StyledButton>
                        <Avatar />
                    </StyledButton>
                </>
            ) : (
                <StyledButton>회원가입/로그인</StyledButton>
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
