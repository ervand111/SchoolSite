import {
  CaretDownOutlined,
  FacebookOutlined,
  InstagramOutlined,

  PhoneOutlined
} from "@ant-design/icons/lib/icons";
import React from "react";

export const categories = [
  {
    id: 1,
    label: 'Home',
    name: "Գլխավոր",
    path: "/"
  },
  {
    id: 2,
    label: 'Pages',
    icon: <CaretDownOutlined/>,
    name: "Մեր Մասին",
    path: "/",
    drb: [
      {id: 1, label: "Գործունեություն", path: "/activity"},
      {id: 2, label: "Աշխատակազմ",path:'/stuff'},
      {id: 3, label: "Պատմություն",path:'/history'},
      {
        id: 4, label: "Խորհուրդներ", drb: [
          {label:"Մանկավարժական",path:"/pedagogic"},
          {label:"Ծնողական",path: "/parentalAdvice"},
          {label:"Աշակերտական",path: "/students"},
        ]
      },
    ]
  },
  {
    id: 3,
    label: 'Events',
    icon: <CaretDownOutlined/>,
    name: "Միջոցառումներ",
    path: "events"
  },
  {
    id: 3,
    label: 'Events',
    icon: <CaretDownOutlined/>,
    name: "Ձեռքբերումներ",
    path: "/achievements"
  },
  {
    id: 6,
    label: 'News',
    path: "news",
    icon: <CaretDownOutlined/>,
    name: "Նորություններ"
  },
  {
    id: 4,
    label: 'Teachers',
    path: "/graduate",
    icon: <CaretDownOutlined/>,
    name: "Շրջանավարտներ"
  },
  {
    id: 5,
    label: 'Gallery',
    path: "/materials",
    icon: <CaretDownOutlined/>,
    name: "Նյութեր"
  },
  {
    id: 7,
    label: 'Contact',
    path: "contact",
    icon: <CaretDownOutlined/>,
    name: "Կապ"
  }
]
export const icons = [
  {
    id: 1,
    name: <FacebookOutlined/>,
    link: 'https://www.facebook.com/GEmini182AvagDproc/?locale=hy_AM'
  },
  {
    id: 2,
    name: <InstagramOutlined/>,
    link: 'https://www.instagram.com/explore/locations/267648748/gevorg-emini-anvan-tiv-182-dproc/?next=%2Falfrayse%2Ftagged%2F&hl=fr'
  },
];


export const news = [
  {id: 1, image: "2.webp", text: "1. Միջոցառում<<Օ, գրքերի աշխարհ,տիեզերք ես անափ>> գրադարանավար Շ.Սարգսյան "},
  {id: 2, image: "images.jpeg", text: "1. Միջոցառում<<Օ, գրքերի աշխարհ,տիեզերք ես անափ>> գրադարանավար Շ.Սարգսյան"},
  {id: 3, image: "3.jpg", text: "1. Միջոցառում<<Օ, գրքերի աշխարհ,տիեզերք ես անափ>> գրադարանավար Շ.Սարգսյան"},
  {id: 4, image: "2.webp", text: "Նորություններ"},
  {id: 5, image: "3.jpg", text: "Նորություններ"},
  {id: 6, image: "images.jpeg", text: "Նորություններ"},
  {id: 7, image: "images.jpeg", text: "Նորություններ"},
  {id: 8, image: "1.jpg", text: "Նորություններ"},
]
export const events = [
  {id: 1, image: "1.jpg", text: "Վերջին զանգի միջոցառում"},
  {id: 2, image: "2.webp", text: "Վերջին զանգի միջոցառում"},
  {id: 3, image: "3.jpg", text: "Վերջին զանգի միջոցառում"},
  {id: 4, image: "1233.jpg", text: "Վերջին զանգի միջոցառում"},
  {id: 5, image: "1233.jpg", text: "Վերջին զանգի միջոցառում"},
  {id: 6, image: "2.webp", text: "Վերջին զանգի միջոցառում"},
  {id: 7, image: "1233.jpg", text: "Վերջին զանգի միջոցառում"},
  {id: 8, image: "3.jpg", text: "Վերջին զանգի միջոցառում"},
]

export const achievements = [
  {id: 1, image: "1.jpg", text: "Օսկար"},
  {id: 2, image: "2.webp", text: "Պատվոգիր"},
  {id: 3, image: "1.jpg", text: "Մրցանակ"},
  {id: 4, image: "3.jpg", text: "Մրցանակ"},
  {id: 5, image: "images.jpeg", text: "Մրցանակ"},
  {id: 6, image: "1.jpg", text: "Մրցանակ"},
  {id: 7, image: "3.jpg", text: "Մրցանակ"},
  {id: 8, image: "images.jpeg", text: "Մրցանակ"},
  {id: 9, image: "3.jpg", text: "Մրցանակ"},
  {id: 9, image: "1.jpg", text: "Մրցանակ"},
  {id: 9, image: "images.jpeg", text: "Մրցանակ"},
  {id: 9, image: "3.jpg", text: "Մրցանակ"},
]

