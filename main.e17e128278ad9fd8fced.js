(()=>{"use strict";var e={6936:(e,t,s)=>{s.r(t)},7217:(e,t,s)=>{s.r(t)},6094:(e,t,s)=>{s.r(t)},4750:(e,t,s)=>{s.r(t)},2399:(e,t,s)=>{s.r(t)},7181:(e,t,s)=>{s.r(t)},4585:(e,t,s)=>{s.r(t)},2715:(e,t,s)=>{s.r(t)},8242:(e,t,s)=>{s.r(t)},158:(e,t,s)=>{s.r(t)},5828:(e,t,s)=>{s.r(t)},9207:(e,t,s)=>{s.r(t)},725:(e,t,s)=>{s.r(t)},5080:(e,t,s)=>{s.r(t)},3850:(e,t,s)=>{s.r(t)},3886:(e,t,s)=>{s.r(t)},4123:(e,t,s)=>{s.r(t)},2140:(e,t,s)=>{s.r(t)},7994:(e,t,s)=>{s.r(t)},4494:(e,t,s)=>{s.r(t)},5882:(e,t,s)=>{s.r(t)},2241:(e,t,s)=>{s.r(t)},8321:(e,t,s)=>{s.r(t)},7794:(e,t,s)=>{s.r(t)},2166:(e,t,s)=>{s.r(t)},263:(e,t,s)=>{s.r(t)},9881:(e,t,s)=>{s.r(t)},9075:(e,t,s)=>{s.r(t)},789:(e,t,s)=>{s.r(t)},1850:(e,t,s)=>{s.r(t)},6240:(e,t,s)=>{s.r(t)},8824:(e,t,s)=>{s.r(t)},6303:(e,t,s)=>{s.r(t)},3614:(e,t,s)=>{s.r(t)},2531:(e,t,s)=>{s.r(t)},8387:(e,t,s)=>{s.r(t)},2178:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,r){function i(e){try{l(n.next(e))}catch(e){r(e)}}function o(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,o)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0,s(8387);const a=s(9432),r=s(6983);t.App=class{constructor(e){this.rootElement=e,this.Wrapper=new a.Wrapper,this.rootElement.appendChild(this.Wrapper.element),this.TableWrapper=new r.TableWrapper}routing(){return n(this,void 0,void 0,(function*(){const e=[{name:"main",component:()=>{this.Wrapper.Stars.element.style.display="none",this.Wrapper.btnStartRemuve(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","main"),this.Wrapper.CardsField.start(),this.CurrentCardPage()}},{name:"1",component:()=>{this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="flex",this.btnStart(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","Action (set A)"),this.Wrapper.CardsField.startCat("Action (set A)"),this.CurrentCardPage()}},{name:"2",component:()=>{this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="flex",this.btnStart(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","Action (set B)"),this.Wrapper.CardsField.startCat("Action (set B)"),this.CurrentCardPage()}},{name:"3",component:()=>{this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="flex",this.btnStart(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","Cities"),this.Wrapper.CardsField.startCat("Cities"),this.CurrentCardPage()}},{name:"4",component:()=>{this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="flex",this.btnStart(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","Transport"),this.Wrapper.CardsField.startCat("Transport"),this.CurrentCardPage()}},{name:"5",component:()=>{this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="flex",this.btnStart(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","Animal (set A)"),this.Wrapper.CardsField.startCat("Animal (set A)"),this.CurrentCardPage()}},{name:"6",component:()=>{this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="flex",this.btnStart(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","Animal (set B)"),this.Wrapper.CardsField.startCat("Animal (set B)"),this.CurrentCardPage()}},{name:"7",component:()=>{this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="flex",this.btnStart(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","Clothes"),this.Wrapper.CardsField.startCat("Clothes"),this.CurrentCardPage()}},{name:"8",component:()=>{this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="flex",this.btnStart(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","Emotions"),this.Wrapper.CardsField.startCat("Emotions"),this.CurrentCardPage()}},{name:"Stats",component:()=>{var e;this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="none",this.Wrapper.btnStartRemuve(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.TableWrapper=new r.TableWrapper,this.Wrapper.CardsField.element.appendChild(this.TableWrapper.element),this.Wrapper.CardsField.element.setAttribute("page","Stats"),this.CurrentCardPage(),this.Wrapper.NavMeny.element.classList.contains("red")&&(null===(e=document.querySelector(".stats_table"))||void 0===e||e.classList.add("table_red"))}},{name:"Hardwords",component:()=>{this.Wrapper.Stars.element.innerHTML="",this.Wrapper.Stars.element.style.display="flex",this.btnStart(),this.nav(),this.Wrapper.CardsField.element.innerHTML="",this.Wrapper.CardsField.element.setAttribute("page","Hardwords"),this.Wrapper.hardword(),this.CurrentCardPage()}}],t={name:"default",component:()=>{}};window.onpopstate=()=>{const s=window.location.hash.slice(1);(e.find((e=>e.name===s))||t).component()}}))}nav(){this.Wrapper.NavMeny.element.classList.contains("nav_active")&&(this.Wrapper.NavMeny.element.classList.remove("nav_active"),this.Wrapper.WrapperHeader.Burger.element.classList.remove("active_burger"),document.body.classList.toggle("scroll-hidden"),this.Wrapper.MainWrapper.element.classList.toggle("none_wrap"))}btnStart(){this.Wrapper.removerepeat(),this.Wrapper.CurrentSoundindex=[],this.Wrapper.answers=0,this.Wrapper.WrapperHeader.LabelSwitch.SwitchInput.element.hasAttribute("cheacked")?this.Wrapper.BtnStart.element.classList.remove("btn_none"):this.Wrapper.BtnStart.element.classList.add("btn_none")}CurrentCardPage(){var e,t;const s=this.Wrapper.CardsField.element.getAttribute("page");null===(e=document.querySelector(".active_page"))||void 0===e||e.classList.remove("active_page"),"Hardwords"!==s&&(null===(t=document.getElementById(`${s}`))||void 0===t||t.classList.add("active_page"))}}},8583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},5636:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Btn=void 0;const n=s(8583);s(6936);class a extends n.BaseComponent{constructor(e,t){super("button",[`${e}`,"btn"]),this.element.innerHTML=`${t}`}}t.Btn=a},6385:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BtnLogin=void 0;const n=s(8583);s(7217);class a extends n.BaseComponent{constructor(){super("button",["btn_login"]),this.element.innerHTML="\n        Login\n        "}}t.BtnLogin=a},5453:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BtnStart=void 0;const n=s(8583);s(6094);class a extends n.BaseComponent{constructor(){super("button",["btn_start","btn_none"]),this.element.innerHTML='\n    <p class="text_start">Start Button</p>\n        '}}t.BtnStart=a},5491:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Burger=void 0;const n=s(8583);s(4750);class a extends n.BaseComponent{constructor(){super("div",["burger"]),this.element.innerHTML='\n        <span class="burger_span"></span>\n        '}}t.Burger=a},4298:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardBackBottom=void 0;const n=s(8583);s(2399);class a extends n.BaseComponent{constructor(e){super("div",["card_back_bottom"]),this.element.innerHTML=`\n        <p class="card_name_bottom">${e}</p>\n         `}}t.CardBackBottom=a},5489:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardBackTop=void 0;const n=s(8583);s(7181);class a extends n.BaseComponent{constructor(e){super("div",["card_back_top"]),this.element.style.backgroundImage=`url('../../${e}')`}}t.CardBackTop=a},6842:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardBack=void 0;const n=s(8583),a=s(5489),r=s(4298);s(4585);class i extends n.BaseComponent{constructor(e,t){super("div",["card_back"]),this.CardBackTop=new a.CardBackTop(e),this.element.appendChild(this.CardBackTop.element),this.CardBackBottom=new r.CardBackBottom(t),this.element.appendChild(this.CardBackBottom.element)}}t.CardBack=i},491:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardCat=void 0;const n=s(8583),a=s(1096),r=s(6842),i=s(5891),o=s(9484),l=s(3658);s(2715);class d extends n.BaseComponent{constructor(e,t,s,n,d,c,p){super("div",["card_category"]),this.Inactive=new o.Inactive,this.element.appendChild(this.Inactive.element),this.CardCategoryWrapper=new i.CardCategoryWrapper(p,n),this.element.appendChild(this.CardCategoryWrapper.element),this.CardFront=new a.CardFront(e,t,n,d,c),this.element.appendChild(this.CardFront.element),this.CardBack=new r.CardBack(e,s),this.element.appendChild(this.CardBack.element),this.Swap=new l.Swap(c),this.element.appendChild(this.Swap.element),this.SwapCard()}SwapCard(){this.Swap.element.addEventListener("click",(()=>{this.Swap.element.classList.add("swapped"),this.element.classList.add("fliped")})),this.element.addEventListener("mouseleave",(()=>{this.element.classList.remove("fliped"),setTimeout((()=>{this.Swap.element.classList.remove("swapped")}),200)}))}}t.CardCat=d},5891:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardCategoryWrapper=void 0;const n=s(8583);s(8242);class a extends n.BaseComponent{constructor(e,t){super("div",["card_category_wrapper",`${e}`]),this.element.setAttribute("audio",t)}}t.CardCategoryWrapper=a},1413:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardFrontBottom=void 0;const n=s(8583);s(158);class a extends n.BaseComponent{constructor(e,t){super("div",["card_front_bottom",`${t}`]),this.element.innerHTML=`\n        <p class="card_name_bottom">${e}</p>\n         `}}t.CardFrontBottom=a},7868:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardFrontTop=void 0;const n=s(8583);s(5828);class a extends n.BaseComponent{constructor(e,t){super("div",["card_front_top",`${t}`]),this.element.style.backgroundImage=`url('../../${e}')`}}t.CardFrontTop=a},1096:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardFront=void 0;const n=s(8583),a=s(7868),r=s(1413);s(9207);class i extends n.BaseComponent{constructor(e,t,s,n,i){super("div",["card_front"]),this.CardFrontTop=new a.CardFrontTop(e,n),this.element.appendChild(this.CardFrontTop.element),this.element.setAttribute("word",e.slice(4,-4)),this.CardFrontBottom=new r.CardFrontBottom(t,i),this.element.appendChild(this.CardFrontBottom.element),this.audio=new Audio(s),this.media()}media(){this.element.addEventListener("click",(()=>{const e=JSON.parse(localStorage.getItem(this.element.getAttribute("word")));e.clicks+=1,localStorage.setItem(this.element.getAttribute("word"),JSON.stringify(e)),this.audio.play()}))}}t.CardFront=i},7167:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardMain=void 0;const n=s(8583);s(725);class a extends n.BaseComponent{constructor(e,t,s,n){super("div",["card"]),this.element.innerHTML=`\n        <a href="#${t}">\n        <div class="card_top ${n}"></div>\n        <div class="card-img" style="background-image:url('../../${s}')"></div>\n        <div class="card_bottom">\n        <p class="card_name">${e}</p>\n        </div>\n        </a>\n        `}}t.CardMain=a},7610:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,r){function i(e){try{l(n.next(e))}catch(e){r(e)}}function o(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,o)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=void 0;const a=s(8583),r=s(7167),i=s(491),o=s(8996);s(5080);class l extends a.BaseComponent{constructor(){super("div",["cards_field"]),this.WrapperHeader=new o.WrapperHeader,this.sounds=[],this.check="",this.start(),this.mode="",this.none="",this.none1=""}start(){return n(this,void 0,void 0,(function*(){const e=yield fetch("./images.json"),t=(yield e.json()).map((e=>e));this.AddCard(t)}))}AddCard(e){document.querySelector("input").hasAttribute("cheacked")?this.check="red":this.check="green",e.forEach((e=>{this.element.appendChild(new r.CardMain(e.name,e.page,e.image,this.check).element)}))}startCat(e){return n(this,void 0,void 0,(function*(){const t=yield fetch("./cards.json"),s=yield t.json(),n=s[0].indexOf(e),a=s[n+1];this.AddCardCat(a)}))}AddCardCat(e){this.sounds=[],e.forEach((e=>{this.sounds.push(e.audioSrc)})),document.querySelector("input").hasAttribute("cheacked")?(this.mode="game",this.none="none",this.none1="display1"):(this.mode="train",this.none="display",this.none1="none1"),e.forEach((e=>{this.element.appendChild(new i.CardCat(e.image,e.word,e.translation,e.audioSrc,this.mode,this.none,this.none1).element)}))}getIndex(){return Math.floor(Math.random()*this.sounds.length)}PlaySounds(e){new Audio(this.sounds[e]).play()}tablecolor(){this.element.children[0].classList.contains("table_wrapper")&&this.element.children[0].lastChild.classList.toggle("table_red")}}t.CardsField=l},2e3:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;const n=s(8583);s(3850);class a extends n.BaseComponent{constructor(){super("footer",["footer"]),this.element.innerHTML='\n    <div class="git">\n    <a class="footer_link" href="https://github.com/agm234"><img class="img" src="../../images/Git.png" alt="git"></a>\n    </div>\n    <div class="year">\n    <p>2021 ©</p>\n    </div>\n    <div class="course">\n    <a class="footer_link" href="https://rs.school/js/"><img class="img" src="../../images/rs_school_js.svg" alt="git"></a>\n    </div>\n    '}}t.Footer=a},9484:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Inactive=void 0;const n=s(8583);s(3886);class a extends n.BaseComponent{constructor(){super("div",["inactive","inactivenone"])}}t.Inactive=a},4368:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LabelSwitch=void 0;const n=s(8583),a=s(9056),r=s(9747),i=s(9112),o=s(8274);s(4123);class l extends n.BaseComponent{constructor(){super("label",["switch"]),this.SwitchInput=new r.SwitchInput,this.element.appendChild(this.SwitchInput.element),this.Slider=new a.Slider,this.element.appendChild(this.Slider.element),this.SpanTrain=new i.SpanTrain,this.element.appendChild(this.SpanTrain.element),this.SpanPlay=new o.SpanPlay,this.element.appendChild(this.SpanPlay.element)}}t.LabelSwitch=l},9056:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Slider=void 0;const n=s(8583);s(2140);class a extends n.BaseComponent{constructor(){super("span",["slider"])}}t.Slider=a},8274:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SpanPlay=void 0;const n=s(8583);s(7994);class a extends n.BaseComponent{constructor(){super("span",["span_play","span_none"]),this.element.innerHTML='\n        <p class="span_train_text_play">Play</p>\n        '}}t.SpanPlay=a},9112:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SpanTrain=void 0;const n=s(8583);s(4494);class a extends n.BaseComponent{constructor(){super("span",["span_train"]),this.element.innerHTML='\n        <p class="span_train_text">Train</p>\n        '}}t.SpanTrain=a},9747:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SwitchInput=void 0;const n=s(8583);s(5882);class a extends n.BaseComponent{constructor(){super("input",["switch-input"]),this.element.setAttribute("type","checkbox")}}t.SwitchInput=a},3589:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainWrapper=void 0;const n=s(8583);s(2241);class a extends n.BaseComponent{constructor(){super("div",["main_wrapper","none_wrap"])}}t.MainWrapper=a},7381:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MenuList=void 0;const n=s(8583);s(8321);class a extends n.BaseComponent{constructor(){super("ul",["menu_list"]),this.element.innerHTML='\n        <li><a id="main" class=\'active_page\' href="#main">Main Page</a></li>\n        <li><a id="Action (set A)" href="#1">Action (set A)</a></li>\n        <li><a id="Action (set B)" href="#2">Action (set B)</a></li>\n        <li><a id="Cities" href="#3">Cities</a></li>\n        <li><a id="Transport" href="#4">Transport</a></li>\n        <li><a id="Animal (set A)" href="#5">Animal (set A)</a></li>\n        <li><a id="Animal (set B)" href="#6">Animal (set B)</a></li>\n        <li><a id="Clothes" href="#7">Clothes</a></li>\n        <li><a id="Emotions" href="#8">Emotion</a></li>\n        <li><a id="Stats" href="#Stats">Stats</a></li>\n        ',this.CurrentPage()}CurrentPage(){this.element.addEventListener("click",(e=>{var t;null===(t=document.querySelector(".active_page"))||void 0===t||t.classList.remove("active_page"),e.target.classList.add("active_page")}))}}t.MenuList=a},489:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NavMeny=void 0;const n=s(8583),a=s(7381),r=s(6385);s(7794);class i extends n.BaseComponent{constructor(){super("div",["nav_menu","green"]),this.MenuList=new a.MenuList,this.element.appendChild(this.MenuList.element),this.BtnLogin=new r.BtnLogin,this.element.appendChild(this.BtnLogin.element)}}t.NavMeny=i},3474:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Star=void 0;const n=s(8583);s(2166);class a extends n.BaseComponent{constructor(e){super("div",["star"]),this.element.style.background=`url('../../stars/${e}.png')`}}t.Star=a},2388:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Stars=void 0;const n=s(8583);s(263);class a extends n.BaseComponent{constructor(){super("div",["stars"])}}t.Stars=a},3818:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StatsTableBody=void 0;const n=s(8583),a=s(5789);s(9881);class r extends n.BaseComponent{constructor(){super("tbody",["stats_table_body"]),this.mass=[],this.rows(this.element)}rows(e){for(let t=0;t<localStorage.length;t+=1){const s=JSON.parse(localStorage.getItem(localStorage.key(t))),n=new a.StatsTableRow(s).element;this.mass.push(s),e.appendChild(n)}}}t.StatsTableBody=r},4503:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StatsTableHeader=void 0;const n=s(8583);s(9075);class a extends n.BaseComponent{constructor(){super("thead",["stats_table_header"]),this.element.innerHTML="\n        <th>Word</th>\n        <th>Category</th>\n        <th>Translation</th>\n        <th>Clicks</th>\n        <th>Correct</th>\n        <th>Wrong</th>\n        <th>Erors %</th>\n        "}}t.StatsTableHeader=a},7295:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.errors=void 0,t.errors=(e,t)=>0!==e&&0!==t?Math.floor(t/(e+t)*100):0===e&&0!==t?100:0},5789:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StatsTableRow=void 0;const n=s(8583),a=s(7295);s(789);class r extends n.BaseComponent{constructor({category:e,word:t,translation:s,clicks:n,correct:r,wrong:i}){super("tr",["stats-table-row"]),this.element.innerHTML=`\n        <td>${t}</td>\n        <td>${e}</td>\n        <td>${s}</td>\n        <td>${n}</td>\n        <td>${r}</td>\n        <td>${i}</th>\n        <td>${a.errors(r,i)}</th>\n        `}}t.StatsTableRow=r},3555:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StatsTable=void 0;const n=s(8583),a=s(4503),r=s(3818),i=s(4158),o=s(5789);s(1850);class l extends n.BaseComponent{constructor(){super("table",["stats_table"]),this.StatsTableHeader=new a.StatsTableHeader,this.element.appendChild(this.StatsTableHeader.element),this.StatsTableBody=new r.StatsTableBody,this.element.appendChild(this.StatsTableBody.element),this.sort()}sort(){this.element.addEventListener("click",(e=>{var t,s;const n=e.target;if("TH"===n.nodeName){const e=n.cellIndex;null===(t=document.querySelector(".desc"))||void 0===t||t.classList.remove("desc"),null===(s=document.querySelector(".asc"))||void 0===s||s.classList.remove("asc");const a=i.sortBycategory(this.StatsTableBody.mass,e);n.classList.contains("sorted")?(null==a||a.reverse(),n.classList.add("asc"),n.classList.remove("sorted")):(n.classList.add("desc"),n.classList.add("sorted")),this.StatsTableBody.element.innerHTML="",null==a||a.forEach((e=>{this.StatsTableBody.element.appendChild(new o.StatsTableRow(e).element)}))}}))}}t.StatsTable=l},3658:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Swap=void 0;const n=s(8583);s(6240);class a extends n.BaseComponent{constructor(e){super("div",["swap",`${e}`])}}t.Swap=a},3146:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TableBtns=void 0;const n=s(8583),a=s(5636);s(8824);class r extends n.BaseComponent{constructor(){super("div",["table_btns"]),this.Btndifficult=new a.Btn("btndifficult","Repeat difficult words"),this.element.appendChild(this.Btndifficult.element),this.Btnrest=new a.Btn("btnreset","Reset"),this.element.appendChild(this.Btnrest.element)}}t.TableBtns=r},6983:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,r){function i(e){try{l(n.next(e))}catch(e){r(e)}}function o(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,o)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.TableWrapper=void 0;const a=s(8583),r=s(3555),i=s(3818),o=s(4503),l=s(3146),d=s(2422),c=s(582);s(6303);class p extends a.BaseComponent{constructor(){super("div",["table_wrapper"]),this.TableBtns=new l.TableBtns,this.element.appendChild(this.TableBtns.element),this.StatsTable=new r.StatsTable,this.element.appendChild(this.StatsTable.element),this.Reset(),this.dufficultwords()}Reset(){this.TableBtns.Btnrest.element.addEventListener("click",(()=>n(this,void 0,void 0,(function*(){yield c.words(),this.resettable()}))))}resettable(){this.StatsTable.element.innerHTML="",this.StatsTable.StatsTableBody=new i.StatsTableBody,this.StatsTable.StatsTableHeader=new o.StatsTableHeader,this.StatsTable.element.appendChild(this.StatsTable.StatsTableBody.element),this.StatsTable.element.appendChild(this.StatsTable.StatsTableHeader.element)}dufficultwords(){this.TableBtns.Btndifficult.element.addEventListener("click",(()=>{d.difficult(),window.location.hash="#Hardwords"}))}}t.TableWrapper=p},9432:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Wrapper=void 0;const n=s(8583),a=s(489),r=s(8996),i=s(7610),o=s(2e3),l=s(5453),d=s(2388),c=s(3474),p=s(3589),h=s(7295),m=s(2422);s(3614);class u extends n.BaseComponent{constructor(){super("div",["wrapper"]),this.NavMeny=new a.NavMeny,this.element.appendChild(this.NavMeny.element),this.WrapperHeader=new r.WrapperHeader,this.element.appendChild(this.WrapperHeader.element),this.Stars=new d.Stars,this.element.appendChild(this.Stars.element),this.CardsField=new i.CardsField,this.element.appendChild(this.CardsField.element),this.BtnStart=new l.BtnStart,this.element.appendChild(this.BtnStart.element),this.Footer=new o.Footer,this.element.appendChild(this.Footer.element),this.MainWrapper=new p.MainWrapper,this.element.appendChild(this.MainWrapper.element),this.CurrentSoundindex=[],this.answers=0,this.GameStarted=!1,this.showNav(),this.checkboxMain(),this.StartGame()}showNav(){this.WrapperHeader.Burger.element.addEventListener("click",(()=>{this.WrapperHeader.Burger.element.classList.toggle("active_burger"),this.NavMeny.element.classList.toggle("nav_active"),document.body.classList.toggle("scroll-hidden"),this.MainWrapper.element.classList.toggle("none_wrap")})),this.MainWrapper.element.onclick=()=>{this.NavMeny.element.classList.contains("nav_active")&&(this.WrapperHeader.Burger.element.classList.toggle("active_burger"),this.NavMeny.element.classList.toggle("nav_active"),document.body.classList.toggle("scroll-hidden"),this.MainWrapper.element.classList.toggle("none_wrap"))}}checkboxMain(){this.WrapperHeader.LabelSwitch.element.addEventListener("change",(()=>{this.CardsField.tablecolor(),this.removerepeat();const e=this.CardsField.element.firstChild;if(e.classList.contains("card_category")&&this.GameStarted){const e=this.CardsField.element.getAttribute("page");this.answers=0,this.CardsField.element.innerHTML="","Hardwords"===e?this.hardword():this.CardsField.startCat(e)}this.cheked(e)}))}cheked(e){this.WrapperHeader.LabelSwitch.SwitchInput.element.checked?(this.WrapperHeader.LabelSwitch.SwitchInput.element.setAttribute("cheacked","cheacked"),e.classList.contains("card_category")?(this.BtnStart.element.classList.remove("btn_none"),this.chekedEl()):this.mainRed()):(this.GameStarted=!1,this.WrapperHeader.LabelSwitch.SwitchInput.element.removeAttribute("cheacked"),e.classList.contains("card_category")?(this.BtnStart.element.classList.add("btn_none"),this.nocheked()):this.mainGreen())}mainGreen(){this.NavMeny.BtnLogin.element.classList.remove("btnred"),document.querySelectorAll(".red").forEach((e=>{e.classList.remove("red"),e.classList.add("green")})),this.WrapperHeader.LabelSwitch.SpanTrain.element.classList.remove("span_none"),this.WrapperHeader.LabelSwitch.SpanPlay.element.classList.add("span_none")}mainRed(){this.NavMeny.BtnLogin.element.classList.add("btnred"),document.querySelectorAll(".green").forEach((e=>{e.classList.remove("green"),e.classList.add("red")})),this.WrapperHeader.LabelSwitch.SpanTrain.element.classList.add("span_none"),this.WrapperHeader.LabelSwitch.SpanPlay.element.classList.remove("span_none")}chekedEl(){document.querySelectorAll(".display").forEach((e=>{e.classList.remove("display"),e.classList.add("none"),document.querySelectorAll(".train").forEach((e=>{e.classList.remove("train"),e.classList.add("game")})),document.querySelectorAll(".none1").forEach((e=>{e.classList.remove("none1"),e.classList.add("display1")}))})),this.mainRed()}nocheked(){document.querySelectorAll(".none").forEach((e=>{e.classList.remove("none"),e.classList.add("display")})),document.querySelectorAll(".game").forEach((e=>{e.classList.remove("game"),e.classList.add("train")})),document.querySelectorAll(".display1").forEach((e=>{e.classList.remove("display1"),e.classList.add("none1")})),this.mainGreen()}StartGame(){this.BtnStart.element.addEventListener("click",(()=>{this.GameStarted=!0;const e=this.CardsField.getIndex();this.BtnStart.element.classList.contains("repeat")?this.CardsField.PlaySounds(this.CurrentSoundindex[0]):(this.CurrentSoundindex.push(e),this.CardsField.PlaySounds(e),this.PlayGame(),this.BtnStart.element.classList.add("repeat"),this.BtnStart.element.children[0].classList.add("text_hide"))}))}nextsound(){this.CurrentSoundindex=[];const e=this.CardsField.getIndex();this.CurrentSoundindex.push(e),this.CardsField.PlaySounds(e)}PlayGame(){document.querySelectorAll(".card_category_wrapper").forEach((e=>{e.addEventListener("click",(()=>{e.getAttribute("audio")===this.CardsField.sounds[this.CurrentSoundindex[0]]?this.rightanswer(e):this.wronganswer(e)}))}))}rightanswer(e){var t,s,n;e.classList.add("rightanswer"),(null===(t=e.parentElement)||void 0===t?void 0:t.firstChild).classList.remove("inactivenone");const a=JSON.parse(localStorage.getItem(null===(s=e.getAttribute("audio"))||void 0===s?void 0:s.slice(6,-4)));a.correct+=1,a.errors=h.errors(a.correct,a.wrong),localStorage.setItem(null===(n=e.getAttribute("audio"))||void 0===n?void 0:n.slice(6,-4),JSON.stringify(a)),this.Stars.element.appendChild(new c.Star("rightanswer").element),new Audio("audio/correct.mp3").play(),this.CardsField.sounds.splice(this.CurrentSoundindex[0],1),setTimeout((()=>{this.CardsField.sounds.length>0?this.nextsound():(this.Stars.element.innerHTML="",this.CurrentSoundindex=[],this.btnStartRemuve(),0===this.answers?this.endgamewin():this.endgamelose())}),1e3)}wronganswer(e){var t,s;this.answers+=1;const n=JSON.parse(localStorage.getItem(null===(t=e.getAttribute("audio"))||void 0===t?void 0:t.slice(6,-4)));n.wrong+=1,n.errors=h.errors(n.correct,n.wrong),localStorage.setItem(null===(s=e.getAttribute("audio"))||void 0===s?void 0:s.slice(6,-4),JSON.stringify(n)),this.Stars.element.appendChild(new c.Star("wronganswer").element),new Audio("audio/error.mp3").play()}btnStartRemuve(){this.BtnStart.element.classList.contains("btn_none")||this.BtnStart.element.classList.add("btn_none")}endgamewin(){this.BtnStart.element.classList.remove("repeat"),this.CardsField.element.innerHTML='\n      <div class="win">\n      <h2 class="endheader">Win</h2>\n      <img class="img" src="../../Endgame/win.svg" alt="">\n      </div>\n      ',this.winLose(),new Audio("audio/success.mp3").play(),this.goToMain(),this.removerepeat()}endgamelose(){this.BtnStart.element.classList.remove("repeat"),this.CardsField.element.innerHTML=`\n    <div class="lose">\n    <h2 class="endheader" >${this.answers} Errors</h2>\n    <img class="img" src="../../Endgame/lose.svg" alt="">\n    </div>\n    `,this.winLose(),new Audio("audio/failure.mp3").play(),this.goToMain(),this.removerepeat()}goToMain(){this.answers=0,setTimeout((()=>{this.CardsField.element.innerHTML="",this.winLose(),this.CardsField.start()}),5e3)}winLose(){this.WrapperHeader.element.classList.toggle("hide"),this.Footer.element.classList.toggle("hide")}removerepeat(){this.BtnStart.element.children[0].classList.remove("text_hide"),this.BtnStart.element.classList.contains("repeat")&&this.BtnStart.element.classList.remove("repeat"),this.Stars.element.innerHTML="",this.CurrentSoundindex=[]}hardword(){m.difficult().length>0?this.CardsField.AddCardCat(m.difficult()):(this.Footer.element.classList.add("visible"),this.WrapperHeader.element.classList.add("visible"),this.BtnStart.element.classList.contains("btn_none")||this.BtnStart.element.classList.add("btn_none"),this.CardsField.element.innerHTML='<p class="hard">There are no difficult words</p>',setTimeout((()=>{this.Footer.element.classList.remove("visible"),this.WrapperHeader.element.classList.remove("visible"),window.location.hash="#main"}),2e3))}}t.Wrapper=u},8996:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WrapperHeader=void 0;const n=s(8583),a=s(5491),r=s(4368);s(2531);class i extends n.BaseComponent{constructor(){super("header",["wrapper_header"]),this.Burger=new a.Burger,this.element.appendChild(this.Burger.element),this.LabelSwitch=new r.LabelSwitch,this.element.appendChild(this.LabelSwitch.element)}}t.WrapperHeader=i},582:function(e,t){var s=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,r){function i(e){try{l(n.next(e))}catch(e){r(e)}}function o(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,o)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.words=void 0,t.words=()=>s(void 0,void 0,void 0,(function*(){const e=yield fetch("./cards.json"),t=yield e.json(),s=t.slice(1);s.forEach((e=>{e.forEach((n=>{const a={category:t[0][s.indexOf(e)],word:n.word,translation:n.translation,clicks:0,correct:0,wrong:0,errors:0};localStorage.setItem(n.word,JSON.stringify(a))}))}))}))},4158:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sortBycategory=void 0,t.sortBycategory=function(e,t){let s=[];switch(t){case 0:s=e.sort(((e,t)=>e.word>t.word?1:-1));break;case 1:s=e.sort(((e,t)=>e.category>t.category?1:-1));break;case 2:s=e.sort(((e,t)=>e.translation>t.translation?1:-1));break;case 3:s=e.sort(((e,t)=>e.clicks>t.clicks?1:-1));break;case 4:s=e.sort(((e,t)=>e.correct>t.correct?1:-1));break;case 5:s=e.sort(((e,t)=>e.wrong>t.wrong?1:-1));break;case 6:s=e.sort(((e,t)=>e.errors>t.errors?1:-1));break;default:return s}return s}},2422:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.difficult=void 0;const n=s(4158);t.difficult=()=>{const e=[],t=[];for(let e=0;e<localStorage.length;e+=1){const s=JSON.parse(localStorage.getItem(localStorage.key(e)));t.push(s)}const s=n.sortBycategory(t,6);s.reverse().length=8;for(let t=0;t<s.length;t+=1)s[t].errors>0&&e.push({word:s[t].word,translation:s[t].translation,image:`img/${s[t].word}.jpg`,audioSrc:`audio/${s[t].word}.mp3`});return e}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,s),r.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{s(8387);const e=s(2178),t=s(582);window.onload=()=>{new e.App(document.body).routing(),0===localStorage.length&&t.words()}})()})();