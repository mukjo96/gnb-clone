import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileModal = ({ setIsLoggedIn }) => {
    return (
        <>
            <MyProfileModal>
                <MyProfileDropdown>
                    <DropdownItems>
                        <li>
                            <StyledLink to="/">MY 원티드</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">프로필</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">지원 현황</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">제안받기 현황</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">좋아요</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">북마크</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">추천</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/">포인트</StyledLink>
                        </li>
                        <li>
                            <StyledButton onClick={() => setIsLoggedIn(false)}>
                                로그아웃
                            </StyledButton>
                        </li>
                    </DropdownItems>
                </MyProfileDropdown>
            </MyProfileModal>
            <MyProfileTail></MyProfileTail>
        </>
    );
};

export default ProfileModal;

const MyProfileModal = styled.div`
    position: absolute;
    right: 14%;
    margin-top: 13px;
    padding: 0 !important;
    display: block;

    transform: translate(50%, 8px);
`;

const MyProfileDropdown = styled.div`
    overflow: hidden;
    min-width: 194px;
    border-radius: 10px;
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    border: 1px solid #cdcdcd;
    background-color: #fff;
`;

const DropdownItems = styled.ul`
    padding-top: 14px;

    li {
        position: relative;
        display: flex;
        text-align: center;
        height: 34px;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        margin: 0 5%;

        :hover {
            border-radius: 8px;
            background-color: #f7f7f7;
        }
        :nth-child(2) {
            border-bottom: 1px solid lightgrey;
        }
        :nth-child(6) {
            border-bottom: 1px solid lightgrey;
        }
        :last-child {
            height: 50px;
            border-top: 1px solid lightgrey;
            background-color: #f7f7f7;
            margin: 0;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 0 10px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
`;

const StyledButton = styled.button`
    text-decoration: none;
    padding: 0 10px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const MyProfileTail = styled.div`
    position: absolute;
    right: 18.5%;

    transform: translateX(-47px);

    content: "";
    margin-top: 14px;
    border-top: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
    background-color: #fff;
    height: 14px;
    width: 14px;
    display: block;
    border-top-right-radius: 30%;
    transform: rotate(-55deg) skewX(-20deg);
`;
