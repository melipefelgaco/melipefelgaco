(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var o=a(0),s=a.n(o),i=a(13),r=a.n(i),n=(a(32),a(20)),c=(a(33),a(16)),l=a(17),d=a(56),h=a(57),b=a(2);var u=function(e){var t,a,o=e.themeColors,s=e.toggleTheme;return Object(b.jsxs)("button",{className:"toggle-btn",style:{color:null!==(t=null===o||void 0===o?void 0:o.text)&&void 0!==t?t:"black",backgroundColor:null!==(a=null===o||void 0===o?void 0:o.bg)&&void 0!==a?a:"white"},onClick:function(){return s()},children:[Object(b.jsx)(d.a,{style:{color:(null===o||void 0===o?void 0:o.bg)?"white":"black"}}),Object(b.jsx)(h.a,{style:{color:(null===o||void 0===o?void 0:o.bg)?"black":"white"}})]})},m=function(e){var t=e.themeColors,a=e.toggleTheme;return Object(b.jsx)("div",{className:"navbar-container",children:Object(b.jsxs)(c.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(b.jsx)(c.a.Brand,{children:"Felipe Melga\xe7o Magesty"}),Object(b.jsx)(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(c.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(l.a,{className:"mr-auto",children:[Object(b.jsx)(l.a.Link,{href:"#project-cards",children:"Projects"}),Object(b.jsx)(l.a.Link,{href:"#about",children:"About"}),Object(b.jsx)(l.a.Link,{href:"#contact",children:"Contact"})]})}),Object(b.jsx)(u,{themeColors:t,toggleTheme:a})]})})},g=a.p+"static/media/cConverter.b1022e13.png",j=a.p+"static/media/starWarsApi.a470b663.png",p=a.p+"static/media/tarkovBallistics.4ed60ddd.png",w=a.p+"static/media/simInt.aa28285f.png",f=a.p+"static/media/buttonAesthetics.d35ca68f.png",y=[{img:g,title:"Currency Converter",text:"Currency\xa0Converter\xa0was\xa0a\xa0project\xa0that\xa0initially\xa0started\xa0with\xa0vanilla JS\xa0and\xa0CSS\xa0using\xa0Bootstrap.\xa0Only\xa0later\xa0it\xa0was\xa0remade\xa0in\xa0React.\xa0The calculation\xa0when\xa0it\xa0was\xa0first\xa0deployed\xa0used\xa0to\xa0be\xa0based\xa0on\xa0an\xa0API\xa0that later\xa0changed\xa0to\xa0a\xa0model\xa0that\xa0required\xa0the user to pay for a key\xa0to\xa0exchange\xa0the currency.\xa0So\xa0I\xa0made\xa0the\xa0change\xa0to\xa0what\xa0is\xa0now\xa0the\xa0current\xa0working\xa0API.The\xa0current\xa0API\xa0happens\xa0to\xa0sometimes go down\xa0but\xa0hey,\xa0at\xa0least\xa0it's free.It\xa0was\xa0a\xa0very\xa0fun\xa0project\xa0to\xa0make, and\xa0it\xa0was\xa0my\xa0first\xa0deployed project.\xa0Currently\xa0it\xa0converts\xa0between the\xa0following\xa0currencies:\xa0BRL,\xa0USD\xa0and\xa0EUR.",website:"https://fmagesty.github.io/currency-converter/"},{img:j,title:"Search using the Star Wars API",text:"This project is all about working with an API and Json data. It was a project developed by the PodCodar community and asked the developer to search the starwar ships on the API and show it's information without using any library that worked with it. This was a good challenge and interesting project. It was made in React. Currently it searches for ships but also characters and planets aswell.",website:"https://fmagesty.github.io/react-sw-api/"},{img:p,title:"Escape From Tarkov: Ballistics Simulator",text:" EFT: Ballistics Simulator was made for players to solve the problem of not knowing about which of the ingame ammo to use. Until the developers of EFT release a public API this one will be my only EFT project for the moment.",website:"https://fmagesty.github.io/react-tarkov-ballistics/"},{img:w,title:"React Forms",text:"React\xa0Forms\xa0was\xa0made\xa0to\xa0use\xa0forms\xa0and\xa0deal\xa0with\xa0errors\xa0that\xa0might\xa0appear.\xa0It\xa0consumes\xa0the\xa0API\xa0via\xa0Postman\xa0and\xa0deals\xa0with:\xa0user\xa0sign\xa0in,\xa0user\xa0login\xa0and\xa0profile\xa0update.\xa0This\xa0project\xa0depends\xa0on\xa0a\xa03rd\xa0party\xa0backend\xa0server\xa0to\xa0run\xa0properly,\xa0beyond\xa0my\xa0reach.\xa0It\xa0will\xa0run\xa0smoothly\xa0as\xa0long\xa0as\xa0the\xa0backend\xa0holds, but\xa0the\xa0code\xa0is\xa0still\xa0replicable\xa0on\xa0other\xa0projects,\xa0if\xa0needed.",website:"https://fmagesty.github.io/react-forms/"},{img:a.p+"static/media/bookFinder.041a9667.png",title:"Find Your Book",text:"Find Your Book uses the Google Books API to return these books after a quick search. It shows details about each book. The project was made to enter a front-end challenge.",website:"https://fmagesty.github.io/book-finder/"},{img:f,title:"Button Aesthetics",text:"This page is just a very simple project to generate random colored buttons. The user types a value between the numbers 1 to 1000 and it automatically generates that number of buttons, each one using random RGB colors. Clicking a button will change the screen background but that's all.",website:"https://fmagesty.github.io/button-aesthetics/"}],v=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"section-title",children:"My projects"}),y.map((function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:e.img,alt:""}),Object(b.jsxs)("div",{className:"info-card",children:[Object(b.jsx)("h4",{className:"card-title",children:e.title}),Object(b.jsx)("p",{children:e.text}),Object(b.jsxs)("p",{className:"website",children:["Website:"," ",Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.website,children:e.title})]})]})]},e.title)}))]})},x=function(){return Object(b.jsxs)("div",{className:"about",id:"about",children:[Object(b.jsx)("h1",{className:"section-title",children:"About me"}),Object(b.jsx)("p",{children:"Recently I've been coding every day, and started to drink tea and liked it. I unwind playing a game or listening to music. Or both. Reading, watching content or talking to other people about coding and technology in general is what keeps me excited to go back to my computer and do some more coding, sometimes just mess with old projects or solve some logic exercises in order to not get rusty. I don't know what else to say so just ask if you want to learn more."})]})},k=function(){return Object(b.jsxs)("div",{className:"contact",id:"contact",children:[Object(b.jsx)("h1",{className:"section-title",children:"How to contact"}),Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/fmagesty",children:"My Github Profile"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"E-mail: fmagesty@gmail.com"})]})},O={dark:{text:"white",bg:"black"},light:{text:"black",bg:"white"}};function I(){var e=Object(o.useState)(localStorage.getItem("theme")),t=Object(n.a)(e,2),a=t[0],s=t[1],i=O[a]||O.light;return Object(b.jsxs)("div",{className:"App",style:{backgroundColor:i.bg,color:i.text},children:[Object(b.jsx)(m,{themeColors:i,toggleTheme:function(){var e="light"===a?"dark":"light";s(e),localStorage.setItem("theme",e)}}),Object(b.jsx)("div",{className:"project-cards",id:"project-cards",children:Object(b.jsx)(v,{})}),Object(b.jsx)(x,{}),Object(b.jsx)(k,{})]})}r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e5f146ac.chunk.js.map