import './Header.css'
export const Header = () => {
    return (
        <div className={'header'}>
            <h2>Logo</h2>

            <div className={'btn-input'}>
            <button>Genres</button>
            <div className={'search-wrapper'}>
                <input placeholder={'Search'}></input>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4_48)">
                    <path d="M7.96163 7.95383L6.29122 6.28718M6.29122 6.28718C6.57695 6.00209 6.8036 5.66365 6.95824 5.29116C7.11288 4.91868 7.19247 4.51945 7.19247 4.11628C7.19247 3.7131 7.11288 3.31388 6.95824 2.94139C6.80361 2.56891 6.57695 2.23046 6.29122 1.94538C6.00549 1.66029 5.66628 1.43414 5.29296 1.27986C4.91964 1.12557 4.51951 1.04616 4.11543 1.04616C3.71135 1.04616 3.31122 1.12557 2.9379 1.27986C2.56457 1.43414 2.22536 1.66029 1.93963 1.94538C1.36258 2.52113 1.03839 3.30203 1.03839 4.11628C1.03839 4.93052 1.36258 5.71142 1.93963 6.28718C2.51669 6.86294 3.29935 7.1864 4.11543 7.1864C4.93151 7.1864 5.71417 6.86294 6.29122 6.28718Z" stroke="#AAB3C0" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_4_48">
                        <rect width="9" height="9" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            </div>
            </div>

            <div className={'user-profile'}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4_41)">
                    <path d="M10.6666 6.66667C10.6666 8.14 9.47331 9.33333 7.99998 9.33333C6.52665 9.33333 5.33331 8.14 5.33331 6.66667C5.33331 5.19333 6.52665 4 7.99998 4C9.47331 4 10.6666 5.19333 10.6666 6.66667Z" fill="#02A8D2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16ZM12.18 14.0267C14.0867 12.7 15.3333 10.5 15.3333 8C15.3333 3.94667 12.0533 0.666667 8 0.666667C3.94667 0.666667 0.666667 3.94667 0.666667 8C0.666667 10.5 1.91333 12.7 3.82 14.0267C4.29 13.1467 5.80667 10.6667 8 10.6667C10.1933 10.6667 11.7067 13.1467 12.18 14.0267Z" fill="#02A8D2"/>
                </g>
                <defs>
                    <clipPath id="clip0_4_41">
                        <rect width="16" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            </div>
        </div>
    );
};