export const carouselComponents = [
  {id: 1, image: "122.gif"},
  {id: 2, image: "111.gif"},
  {id: 3, image: "banner.jpg"},

]


export const brands = [
  {id: 1, image: "brand1.png"},
  {id: 2, image: "brand2.jpg"},
  {id: 3, image: "brand3.jpeg"},
  {id: 4, image: "brand1.png"},
  {id: 5, image: "brand2.jpg"},
  {id: 6, image: "brand3.jpeg"},
]

export const graduate = [
  {id: 1, image: "1.jpg", info: " Մանե Երվանդի Աղաբեկյան", proffesion: "Ուսուցիչ"},
  {id: 2, image: "images.jpeg", info: " Սյունե Գրիգորի Այվազյան", proffesion: "Դիզայներ"},
  {id: 3, image: "images.jpeg", info: " Սյունե Գրիգորի Այվազյան", proffesion: "Դիզայներ"},
  {id: 4, image: "images.jpeg", info: " Սյունե Գրիգորի Այվազյան", proffesion: "Դիզայներ"},
  {id: 5, image: "images.jpeg", info: " Սյունե Գրիգորի Այվազյան", proffesion: "Դիզայներ"},
  {id: 6, image: "images.jpeg", info: " Սյունե Գրիգորի Այվազյան", proffesion: "Դիզայներ"}
]

export const materials = [
  {
    id: 1,
    name: "ՀԻՄՆԱՐԿԻ ԿԱՏԱՐԱԾ ԲՅՈՒՋԵՏԱՅԻՆ ԾԱԽՍԵՐԻ ԵՎ ԲՅՈՒՋԵՏԱՅԻՆ ՊԱՐՏՔԵՐԻ ՄԱՍԻՆ",
    file: "/path/to/your/file1.pdf"
  },
  {
    id: 2,
    name: "2020թ ՀԻՄՆԱՐԿԻ ԿԱՏԱՐԱԾ ԲՅՈՒՋԵՏԱՅԻՆ ԾԱԽՍԵՐԻ ՄԱՍԻՆ",
    file: "/path/to/your/file1.pdf"
  },
  {
    id: 3,
    name: "2019թ 2-րդ կիսամյակ ՀԻՄՆԱՐԿԻ ԿԱՏԱՐԱԾ ԲՅՈՒՋԵՏԱՅԻՆ ԾԱԽՍԵՐԻ ՄԱՍԻՆ",
    file: "/path/to/your/file1.pdf"
  },
  {
    id: 4,
    name: "ՀԻՄՆԱՐԿԻ ԿԱՏԱՐԱԾ ԲՅՈՒՋԵՏԱՅԻՆ ԾԱԽՍԵՐԻ ԵՎ ԲՅՈՒՋԵՏԱՅԻՆ ՊԱՐՏՔԵՐԻ ՄԱՍԻՆ",
    file: "/path/to/your/file1.pdf"
  },
  {
    id: 5,
    name: "ՀԻՄՆԱՐԿԻ ԿԱՏԱՐԱԾ ԲՅՈՒՋԵՏԱՅԻՆ ԾԱԽՍԵՐԻ ԵՎ ԲՅՈՒՋԵՏԱՅԻՆ ՊԱՐՏՔԵՐԻ ՄԱՍԻՆ",
    file: "/path/to/your/file1.pdf"
  },


];


export const data = [
  {
    id: 1,
    label: 'Հայոց լեզու և գրականություն',
    director: {image: '/members.jpeg', name: "Կարեն", surname: "Աչոյան", profession: "Նախագահ"},
    members: [
      {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
      {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
      {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
      {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},

    ]
  },
  {
    id: 2,
    label: 'Օտար լեզուներ',
    director: {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "Նախագահ"},
    members:
      [
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},

      ]
  },
  {
    id: 3,
    label: 'Բնագիտական առարկաներ,ֆիզկուլտուրա',
    director: {image: '/members.jpeg', name: "Գրիգոր", surname: "Գրիգորյան", profession: "Նախագահ"},
    members:
      [
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},

      ]
  },
  {
    id: 4,
    label: 'Մաթեմատիկա և ինֆորմատիկա',
    director: {image: '/members.jpeg', name: "Տարոն", surname: "Սիմոնյան", profession: "Նախագահ"},
    members:
      [
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},

      ]
  },
  {
    id: 4,
    label: 'Հասարակագիտական առարկաներ,ՆԶՊ',
    director: {image: '/1.jpg', name: "Գագիկ", surname: "Գրիգորյան", profession: "Նախագահ"},
    members:
      [
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
        {image: '/members.jpeg', name: "Արմեն", surname: "Գրիգորյան", profession: "խորհրդի անդամ"},
      ]
  },
]