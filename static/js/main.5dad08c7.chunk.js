(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var l=c(1),s=c.n(l),n=c(10),a=c.n(n),i=(c(15),c(2)),o=(c.p,c(16),c(17),c.p,c.p+"static/media/music.8e0bc256.png"),d=c(0);function r(){return Object(d.jsxs)("div",{className:"nav",children:[Object(d.jsx)("img",{id:"Logo",src:o,style:{height:"55px",width:"55px"},alt:""}),Object(d.jsx)("li",{id:"Title",className:"list",children:"Musify"})]})}c(19);function m(e){return Object(d.jsxs)("div",{className:"leftnav flex-column",children:[Object(d.jsx)("div",{className:"logo-design",id:"logo-design",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("img",{src:o,id:"Logo-image",alt:""})}),Object(d.jsx)("div",{className:"col-md-8  title-col",children:"Musify"}),Object(d.jsx)("div",{className:"row quote",children:"The best Place to  relax.."})]})}),Object(d.jsx)("div",{onClick:e.displaySearch,children:Object(d.jsx)("div",{className:"firstItem leftItem",id:"leftItem",children:Object(d.jsxs)("div",{className:"row left-nav-row",children:[Object(d.jsx)("div",{className:"col-md-2  leftItem-logo1",children:Object(d.jsx)("span",{class:"iconify","data-icon":"el:search-alt"})}),Object(d.jsx)("div",{className:"col-md-10 leftItem-title",children:Object(d.jsx)("div",{className:"",children:"Home"})})]})})}),Object(d.jsx)("div",{onClick:e.displayPlaylist,children:Object(d.jsx)("div",{className:"secondItem leftItem",id:"leftItem2",children:Object(d.jsxs)("div",{className:"row left-nav-row",children:[Object(d.jsx)("div",{className:"col-md-2  leftItem-logo2",children:Object(d.jsx)("span",{class:"iconify","data-icon":"ic:baseline-playlist-add-check-circle"})}),Object(d.jsx)("div",{className:"col-md-10 leftItem-title",children:Object(d.jsx)("div",{className:"",children:"Playlist"})})]})})}),Object(d.jsx)("div",{onClick:e.displayAlb,children:Object(d.jsx)("div",{className:"thirdItem leftItem",id:"leftItem3",children:Object(d.jsxs)("div",{className:"row left-nav-row",children:[Object(d.jsx)("div",{className:"col-md-2  leftItem-logo3",children:Object(d.jsx)("span",{class:"iconify","data-icon":"dashicons:album"})}),Object(d.jsx)("div",{className:"col-md-10 leftItem-title",children:Object(d.jsx)("div",{className:"",children:"Album"})})]})})}),Object(d.jsx)("div",{onClick:function(){document.getElementById("songImage").style.display="none",document.getElementById("imgcol").style.display="block"},children:Object(d.jsx)("img",{className:"songImage",id:"songImage",src:"",style:{height:"170px",width:"170px",marginRight:"170px",display:"none"},alt:""})})]})}var j=c(3),b=c.n(j),u=c(5),g=(c(9),c(21),c.p,c.p+"static/media/Play.68e0c33f.png");function y(e){return Object(d.jsxs)("div",{className:"card musicCard  chetan",id:e.index,children:[Object(d.jsx)("img",{src:e.image,className:"card-img-top poster",alt:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:e.title}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("p",{className:"card-text",children:[" By ",e.artist]})}),Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("img",{onClick:function(){e.searchaudioFunc(),console.log("hello"),e.xyz()},className:"play-button",src:g,alt:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"})})]})]})]})}c.p;var h=c.p+"static/media/Search2.399cc177.png",p=c.p+"static/media/stop.2ab66e00.png",x=c(8),O=(c(22),c.p,c.p+"static/media/SongGif2.35d6b970.gif"),f=c.p+"static/media/AddedToPlayList.23ebffa1.gif",v=c(4),N=c(6);function I(e){var t,c=Object(l.useState)(!0),s=Object(i.a)(c,2),n=s[0],a=s[1],o=(document.getElementById("Main-Image"),Object(l.useState)("")),r=Object(i.a)(o,2),m=(r[0],r[1]),j=function(){var t=document.getElementById("audio");if(!0===n){document.getElementById("SongGif").style.display="block",t.play();for(var c=JSON.parse(localStorage.getItem("Recent"))||[],l=0;l<c.length;l++)if(e.element.id==c[l].object.id){c.splice(l,1);break}if(c===[]){var s={object:e.element,image:e.image};c.push(s),console.log(c),localStorage.setItem("Recent",JSON.stringify(c))}else{s={object:e.element,image:e.image};c.push(s),console.log(c),localStorage.setItem("Recent",JSON.stringify(c))}e.xyz()}else document.getElementById("SongGif").style.display="none",t.pause();a(!n)};function b(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"DetailsBox",children:[Object(d.jsx)("div",{className:"first",id:"first",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsxs)("div",{class:"card cardDetails",onClick:e.change,style:{},children:[Object(d.jsxs)("span",{onClick:(e.change,function(){document.getElementById("bottomMusic").style.display="block",document.body.style.backgroundColor="black",document.getElementById("logo-design").style.backgroundColor="#"+b(66)+b(66)+b(66),document.getElementById("leftItem").style.border="4px solid white",document.getElementById("leftItem2").style.border="4px solid white",document.getElementById("leftItem3").style.border="4px solid white"}),class:" backButton position-absolute top-0  translate-middle badge rounded-pill bg-warning ",style:{color:"black",left:"85 %",zIndex:1},children:[Object(d.jsx)("div",{className:"btn leftArrow",children:"<"}),Object(d.jsx)("span",{class:"visually-hidden",children:"unread messages"})]}),Object(d.jsx)("img",{onLoad:function(e){document.getElementById("bottomMusic").style.display="none",null==e?document.getElementById("first").style.backgroundColor="#"+b(44)+b(44)+b(44):Object(v.a)(e,{amount:5}).then((function(e){console.log(e),console.log("Hello");var t="#"+b(e[0])+b(e[1])+b(e[2]);m(t);b(44),b(44),b(44);document.getElementById("first").style.backgroundImage="linear-gradient(180deg, #FFFFFF  -50%, ".concat(t," 90%)"),document.getElementById("first").style.backgroundColor="#"+b(e[0])+b(e[1])+b(e[2]),document.getElementById("second").style.backgroundColor="#"+b(e[0])+b(e[1])+b(e[2]),document.body.style.backgroundColor="#"+b(e[0])+b(e[1])+b(e[2]),document.getElementById("logo-design").style.backgroundColor="#"+b(e[0])+b(e[1])+b(e[2]),document.getElementById("leftItem").style.border="4px solid ".concat(t),document.getElementById("leftItem2").style.border="4px solid ".concat(t),document.getElementById("leftItem3").style.border="4px solid ".concat(t)}))}(e.image),src:e.image,id:"Main-Image",class:"card-img-top",alt:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"})]})}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("h1",{className:"heading",children:e.element.title}),Object(d.jsxs)("p",{className:"para",children:[" ",e.element.artist.name]}),Object(d.jsxs)("p",{className:"rank",children:["Rank : ",e.element.rank]})]}),Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("div",{id:"apple"})})]})}),Object(d.jsx)("div",{className:"container",style:{color:"white"},children:Object(d.jsxs)("div",{className:"card second-card",children:[Object(d.jsxs)("button",{onClick:function(){var t=!1,c=JSON.parse(localStorage.getItem("allplay"))||[];c.forEach((function(c){c.id===e.element.id&&(t=!0)})),0===c.length?(c.push(e.element),localStorage.setItem("allplay",JSON.stringify(c)),document.getElementById("apple").innerHTML="<img src=".concat(f,' alt="" />'),setTimeout((function(){document.getElementById("apple").innerHTML=""}),1e3)):t?(document.getElementById("apple").innerHTML="<h1> Already Added </h1>",setTimeout((function(){document.getElementById("apple").innerHTML=""}),1e3)):(c.push(e.element),localStorage.setItem("allplay",JSON.stringify(c)),document.getElementById("apple").innerHTML="<img src=".concat(f,' alt="" />'),setTimeout((function(){document.getElementById("apple").innerHTML=""}),1e3)),console.log(JSON.parse(localStorage.getItem("allplay")))},id:"badge",class:"position-absolute top-0 start-90 translate-middle badge rounded-pill ",children:["Add To Playlist",Object(d.jsx)("span",{class:"visually-hidden",children:"unread messages"})]}),Object(d.jsxs)("div",{className:"row",id:"second",children:[Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)("img",{className:"secondimg",style:{height:"100px",width:"100px",margin:"20px"},src:e.image,class:"card-img-top",alt:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"})}),Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("div",{className:"title-audio",children:e.element.title}),Object(d.jsx)("div",{className:"name-audio",children:e.element.artist.name})]}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("img",{id:"SongGif",style:{height:"40px",width:"140px",display:"none"},src:O,alt:""})}),Object(d.jsx)("div",(t={className:"play",onClick:j,styl:!0,e:{display:"none"}},Object(x.a)(t,"className","col-md-2"),Object(x.a)(t,"children",Object(d.jsx)("img",{style:{height:"60px",width:"60px"},src:n?g:p,alt:""})),t)),Object(d.jsx)("div",{className:"third",style:{marginTop:"20px",marginBottom:"10px"},children:Object(d.jsx)("audio",{onClick:j,id:"audio",style:{width:"90%",padding:"0px",marginLeft:"50px"},controls:!0,children:Object(d.jsx)("source",{src:e.element.preview,type:"audio/mp3"})})})]})]})}),Object(d.jsx)("div",{id:"apple"})]})})}function B(e){var t=Object(l.useState)(""),c=Object(i.a)(t,2),s=c[0],n=c[1],a=Object(l.useState)(!0),o=Object(i.a)(a,2),r=o[0],m=o[1],j=Object(l.useState)([]),h=Object(i.a)(j,2),x=h[0],O=h[1],f=Object(l.useState)(!1),N=Object(i.a)(f,2),B=(N[0],N[1],Object(l.useState)([])),k=Object(i.a)(B,2),S=k[0],E=k[1],w=Object(l.useState)([]),C=Object(i.a)(w,2),A=C[0],T=C[1],F=Object(l.useState)(""),z=Object(i.a)(F,2),J=z[0],M=z[1],P=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=s){e.next=5;break}return document.getElementById("TextArea").style.border="3px solid red",document.getElementById("TextArea").setAttribute("placeholder","Enter Something First"),setTimeout((function(){document.getElementById("TextArea").style.border="0px",document.getElementById("TextArea").setAttribute("placeholder","Search by Artist")}),1500),e.abrupt("return");case 5:return e.next=7,fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=".concat(s),{method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"71a4a04f98msha6e644b01f88325p1e75bcjsn6e90e48bc773"}}).then((function(e){e.json().then((function(e){O(e.data)}))})).catch((function(e){console.error(e)}));case 7:console.log(x);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){var t=e%60;return t<10&&(t="0".concat(e%60)),"".concat(~~(e/60)," : ").concat(t)},L=function(){var e=JSON.parse(localStorage.getItem("Recent"));null!==e&&(e=e.reverse(),T(e.slice(0,4)),console.log(e),"none"==document.getElementById("ABC").style.display?(document.getElementById("ABC").style.display="block",document.getElementById("art-hed").innerHTML="Recently Played Songs"):(document.getElementById("ABC").style.display="none",document.getElementById("art-hed").innerHTML="Recently Played Songs.. Click"))};var H=function(t,c,l){for(var s=JSON.parse(localStorage.getItem("Recent"))||[],n=0;n<s.length;n++)if(t.id==s[n].object.id){s.splice(n,1);break}if(s===[]){var a={object:t,image:c};s.push(a),console.log(s),localStorage.setItem("Recent",JSON.stringify(s))}else{a={object:t,image:c};s.push(a),console.log(s),localStorage.setItem("Recent",JSON.stringify(s))}e.xyz();for(var i=document.getElementsByClassName("chetan"),o=0;o<i.length;o++)i[o].style.backgroundColor="rgb(29, 29, 29)",i[o].setAttribute("src",{Play:g});document.getElementsByClassName("chetan")[l].setAttribute("src",{Pause:p}),function(e,t){null==e?document.getElementById("first").style.backgroundColor="#"+D(44)+D(44)+D(44):Object(v.a)(e,{amount:5}).then((function(e){var c="#"+D(e[0])+D(e[1])+D(e[2]);try{document.getElementsByClassName("chetan")[t].style.backgroundColor=String(c)}catch(l){}}))}(c,l)};function D(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return r?Object(d.jsxs)("div",{className:"SearchBox",children:[Object(d.jsx)("h1",{className:"art-hed",children:"Search By Artist"}),Object(d.jsxs)("div",{className:"search-item d-flex",children:[Object(d.jsx)("textarea",{id:"TextArea",rows:"1",style:{resize:"none"},onChange:function(e){n(e.target.value)},value:s,placeholder:"Search by Artist","aria-label":"Search"}),Object(d.jsx)("button",{onClick:P,className:"btn btn-outline-success",type:"submit",children:"Search"})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-8",children:Object(d.jsx)("h1",{onClick:L,id:"art-hed",className:"art-hed",children:"Recently Played Songs.. click"})}),Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)("h1",{onClick:function(){if("See more \ud83e\udc41"==document.getElementById("see").innerHTML){if(null===(e=JSON.parse(localStorage.getItem("Recent"))))return;T(e),document.getElementById("see").innerHTML="See less \ud83e\udc43"}else{var e;if(document.getElementById("see").innerHTML="See more",null===(e=JSON.parse(localStorage.getItem("Recent"))))return;e.reverse(),T(e.slice(0,4)),document.getElementById("see").innerHTML="See more \ud83e\udc41"}},id:"see",className:"art-hed2",children:"See more \ud83e\udc41"})}),Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)("h1",{style:{display:"block"},onClick:function(){localStorage.setItem("Recent",JSON.stringify([])),L()},id:"clear",className:"art-hed2",children:"Clear All"})})]}),Object(d.jsx)("div",{style:{display:"none"},id:"ABC",className:"ABC",children:A.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{id:"middle",style:{display:"block"},className:"middle",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)("img",{className:"middle-image",src:e.image,alt:""})}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("h3",{className:"middle-title",children:e.object.title}),Object(d.jsx)("h2",{className:"middle-artist",children:e.object.artist.name})]}),Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)("h2",{className:"middle-duration",children:R(e.object.duration)})}),Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)("div",{onClick:function(){return E((t=e).object),M(t.image),void m(!r);var t},className:"btn btn-warning recentPlay",children:Object(d.jsx)("i",{style:{fontSize:"25px"},className:"fa fa-play-circle-o"})})})]})})})}))}),Object(d.jsx)("div",{className:"row Result-items",children:x.map((function(t,c){return Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("div",{className:"xyz",onClick:function(){H(t,t.album.cover_xl,c)},onDoubleClick:function(){var e;E(e=t),M(e.album.cover_xl),m(!r)},children:Object(d.jsx)(y,{index:c,xyz:e.xyz,searchaudioFunc:e.searchaudioFunc,image:t.album.cover_xl,artist:t.artist.name,title:t.title})})},t.id)}))})]}):Object(d.jsx)("div",{children:Object(d.jsx)(I,{xyz:e.xyz,change:function(){m(!r)},image:J,element:S})})}c(23);function k(e){var t=Object(l.useState)("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"),c=Object(i.a)(t,2),s=c[0],n=c[1],a=Object(l.useState)([]),o=Object(i.a)(a,2),r=o[0],m=o[1],j=Object(l.useState)(""),g=Object(i.a)(j,2),y=g[0],h=g[1],p=Object(l.useState)(""),x=Object(i.a)(p,2),O=x[0],f=x[1],N=Object(l.useState)(""),B=Object(i.a)(N,2),k=B[0],S=B[1],E=Object(l.useState)(!0),w=Object(i.a)(E,2),C=w[0],A=w[1],T=Object(l.useState)(""),F=Object(i.a)(T,2),z=F[0],J=F[1],M=function(){var t=Object(u.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://deezerdevs-deezer.p.rapidapi.com/album/".concat(e.id),{method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"71a4a04f98msha6e644b01f88325p1e75bcjsn6e90e48bc773"}}).then((function(e){e.json().then((function(e){m(e.tracks.data),n(e.cover_big),h(e.release_date),L(e.cover_big),f(e.title),S(e.artist.name)}))})).catch((function(e){console.error(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(e){var t=e%60;return t<10&&(t="0".concat(e%60)),"".concat(~~(e/60)," : ").concat(t)};function R(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function L(e){null==e?document.getElementById("first").style.backgroundColor="#"+R(44)+R(44)+R(44):Object(v.a)(e,{amount:5}).then((function(e){console.log(e),console.log("Hello");var t="#"+R(e[0])+R(e[1])+R(e[2]);R(44),R(44),R(44);document.getElementById("Album").style.backgroundImage="linear-gradient(180deg, #FFFFFF  -50%, ".concat(t," 90%)"),document.body.style.backgroundColor="#"+R(e[0])+R(e[1])+R(e[2]),document.getElementById("logo-design").style.backgroundColor="#"+R(e[0])+R(e[1])+R(e[2]),document.getElementById("leftItem").style.border="4px solid ".concat(t),document.getElementById("leftItem2").style.border="4px solid ".concat(t),document.getElementById("leftItem3").style.border="4px solid ".concat(t)}))}return C?Object(d.jsxs)("div",{className:"Album",id:"Album",children:[Object(d.jsx)("div",{className:"albumData",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)("div",{class:"card cardDetails",style:{},children:[Object(d.jsxs)("span",{onClick:function(){document.body.style.backgroundColor="black",document.getElementById("logo-design").style.backgroundColor="#"+R(66)+R(66)+R(66),document.getElementById("leftItem").style.border="4px solid white",document.getElementById("leftItem2").style.border="4px solid white",document.getElementById("leftItem3").style.border="4px solid white",e.change()},class:" backButton position-absolute top-0  translate-middle badge rounded-pill bg-warning ",style:{color:"black",left:"85 %",zIndex:1},children:[Object(d.jsx)("div",{className:"btn leftArrow",children:"\u2190"}),Object(d.jsx)("span",{class:"visually-hidden",children:"unread messages"})]}),Object(d.jsx)("img",{className:"albumimage",onLoad:M,src:s,id:"Main-Image",class:"card-img-top",alt:"..."})]})}),Object(d.jsxs)("div",{className:"col-md-8",children:[Object(d.jsx)("h1",{className:"heading3",children:O}),Object(d.jsx)("p",{className:"para3",children:k}),Object(d.jsx)("p",{className:"para3",children:y})]})]})}),Object(d.jsx)("div",{className:"heading3",children:"The Songs in this Album"}),Object(d.jsx)("div",{className:"albumItemCard",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-1 index",children:"#"}),Object(d.jsx)("div",{className:"col-md-1 time"}),Object(d.jsx)("div",{className:"col-md-6 time",children:"Title"}),Object(d.jsx)("div",{className:"col-md-2 time",children:"Rank"}),Object(d.jsx)("div",{className:"col-md-2 time",children:"Duration"})]})}),r.map((function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{onClick:function(){return J(e),void A(!C)},className:"albumItemCard",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-1 index",children:t+1}),Object(d.jsx)("div",{className:"col-md-1",children:Object(d.jsx)("img",{className:"itemImage",src:s,alt:""})}),Object(d.jsx)("div",{className:"col-md-6 hed",children:e.title}),Object(d.jsx)("div",{className:"col-md-2 ran",children:e.rank}),Object(d.jsx)("div",{className:"col-md-2 time",children:P(e.duration)})]})})})}))]}):Object(d.jsx)("div",{children:Object(d.jsx)(I,{xyz:e.xyz,change:function(){A(!C)},image:s,element:z})})}function S(e){var t=Object(l.useState)(""),c=Object(i.a)(t,2),s=c[0],n=c[1],a=Object(l.useState)(!0),o=Object(i.a)(a,2),r=o[0],m=o[1],j=Object(l.useState)([]),g=Object(i.a)(j,2),p=g[0],x=g[1],O=Object(l.useState)("block"),f=Object(i.a)(O,2),v=f[0],N=f[1],I=Object(l.useState)(""),B=Object(i.a)(I,2),S=B[0],E=B[1],w=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N("none"),""!=s){e.next=6;break}return document.getElementById("TextArea2").style.border="3px solid red",document.getElementById("TextArea2").setAttribute("placeholder","Enter Something First"),setTimeout((function(){document.getElementById("TextArea2").style.border="0px",document.getElementById("TextArea2").setAttribute("placeholder","Search by Album")}),1500),e.abrupt("return");case 6:return"block"===v&&N("none"),e.next=9,fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=".concat(s),{method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"71a4a04f98msha6e644b01f88325p1e75bcjsn6e90e48bc773"}}).then((function(e){e.json().then((function(e){var t=[],c=[];e.data.forEach((function(e){c.includes(String(e.album.id))?console.log("Worked"+String(e.album.id)):(console.log(e.album.id),c.push(String(e.album.id)),t.push(e))})),x(t),console.log(p.length),console.log(c)}))})).catch((function(e){console.error(e)}));case 9:console.log(p);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r?Object(d.jsxs)("div",{className:"SearchBox",children:[Object(d.jsx)("h1",{className:"art-hed",children:"Search By Album"}),Object(d.jsxs)("div",{className:"search-item d-flex",children:[Object(d.jsx)("textarea",{id:"TextArea2",rows:"1",style:{resize:"none"},onChange:function(e){n(e.target.value)},value:s,placeholder:"Search by Album","aria-label":"Search"}),Object(d.jsx)("button",{onClick:w,className:"btn btn-outline-success",type:"submit",children:"Search"})]}),Object(d.jsx)("img",{style:{display:{display:v}},className:"searchImage",id:"searchImage",src:h,alt:""}),Object(d.jsx)("div",{className:"row Result-items",children:p.map((function(e){return Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("div",{className:"xyz",onClick:function(){E(e.album.id),m(!r)},children:Object(d.jsx)(y,{image:e.album.cover_xl,artist:e.artist.name,title:e.title})})},e.id)}))})]}):Object(d.jsx)("div",{children:Object(d.jsx)(k,{xyz:e.xyz,change:function(){m(!r)},id:S})})}c(24);function E(e){var t=Object(l.useState)([]),c=Object(i.a)(t,2),s=c[0],n=c[1],a=Object(l.useState)(!0),o=Object(i.a)(a,2),r=o[0],m=o[1],j=Object(l.useState)([]),b=Object(i.a)(j,2),u=b[0],g=b[1],y=Object(l.useState)(""),h=Object(i.a)(y,2),p=h[0],x=h[1],O=Object(l.useState)("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"),f=Object(i.a)(O,2),N=f[0],B=f[1],k=Object(l.useState)("Playlist"),S=Object(i.a)(k,2),E=S[0],w=S[1],C=Object(l.useState)("All Items"),A=Object(i.a)(C,2),T=A[0],F=A[1],z=Object(l.useState)(""),J=Object(i.a)(z,2),M=J[0],P=J[1],R=function(){var e=JSON.parse(localStorage.getItem("allplay"));null===e&&(e=[]),n(e),console.log(s),document.getElementById("hed").style.display="none"};var L=function(){m(!r)};function H(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var D=function(e){document.getElementById("a").style.display="none",document.getElementById("b").style.display="none",document.getElementById("c").style.display="none",document.getElementById("icon123").setAttribute("data-icon","clarity:filter-off-solid"),x(e),document.getElementById("alert").style.display="block",setTimeout((function(){document.getElementById("alert").style.display="none"}),2e3)},_=function(e){var t=e%60;return t<10&&(t="0".concat(e%60)),"".concat(~~(e/60)," : ").concat(t)};return r?Object(d.jsxs)("div",{className:"PlaylistBox",id:"PlaylistBox",children:[Object(d.jsx)("div",{className:"first2",id:"first2",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("div",{class:"card cardDetails",style:{},children:Object(d.jsx)("img",{onLoad:(function(e){null==e?document.getElementById("first").style.backgroundColor="#"+H(44)+H(44)+H(44):Object(v.a)(e,{amount:5}).then((function(e){console.log(e),console.log("Hello");var t="#"+H(e[0])+H(e[1])+H(e[2]);H(44),H(44),H(44),document.getElementById("first2").style.backgroundImage="linear-gradient(180deg, #FFFFFF  -50%, ".concat(t," 90%)"),document.getElementById("PlaylistBox").style.backgroundImage="linear-gradient(180deg, #FFFFFF  -50%, ".concat(t," 90%)"),document.getElementById("first2").style.backgroundColor="#"+H(e[0])+H(e[1])+H(e[2]),document.body.style.backgroundColor="#"+H(e[0])+H(e[1])+H(e[2]),document.getElementById("logo-design").style.backgroundColor="#"+H(e[0])+H(e[1])+H(e[2]),document.getElementById("leftItem").style.border="4px solid ".concat(t),document.getElementById("leftItem2").style.border="4px solid ".concat(t),document.getElementById("leftItem3").style.border="4px solid ".concat(t)}))}(N),R),src:N,id:"Main-Image",class:"card-img-top",alt:"..."})})}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("h1",{className:"heading",children:E}),Object(d.jsxs)("p",{className:"para",children:[" ",T]}),Object(d.jsx)("p",{className:"rank",children:"Rank : hello"})]}),Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("div",{id:"apple"})})]})}),Object(d.jsxs)("div",{className:"row filter-row",children:[Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsxs)("div",{onClick:function(){console.log("icon"),"none"==document.getElementById("a").style.display?(document.getElementById("a").style.display="block",document.getElementById("b").style.display="block",document.getElementById("c").style.display="block",document.getElementById("icon123").setAttribute("data-icon","clarity:filter-solid")):(document.getElementById("a").style.display="none",document.getElementById("b").style.display="none",document.getElementById("c").style.display="none",document.getElementById("icon123").setAttribute("data-icon","clarity:filter-off-solid"))},className:"filter",children:[Object(d.jsx)("span",{id:"icon123",class:"iconify","data-icon":"clarity:filter-off-solid"}),Object(d.jsx)("span",{className:"filter-title",children:" Filter By"})]})}),Object(d.jsx)("div",{className:"col-md-1"}),Object(d.jsx)("div",{className:"col-md-1",children:Object(d.jsx)("div",{id:"a",className:"category",children:Object(d.jsx)("div",{onClick:function(){var e=JSON.parse(localStorage.getItem("allplay"));console.log(e),e.sort((function(e,t){return e.title>t.title?1:e.title<t.title?-1:0})),localStorage.setItem("allplay",JSON.stringify(e)),D("Song"),R()},className:"btn btn-success",children:"Song"})})}),Object(d.jsx)("div",{className:"col-md-1",children:Object(d.jsx)("div",{id:"b",className:"category",children:Object(d.jsx)("div",{onClick:function(){var e=JSON.parse(localStorage.getItem("allplay"));console.log(e),e.sort((function(e,t){return e.artist.name>t.artist.name?1:e.artist.name<t.artist.name?-1:0})),localStorage.setItem("allplay",JSON.stringify(e)),D("Artist"),R()},className:"btn btn-danger",children:"Artist"})})}),Object(d.jsx)("div",{className:"col-md-1 ",children:Object(d.jsx)("div",{id:"c",className:"category",children:Object(d.jsx)("div",{onClick:function(){var e=JSON.parse(localStorage.getItem("allplay"));console.log(e),e.sort((function(e,t){return e.duration>t.duration?1:e.duration<t.duration?-1:0})),localStorage.setItem("allplay",JSON.stringify(e)),D("Duration"),R()},className:"btn btn-warning",children:"Duration"})})}),Object(d.jsx)("div",{className:"col-md-6 alert",style:{display:"none"},id:"alert",children:Object(d.jsxs)("div",{class:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(d.jsx)("strong",{children:"Success"})," The playlist is filtered accourding to ",Object(d.jsx)("strong",{children:p})]})})]}),Object(d.jsx)("h1",{style:{display:"block"},id:"hed",className:"playlistHeading",children:"Your Playlist"}),s.map((function(e){try{var t=e.album.cover_xl}catch(c){t="https://nogmi.biz/assets/img/noimage.jpeg"}return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{onClick:function(){var c,l,s;c=t,l=e.title,s=e.artist.name,u.id,w(l),B(c),F(s)},className:"PlaylistCard",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:" imgcol col-md-2",children:Object(d.jsx)("img",{className:"playlistImage",src:t,alt:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",onerror:"this.onerror=null;this.src='https://placeimg.com/200/300/animals';"})}),Object(d.jsxs)("div",{className:"col-md-6",children:[Object(d.jsx)("div",{className:"heading2",children:e.title}),Object(d.jsxs)("div",{className:"para2",children:["By ",e.artist.name]})]}),Object(d.jsx)("div",{className:"col-md-2 para2",children:_(e.duration)}),Object(d.jsxs)("div",{className:"col-md-2 icons",children:[Object(d.jsx)("div",{onClick:function(){return function(e){for(var t=JSON.parse(localStorage.getItem("allplay")),c=0;c<t.length;c++)if(e.id==t[c].id){t.splice(c,1);break}localStorage.setItem("allplay",JSON.stringify(t)),R()}(e)},className:"btn btn-danger",children:Object(d.jsx)("i",{style:{fontSize:"25px"},className:"fa fa-trash"})}),Object(d.jsx)("div",{onClick:function(){return function(e,t){g(e),P(t),L()}(e,t)},className:"btn btn-warning",children:Object(d.jsx)("i",{style:{fontSize:"25px"},className:"fa fa-play-circle-o"})})]})]})},e.id)})}))]}):Object(d.jsx)("div",{children:Object(d.jsx)(I,{xyz:e.xyz,change:L,image:M,element:u})})}c(25);function w(e){var t=new Audio(e.p),c="",l=document.getElementById("myProgressBar"),s=function(){t.pause(),document.getElementById("play").style.display="block",document.getElementById("pause").style.display="none"},n=50,a=function(e){console.log(e);for(var c=document.getElementsByClassName("dropdown-item"),l=0;l<c.length;l++)c[l].style.backgroundColor="#343a40";document.getElementById(String(e)).style.backgroundColor="red",t.playbackRate=e};return Object(d.jsx)("div",{id:"bottomMusic",className:"bottom",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-4 details",children:Object(d.jsxs)("div",{className:"row image-row",children:[Object(d.jsx)("div",{className:"col",id:"imgcol",children:Object(d.jsx)("img",{onClick:function(){document.getElementById("songImage").setAttribute("src",e.img),document.getElementById("songImage").style.display="block",document.getElementById("imgcol").style.display="none"},id:"bottomImage",className:"bottomImage",src:e.img,alt:""})}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsxs)("div",{className:"hed3",children:[e.heading.slice(0,30),".."]}),Object(d.jsx)("div",{className:"title3",children:e.title})]})]})}),Object(d.jsxs)("div",{className:"col-md-4 audioBar",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{onClick:function(){var e=t.currentTime;t.currentTime=e-10,l.value=e/t.duration*100-33,console.log(l.value)},className:"col backward",children:Object(d.jsx)("span",{class:"iconify","data-icon":"fluent:skip-back-10-20-filled",style:{color:"white"}})}),Object(d.jsx)("div",{className:"col nex",children:Object(d.jsx)("span",{class:"iconify","data-icon":"eva:skip-back-fill",style:{color:"gray"}})}),Object(d.jsx)("div",{onClick:function(){var e;console.log(t.currentTime);var n=JSON.parse(localStorage.getItem("Recent")||[]);if(0!=n.length){var a=n.reverse();c!==a[0].object.preview?(t=new Audio(a[0].object.preview),c=a[0].object.preview):s(),t.play(),null===(e=t)||void 0===e||e.addEventListener("timeupdate",(function(){var e=t.currentTime/t.duration*100;l.value=e})),document.getElementById("play").style.display="none",document.getElementById("pause").style.display="block"}},className:"col",children:Object(d.jsx)("span",{class:"iconify play-b",id:"play",style:{display:"block",color:"white"},"data-icon":"fluent:play-circle-20-filled"})}),Object(d.jsx)("div",{onClick:s,className:"col",children:Object(d.jsx)("span",{class:"iconify pause-b",id:"pause",style:{display:"none",color:"white"},"data-icon":"heroicons-solid:pause"})}),Object(d.jsx)("div",{className:"col bac",children:Object(d.jsx)("span",{class:"iconify","data-icon":"eva:skip-back-fill",style:{color:"gray"},"data-flip":"horizontal"})}),Object(d.jsx)("div",{onClick:function(){var e=t.currentTime;t.currentTime=e+10,l.value=e/t.duration*100+33,console.log(l.value)},className:"col forward",children:Object(d.jsx)("span",{class:"iconify","data-icon":"fluent:skip-forward-10-20-filled",style:{color:"white"}})})]}),Object(d.jsx)("input",{type:"range",name:"range",onChange:function(){l=document.getElementById("myProgressBar"),t.currentTime=l.value*(t.duration/100),l.value=t.currentTime},value:"0",id:"myProgressBar"})]}),Object(d.jsxs)("div",{className:"col-md-4 end",children:[Object(d.jsxs)("div",{class:"dropdown",children:[Object(d.jsx)("div",{id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false",className:"setting ",children:Object(d.jsx)("span",{class:"iconify setting","data-icon":"uiw:setting",style:{color:"white"}})}),Object(d.jsxs)("ul",{class:"dropdown-menu dropdown-menu-dark","aria-labelledby":"dropdownMenu2",children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{id:"0.25",onClick:function(){a(.25)},class:"dropdown-item",type:"button",children:"0.25"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{id:"0.5",onClick:function(){a(.5)},class:"dropdown-item ",type:"button",children:"0.5"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{id:"0.75",onClick:function(){a(.75)},class:"dropdown-item",type:"button",children:"0.75"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{style:{backgroundColor:"red"},id:"1",onClick:function(){a(1)},class:"dropdown-item",type:"button",children:"Normal"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{id:"1.25",onClick:function(){a(1.25)},class:"dropdown-item",type:"button",children:"1.25"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{id:"1.5",onClick:function(){a(1.5)},class:"dropdown-item",type:"button",children:"1.5"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{id:"1.75",onClick:function(){a(1.75)},class:"dropdown-item",type:"button",children:"1.75"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{id:"2",onClick:function(){a(2)},class:"dropdown-item",type:"button",children:"2"})})]})]}),Object(d.jsx)("div",{onClick:function(){t.volume=0,n=document.getElementById("volumeBar").value,document.getElementById("volumeBar").value=0,document.getElementById("volume-on").style.display="none",document.getElementById("volume-off").style.display="block"},className:"volume-o",children:Object(d.jsx)("span",{id:"volume-on",class:"iconify volume-on","data-icon":"bx:bx-volume-full",style:{color:"white",display:"block"}})}),Object(d.jsx)("div",{onClick:function(){t.volume=n/100,document.getElementById("volumeBar").value=n,document.getElementById("volume-on").style.display="block",document.getElementById("volume-off").style.display="none"},className:"volume-f",children:Object(d.jsx)("span",{id:"volume-off",class:"iconify volume-off","data-icon":"bx:bx-volume-mute",style:{color:"white",display:"none"}})}),Object(d.jsx)("input",{onChange:function(){var e=document.getElementById("volumeBar").value;t.volume=e/100,document.getElementById("volume-on").style.display="block",document.getElementById("volume-off").style.display="none"},type:"range",name:"range",id:"volumeBar"})]})]})})}var C=function(){var e=Object(l.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(l.useState)(""),a=Object(i.a)(n,2),o=a[0],j=a[1],b=Object(l.useState)(""),u=Object(i.a)(b,2),g=u[0],y=u[1],h=Object(l.useState)(""),p=Object(i.a)(h,2),x=p[0],O=p[1],f=Object(l.useState)(!1),v=Object(i.a)(f,2),I=v[0],k=v[1];Object(N.useEffect)((function(){document.getElementById("leftItem").style.backgroundColor="#1d1d1d";var e=JSON.parse(localStorage.getItem("Recent"))||[];console.log(e.length),0==e.length?document.getElementById("bottomMusic").style.display="none":(document.getElementById("bottomMusic").style.display="block",e.reverse(),s(e[0].object.preview),j(e[0].image),y(e[0].object.title),O(e[0].object.artist.name),console.log(x)),console.log(T)}),[]);var C=Object(l.useState)(!0),A=Object(i.a)(C,2),T=A[0],F=A[1],z=Object(l.useState)(!1),J=Object(i.a)(z,2),M=J[0],P=J[1],R=Object(l.useState)(!1),L=Object(i.a)(R,2),H=L[0],D=L[1],_=function(){k(!I)},G=function(){var e=JSON.parse(localStorage.getItem("Recent"))||[];e.reverse(),s(e[0].object.preview),j(e[0].image),y(e[0].object.title),O(e[0].object.artist.name),"none"===document.getElementById("bottomMusic").style.display&&(document.getElementById("bottomMusic").style.display="block")},q=function(){console.log("happy"),document.getElementById("leftItem").style.backgroundColor="#1d1d1d",document.getElementById("leftItem2").style.backgroundColor="rgb(83, 83, 83)",document.getElementById("leftItem3").style.backgroundColor="rgb(83, 83, 83)",F(!0),P(!1),D(!1)},W=function(){document.getElementById("leftItem3").style.backgroundColor="#1d1d1d",document.getElementById("leftItem").style.backgroundColor="rgb(83, 83, 83)",document.getElementById("leftItem2").style.backgroundColor="rgb(83, 83, 83)",F(!1),P(!0),D(!1)},Y=function(){document.getElementById("leftItem2").style.backgroundColor="#1d1d1d",document.getElementById("leftItem3").style.backgroundColor="rgb(83, 83, 83)",document.getElementById("leftItem").style.backgroundColor="rgb(83, 83, 83)",F(!1),P(!1),D(!0)};return!0===T?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)(m,{displaySearch:q,displayAlb:W,displayPlaylist:Y})}),Object(d.jsxs)("div",{className:"col-md-9",children:[Object(d.jsx)(r,{}),Object(d.jsx)(B,{searchaudioFunc:_,searchaudio:I,xyz:G})]}),Object(d.jsx)(w,{searchaudioFunc:_,searchaudio:I,img:o,heading:g,title:x,p:c})]})}):!0===M?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)(m,{displaySearch:q,displayAlb:W,displayPlaylist:Y})}),Object(d.jsxs)("div",{className:"col-md-9",children:[Object(d.jsx)(r,{}),Object(d.jsx)(S,{searchaudioFunc:_,searchaudio:I,xyz:G})]}),Object(d.jsx)(w,{searchaudioFunc:_,searchaudio:I,img:o,heading:g,title:x,p:c})]})}):!0===H?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)(m,{displaySearch:q,displayAlb:W,displayPlaylist:Y})}),Object(d.jsxs)("div",{className:"col-md-9",children:[Object(d.jsx)(r,{}),Object(d.jsx)(E,{xyz:G})]}),Object(d.jsx)(w,{img:o,heading:g,title:x,p:c})]})}):void 0},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,l=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),l(e),s(e),n(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),A()}],[[26,1,2]]]);
//# sourceMappingURL=main.5dad08c7.chunk.js.map