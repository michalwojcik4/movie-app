"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{713:function(t,e,r){r.d(e,{Df:function(){return s},M1:function(){return v},TP:function(){return l},tx:function(){return f},z1:function(){return p}});var n=r(861),c=r(757),a=r.n(c),o=r(243),u={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY,i="https://api.themoviedb.org/3",s=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(u,"&page=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e,"&page=").concat(r));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},168:function(t,e,r){r.r(e),r.d(e,{default:function(){return s}});var n=r(439),c=r(791),a=r(689),o=r(713),u={list:"Reviews_list__okdpy",list__item:"Reviews_list__item__QxZSA"},i=r(184),s=function(){var t=(0,a.UO)().movieId,e=(0,c.useState)([]),r=(0,n.Z)(e,2),s=r[0],p=r[1];return(0,c.useEffect)((function(){(0,o.tx)(t).then((function(t){p(t.results)}))}),[t]),(0,i.jsx)(i.Fragment,{children:0!==s.length?(0,i.jsx)("div",{children:(0,i.jsx)("ul",{className:u.list,children:s.map((function(t){return(0,i.jsx)("li",{className:u.list__item,children:(0,i.jsxs)("blockquote",{children:[(0,i.jsx)("p",{children:t.content}),(0,i.jsx)("footer",{className:u.list__author,children:t.author})]})},t.id)}))})}):(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Sorry, No reviews on this film."})})})}}}]);
//# sourceMappingURL=168.53bb2073.chunk.js.map