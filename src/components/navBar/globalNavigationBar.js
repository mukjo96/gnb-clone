import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../common/logo/logo";
import NavIcon from "./navIcon";

const GlobalNavigationBar = () => {
    const location = useLocation();



    const navItems = [
        { title: '탐색', route: '/wdlist'},
        { title: '커리어 성장', route: '/b'},
        { title: '직군별 연봉', route: '/c'},
        { title: '이력서', route: '/d'},
        { title: '매치업', route: '/e'},
        { title: '프리랜서', route: '/f'},
    ]



    return (
        <Container>
        <NavContainer>
            <Link to ="/">
            <Logo />
            </Link>
            <NavList>
                {
                    navItems.map((item) => (
                        <ItemTitle key={item.title} isselected={location.pathname === item.route}>
                            <Link to={item.route}>{item.title}</Link>
                        </ItemTitle>
                    ))
                }
            </NavList>
            <NavIcon />
            
        </NavContainer>
        </Container>
    )
}

export default GlobalNavigationBar;

const Container = styled.div`

box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`

const NavContainer = styled.nav`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
height: 50px;


@media screen and (max-width: 1280px){
    width: 90%;
}

`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline-start: 0px;
    margin : 0;

    @media screen and (min-width: 768px) and (max-width: 965px){
        flex: 1;
        justify-content: space-evenly;
    }
`

const ItemTitle = styled.li`
    height: inherit;
    display: inline-block;
    
    a{
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

    a{
        padding-right: 0;
padding-left: 0;
font-size: 13px;
    }

}
    box-shadow: ${props => props.isselected ? "inset 0 -2px #258bf7" : "none"};

    :hover {
        box-shadow: inset 0 -2px lightgrey;
    }
    
`