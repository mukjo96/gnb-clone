import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RightArrowIcon } from "../../res/svgIcon";

const NotiModal = () => {
    const notifyData = [
        {
            title: "지원",
            text: "A기업(A)에 서류 통과 했습니다. 채용 담당자의 연락을 기다려 주세요.",
            time: "2021.07.08 (목)",
        },
        {
            title: "지원",
            text: "B기업(B)에 서류 통과 했습니다. 채용 담당자의 연락을 기다려 주세요.",
            time: "2021.07.08 (목)",
        },
        {
            title: "지원",
            text: "C기업(C)에 서류 통과 했습니다. 채용 담당자의 연락을 기다려 주세요.",
            time: "2021.07.08 (목)",
        },
        {
            title: "지원",
            text: "D기업(D)에 서류 통과 했습니다. 채용 담당자의 연락을 기다려 주세요.",
            time: "2021.07.08 (목)",
        },
        {
            title: "지원",
            text: "E기업(E)에 서류 통과 했습니다. 채용 담당자의 연락을 기다려 주세요.",
            time: "2021.07.08 (목)",
        },
        {
            title: "지원",
            text: "F기업(F)에 서류 통과 했습니다. 채용 담당자의 연락을 기다려 주세요.",
            time: "2021.07.08 (목)",
        },
    ];

    return (
        <>
            <MyNotiModal>
                <MyNotiDropdown>
                    <DropdownItems>
                        {notifyData.map((item) => (
                            <li>{renderNotificationBody(item)}</li>
                        ))}
                    </DropdownItems>
                </MyNotiDropdown>
            </MyNotiModal>
            <MyNotiTail />
        </>
    );
};

const renderNotificationBody = ({ title, text, time }) => {
    return (
        <NotiItemBody>
            <NotiBody>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <TimeStamp>{time}</TimeStamp>
            </NotiBody>
            <NotiRight>
                <RightArrowIcon />
            </NotiRight>
        </NotiItemBody>
    );
};

export default NotiModal;

const MyNotiModal = styled.div`
    position: absolute;
    right: 23%;
    max-height: 600px;
    height: 100%;
    margin-top: 13px;
    padding: 0 !important;
    display: block;
    width: 395px;

    transform: translate(50%, 8px);
`;

const MyNotiDropdown = styled.div`
    overflow: hidden;

    border-radius: 10px;
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    border: 1px solid #cdcdcd;
    background-color: #fff;
`;

const DropdownItems = styled.ul`
    li {
        position: relative;
        height: 100%;
        width: 100%;

        font-size: 14px;
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

const MyNotiTail = styled.div`
    position: absolute;
    right: 23%;

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

const NotiItemBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px;
    padding: 13px 17px 11px !important;
    min-height: 83px;

    :hover {
        border-radius: 8px;
        background-color: #f7f7f7;
        cursor: pointer;
    }
`;

const NotiBody = styled.div``;

const NotiRight = styled.div``;

const Title = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #3a68f9;
    margin-bottom: 6px;
    line-height: normal;
`;

const Text = styled.p`
    width: 310px;
    overflow: hidden;
    display: -webkit-box;
    word-break: break-all;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: 14px;
    font-weight: 500;
    color: #111;
    line-height: normal;
    margin-bottom: 7px;
`;

const TimeStamp = styled.p`
    font-size: 12px;
    color: #767676;
    margin-top: 4px;
    font-weight: 400;
    line-height: normal;
`;
