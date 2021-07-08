import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RightArrowIcon } from "../../res/svgIcon";

const PresentationContents = () => {
    const presentationItems = [
        {
            title: "영업",
            items: [
                { title: "기업영업", route: "/1/1" },
                { title: "외부영업", route: "/1/1" },
                { title: "영업 관리자", route: "/1/1" },
                { title: "기술영업", route: "/1/1" },
                { title: "주요고객사 담당자", route: "/1/1" },
                { title: "솔루션 컨설턴트", route: "/1/1" },
                { title: "해외영업", route: "/1/1" },
            ],
            route: "/1",
        },
        {
            title: "미디어",
            items: [
                { title: "콘텐츠 크리에이터", route: "/2/1" },
                { title: "PD", route: "/2/1" },
                { title: "영상 편집가", route: "/2/1" },
                { title: "에디터", route: "/2/1" },
                { title: "비디오 제작", route: "/2/1" },
                { title: "작가", route: "/2/1" },
                { title: "출판 기획자", route: "/2/1" },
            ],
            route: "/2",
        },
        {
            title: "인사",
            items: [
                { title: "인사담당", route: "/3/1" },
                { title: "리크루터", route: "/3/1" },
                { title: "조직문화", route: "/3/1" },
                { title: "평가 보상", route: "/3/1" },
                { title: "헤드헌터", route: "/3/1" },
                { title: "HRD", route: "/3/1" },
                { title: "HRBP", route: "/3/1" },
            ],
            route: "/3",
        },
        {
            title: "게임 제작",
            items: [
                { title: "게임 기획자", route: "/4/1" },
                { title: "게임 그래픽 디자이너", route: "/4/1" },
                { title: "모바일 게임 개발자", route: "/4/1" },
                { title: "게임 클라이언트 개발자", route: "/4/1" },
                { title: "게임 아티스트", route: "/4/1" },
                { title: "유니티 개발자", route: "/4/1" },
                { title: "게임 서버 개발자", route: "/4/1" },
            ],
            route: "/4",
        },
        {
            title: "금융",
            items: [
                { title: "회계 담당", route: "/5/1" },
                { title: "재무 담당자", route: "/5/1" },
                { title: "IR", route: "/5/1" },
                { title: "투자 증권", route: "/5/1" },
                { title: "재무 분석가", route: "/5/1" },
                { title: "애널리스트", route: "/5/1" },
                { title: "내부통제 담당자", route: "/5/1" },
            ],
            route: "/5",
        },
        {
            title: "기타",
            items: [
                { title: "엔지니어링⋅설계", route: "/6" },
                { title: "물류⋅무역", route: "/7" },
                { title: "제조⋅생산", route: "/8" },
                { title: "의료⋅제작⋅바이오", route: "/9" },
                { title: "교육", route: "/10" },
                { title: "법률⋅법집행기관", route: "/11" },
                { title: "식⋅음료", route: "/12" },
                { title: "건설⋅시설", route: "/13" },
                { title: "공공⋅복지", route: "/14" },
            ],
            route: "/15",
        },
    ];

    return (
        <Contents>
            <Row>
                {presentationItems.map((item, index) => {
                    if (index < 5) {
                        return (
                            <Col key={item.title}>
                                {presentationTitle(item.title, item.route)}
                                {item.items.map((subItem) => (
                                    <StyledLink
                                        to={subItem.route}
                                        key={subItem.title}
                                    >
                                        <SubTitle>{subItem.title}</SubTitle>
                                    </StyledLink>
                                ))}
                                {moreButton(item.route)}
                            </Col>
                        );
                    }
                    return (
                        <Col key={item.title}>
                            {item.items.map((subItem) =>
                                presentationTitle(subItem.title, subItem.route)
                            )}
                        </Col>
                    );
                })}
            </Row>
        </Contents>
    );
};

export default PresentationContents;

const presentationTitle = (title, route) => {
    return (
        <div key={title}>
            <StyledLink to={route}>
                <Title>{title}</Title>
                <RightArrowIcon />
            </StyledLink>
        </div>
    );
};

const moreButton = (route) => {
    return (
        <StyledLink to={route}>
            <SubTitle>더보기</SubTitle>
            <RightArrowIcon />
        </StyledLink>
    );
};

const Contents = styled.div`
    margin: 0 auto;
    max-width: 1280px;

    @media screen and (min-width: 992px) {
        width: 90%;
    }
`;

const Row = styled.div`
    display: flex;
`;

const Col = styled.div`
    display: block;
    float: left;
    width: 16.666%;
    height: 270px;
    padding: 40px 20px 0 0;
    text-align: left;
`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    text-decoration: none;
`;

const Title = styled.h2`
    position: relative;
    font-size: 17px;
    color: #333;
    line-height: 20px;
    vertical-align: top;
    padding-bottom: 15px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const SubTitle = styled.h3`
    position: relative;
    font-size: 13px;
    color: #999;
    padding: 5px 20px 5px 0;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
