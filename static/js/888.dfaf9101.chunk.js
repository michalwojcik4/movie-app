"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{713:function(e,t,r){r.d(t,{J:function(){return l}});var n=r(861),a=r(757),c=r.n(a),s=r(243),i=r(791),o="1f94c3a5b4000089afa1d5a1ae98ab1d",u="https://api.themoviedb.org/3",l=function(){var e=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(o,"&page=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),t=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&page=").concat(r));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),[]),r=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),a=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),l=(0,i.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{getTrendingMovies:e,searchMovies:t,getMovieDetails:r,getMovieCast:a,getMovieReviews:l}}},888:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),o=r(689),u=r(87),l=r(713),v=r(883),p="MovieDetails_container__o8VqJ",_="MovieDetails_box__3lVdP",d="MovieDetails_details__tmd20",h="MovieDetails_details__img__74DKe",f="MovieDetails_details__context__jDzKB",m="MovieDetails_details__vote__Qt+46",x="MovieDetails_more_info_list__tk4CD",g="MovieDetails_more_info_list__link__r4FPa",k="MovieDetails_list__noimg__+Q4+Y",j=r(184),w=function(){var e=(0,l.J)().getMovieDetails,t=(0,o.UO)().movieId,r=(0,i.useState)(null),c=(0,a.Z)(r,2),w=c[0],b=c[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e(t);case 3:n=r.sent,b(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e,t]),(0,j.jsx)("div",{className:p,children:w?(0,j.jsxs)("div",{className:_,children:[(0,j.jsxs)("div",{className:d,children:[w.poster_path?(0,j.jsx)("img",{className:h,src:"https://image.tmdb.org/t/p/w500".concat(w.poster_path),alt:w.title}):(0,j.jsx)("div",{className:k,children:(0,j.jsx)("p",{children:"No Image"})}),(0,j.jsxs)("div",{className:f,children:[(0,j.jsxs)("h2",{children:[w.title," ",(0,j.jsxs)("span",{children:["(",w.release_date.slice(0,4),")"]})]}),(0,j.jsx)("p",{className:m,children:Math.round(10*w.vote_average)/10}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:w.overview}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:w.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,j.jsxs)("ul",{className:x,children:[(0,j.jsx)("li",{children:(0,j.jsx)(u.OL,{to:"cast",className:g,style:function(e){return{color:e.isActive?"#FFF":"#000",backgroundColor:e.isActive?"rgb(72, 103, 195)":"#FFF"}},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(u.OL,{to:"reviews",className:g,style:function(e){return{color:e.isActive?"#FFF":"#000",backgroundColor:e.isActive?"rgb(72, 103, 195)":"#FFF"}},children:"Reviews"})})]}),(0,j.jsx)(o.j3,{})]}):(0,j.jsx)(v.a,{})})}}}]);
//# sourceMappingURL=888.dfaf9101.chunk.js.map