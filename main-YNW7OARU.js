import{$ as I,A as i,B as r,C as p,G as s,H as D,I as F,N as y,O as P,Q as k,R,V as A,_ as O,aa as l,ca as L,da as T,ea as w,fa as N,o as c,p as M,q as n,t as _,v as b,x as C,y as g,z as h}from"./chunk-KOEL3O5Q.js";var E=()=>["real","fake"],S=()=>["basic","fetch","rx-resource"];function $(e,o){if(e&1&&(i(0,"a",1),s(1),r()),e&2){let t=o.$implicit;_("routerLink","/"+t),c(),D(t)}}function j(e,o){if(e&1&&(i(0,"header"),g(1,$,2,2,"a",1,C),r()),e&2){let t=o.$implicit;b(t),c(),h(y(2,S))}}var d=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=n({type:e,selectors:[["app-header"]],decls:2,vars:1,consts:[[3,"class"],["routerLinkActive","active",3,"routerLink"]],template:function(t,m){t&1&&g(0,j,3,3,"header",0,C),t&2&&h(y(0,E))},dependencies:[L,T],styles:["header[_ngcontent-%COMP%]{background-color:#314673;width:100%;padding:20px}header.real[_ngcontent-%COMP%]{position:fixed}header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:20px;text-decoration:none;color:#ddd}header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{text-decoration:underline;color:#fff}"]})};var f=class e{date=M(new Date);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=n({type:e,selectors:[["app-footer"]],decls:3,vars:4,template:function(t,m){t&1&&(i(0,"footer"),s(1),P(2,"date"),r()),t&2&&(c(),F("\xA9 Control-C ",k(2,1,m.date(),"yyyy"),""))},dependencies:[A],styles:["footer[_ngcontent-%COMP%]{position:fixed;height:30px;background-color:#111;border-top:1px solid #333;width:100%;bottom:0;display:flex;align-items:center;justify-content:flex-end;padding:0 20px;color:#888;font-size:12px}"]})};var a=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=n({type:e,selectors:[["app-layout-main"]],decls:4,vars:0,consts:[[1,"router-outlet"]],template:function(t,m){t&1&&(p(0,"app-header"),i(1,"div",0),p(2,"router-outlet"),r(),p(3,"app-footer"))},dependencies:[l,d,f],styles:[".router-outlet[_ngcontent-%COMP%]{padding:20px}"]})};var H=[{path:"basic",component:a,loadChildren:()=>import("./chunk-ASUPWR6A.js").then(e=>e.basicRoutes)},{path:"fetch",component:a,loadChildren:()=>import("./chunk-IPSUNM4V.js").then(e=>e.fetchRoutes)},{path:"rx-resource",component:a,loadChildren:()=>import("./chunk-AZMB5QN5.js").then(e=>e.rxResourceRoutes)},{path:"**",redirectTo:"/basic"}];var B={providers:[O(),w(H,N()),R({eventCoalescing:!0})]};var u=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=n({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(t,m){t&1&&p(0,"router-outlet")},dependencies:[l],encapsulation:2})};I(u,B).catch(e=>console.error(e));