(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{26:function(t,e,c){},28:function(t,e,c){},46:function(t,e,c){},60:function(t,e,c){},61:function(t,e,c){"use strict";c.r(e);var a=c(1),s=c.n(a),n=c(17),i=c.n(n),o=(c(26),c(0));var l=function(){return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:""}),Object(o.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:""})]})},r="d03799692be1c26faf0ade18a4205f9f",d="https://image.tmdb.org/t/p/original",j="discover/tv?api_key=".concat(r,"&with_networks=213"),b="discover/movie?api_key=".concat(r,"&with_genres=28"),u=(c(28),c(4)),m=c(18),h=c.n(m).a.create({baseURL:"https://api.themoviedb.org/3"});c(46);var g=function(){var t=Object(a.useState)(),e=Object(u.a)(t,2),c=e[0],s=e[1];return Object(a.useEffect)((function(){h.get("trending/all/week?api_key=".concat(r,"&language=en-US")).then((function(t){console.log(t.data.results[0]),s(t.data.results[0])}))}),[]),Object(o.jsxs)("div",{className:"banner",style:{backgroundImage:"url(".concat(c?d+c.backdrop_path:"",")")},children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{className:"title",children:c?c.name:""}),Object(o.jsxs)("div",{className:"banner_buttons",children:[Object(o.jsx)("button",{className:"button",children:"Play"}),Object(o.jsx)("button",{className:"button",children:"My list"})]}),Object(o.jsx)("h1",{className:"description",children:c?c.overview:""})]}),Object(o.jsx)("div",{className:"fade_bottom"})]})},p=c(19);c(60);var O=function(t){var e=Object(a.useState)([]),c=Object(u.a)(e,2),s=c[0],n=c[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),j=l[0],b=l[1];return Object(a.useEffect)((function(){h.get(t.url).then((function(t){console.log(t.data),n(t.data.results)})).catch((function(t){}))}),[]),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h1",{children:t.title}),Object(o.jsx)("div",{className:"posters",children:s.map((function(e){return Object(o.jsx)("img",{onClick:function(){return t=e.id,console.log(t),void h.get("/movie/".concat(t,"/videos?api_key=").concat(r,"&language=en-US")).then((function(t){0!==t.data.results.length?b(t.data.results[0]):console.log("Array empty")}));var t},className:t.isSmall?"smallPoster":"poster",alt:"poster",src:"".concat(d+e.backdrop_path)})}))}),j&&Object(o.jsx)(p.a,{opts:{height:"390",width:"100%",playerVars:{autoplay:1}},videoId:j.key})]})};var f=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(g,{}),Object(o.jsx)(O,{url:j,title:"Netflix Orginals"}),Object(o.jsx)(O,{url:b,title:"Action",isSmall:!0})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.39120973.chunk.js.map