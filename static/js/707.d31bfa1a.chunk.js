"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[707],{707:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,o,i,s,p,l=t(9439),d=t(168),c=t(931),x=c.Z.label(r||(r=(0,d.Z)(["\n  display: flex;\n  margin: 10px;\n  width: 400px;\n"]))),u=c.Z.input(a||(a=(0,d.Z)(["\n  margin-left: 10px;\n  border-bottom: solid 2px;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  height: 20px;\n  width: 300px;\n  &:focus {\n    outline: none;\n    color: DeepSkyBlue;\n  }\n"]))),h=c.Z.form(o||(o=(0,d.Z)(["\n  width: 400px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),f=c.Z.button(i||(i=(0,d.Z)(["\n  width: 130px;\n  height: 40px;\n  color: #000;\n  border-radius: 5px;\n  padding: 10px 25px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 500;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),\n    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);\n  outline: none;\n"]))),b=t(2791),g=t(9434),m=t(188),Z=function(n){return n.contacts.items},j=function(n){return n.filters},y=function(n){return n.contacts.isLoading},w=function(n){return n.contacts.error},v=t(184);function k(){var n=(0,b.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,b.useState)(""),o=(0,l.Z)(a,2),i=o[0],s=o[1],p=(0,g.I0)(),d=(0,g.v9)(Z).map((function(n){return n.name})),c=function(n){switch(n.currentTarget.name){case"name":r(n.currentTarget.value);break;case"number":s(n.currentTarget.value);break;default:return}};return(0,v.jsxs)(h,{onSubmit:function(n){n.preventDefault(),d.includes(t)?alert("\u0434\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"):(p((0,m.uK)({name:t,number:i})),r(""),s(""))},children:[(0,v.jsxs)(x,{children:["Name",(0,v.jsx)(u,{value:t,type:"text",name:"name",onChange:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)(x,{children:["Phone",(0,v.jsx)(u,{type:"tel",name:"number",value:i,onChange:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)("p",{children:(0,v.jsx)(f,{type:"submit",children:"Add contact"})})]})}var C,z,A,_,L=c.Z.label(s||(s=(0,d.Z)(["\n  display: flex;\n  margin: 10px;\n  wihth: 0px;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 400px\n"]))),S=c.Z.input(p||(p=(0,d.Z)(["\n  width: 300px;\n  margin-left: 10px;\n  border-bottom: solid 2px;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  height: 20px;\n  &:focus {\n    outline: none;\n    color: DeepSkyBlue;\n  }\n"]))),F=t(8267),B=function(){var n=(0,g.I0)();return(0,v.jsxs)(L,{children:["Find contacts by Name",(0,v.jsx)(S,{type:"text",name:"find",onChange:function(e){n((0,F.x)(e.currentTarget.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},N=t(7322),T=(c.Z.button(C||(C=(0,d.Z)(["\n  width: 80px;\n  height: 20px;\n  color: #000;\n  border-radius: 5px;\n  font-family: 'Lato', sans-serif;\n  font-weight: 500;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: inline-block;\n  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),\n    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);\n  outline: none;\n"]))),c.Z.ul(z||(z=(0,d.Z)(["\n  list-style: none;\n  padding: 0;\n"])))),D=c.Z.button(A||(A=(0,d.Z)(["\n  font-size: 18px;\n  border: none;\n  background: none;\n  color: red;\n  display: flex;\n"]))),I=c.Z.li(_||(_=(0,d.Z)(["\n  font-size: 18px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  height: 30px;\n  border-bottom: dotted 2px;\n"]))),M=function(){var n=(0,g.I0)(),e=(0,g.v9)(y),t=(0,g.v9)(w),r=(0,g.v9)(Z),a=(0,g.v9)(j).toLowerCase(),o=r.filter((function(n){return n.name.toLowerCase().includes(a)}));(0,b.useEffect)((function(){n((0,m.yF)())}),[n]);return(0,v.jsxs)(v.Fragment,{children:[e&&(0,v.jsx)("p",{children:"Loading contacts..."}),t&&(0,v.jsx)("p",{children:t}),(0,v.jsx)(T,{children:o.length>0&&o.map((function(e){var t=e.id,r=e.name,a=e.phone;return(0,v.jsxs)(I,{children:[(0,v.jsx)(N.sdR,{style:{fontSize:"20px"}}),r,", ",a," ",(0,v.jsx)(D,{onClick:function(){return e=t,void n((0,m.GK)(e));var e},children:(0,v.jsx)(N.MLo,{style:{fontSize:"20px"}})})]},t)}))})]})},P=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("h2",{children:[(0,v.jsx)(N.Egn,{}),"Phonebook"]}),(0,v.jsx)(k,{}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(B,{}),(0,v.jsx)(M,{})]})}}}]);
//# sourceMappingURL=707.d31bfa1a.chunk.js.map