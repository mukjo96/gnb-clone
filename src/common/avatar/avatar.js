import React from "react";
import styled from "styled-components";

const avatarIconUrl =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDY0IDQ2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY0IDQ2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0zMDUuODcyLDQ1MS45MmMtMi40MTYsMC44MTYtNC44NDgsMS42MDgtNy4yOTYsMi4zMzYNCgkJQzMwMS4wMzIsNDUzLjUyLDMwMy40NTYsNDUyLjcyOCwzMDUuODcyLDQ1MS45MnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTMxNy45OTIsNDQ3LjQ3MmMtMi42MDgsMS4wNC01LjIxNiwyLjA2NC03Ljg3MiwzLjAwOA0KCQlDMzEyLjc3Niw0NDkuNTI4LDMxNS4zOTIsNDQ4LjUxMiwzMTcuOTkyLDQ0Ny40NzJ6Ii8+DQo8L2c+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNFRkVDRTg7IiBjeD0iMjMyIiBjeT0iMjMyIiByPSIyMzIiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUVERTA7IiBkPSJNMjkzLjg5Niw0NTUuNTg0Yy0yLjM2OCwwLjY1Ni00Ljc1MiwxLjI4LTcuMTYsMS44NjQNCgkJQzI4OS4xNDQsNDU2Ljg2NCwyOTEuNTI4LDQ1Ni4yNCwyOTMuODk2LDQ1NS41ODR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0yMTUuMTkyLDQ2My4zMjhjLTIuODMyLTAuMi01LjY1Ni0wLjQxNi04LjQ0OC0wLjcyDQoJCUMyMDkuNTQ0LDQ2Mi45MTIsMjEyLjM2OCw0NjMuMTI4LDIxNS4xOTIsNDYzLjMyOHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTE3Ny4yNTYsNDU3LjQ0Yy0yLjQtMC41ODQtNC43ODQtMS4yMDgtNy4xNi0xLjg2NEMxNzIuNDcyLDQ1Ni4yNCwxNzQuODU2LDQ1Ni44NjQsMTc3LjI1Niw0NTcuNDR6DQoJCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUVERTA7IiBkPSJNMjAxLjk0NCw0NjJjLTIuNTM2LTAuMzI4LTUuMDY0LTAuNjcyLTcuNTc2LTEuMDhDMTk2Ljg3Miw0NjEuMzI4LDE5OS40MDgsNDYxLjY2NCwyMDEuOTQ0LDQ2MnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTIzMiw0NjRjLTQuMjcyLDAtOC41MDQtMC4xMzYtMTIuNzItMC4zNkMyMjMuNDk2LDQ2My44NjQsMjI3LjcyOCw0NjQsMjMyLDQ2NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTE4OS40MTYsNDYwLjAzMmMtMi40MzItMC40NDgtNC44NTYtMC45MjgtNy4yNTYtMS40NTYNCgkJQzE4NC41Niw0NTkuMTA0LDE4Ni45ODQsNDU5LjU4NCwxODkuNDE2LDQ2MC4wMzJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0xNDIuNjA4LDQ0Ni4xMjhjLTMuNjA4LTEuNTEyLTcuMTc2LTMuMDk2LTEwLjY4OC00Ljc3Ng0KCQlDMTM1LjQ0LDQ0My4wMzIsMTM5LjAwOCw0NDQuNjI0LDE0Mi42MDgsNDQ2LjEyOHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTE1My44NzIsNDUwLjQ4Yy0yLjY0OC0wLjk1Mi01LjI2NC0xLjk2OC03Ljg3Mi0zLjAwOA0KCQlDMTQ4LjYwOCw0NDguNTEyLDE1MS4yMjQsNDQ5LjUyOCwxNTMuODcyLDQ1MC40OHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTI0NC43Miw0NjMuNjRjLTQuMjE2LDAuMjI0LTguNDQ4LDAuMzYtMTIuNzIsMC4zNkMyMzYuMjcyLDQ2NCwyNDAuNTA0LDQ2My44NjQsMjQ0LjcyLDQ2My42NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTI1Ny4yNTYsNDYyLjYwOGMtMi44LDAuMzA0LTUuNjI0LDAuNTItOC40NDgsMC43Mg0KCQlDMjUxLjYzMiw0NjMuMTI4LDI1NC40NTYsNDYyLjkxMiwyNTcuMjU2LDQ2Mi42MDh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0yODEuODQ4LDQ1OC41NzZjLTIuNDA4LDAuNTI4LTQuODI0LDEuMDA4LTcuMjU2LDEuNDU2DQoJCUMyNzcuMDE2LDQ1OS41ODQsMjc5LjQ0LDQ1OS4xMDQsMjgxLjg0OCw0NTguNTc2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUVERTA7IiBkPSJNMjY5LjY0LDQ2MC45MTJjLTIuNTEyLDAuNDA4LTUuMDQsMC43NTItNy41NzYsMS4wOA0KCQlDMjY0LjU5Miw0NjEuNjY0LDI2Ny4xMjgsNDYxLjMyOCwyNjkuNjQsNDYwLjkxMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTMzMi4wMzIsNDQxLjM2OGMtMy40OTYsMS42NzItNy4wNDgsMy4yNTYtMTAuNjQsNC43Ng0KCQlDMzI0Ljk4NCw0NDQuNjI0LDMyOC41MzYsNDQzLjA0OCwzMzIuMDMyLDQ0MS4zNjh6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0xNjUuNDI0LDQ1NC4yNTZjLTIuNDU2LTAuNzM2LTQuODgtMS41MjgtNy4yOTYtMi4zMzYNCgkJQzE2MC41NDQsNDUyLjcyOCwxNjIuOTY4LDQ1My41MiwxNjUuNDI0LDQ1NC4yNTZ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0zMjEuMzkyLDQ0Ni4xMjhjLTEuMTIsMC40NzItMi4yNjQsMC44ODgtMy4zOTIsMS4zMzYNCgkJQzMxOS4xMiw0NDcuMDE2LDMyMC4yNjQsNDQ2LjYsMzIxLjM5Miw0NDYuMTI4eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUVERTA7IiBkPSJNMzMyLjM1Miw0NDEuMjI0Yy0wLjEwNCwwLjA0OC0wLjIxNiwwLjA5Ni0wLjMyLDAuMTQ0DQoJCUMzMzIuMTM2LDQ0MS4zMiwzMzIuMjQ4LDQ0MS4yOCwzMzIuMzUyLDQ0MS4yMjR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0xODIuMTUyLDQ1OC41NzZjLTEuNjQtMC4zNi0zLjI3Mi0wLjczNi00Ljg5Ni0xLjEyOA0KCQlDMTc4Ljg4LDQ1Ny44NCwxODAuNTEyLDQ1OC4yMTYsMTgyLjE1Miw0NTguNTc2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUVERTA7IiBkPSJNMTk0LjM2LDQ2MC45MTJjLTEuNjU2LTAuMjcyLTMuMzA0LTAuNTc2LTQuOTUyLTAuODgNCgkJQzE5MS4wNjQsNDYwLjMzNiwxOTIuNzA0LDQ2MC42NDgsMTk0LjM2LDQ2MC45MTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0yMTkuMjgsNDYzLjY0Yy0xLjM2OC0wLjA3Mi0yLjcyOC0wLjIxNi00LjA4OC0wLjMxMkMyMTYuNTYsNDYzLjQyNCwyMTcuOTEyLDQ2My41NjgsMjE5LjI4LDQ2My42NA0KCQl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0yMDYuNzQ0LDQ2Mi42MDhjLTEuNjA4LTAuMTc2LTMuMi0wLjQtNC44LTAuNjA4QzIwMy41NDQsNDYyLjIwOCwyMDUuMTM2LDQ2Mi40MzIsMjA2Ljc0NCw0NjIuNjA4eg0KCQkiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTEzMS45MjgsNDQxLjM1MmMtMC4wODgtMC4wNC0wLjE4NC0wLjA4LTAuMjcyLTAuMTINCgkJQzEzMS43NDQsNDQxLjI3MiwxMzEuODQsNDQxLjMxMiwxMzEuOTI4LDQ0MS4zNTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0yNDguODA4LDQ2My4zMjhjLTEuMzY4LDAuMDk2LTIuNzIsMC4yNC00LjA4OCwwLjMxMg0KCQlDMjQ2LjA4OCw0NjMuNTY4LDI0Ny40NCw0NjMuNDI0LDI0OC44MDgsNDYzLjMyOHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTI5OC41NzYsNDU0LjI1NmMtMS41NTIsMC40NjQtMy4xMTIsMC44OTYtNC42OCwxLjMyOA0KCQlDMjk1LjQ2NCw0NTUuMTUyLDI5Ny4wMjQsNDU0LjcyLDI5OC41NzYsNDU0LjI1NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTMxMC4xMjgsNDUwLjQ4Yy0xLjQwOCwwLjUwNC0yLjgzMiwwLjk2LTQuMjQ4LDEuNDRDMzA3LjI5Niw0NTEuNDQsMzA4LjcyLDQ1MC45ODQsMzEwLjEyOCw0NTAuNDh6DQoJCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUVERTA7IiBkPSJNMTQ2LjAwOCw0NDcuNDcyYy0xLjEyOC0wLjQ0OC0yLjI3Mi0wLjg3Mi0zLjM5Mi0xLjMzNg0KCQlDMTQzLjczNiw0NDYuNiwxNDQuODgsNDQ3LjAxNiwxNDYuMDA4LDQ0Ny40NzJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0xNTguMTI4LDQ1MS45MmMtMS40MTYtMC40OC0yLjg0OC0wLjkzNi00LjI0OC0xLjQ0QzE1NS4yOCw0NTAuOTg0LDE1Ni43MDQsNDUxLjQ0LDE1OC4xMjgsNDUxLjkyeg0KCQkiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTI2Mi4wNTYsNDYyYy0xLjYsMC4yMDgtMy4xOTIsMC40NC00LjgsMC42MDhDMjU4Ljg2NCw0NjIuNDMyLDI2MC40NTYsNDYyLjIwOCwyNjIuMDU2LDQ2MnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjlFREUwOyIgZD0iTTI4Ni43NDQsNDU3LjQ0Yy0xLjYyNCwwLjM5Mi0zLjI1NiwwLjc2OC00Ljg5NiwxLjEyOA0KCQlDMjgzLjQ4OCw0NTguMjE2LDI4NS4xMiw0NTcuODQsMjg2Ljc0NCw0NTcuNDR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5RURFMDsiIGQ9Ik0yNzQuNTg0LDQ2MC4wMzJjLTEuNjQ4LDAuMzA0LTMuMjg4LDAuNjE2LTQuOTUyLDAuODgNCgkJQzI3MS4yOTYsNDYwLjY0OCwyNzIuOTM2LDQ2MC4zMzYsMjc0LjU4NCw0NjAuMDMyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUVERTA7IiBkPSJNMTcwLjEwNCw0NTUuNTg0Yy0xLjU2LTAuNDMyLTMuMTI4LTAuODY0LTQuNjgtMS4zMjgNCgkJQzE2Ni45NzYsNDU0LjcyLDE2OC41MzYsNDU1LjE1MiwxNzAuMTA0LDQ1NS41ODR6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojQzZDM0JEOyIgZD0iTTI4NS4xMDQsMjQ3Ljk1MkMzMTAuOTUyLDIzMC43NDQsMzI4LDIwMS4zNzYsMzI4LDE2OGMwLTUzLjAxNi00Mi45ODQtOTYtOTYtOTZzLTk2LDQyLjk4NC05Niw5Ng0KCWMwLDMzLjM3NiwxNy4wNDgsNjIuNzQ0LDQyLjg5Niw3OS45NTJjMCwwLDAuMDA4LDAuMDA4LDAuMDE2LDAuMDA4Yy0wLjAwOCwwLTAuMDA4LTAuMDA4LTAuMDA4LTAuMDA4DQoJYy02MS44NzIsMTguNjQ4LTExMC4wNDgsNjguODY0LTEyNS41NiwxMzIuMDRMNTMuMzUyLDM4MGMyLjUyOCwzLjA0OCw1LjE1Miw2LjAyNCw3LjgzMiw4Ljk0NGMwLjY0OCwwLjcxMiwxLjMyOCwxLjM5MiwxLjk5MiwyLjA4OA0KCWMyLjA2NCwyLjE5Miw0LjE1Miw0LjM1Miw2LjI5Niw2LjQ2NGMwLjg4OCwwLjg3MiwxLjc5MiwxLjcxMiwyLjY5NiwyLjU2OGMxLjk4NCwxLjg4OCwzLjk5MiwzLjc1Miw2LjA0LDUuNTY4DQoJYzEuMDE2LDAuODk2LDIuMDQ4LDEuNzg0LDMuMDcyLDIuNjY0YzIuMDA4LDEuNzIsNC4wNCwzLjQwOCw2LjExMiw1LjA1NmMxLjA4OCwwLjg3MiwyLjE4NCwxLjcyOCwzLjI4LDIuNTg0DQoJYzIuMDk2LDEuNjE2LDQuMjI0LDMuMTg0LDYuMzc2LDQuNzJjMS4xMTIsMC43OTIsMi4yMDgsMS42LDMuMzM2LDIuMzc2YzIuMjcyLDEuNTY4LDQuNTg0LDMuMDcyLDYuOTEyLDQuNTYNCgljMS4wNDgsMC42NjQsMi4wNzIsMS4zNTIsMy4xMjgsMi4wMDhjMi42ODgsMS42NTYsNS40MjQsMy4yNCw4LjE4NCw0Ljc5MmMwLjcyOCwwLjQwOCwxLjQ0LDAuODQ4LDIuMTc2LDEuMjQ4DQoJYzMuNTY4LDEuOTUyLDcuMTkyLDMuODI0LDEwLjg3Miw1LjU5MmMwLjA4OCwwLjA0LDAuMTg0LDAuMDgsMC4yNzIsMC4xMmMzLjUxMiwxLjY4LDcuMDgsMy4yNzIsMTAuNjg4LDQuNzc2DQoJYzEuMTIsMC40NzIsMi4yNjQsMC44ODgsMy4zOTIsMS4zMzZjMi42MDgsMS4wNCw1LjIxNiwyLjA2NCw3Ljg3MiwzLjAwOGMxLjQwOCwwLjUwNCwyLjgzMiwwLjk2LDQuMjQ4LDEuNDQNCgljMi40MTYsMC44MTYsNC44NDgsMS42MDgsNy4yOTYsMi4zMzZjMS41NTIsMC40NjQsMy4xMTIsMC44OTYsNC42OCwxLjMyOGMyLjM2OCwwLjY1Niw0Ljc1MiwxLjI4LDcuMTYsMS44NjQNCgljMS42MjQsMC4zOTIsMy4yNTYsMC43NjgsNC44OTYsMS4xMjhjMi40MDgsMC41MjgsNC44MjQsMS4wMDgsNy4yNTYsMS40NTZjMS42NDgsMC4zMDQsMy4yODgsMC42MTYsNC45NTIsMC44OA0KCWMyLjUxMiwwLjQwOCw1LjA0LDAuNzUyLDcuNTc2LDEuMDhjMS42LDAuMjA4LDMuMTkyLDAuNDQsNC44LDAuNjA4YzIuOCwwLjMwNCw1LjYyNCwwLjUyLDguNDQ4LDAuNzINCgljMS4zNjgsMC4wOTYsMi43MiwwLjI0LDQuMDg4LDAuMzEyYzQuMjE2LDAuMjQsOC40NDgsMC4zNzYsMTIuNzIsMC4zNzZzOC41MDQtMC4xMzYsMTIuNzItMC4zNg0KCWMxLjM2OC0wLjA3MiwyLjcyOC0wLjIxNiw0LjA4OC0wLjMxMmMyLjgzMi0wLjIsNS42NTYtMC40MTYsOC40NDgtMC43MmMxLjYwOC0wLjE3NiwzLjItMC40LDQuOC0wLjYwOA0KCWMyLjUzNi0wLjMyOCw1LjA2NC0wLjY3Miw3LjU3Ni0xLjA4YzEuNjU2LTAuMjcyLDMuMzA0LTAuNTc2LDQuOTUyLTAuODhjMi40MzItMC40NDgsNC44NTYtMC45MjgsNy4yNTYtMS40NTYNCgljMS42NC0wLjM2LDMuMjcyLTAuNzM2LDQuODk2LTEuMTI4YzIuNC0wLjU4NCw0Ljc4NC0xLjIwOCw3LjE2LTEuODY0YzEuNTYtMC40MzIsMy4xMjgtMC44NjQsNC42OC0xLjMyOA0KCWMyLjQ1Ni0wLjczNiw0Ljg4LTEuNTI4LDcuMjk2LTIuMzM2YzEuNDE2LTAuNDgsMi44NDgtMC45MzYsNC4yNDgtMS40NGMyLjY0OC0wLjk1Miw1LjI2NC0xLjk2OCw3Ljg3Mi0zLjAwOA0KCWMxLjEyOC0wLjQ0OCwyLjI3Mi0wLjg3MiwzLjM5Mi0xLjMzNmMzLjU5Mi0xLjUwNCw3LjE0NC0zLjA4LDEwLjY0LTQuNzZjMC4xMDQtMC4wNDgsMC4yMTYtMC4wOTYsMC4zMi0wLjE0NA0KCWMzLjY4LTEuNzY4LDcuMzA0LTMuNjQsMTAuODcyLTUuNTkyYzAuNzM2LTAuNCwxLjQ0OC0wLjg0LDIuMTc2LTEuMjQ4YzIuNzYtMS41NTIsNS40OTYtMy4xMzYsOC4xODQtNC43OTINCgljMS4wNTYtMC42NDgsMi4wODgtMS4zMzYsMy4xMjgtMi4wMDhjMi4zMjgtMS40ODgsNC42NC0zLDYuOTEyLTQuNTZjMS4xMi0wLjc3NiwyLjIyNC0xLjU3NiwzLjMzNi0yLjM3Ng0KCWMyLjE1Mi0xLjU0NCw0LjI4LTMuMTEyLDYuMzc2LTQuNzJjMS4xMDQtMC44NDgsMi4xOTItMS43MTIsMy4yOC0yLjU4NGMyLjA2NC0xLjY0OCw0LjEwNC0zLjMzNiw2LjExMi01LjA1Ng0KCWMxLjAzMi0wLjg4LDIuMDY0LTEuNzY4LDMuMDcyLTIuNjY0YzIuMDQ4LTEuODE2LDQuMDU2LTMuNjgsNi4wNC01LjU2OGMwLjg5Ni0wLjg1NiwxLjgwOC0xLjcwNCwyLjY5Ni0yLjU2OA0KCWMyLjE0NC0yLjExMiw0LjI0LTQuMjcyLDYuMjk2LTYuNDY0YzAuNjU2LTAuNzA0LDEuMzM2LTEuMzg0LDEuOTkyLTIuMDg4YzIuNjgtMi45Miw1LjMwNC01Ljg5Niw3LjgzMi04Ljk0NGwwLjAwOC0wLjAwOA0KCUMzOTUuMTUyLDMxNi44MTYsMzQ2Ljk3NiwyNjYuNiwyODUuMTA0LDI0Ny45NTJ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";
const Avatar = ({ border, image = "" }) => {
    return (
        <AvatarBorder isactive={border}>
            <AvatarImage
                style={{
                    backgroundImage: `url(${image ? image : avatarIconUrl})`,
                }}
            />
        </AvatarBorder>
    );
};
export default Avatar;

export const HamburgerAvatar = ({ image = "" }) => {
    return (
        <HamburgerAvatarImage
            style={{
                backgroundImage: `url(${image ? image : avatarIconUrl})`,
            }}
        />
    );
};

const AvatarBorder = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: ${(props) =>
        props.isactive ? "1px solid #36f" : "1px solid #e1e2e3"};
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;

const AvatarImage = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
`;

const HamburgerAvatarImage = styled(AvatarImage)`
    width: 44px;
    height: 44px;
    background-color: #ddd;
`;
