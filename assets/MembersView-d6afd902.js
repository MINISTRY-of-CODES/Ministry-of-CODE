import{t as o,_,o as m,c as n,a as e,b as p,d as i,F as E,r as d,e as N}from"./index-ba5910d2.js";const v={name:"MemberItem",props:{member:{type:Object,required:!0}},setup(t){return{memberProps:o(t.member)}}};const b={class:"member-card"},l=["src"],h={class:"info"},u={class:"name"},x={class:"department"};function M(t,r,a,c,s,O){return m(),n("div",b,[e("img",{src:a.member.avatar,alt:"Avatar",class:"avatar"},null,8,l),e("div",h,[e("h2",u,p(a.member.name),1),e("p",x,p(a.member.department),1)])])}const g=_(v,[["render",M],["__scopeId","data-v-eaaaf3ca"]]),I={class:"member-container"},A=i({__name:"MembersView",setup(t){const r=[{name:"LI JIAKE",department:"PRESIDENT",avatar:"https://i.328888.xyz/2023/05/10/iQTa8k.png"},{name:"SEOW YUXIANG",department:"MANAGEMENT",avatar:"https://i.328888.xyz/2023/05/10/iQawmt.jpeg"},{name:"JIANG ZECEN",department:"DEVELOPMENT",avatar:"https://i.328888.xyz/2023/05/10/iQaVty.jpeg"},{name:"MEN ZHAOLIN",department:"DEVELOPMENT",avatar:"https://i.328888.xyz/2023/05/10/iQa2sJ.jpeg"},{name:"LONG YING",department:"DEVELOPMENT",avatar:"https://i.328888.xyz/2023/05/10/iQabIA.jpeg"},{name:"HE YANGFAN",department:"DEVELOPMENT",avatar:"https://i.328888.xyz/2023/05/10/iQajGo.jpeg"},{name:"CHENG HUIYANG",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/05/10/p9rnpYF.jpg"},{name:"LIANG ZIMAO",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/05/10/p9rnkO1.jpg"},{name:"GU MENGHAN",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/05/11/p9ru334.jpg"},{name:"PENG XINYUN",department:"DEVELOPMENT",avatar:"https://i.niupic.com/images/2023/05/11/b6Ch.jpg"},{name:"QI YUJUN",department:"DEVELOPMENT",avatar:"https://s1.ax1x.com/2023/05/14/p9cr1b9.jpg"}];return(a,c)=>(m(),n("div",I,[(m(),n(E,null,d(r,s=>e("div",{key:s.name},[N(g,{member:s},null,8,["member"])])),64))]))}});export{A as default};