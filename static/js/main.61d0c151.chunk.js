(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{402:function(e,t,a){e.exports=a(717)},407:function(e,t,a){},717:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(38),c=a.n(r),s=(a(407),a(737)),l=a(736),i=a(24),u=a.n(i),m=a(115),d=a(728),g=a(738),p=a(740),f=a(742),E=a(745),h=a(739),v=a(743),w=(a(741),a(734),function(e){var t=e.bulkActions,a=e.basePath,o=(e.currentSort,e.displayedFilters),r=(e.exporter,e.filters),c=e.filterValues,s=e.onUnselectItems,l=e.resource,i=e.selectedIds,g=e.showFilter;e.total;return n.a.createElement(m.a,null,t&&n.a.cloneElement(t,{basePath:a,filterValues:c,resource:l,selectedIds:i,onUnselectItems:s}),r&&n.a.cloneElement(r,{resource:l,showFilter:g,displayedFilters:o,filterValues:c,context:"button"}),n.a.createElement(d.a,{basePath:a}),n.a.createElement(u.a,{resource:l,color:"primary",onClick:function(){var e="goog";switch(l){case"googles":e="goog";break;case"heres":e="here";break;case"tomtoms":e="tomt";break;case"bings":e="bing";break;default:e="goog"}console.log(e);var t=new XMLHttpRequest;return t.open("GET",localStorage.getItem("sv")+"/settings/setprovider?provider="+e+"&jwtoken="+localStorage.getItem("token"),!1),t.send(null),alert(t.responseText),t.responseText}},"Set Provider"),n.a.createElement(u.a,{resource:l,color:"primary",onClick:function(){var e=new XMLHttpRequest;return e.open("GET",localStorage.getItem("sv")+"/settings/foceconfig?type=resetKey&jwtoken="+localStorage.getItem("token"),!1),e.send(null),alert(e.responseText),e.responseText}},"Reset Key"))}),b=function(e){return n.a.createElement(g.a,Object.assign({},e,{actions:n.a.createElement(w,null)}),n.a.createElement(p.a,null,n.a.createElement(f.a,{source:"id",label:"Key"}),n.a.createElement(f.a,{source:"report.OK",label:"QUERY_OK"}),n.a.createElement(f.a,{source:"report.OVER_QUERY_LIMIT",label:"QUERY_LIMIT",style:{color:"red"}}),n.a.createElement(f.a,{source:"status",label:"Status"})))},y=function(e){return n.a.createElement(E.a,e,n.a.createElement(h.a,null,n.a.createElement(v.a,{source:"id",label:"Key"})))},k=function(e){return n.a.createElement(E.a,e,n.a.createElement(h.a,null,n.a.createElement(v.a,{source:"id",label:"Key"}),n.a.createElement(v.a,{source:"code"})))},I=a(370),S=a(13),O=a(735),j=a(49);console.log(localStorage.getItem("sv")+"/public-api");var T=localStorage.getItem("sv")+"/public-api",P=function(e,t,a){var o=O.a.fetchJson,n=function(e,t,a){var o=localStorage.getItem("token");switch(null==localStorage.getItem("sv")&&(localStorage.setItem("sv","https://maps.qupworld.com"),T=localStorage.getItem("sv")+"/public-api"),e){case S.d:var n={jwtoken:o};return{url:"".concat(T,"/").concat(t,"?").concat(Object(j.stringify)(n))};case S.g:return{url:"".concat(T,"/").concat(t,"/").concat(a.id)};case S.e:var r={filter:JSON.stringify({id:a.ids}),jwtoken:o};return{url:"".concat(T,"/").concat(t,"?").concat(Object(j.stringify)(r))};case S.f:var c={jwtoken:o};return{url:"".concat(T,"/").concat(t,"?").concat(Object(j.stringify)(c))};case S.h:return{url:"".concat(T,"/").concat(t,"/").concat(a.id),options:{method:"PUT",body:JSON.stringify(a.data)}};case S.a:var s={jwtoken:o};return{url:"".concat(T,"/").concat(t,"?").concat(Object(j.stringify)(s)),options:{method:"POST",body:JSON.stringify(a.data)}};case S.c:console.log(a);var l="";a.ids.forEach(function(e){l+=e+";"});var i={jwtoken:o};return{url:"".concat(T,"/").concat(t,"/").concat(l,"?").concat(Object(j.stringify)(i)),options:{method:"DELETE"}};default:throw new Error("Unsupported fetch action type ".concat(e))}}(e,t,a);return o(n.url,n.options).then(function(t){return function(e,t,a,o){console.log(e.status),(e.status<200||e.status>=300)&&(document.location.href="/");var n=e.json;switch(t){case S.d:return{data:n.map(function(e){return e}),total:parseInt(n.length,10)};case S.a:return{data:Object(I.a)({},o.data,{id:n.id})};default:return{data:n}}}(t,e,0,a)})},R=a(201),x=function(e,t){if(e===R.d){var a=t.username,o=t.password,n=new Request(localStorage.getItem("sv")+"/authadmin/login",{method:"POST",body:JSON.stringify({username:a,password:o}),headers:new Headers({"Content-Type":"application/json"})});return fetch(n).then(function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return console.log(e),e.json()}).then(function(e){var t=e.token;localStorage.setItem("token",t)})}return e===R.e?(localStorage.removeItem("token"),Promise.resolve()):Promise.resolve()},J=function(){return n.a.createElement(s.a,{authProvider:x,dataProvider:P},n.a.createElement(l.a,{options:{label:"GOOGLE"},name:"googles",list:b,create:y}),n.a.createElement(l.a,{options:{label:"HERE"},name:"heres",list:b,create:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[402,1,2]]]);
//# sourceMappingURL=main.61d0c151.chunk.js.map