import{a as S,b as U,c as I,d as v}from"./chunk-GFXJZGXZ.js";import{A as h,B as m,C as f,E as y,S as g,T as b,ba as C,h as p,i as n,n as c,o as d,q as l,t as u}from"./chunk-KOEL3O5Q.js";var w={id:1,firstName:"Emily",lastName:"Johnson",gender:"female",email:"emily.johnson@x.dummyjson.com",phone:"+81 965-431-3024",username:"emilys",birthDate:"1996-5-30",image:"https://dummyjson.com/icon/emilys/128",bloodGroup:"O-",height:193.24,weight:63.16,eyeColor:"Green",hair:{color:"Brown",type:"Curly"},address:{address:"626 Main Street",city:"Phoenix",state:"Mississippi",stateCode:"MS",postalCode:"29112",coordinates:{lat:-77.16213,lng:-92.084824},country:"United States"},company:{department:"Engineering",name:"Dooley, Kozey and Cronin",title:"Sales Manager",address:{address:"263 Tenth Street",city:"San Francisco",state:"Wisconsin",stateCode:"WI",postalCode:"37657",coordinates:{lat:71.814525,lng:-161.150263},country:"United States"}},role:"admin"};var N={id:2,firstName:"Michael",lastName:"Williams",gender:"male",email:"michael.williams@x.dummyjson.com",phone:"+49 258-627-6644",username:"michaelw",birthDate:"1989-8-10",image:"https://dummyjson.com/icon/michaelw/128",bloodGroup:"B+",height:186.22,weight:76.32,eyeColor:"Red",hair:{color:"Green",type:"Straight"},address:{address:"385 Fifth Street",city:"Houston",state:"Alabama",stateCode:"AL",postalCode:"38807",coordinates:{lat:22.815468,lng:115.608581},country:"United States"},company:{department:"Support",name:"Spinka - Dickinson",title:"Support Specialist",address:{address:"395 Main Street",city:"Los Angeles",state:"New Hampshire",stateCode:"NH",postalCode:"73442",coordinates:{lat:79.098326,lng:-119.624845},country:"United States"}},role:"admin"};var R={id:3,firstName:"Sophia",lastName:"Brown",gender:"female",email:"sophia.brown@x.dummyjson.com",phone:"+81 210-652-2785",username:"sophiab",birthDate:"1982-11-6",image:"https://dummyjson.com/icon/sophiab/128",bloodGroup:"O-",height:177.72,weight:52.6,eyeColor:"Hazel",hair:{color:"White",type:"Wavy"},address:{address:"1642 Ninth Street",city:"Washington",state:"Alabama",stateCode:"AL",postalCode:"32822",coordinates:{lat:45.289366,lng:46.832664},country:"United States"},company:{department:"Research and Development",name:"Schiller - Zieme",title:"Accountant",address:{address:"1896 Washington Street",city:"Dallas",state:"Nevada",stateCode:"NV",postalCode:"88511",coordinates:{lat:20.086743,lng:-34.577107},country:"United States"}},role:"admin"};var B=[w,N,R];var i=class t{basicLoader(o){let{request:e}=o;return new Promise(r=>{let s=S(B,{id:e});s==null?r(null):setTimeout(()=>r(s),v.delay)})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var a=class t{paramUid=c(null);uid=g(()=>parseInt(this.paramUid(),10));router=n(C);basicService=n(i);user=b({request:this.uid,loader:this.basicService.basicLoader});buttonClick(o){this.router.navigateByUrl(`/basic/${o}`).then()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-basic"]],inputs:{paramUid:[1,"paramUid"]},decls:3,vars:2,consts:[[1,"basic"],[3,"buttonClick"],[3,"user","loading"]],template:function(e,r){e&1&&(h(0,"div",0)(1,"app-buttons",1),y("buttonClick",function(j){return r.buttonClick(j)}),m(),f(2,"app-user",2),m()),e&2&&(d(2),u("user",r.user.value())("loading",r.user.isLoading()))},dependencies:[U,I],encapsulation:2})};var Y=[{path:":paramUid",component:a},{path:"",component:a}];export{Y as basicRoutes};