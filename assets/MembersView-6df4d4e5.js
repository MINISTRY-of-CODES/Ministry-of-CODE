import{t as o,_,o as n,c as m,a as e,b as p,d,F as E,r as i,e as u}from"./index-48ba12ac.js";const N={name:"MemberItem",props:{member:{type:Object,required:!0}},setup(t){return{memberProps:o(t.member)}}};const x={class:"member-card"},l=["src"],v={class:"info"},b={class:"name"},h={class:"department"};function M(t,s,a,c,r,I){return n(),m("div",x,[e("img",{src:a.member.avatar,alt:"Avatar",class:"avatar"},null,8,l),e("div",v,[e("h2",b,p(a.member.name),1),e("p",h,p(a.member.department),1)])])}const P=_(N,[["render",M],["__scopeId","data-v-eaaaf3ca"]]),g={class:"member-container"},O=d({__name:"MembersView",setup(t){const s=[{name:"LI JIAKE",department:"PRESIDENT",avatar:"https://s1.ax1x.com/2023/08/15/pPQuBss.png"},{name:"SEOW YUXIANG",department:"MANAGEMENT",avatar:"https://s1.ax1x.com/2023/08/15/pPQuDLn.png"},{name:"JIANG YECEN",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/08/15/pPQu0Mj.png"},{name:"MEN ZHAOLIN",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/08/15/pPQuaRg.png"},{name:"LONG YING",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/08/15/pPQudzQ.png"},{name:"HE YANGFAN",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/08/15/pPQuyd0.png"},{name:"CHENG HUIYANG",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/05/10/p9rnpYF.jpg"},{name:"LIANG ZIMAO",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/05/10/p9rnkO1.jpg"},{name:"QI YUJUN",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/05/14/p9cr1b9.jpg"}];return(a,c)=>(n(),m("div",g,[(n(),m(E,null,i(s,r=>e("div",{key:r.name},[u(P,{member:r},null,8,["member"])])),64))]))}});export{O as default};
