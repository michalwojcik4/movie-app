"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[76],{713:function(e,t,r){r.d(t,{J:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s=r(243),u=r(791),o="1f94c3a5b4000089afa1d5a1ae98ab1d",i="https://api.themoviedb.org/3",p=function(){var e=(0,u.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o,"&page=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),t=(0,u.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&page=").concat(r));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),[]),r=(0,u.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),a=(0,u.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),p=(0,u.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{getTrendingMovies:e,searchMovies:t,getMovieDetails:r,getMovieCast:a,getMovieReviews:p}}},328:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),o=r(689),i=r(713),p="Cast_list__GlWio",l="Cast_list__item__6kI+k",v="Cast_list__img__PHIDR",f="Cast_list__noimg__lH7lj",h=r(184),d=function(){var e=(0,i.J)().getMovieCast,t=(0,o.UO)().movieId,r=(0,u.useState)([]),c=(0,a.Z)(r,2),d=c[0],m=c[1];return(0,u.useEffect)((function(){var r=function(){var r=(0,n.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e(t);case 3:n=r.sent,m(n.cast),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching cast data:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e,t]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{className:p,children:d.map((function(e){return(0,h.jsxs)("li",{className:l,children:[e.profile_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:d.name,className:v}):(0,h.jsx)("div",{className:f,children:"No Image"}),(0,h.jsx)("p",{children:e.name})]},e.id)}))})})}}}]);
//# sourceMappingURL=76.d67ef3c3.chunk.js.map