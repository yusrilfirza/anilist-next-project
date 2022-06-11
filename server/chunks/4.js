"use strict";
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 8315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__": () => (/* reexport */ atoms_Label)
});

// UNUSED EXPORTS: Badge, Icons

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/atoms/Label.jsx




const size = {
    m: "14px",
    l: "18px",
    xl: "32px",
    xxl: "64px"
};
const Text = (styled_default()).h1`
    font-size: ${(prop)=>size[prop.size]
};
    font-weight: ${(prop)=>prop.type
};
    color: ${(prop)=>prop.color
};
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
`;
const Label = ({ text , size: size1 , type , color  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Text, {
        size: size1,
        type: type,
        color: color,
        children: text
    });
};
/* harmony default export */ const atoms_Label = (Label);
Label.defaultProps = {
    text: "",
    size: "m",
    type: "normal",
    color: "black"
};
Label.propTypes = {
    text: (external_prop_types_default()).string,
    size: external_prop_types_default().oneOf([
        "m",
        "l",
        "xl"
    ]),
    type: external_prop_types_default().oneOf([
        "normal",
        "bold"
    ]),
    color: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./components/atoms/Icon.jsx




const htmlIcon = {
    plus: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 23 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M20.875 9.15625H13.8438V2.125C13.8438 1.26221 13.144 0.5625 12.2812 0.5625H10.7188C9.85596 0.5625 9.15625 1.26221 9.15625 2.125V9.15625H2.125C1.26221 9.15625 0.5625 9.85596 0.5625 10.7188V12.2812C0.5625 13.144 1.26221 13.8438 2.125 13.8438H9.15625V20.875C9.15625 21.7378 9.85596 22.4375 10.7188 22.4375H12.2812C13.144 22.4375 13.8438 21.7378 13.8438 20.875V13.8438H20.875C21.7378 13.8438 22.4375 13.144 22.4375 12.2812V10.7188C22.4375 9.85596 21.7378 9.15625 20.875 9.15625Z",
            fill: "black"
        })
    }),
    collection: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 19 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M0.125 25V2.34375C0.125 1.04932 1.17432 0 2.46875 0H16.5312C17.8257 0 18.875 1.04932 18.875 2.34375V25L9.5 19.5312L0.125 25Z",
            fill: "black"
        })
    }),
    home: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 25 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12.1689 5.82377L4.16671 12.4145V19.5278C4.16671 19.7119 4.23987 19.8886 4.3701 20.0188C4.50034 20.149 4.67697 20.2222 4.86115 20.2222L9.72487 20.2096C9.90844 20.2087 10.0842 20.1351 10.2137 20.005C10.3432 19.8749 10.4158 19.6988 10.4158 19.5152V15.3611C10.4158 15.1769 10.489 15.0003 10.6192 14.8701C10.7495 14.7398 10.9261 14.6667 11.1103 14.6667H13.8881C14.0722 14.6667 14.2489 14.7398 14.3791 14.8701C14.5093 15.0003 14.5825 15.1769 14.5825 15.3611V19.5121C14.5822 19.6035 14.6 19.6941 14.6347 19.7786C14.6695 19.8631 14.7206 19.9399 14.7851 20.0046C14.8496 20.0693 14.9263 20.1207 15.0107 20.1557C15.0951 20.1907 15.1856 20.2088 15.2769 20.2088L20.1389 20.2222C20.3231 20.2222 20.4997 20.149 20.63 20.0188C20.7602 19.8886 20.8334 19.7119 20.8334 19.5278V12.4097L12.8329 5.82377C12.7389 5.74796 12.6217 5.70662 12.5009 5.70662C12.3801 5.70662 12.2629 5.74796 12.1689 5.82377V5.82377ZM24.8091 10.3034L21.1806 7.31249V1.30077C21.1806 1.16264 21.1257 1.03016 21.028 0.932486C20.9304 0.834811 20.7979 0.779938 20.6598 0.779938H18.2292C18.0911 0.779938 17.9586 0.834811 17.8609 0.932486C17.7632 1.03016 17.7084 1.16264 17.7084 1.30077V4.45225L13.8225 1.2552C13.4496 0.948331 12.9817 0.780551 12.4987 0.780551C12.0158 0.780551 11.5479 0.948331 11.175 1.2552L0.188408 10.3034C0.135668 10.347 0.0920346 10.4005 0.0599998 10.461C0.0279651 10.5214 0.00815734 10.5876 0.00170829 10.6557C-0.00474076 10.7239 0.00229532 10.7926 0.0224145 10.858C0.0425336 10.9234 0.0753416 10.9842 0.118964 11.0369L1.22573 12.3824C1.26924 12.4353 1.32275 12.4791 1.3832 12.5113C1.44365 12.5434 1.50986 12.5634 1.57803 12.57C1.6462 12.5765 1.715 12.5696 1.78049 12.5496C1.84598 12.5295 1.90687 12.4967 1.95968 12.4531L12.1689 4.04426C12.2629 3.96845 12.3801 3.9271 12.5009 3.9271C12.6217 3.9271 12.7389 3.96845 12.8329 4.04426L23.0426 12.4531C23.0953 12.4967 23.1561 12.5295 23.2215 12.5497C23.2869 12.5698 23.3556 12.5768 23.4237 12.5704C23.4918 12.5639 23.558 12.5441 23.6185 12.5121C23.6789 12.48 23.7325 12.4364 23.7761 12.3837L24.8829 11.0382C24.9264 10.9852 24.9591 10.9241 24.979 10.8584C24.9989 10.7927 25.0056 10.7237 24.9987 10.6554C24.9919 10.5872 24.9716 10.5209 24.939 10.4605C24.9065 10.4001 24.8623 10.3467 24.8091 10.3034V10.3034Z",
            fill: "black"
        })
    })
};
const IconWrapper = (styled_default()).div`
    display: flex;
    width: 20px;
`;
const Icons = ({ name  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(IconWrapper, {
        children: htmlIcon[name]
    });
};
/* harmony default export */ const Icon = ((/* unused pure expression or super */ null && (Icons)));
Icons.defaultProps = {
    name: "plus"
};
Icons.propTypes = {
    name: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./components/atoms/Badge.jsx





const BadgeWrapper = (styled_default()).div`
    background-color: ${(prop)=>prop.badgeColor
};
    border-radius: 20px;
    padding: 5px 15px 5px 15px;
`;
const Badge = ({ text , size , type , color , badgeColor  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(BadgeWrapper, {
        badgeColor: badgeColor,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Label, {
            size: size,
            type: type,
            color: color,
            text: text
        })
    });
};
/* harmony default export */ const atoms_Badge = ((/* unused pure expression or super */ null && (Badge)));
Badge.defaultProps = {
    text: "",
    size: "m",
    type: "normal",
    color: "black",
    badgeColor: "white"
};
Badge.propTypes = {
    text: (external_prop_types_default()).string,
    size: external_prop_types_default().oneOf([
        "m",
        "l",
        "xl"
    ]),
    type: external_prop_types_default().oneOf([
        "normal",
        "bold"
    ]),
    color: (external_prop_types_default()).string,
    badgeColor: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./components/atoms/index.js





/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zb": () => (/* reexport */ molecules_Card),
  "V1": () => (/* reexport */ molecules_PageTitle)
});

// UNUSED EXPORTS: WebTitle

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/atoms/index.js + 3 modules
var atoms = __webpack_require__(8315);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/molecules/WebTitle.jsx




const TitleWrapper = (styled_default()).div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
const WebTitle = ()=>{
    return /*#__PURE__*/ _jsxs(TitleWrapper, {
        children: [
            /*#__PURE__*/ _jsx(Label, {
                text: "Anilist",
                size: "xxl",
                type: "bold",
                color: "#FFD542"
            }),
            /*#__PURE__*/ _jsx(Label, {
                text: "Find Your Favorite Anime Here",
                size: "m"
            })
        ]
    });
};
/* harmony default export */ const molecules_WebTitle = ((/* unused pure expression or super */ null && (WebTitle)));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/molecules/Card.jsx





const CardWrapper = (styled_default()).div`
    position: relative;
    display: flex;
    width: 100%;
    height: 400px;
    width: 235px;
    flex-direction: column;
    gap: 7px;
    cursor: pointer;
    padding: 15px;
    &:hover {
        background-color: #d4d4d4;
        border-bottom: solid 4px #ffffff;
    }
    &:hover #button_${(prop)=>prop.id
} {
        display: block;
    }
`;
const ImageWrapper = (styled_default()).div`
    height: 320px;
    width: 205px;
    background-image: url(${(prop)=>prop.src
});
    background-repeat: no-repeat;
    background-position: center;
`;
const CardInfo = (styled_default()).div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 10px 0px 10px 0px;
`;
const AddButton = (styled_default()).button`
    display: none;
    position: absolute;
    z-index: 2;
    bottom: 85px;
    width: 75%;
    margin-right: auto;
    margin-left: 15px;
`;
const Card = ({ id , title , cover , seasonYear , color  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/${id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardWrapper, {
            id: id,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(AddButton, {
                    id: `button_${id}`,
                    children: "Add to collection"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ImageWrapper, {
                    src: cover
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardInfo, {
                    color: color,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Label */.__, {
                            text: title,
                            size: "l",
                            type: "bold"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Label */.__, {
                            text: seasonYear,
                            size: "m",
                            color: "black"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const molecules_Card = (Card);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./components/molecules/PageTitle.jsx





const PageTitle_TitleWrapper = (styled_default()).div`
    padding: 10px 0px 10px 0px;
    display: flex;
    justify-content: space-between;
`;
const Title = (styled_default()).div`
    display: flex;
`;
const PageTitle = ({ title  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(PageTitle_TitleWrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Title, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Label */.__, {
                text: title,
                size: "l",
                type: "bold"
            })
        })
    });
};
/* harmony default export */ const molecules_PageTitle = (PageTitle);
PageTitle.defaultProps = {
    title: ""
};
PageTitle.propTypes = {
    title: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./components/molecules/index.js





/***/ }),

/***/ 1004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bd": () => (/* reexport */ organisms_ContentBanner),
  "Nr": () => (/* reexport */ organisms_ContentList),
  "YE": () => (/* reexport */ organisms_Sidebar)
});

// UNUSED EXPORTS: Header

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./components/molecules/index.js + 3 modules
var molecules = __webpack_require__(849);
;// CONCATENATED MODULE: ./components/organisms/Header.jsx




const HeaderWrapper = (styled_default()).div`
    padding: 25px 20px 25px 20px;
    border-bottom: solid 2px #d2d2d2;
    position: absolute;
    background-color: white;
    right: 0;
    left: 0;
    z-index: 1;
`;
const Header = ()=>{
    return /*#__PURE__*/ _jsx(HeaderWrapper, {
        children: /*#__PURE__*/ _jsx(PageTitle, {})
    });
};
/* harmony default export */ const organisms_Header = ((/* unused pure expression or super */ null && (Header)));

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/atoms/index.js + 3 modules
var atoms = __webpack_require__(8315);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./components/organisms/Sidebar.jsx










const SidebarWrapper = (styled_default()).div`
    bottom: 0;
    top: 0;
    justify-items: center;
    box-shadow: -1px 0 9px -3px #000000;
    background-color: #0e0e0e;
`;
const SidebarHeader = (styled_default()).div`
    padding: 25px 30px 25px 30px;
    background-color: #0e0e0e;
    height: auto;
    margin-bottom: 10px;
`;
const SidebarMenu = (styled_default()).div`
    position: relative;
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background-color: ${(prop)=>prop.active ? "#1c1c1c" : "#0e0e0e"
};
    &:hover {
        background-color: #202020;
        > h1 {
            color: #FFD542;
        }
    }
`;
const ActiveIndicator = (styled_default()).div`
    height: 100%;
    width: 10px;
    background-color: #444444;
    position: absolute;
    border-radius: 10px 0px 0px 10px;
    right: 0;
    top: 0;
`;
const IconWrapper = (styled_default()).div`
    width: 20px;
`;
const menu = [
    {
        title: "Home",
        path: "/",
        icon: free_solid_svg_icons_.faHouse
    },
    {
        title: "Collections",
        path: "/collections",
        icon: free_solid_svg_icons_.faBookmark
    }, 
];
const Sidebar = ()=>{
    const path = (0,router_.useRouter)().pathname;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SidebarWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SidebarHeader, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: "20px",
                    height: "20px",
                    src: "/img/logo_plain.svg",
                    alt: "logo"
                })
            }),
            menu.map((el)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/${el.path}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SidebarMenu, {
                        active: el.path === path,
                        children: [
                            el.path === path ? /*#__PURE__*/ jsx_runtime_.jsx(ActiveIndicator, {}) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx(IconWrapper, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                    size: "xs",
                                    icon: el.icon,
                                    color: "white"
                                })
                            })
                        ]
                    })
                }, el.title)
            )
        ]
    });
};
/* harmony default export */ const organisms_Sidebar = (Sidebar);

// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(9012);
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_);
;// CONCATENATED MODULE: ./components/organisms/ContentList.jsx





const ContentListWrapper = (styled_default()).div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;
const ContentList = ({ data , loading  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ContentListWrapper, {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
            containerClassName: "skeleton-container",
            count: 5,
            height: "400px",
            width: "230px",
            wrapper: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                })
        }) : data.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(molecules/* Card */.Zb, {
                loading: loading,
                id: el.id,
                cover: el.coverImage.large,
                color: el.coverImage.color,
                title: el.title.romaji,
                genres: el.genres,
                seasonYear: el.seasonYear
            }, index)
        )
    });
};
/* harmony default export */ const organisms_ContentList = (ContentList);

;// CONCATENATED MODULE: ./components/organisms/ContentBanner.jsx





const ContentBannerWrapper = (styled_default()).div`
    width: 100%;
    height: auto;
    display: flex;
    gap: 10px;
    overflow-x: auto;
`;
const ContentBanner = ({ data , loading  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ContentBannerWrapper, {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
            containerClassName: "skeleton-container",
            count: 5,
            height: "400px",
            width: "230px",
            wrapper: ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                })
        }) : data.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx(molecules/* Card */.Zb, {
                loading: loading,
                id: el.id,
                cover: el.coverImage.large,
                color: el.coverImage.color,
                title: el.title.romaji,
                genres: el.genres,
                seasonYear: el.seasonYear
            }, index)
        )
    });
};
/* harmony default export */ const organisms_ContentBanner = (ContentBanner);

;// CONCATENATED MODULE: ./components/organisms/index.js






/***/ })

};
;