import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HamburgerAvatar } from "../../common/avatar/avatar";
import { CrossIcon } from "../../res/svgIcon";

const HamburgerMenu = ({ isLoggedIn, setIsLoggedIn, setShowHamburgerMenu }) => {
    return (
        <Container>
            <MenuContainer>
                <MenuHeader>
                    <img
                        alt="wanted logo"
                        src="https://image.rocketpunch.com/company/4084/wanted_logo_1519203285.jpg?s=400x400&t=inside"
                        width={70}
                    />
                    <StyledButton onClick={() => setShowHamburgerMenu(false)}>
                        <CrossIcon />
                    </StyledButton>
                </MenuHeader>
                <MenuBody>
                    {isLoggedIn ? (
                        <>
                            <MyWanted>
                                <StyledLink to="/">MY 원티드</StyledLink>
                                <HamburgerAvatar />
                            </MyWanted>
                            <li>
                                <StyledLink to="/">프로필</StyledLink>
                            </li>
                        </>
                    ) : (
                        <li onClick={() => setIsLoggedIn(true)}>
                            <LoginButton>로그인</LoginButton>
                        </li>
                    )}
                    <li className="onDivider">
                        <StyledLink to="/">이력서</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/">매치업</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/">추천</StyledLink>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <StyledLink to="/">지원 현황</StyledLink>
                        </li>
                    )}
                    <li>
                        <StyledLink to="/">프리랜서</StyledLink>
                    </li>
                    <li className="onDivider">
                        <StyledLink to="/">직군별 연봉</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/">커리어 성장</StyledLink>
                    </li>
                    <li className="onDivider">
                        <StyledLink to="/">기업 서비스</StyledLink>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <LogoutButton onClick={() => setIsLoggedIn(false)}>
                                로그아웃
                            </LogoutButton>
                        </li>
                    )}
                </MenuBody>
            </MenuContainer>
        </Container>
    );
};

export default HamburgerMenu;

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin-top: 0;
    transform: none;
    background: #fff;
`;

const MenuContainer = styled.div`
    border: 1px solid #e1e2e3;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
`;

const MenuHeader = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
`;

const StyledButton = styled.button`
    border: none;
    background: transparent;
    font-size: 20px;
    color: #333;
    font-weight: 500;
    line-height: 1;
`;
const LoginButton = styled(StyledButton)`
    padding: 15px 0;
`;

const LogoutButton = styled(StyledButton)`
    padding: 15px 0;
    color: #999999;
`;

const MenuBody = styled.ul`
    margin: 45px 0 15px;

    li {
        display: flex;
        width: 100%;
        height: auto;

        &.onDivider {
            padding-top: 15px;
            border-top: 1px solid #eee;
            margin-top: 15px;
        }
    }
`;

const MyWanted = styled.li`
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 15px 0;
    font-size: 20px;
    color: #333;
    font-weight: 500;
    line-height: 1;
`;
