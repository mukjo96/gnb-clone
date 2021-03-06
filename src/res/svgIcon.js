import styled from "styled-components";

const Icon = styled.svg.attrs({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
})``;

const SvgLarge = styled(Icon)`
    width: 24px;
    height: 24px;
`;
const Svg = styled(Icon)`
    width: 18px;
    height: 18px;
`;
const SvgSmall = styled(Icon)`
    width: 15px;
    height: 15px;
`;

export const SearchIcon = () => (
    <Svg viewBox="0 0 18 18">
        <path
            fill="#333"
            stroke="#333"
            strokeWidth=".3"
            d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
        ></path>
    </Svg>
);

export const NotiIcon = ({ color }) => (
    <Svg viewBox="0 0 18 18">
        <path
            fill={color}
            stroke={color}
            strokeWidth=".3"
            d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
        ></path>
    </Svg>
);

export const HamburgerIcon = () => (
    <Svg viewBox="0 0 18 18">
        <path
            fill="#333"
            stroke="#333"
            strokeWidth=".3"
            d="M15 13.688c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563zm0-5.25c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563zm0-5.25c.31 0 .563.251.563.562 0 .31-.252.563-.563.563H3c-.31 0-.563-.252-.563-.563 0-.31.252-.563.563-.563z"
        ></path>
    </Svg>
);

export const CrossIcon = () => (
    <SvgLarge viewBox="0 0 24 24">
        <path
            fill="#999"
            strokeWidth=".3"
            d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
        ></path>
    </SvgLarge>
);

export const RightArrowIcon = () => (
    <SvgSmall viewBox="0 0 22 22">
        <path
            d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
            transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"
            fill="#999"
        />
    </SvgSmall>
);
