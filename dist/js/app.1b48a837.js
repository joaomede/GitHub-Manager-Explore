(function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/github-manager-explore/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4678:function(e,t,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="4678"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),r=n("a6f4"),a=n("1840"),i=(n("99af"),n("5530")),s=n("478e"),c=n("a18f"),l=n.n(c),u=n("74ca"),f=n("2bf2"),d=n("c2c3");function g(e){var t=Object(s["a"])({uri:e,fetch:l.a}),n=Object(d["a"])((function(e,t){var n=t.headers,o=window.$cookies.get("token");return{headers:Object(i["a"])(Object(i["a"])({},n),{},{authorization:o?"Bearer ".concat(o):null})}})),o=new u["a"]({link:n.concat(t),cache:new f["a"],connectToDevTools:!0});return o}var b=Object(r["e"])({setup:function(e,t){var n=t.root,i=t.refs;Object(r["u"])((function(){l.value=i.loadingRef||null,c.value=i.confirmRef||null,s.value=i.notifyRef||null,o["default"].nextTick((function(){l.value=i.loadingRef||null,c.value=i.confirmRef||null,s.value=i.notifyRef||null}))})),Object(r["x"])((function(){l.value=i.loadingRef||null,c.value=i.confirmRef||null,s.value=i.notifyRef||null,o["default"].nextTick((function(){l.value=i.loadingRef||null,c.value=i.confirmRef||null,s.value=i.notifyRef||null}))}));var s=Object(r["B"])(null),c=Object(r["B"])(null),l=Object(r["B"])(null),u=g(n.$store.getters.getUrl);Object(r["y"])(a["DefaultApolloClient"],u);var f=Object(r["A"])({title:"Github Manager Explore ",left:!1,menuDesktop:!1,login:null});function d(){n.$cookies.remove("profile","/"),n.$store.dispatch("boot"),n.$router.push("/login")}Object(r["u"])((function(){n.$store.dispatch("boot"),n.$store.dispatch("setNotify",s.value.show),n.$store.dispatch("setConfirmDialog",c.value.confirm),n.$store.dispatch("setLoading",{on:l.value.on_,off:l.value.off_})}));var b=function(){return Object(r["g"])("div",[Object(r["g"])("headerMobile",{attrs:{headertitle:f.title,left:f.left},on:{logout:function(){d()},update:function(e){f.left=e}}}),Object(r["g"])("drawerMobile",{attrs:{width:200,left:f.left},on:{update:function(e){f.left=e}}})])};return function(){return Object(r["g"])("v-app",{attrs:{id:"app"}},[Object(r["g"])("loadingComponent",{ref:"loadingRef"}),Object(r["g"])("dialogConfirm",{ref:"confirmRef"}),Object(r["g"])("notifyComponent",{ref:"notifyRef"}),b(),Object(r["g"])("v-main",{class:"ma-4"},[Object(r["g"])("router-view")]),Object(r["g"])("footerLayout")])}}}),p=n("9483");Object(p["a"])("".concat("/github-manager-explore/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("45fc");var v=n("8c4f"),j=Object(r["e"])({setup:function(){return function(){return Object(r["g"])("div",{class:"ma-2"})}}}),m=(n("96cf"),n("1da1")),h=n("8785"),O=n("9530"),y=n.n(O);function w(){var e=Object(h["a"])(["\n        query {\n          viewer {\n            login\n            avatarUrl\n            name\n            status {\n              id\n              message\n            }\n          }\n        }\n      "]);return w=function(){return e},e}var k=Object(r["e"])({setup:function(e,t){var n=t.root,i=Object(r["A"])({token:""});Object(r["u"])((function(){n.$nextTick((function(){void 0!==n.cProfile.login&&n.$router.push("/")}))}));var s=Object(a["useQuery"])(y()(w()));function c(){return l.apply(this,arguments)}function l(){return l=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.$cookies.set("token",i.token,"7d","/"),e.prev=1,e.next=4,s.refetch();case 4:t=e.sent,o=t.data,n.$cookies.set("profile",o.viewer,"7d","/"),n.$store.dispatch("boot"),n.$router.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),console.log(e.t0),n.notify("Error: Invalid Token","red",8);case 15:case"end":return e.stop()}}),e,null,[[1,11]])}))),l.apply(this,arguments)}return function(){return Object(r["g"])("v-card",{class:"ml-auto mr-auto mt-4",attrs:{"max-width":400}},[Object(r["g"])("v-card-title",["Login"]),Object(r["g"])("v-text-field",{attrs:{dense:!0,outlined:!0,label:"Personal Token"},class:"ma-2",model:{value:i.token,callback:function(e){o["default"].set(i,"token",e)}}}),Object(r["g"])("v-divider",{class:"mx-4"}),Object(r["g"])("v-card-actions",[Object(r["g"])("v-spacer"),Object(r["g"])("v-btn",{attrs:{color:"primary"},on:{click:function(){c()}}},["Login"])])])}}});n("a4d3"),n("e01a"),n("4160"),n("d81d"),n("b0c0"),n("159b"),n("6abe");function P(){var e=Object(h["a"])(["\n        query repositoryOwner(\n          $login: String!\n          $name: String!\n          $first: Int\n          $last: Int\n          $after: String\n          $before: String\n        ) {\n          repositoryOwner(login: $login) {\n            repository(name: $name) {\n              vulnerabilityAlerts(\n                first: $first\n                last: $last\n                after: $after\n                before: $before\n              ) {\n                totalCount\n                pageInfo {\n                  endCursor\n                  startCursor\n                }\n                edges {\n                  node {\n                    id\n                    securityVulnerability {\n                      advisory {\n                        id\n                        description\n                      }\n                    }\n                    securityAdvisory {\n                      id\n                      description\n                      origin\n                      identifiers {\n                        type\n                        value\n                      }\n                      permalink\n                      publishedAt\n                      summary\n                      severity\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      "]);return P=function(){return e},e}function x(){var e=Object(h["a"])(["\n        query repositoryOwner(\n          $login: String!\n          $first: Int\n          $last: Int\n          $after: String\n          $before: String\n        ) {\n          repositoryOwner(login: $login) {\n            repositories(\n              first: $first\n              last: $last\n              after: $after\n              before: $before\n              orderBy: { field: UPDATED_AT, direction: DESC }\n            ) {\n              totalCount\n              pageInfo {\n                endCursor\n                startCursor\n              }\n              edges {\n                node {\n                  name\n                  isPrivate\n                  updatedAt\n                  vulnerabilityAlerts(first: 1) {\n                    edges {\n                      node {\n                        id\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      "]);return x=function(){return e},e}var $=Object(r["e"])({setup:function(e,t){var n=t.root,o=Object(r["A"])({loading:!1,mounted:!1,windowSize:{}}),s=Object(r["A"])({allRepositoryList:[],options:{},headers:[{text:"Repository",align:"start",sortable:!1,value:"name"},{text:"Privacy",value:"isPrivate",sortable:!1},{text:"Vulnerability Alerts",value:"vulnerabilityAlerts",sortable:!1}],totalCount:0,lastPage:1,pageInfo:{endCursor:null,startCursor:null}}),c=Object(r["A"])({vulnerabilitySelected:{},vulnerabilityLoaded:[],dialog:!1}),l=Object(r["a"])((function(){return{dialogConfig:{dialog:c.dialog,title:c.vulnerabilitySelected.name,subtitle:"",eventClose:"eventClose",actions:[{color:"blue white--text",event:"eventClose",name:"Close"}]}}})),u=Object(a["useQuery"])(y()(x()),{login:"",first:15,last:null,after:null,before:null}),f=Object(a["useQuery"])(y()(P()),{login:"",name:"",first:15,last:null,after:null,before:null});function d(){return g.apply(this,arguments)}function g(){return g=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.loading=!0,n.cLoading.on(),e.prev=2,e.next=5,u.refetch({login:n.cProfile.login,first:s.options.page>s.lastPage||s.options.page===s.lastPage?s.options.itemsPerPage?s.options.itemsPerPage:10:null,last:s.options.page<s.lastPage?s.options.itemsPerPage?s.options.itemsPerPage:10:null,after:s.options.page>s.lastPage?s.pageInfo.endCursor:null,before:s.options.page<s.lastPage?s.pageInfo.startCursor:null});case 5:t=e.sent,r=t.data,j(r.repositoryOwner.repositories),console.log(r.repositoryOwner.repositories),o.loading=!1,n.cLoading.off(),o.mounted=!0,e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](2),o.loading=!1,n.cLoading.off(),n.notify(e.t0.message,"red",8);case 19:case"end":return e.stop()}}),e,null,[[2,14]])}))),g.apply(this,arguments)}function b(){return p.apply(this,arguments)}function p(){return p=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.loading=!0,n.cLoading.on(),e.prev=2,e.next=5,f.refetch({name:c.vulnerabilitySelected.name,login:n.cProfile.login,first:s.options.page>s.lastPage||s.options.page===s.lastPage?s.options.itemsPerPage?s.options.itemsPerPage:10:null,last:s.options.page<s.lastPage?s.options.itemsPerPage?s.options.itemsPerPage:10:null,after:s.options.page>s.lastPage?s.pageInfo.endCursor:null,before:s.options.page<s.lastPage?s.pageInfo.startCursor:null});case 5:t=e.sent,r=t.data,v(r.repositoryOwner.repository.vulnerabilityAlerts),console.log(r.repositoryOwner.repository.vulnerabilityAlerts),o.loading=!1,n.cLoading.off(),e.next=18;break;case 13:e.prev=13,e.t0=e["catch"](2),o.loading=!1,n.cLoading.off(),n.notify(e.t0.message,"red",8);case 18:case"end":return e.stop()}}),e,null,[[2,13]])}))),p.apply(this,arguments)}function v(e){c.vulnerabilityLoaded=[],e.edges.forEach((function(e){c.vulnerabilityLoaded.push(Object(i["a"])({},e.node.securityAdvisory))}))}function j(e){s.allRepositoryList=[],e.edges.forEach((function(e){s.allRepositoryList.push(Object(i["a"])(Object(i["a"])({},e.node),{},{vulnerabilityAlerts:e.node.vulnerabilityAlerts.edges.length>0}))})),s.totalCount=e.totalCount,s.pageInfo=e.pageInfo,s.lastPage=s.options.page}function h(){o.windowSize={x:window.innerWidth,y:window.innerHeight}}return Object(r["N"])((function(){return s.options}),Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!o.mounted){e.next=3;break}return e.next=3,d();case 3:case"end":return e.stop()}}),e)})))),Object(r["u"])(Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.$nextTick(Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return void 0===n.cProfile.login&&n.$router.push("/login"),e.next=3,d();case 3:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})))),function(){return Object(r["g"])("v-card",{attrs:{height:"100%"}},[Object(r["g"])("dialogComponent",{attrs:{config:l.value.dialogConfig},on:{eventClose:function(){c.dialog=!1}}},[Object(r["g"])("template",{slot:"section"},[c.vulnerabilityLoaded.map((function(e,t){return Object(r["g"])("v-card",{class:"ma-2"},[Object(r["g"])("v-row",{class:"pa-0 ma-0"},[Object(r["g"])("v-col",{class:"ma-0 pa-1",attrs:{md:6,sm:12}},[Object(r["g"])("v-card-title",[Object(r["g"])("v-badge",{attrs:{color:"blue",content:t+1}},["Summary"," "])]),Object(r["g"])("v-card-subtitle",[e.summary])]),Object(r["g"])("v-col",{class:"ma-0 pa-1",attrs:{md:6,sm:12}},[Object(r["g"])("v-card-title",["Severity"," ",Object(r["g"])("v-icon",{class:"ma-2",attrs:{color:"red"}},["fas fa-exclamation-triangle"])]),Object(r["g"])("v-card-subtitle",[e.severity])]),Object(r["g"])("v-col",{class:"ma-0 pa-1",attrs:{cols:12}},[Object(r["g"])("v-card-title",["Description "]),Object(r["g"])("v-card-subtitle",[e.description])])])])}))])]),Object(r["g"])("v-card-title",["Vulnerability Alerts"]),Object(r["g"])("v-data-table",{attrs:{"fixed-header":!0,height:o.windowSize.y-230,headers:s.headers,items:s.allRepositoryList,options:s.options,itemsPerPage:10,serverItemsLength:s.totalCount,loading:o.loading,"footer-props":{"items-per-page-options":[15]}},directives:[{name:"resize",value:h}],class:"ma-auto elevation-1",on:Object(i["a"])(Object(i["a"])({},{"click:row":function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.vulnerabilityAlerts){e.next=7;break}return c.vulnerabilitySelected=t,e.next=4,b();case 4:c.dialog=!0,e.next=8;break;case 7:n.notify("this repository has no vulnerability listed","orange",4);case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}),{"update:options":function(e){s.options=e}}),scopedSlots:{"item.isPrivate":function(e){var t=e.item;return t.isPrivate?Object(r["g"])("v-icon",{attrs:{large:!0,color:"red"}},["fas fa-lock"]):Object(r["g"])("v-icon",{attrs:{large:!0,color:"green"}},["fas fa-lock-open"])},"item.vulnerabilityAlerts":function(e){var t=e.item;return t.vulnerabilityAlerts?Object(r["g"])("v-icon",{attrs:{large:!0,color:"red"}},["fas fa-exclamation"]):Object(r["g"])("v-icon",{attrs:{large:!0,color:"green"}},["fas fa-thumbs-up"])}}})])}}});o["default"].use(v["a"]);var C=[{path:"/",redirect:"/vulnerabilityalerts"},{path:"/home",name:"Home",component:j,meta:{requerAuth:!0,title:"Home Page"}},{path:"/login",name:"Login",component:k,meta:{title:"Login"}},{path:"/vulnerabilityalerts",name:"Vulnerability Alerts",component:$,meta:{requerAuth:!0,title:"Vulnerability Alerts"}}],R=new v["a"]({mode:"history",base:"/github-manager-explore/",routes:C});R.beforeEach((function(e,t,n){var o=e.matched.some((function(e){return e.meta.requerAuth})),r=window.$cookies.get("profile");e.meta.title&&(document.title=e.meta.title),o?null!==r?n():n({path:"/login"}):n()}));var L=R,A=n("2f62"),z={url:"https://api.github.com/graphql",profile:{},graph:null,confirm:null,notify:null,loading:null},S=z,D={boot:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,o=window.$cookies,r=o.get("profile"),null!==r&&void 0!==r?n("setProfile",r):(o.remove("token","/"),n("setProfile",{}));case 4:case"end":return t.stop()}}),t)})))()},setProfile:function(e,t){var n=e.commit;n("setProfile",t)},setNotify:function(e,t){var n=e.commit;n("setNotify",t)},setConfirmDialog:function(e,t){var n=e.commit;n("setConfirmDialog",t)},setLoading:function(e,t){var n=e.commit;n("setLoading",t)}},N=D,I={getProfile:function(e){return e.profile},getUrl:function(e){return e.url},getConfirm:function(e){return e.confirm},getGraph:function(e){return e.graph},getNotify:function(e){return e.notify},getLoading:function(e){return e.loading}},E=I,_={setProfile:function(e,t){e.profile=t},setNotify:function(e,t){e.notify=t},setConfirmDialog:function(e,t){e.confirm=t},setLoading:function(e,t){e.loading=t}},M=_,T={namespaced:!1,actions:N,getters:E,mutations:M,state:S},q=T;o["default"].use(A["a"]);var B=new A["a"].Store({modules:{module:q},strict:!!Object({NODE_ENV:"production",BASE_URL:"/github-manager-explore/",VERSION:"1.0.0"}).DEV}),V=n("ce5b"),U=n.n(V),F=n("eea9"),H=n.n(F);n("bf40"),n("5363"),n("15f5");o["default"].use(U.a);var Q=new U.a({theme:{options:{customProperties:!0},themes:{light:{primary:"#2196f3",secondary:"#3f51b5",accent:"#03a9f4",error:"#f44336",warning:"#ff5722",info:"#ff9800",success:"#4caf50"}}},lang:{locales:{pt:H.a},current:"pt"}}),G=Object(r["e"])({template:'\n    <v-snackbar \n      v-model="state.show"\n      :color="state.color"\n      :timeout="state.time"\n    >\n      {{state.message}}\n      <template v-slot:action="{ attrs }">\n        <v-btn\n          color="white"\n          text\n          v-bind="attrs"\n          @click="state.show = false"\n        >\n          Close\n        </v-btn>\n    </template>\n\n    </v-snackbar>\n  ',setup:function(){var e=Object(r["A"])({show:!1,color:"green",message:"",time:4e3});function t(t,n,o){e.time=void 0!==o?1e3*o:5e3,e.message=t,e.color=void 0!==n?n:"green",e.show=!0}return{state:e,show:t}}}),J=n("2b27"),Y=n.n(J),W=n("2638"),K=n.n(W),X=Object(r["e"])({props:{headertitle:{type:String,default:"null"},left:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,o=t.root;function a(e){n("update",e)}function s(){n("logout")}var c=Object(r["a"])({get:function(){return e.left},set:function(e){a(e)}});return function(){return Object(r["g"])("v-app-bar",K()([{},{attrs:{absolute:!0,dark:!0,app:!0,"clipped-left":!0}},{attrs:{color:"primary"}}]),[Object(r["g"])("v-app-bar-nav-icon",{on:{click:function(){c.value=!c.value}}}),Object(r["g"])("v-toolbar-title",[e.headertitle]),Object(r["g"])("v-spacer"),void 0!==o.cProfile.login?Object(r["g"])("v-tooltip",{attrs:{top:!0},scopedSlots:{activator:function(e){var t=e.on;return Object(r["g"])("v-btn",{on:Object(i["a"])(Object(i["a"])({},t),{},{click:function(){s()}}),attrs:{icon:!0}},[Object(r["g"])("v-icon",["fas fa-sign-out-alt"])])}}},[Object(r["g"])("span",["Logout"])]):Object(r["g"])("v-tooltip",{attrs:{top:!0},scopedSlots:{activator:function(e){var t=e.on;return Object(r["g"])("v-btn",{on:Object(i["a"])({},t),attrs:{icon:!0,to:"/login"}},[Object(r["g"])("v-icon",["fas fa-sign-in-alt"])])}}},[Object(r["g"])("span",["Logout"])])])}}}),Z=(n("a9e3"),Object(r["e"])({props:{width:{type:Number,default:200},left:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,a=t.root;function i(e){n("update",e)}var s=Object(r["a"])({get:function(){return e.left},set:function(e){i(e)}}),c=function(){var e;if(void 0!==a.cProfile.login)return Object(r["g"])("v-list-item",[Object(r["g"])("v-list-item-avatar",[Object(r["g"])("img",{attrs:{src:a.cProfile.avatarUrl}})]),Object(r["g"])("v-list-item-content",[Object(r["g"])("v-list-item-title",[a.cProfile.name]),Object(r["g"])("v-list-item-subtitle",[null===(e=a.cProfile.status)||void 0===e?void 0:e.message])])])};return function(){return Object(r["g"])("v-navigation-drawer",K()([{attrs:{color:"primary"}},{attrs:{dark:!0,app:!0,clipped:!0}},{model:{value:s.value,callback:function(e){o["default"].set(s,"value",e)}}}]),[Object(r["g"])("v-list",{attrs:{dense:!0}},[c(),Object(r["g"])("v-divider"),void 0===a.cProfile.login?Object(r["g"])("v-list-item",{attrs:{link:!0}},[Object(r["g"])("v-list-item-action",[Object(r["g"])("v-icon",["fas fa-sign-in-alt"])]),Object(r["g"])("v-list-item-content",{attrs:{to:"/login"}},[Object(r["g"])("v-list-item-title",["Login"])])]):"",void 0!==a.cProfile.login?Object(r["g"])("v-list-item",{attrs:{link:!0,to:"/home"}},[Object(r["g"])("v-list-item-action",[Object(r["g"])("v-icon",["mdi-home"])]),Object(r["g"])("v-list-item-content",[Object(r["g"])("v-list-item-title",["Dashboard"])])]):"",void 0!==a.cProfile.login?Object(r["g"])("v-list-item",{attrs:{link:!0,to:"/vulnerabilityalerts"}},[Object(r["g"])("v-list-item-action",[Object(r["g"])("v-icon",["fas fa-shield-alt"])]),Object(r["g"])("v-list-item-content",[Object(r["g"])("v-list-item-title",["Vulnerability Alerts"])])]):""])])}}})),ee=Object(r["e"])({setup:function(){return function(){return Object(r["g"])("v-footer",K()([{},{attrs:{app:!0}}]),[Object(r["g"])("span",["© ",(new Date).getFullYear()," - v","1.0.0"])])}}}),te=(n("d3b7"),Object(r["e"])({template:'\n    <v-dialog\n      v-model="dialogComponent"\n      width="500"\n    >\n      <v-card>\n        <v-card-title :class="state.color">\n          {{state.title}}\n        </v-card-title>\n\n        <v-card-text>\n          {{state.subtitle}}\n        </v-card-text>\n\n        <v-divider></v-divider>\n\n        <v-card-actions>\n          <v-spacer></v-spacer>\n          <v-btn\n            color="primary"\n            text\n            @click="reject"\n          >\n            No\n          </v-btn>\n          <v-btn\n            color="green white--text"\n            @click="resolve"\n          >\n            Yes\n          </v-btn>\n        </v-card-actions>\n      </v-card>\n    </v-dialog>\n  ',setup:function(){var e=Object(r["A"])({dialog:!1,title:"",subtitle:"",color:"headline primary white--text",response:{}});function t(e,t,o){return n.apply(this,arguments)}function n(){return n=Object(m["a"])(regeneratorRuntime.mark((function t(n,o,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.title=void 0===n?"":n,e.subtitle=void 0===o?"":o,e.color=void 0===r?"headline primary white--text":"headline "+r,e.dialog=!0,t.abrupt("return",new Promise((function(t,n){e.response={resolve:t,reject:n}})));case 5:case"end":return t.stop()}}),t)}))),n.apply(this,arguments)}var o=function(){e.dialog=!1,e.response.resolve()},a=function(){e.dialog=!1,e.response.reject()},i=Object(r["a"])({get:function(){return e.dialog},set:function(){a()}});return{dialogComponent:i,confirm:t,state:e,resolve:o,reject:a}}})),ne=n("4583"),oe=Object(r["e"])({components:{FingerprintSpinner:ne["a"],FlowerSpinner:ne["b"]},template:'\n  <v-overlay\n    :value="state.loading"\n    opacity="0.80"\n    :absolute="true"\n    :z-index="999999"\n  >\n    <fingerprint-spinner\n      v-if="state.randomLoading === 0"\n      :animation-duration="1500"\n      :size="250"\n      color="blue"\n    />\n    <flower-spinner\n      v-if="state.randomLoading === 1"\n      :animation-duration="2500"\n      :size="250"\n      color="blue"\n    />\n  </v-overlay>\n  ',setup:function(){var e=Object(r["A"])({randomLoading:0,loading:!1});function t(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function n(){e.randomLoading=t(0,1),e.loading=!0}function o(){e.loading=!1}return{state:e,on_:n,off_:o}}}),re=Object(r["e"])({props:{config:{type:Object,default:function(){return{dialog:!1,title:"",subtitle:"",eventClose:"",actions:[]}}}},setup:function(e,t){var n=Object(r["a"])({get:function(){return e.config.dialog},set:function(){t.emit(e.config.eventClose)}}),a=function(e){return Object(r["g"])("v-btn",{class:e.color,on:{click:function(){t.emit(e.event)}}},[e.name])};return function(){return Object(r["g"])("v-dialog",{attrs:{"max-width":1e3},model:{value:n.value,callback:function(e){o["default"].set(n,"value",e)}}},[Object(r["g"])("v-card",[Object(r["g"])("v-card-title",{class:"blue white--text"},[e.config.title]),e.config.subtitle?Object(r["g"])("v-card-text",[e.config.subtitle]):"",t.slots.section?t.slots.section():"",e.config.actions.length>0?Object(r["g"])("div",[Object(r["g"])("v-divider"),Object(r["g"])("v-card-actions",[Object(r["g"])("v-spacer"),e.config.actions.map((function(e){return a(e)}))])]):""])])}}});o["default"].use(Y.a),o["default"].component("HeaderMobile",X),o["default"].component("DrawerMobile",Z),o["default"].component("FooterLayout",ee),o["default"].component("NotifyComponent",G),o["default"].component("DialogConfirm",te),o["default"].component("LoadingComponent",oe),o["default"].component("DialogComponent",re);var ae=o["default"].extend({computed:{notify:function(){return this.$store.getters.getNotify},confirm:function(){return this.$store.getters.getConfirm},cProfile:function(){return this.$store.getters.getProfile},cLoading:function(){return this.$store.getters.getLoading}}}),ie=n("c1df"),se=n.n(ie);o["default"].config.productionTip=!1,o["default"].use(r["d"]),o["default"].mixin(ae),se.a.locale("pt-BR"),o["default"].prototype.$moment=se.a,new o["default"]({router:L,store:B,vuetify:Q,render:function(e){return e(b)}}).$mount("#app")}});