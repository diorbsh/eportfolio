(function(N,Q){typeof exports=="object"&&typeof module<"u"?module.exports=Q(require("react"),require("react-dom/client")):typeof define=="function"&&define.amd?define(["react","react-dom/client"],Q):(N=typeof globalThis<"u"?globalThis:N||self,N.PortfolioTimeline=Q(N.React,N.ReactDOM))})(this,function(N,Q){"use strict";function ue(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var un={exports:{}},oa={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=N,de=Symbol.for("react.element"),ge=Symbol.for("react.fragment"),ve=Object.prototype.hasOwnProperty,pe=me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,be={key:!0,ref:!0,__self:!0,__source:!0};function mn(a,n,t){var e,r={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(e in n)ve.call(n,e)&&!be.hasOwnProperty(e)&&(r[e]=n[e]);if(a&&a.defaultProps)for(e in n=a.defaultProps,n)r[e]===void 0&&(r[e]=n[e]);return{$$typeof:de,type:a,key:i,ref:o,props:r,_owner:pe.current}}oa.Fragment=ge,oa.jsx=mn,oa.jsxs=mn,un.exports=oa;var k=un.exports;/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function Pa(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=Array(n);t<n;t++)e[t]=a[t];return e}function he(a){if(Array.isArray(a))return a}function ye(a){if(Array.isArray(a))return Pa(a)}function xe(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function we(a,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,gn(e.key),e)}}function Se(a,n,t){return n&&we(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function sa(a,n){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=Ia(a))||n){t&&(a=t);var e=0,r=function(){};return{s:r,n:function(){return e>=a.length?{done:!0}:{done:!1,value:a[e++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(a)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function g(a,n,t){return(n=gn(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function Ae(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function ke(a,n){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e,r,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(a)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(e=i.call(t)).done)&&(s.push(e.value),s.length!==n);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function Pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dn(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function f(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?dn(Object(t),!0).forEach(function(e){g(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):dn(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function la(a,n){return he(a)||ke(a,n)||Ia(a,n)||Pe()}function O(a){return ye(a)||Ae(a)||Ia(a)||Ie()}function ze(a,n){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var e=t.call(a,n);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function gn(a){var n=ze(a,"string");return typeof n=="symbol"?n:n+""}function fa(a){"@babel/helpers - typeof";return fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fa(a)}function Ia(a,n){if(a){if(typeof a=="string")return Pa(a,n);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Pa(a,n):void 0}}var vn=function(){},za={},pn={},bn=null,hn={mark:vn,measure:vn};try{typeof window<"u"&&(za=window),typeof document<"u"&&(pn=document),typeof MutationObserver<"u"&&(bn=MutationObserver),typeof performance<"u"&&(hn=performance)}catch{}var Oe=za.navigator||{},yn=Oe.userAgent,xn=yn===void 0?"":yn,L=za,x=pn,wn=bn,ca=hn;L.document;var T=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Sn=~xn.indexOf("MSIE")||~xn.indexOf("Trident/"),ua,Ee=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,je=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,An={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Fe={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},kn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],P="classic",Z="duotone",Pn="sharp",In="sharp-duotone",zn="chisel",On="etch",En="graphite",jn="jelly",Fn="jelly-duo",Cn="jelly-fill",Nn="mosaic",Tn="notdog",_n="notdog-duo",$n="pixel",Ln="slab",Mn="slab-duo",Dn="slab-press",Rn="slab-press-duo",Wn="thumbprint",Un="utility",Yn="utility-duo",Xn="utility-fill",Gn="vellum",Hn="whiteboard",Ce="Classic",Ne="Duotone",Te="Sharp",_e="Sharp Duotone",$e="Chisel",Le="Etch",Me="Graphite",De="Jelly",Re="Jelly Duo",We="Jelly Fill",Ue="Mosaic",Ye="Notdog",Xe="Notdog Duo",Ge="Pixel",He="Slab",Ve="Slab Duo",Be="Slab Press",qe="Slab Press Duo",Je="Thumbprint",Ke="Utility",Qe="Utility Duo",Ze="Utility Fill",ar="Vellum",nr="Whiteboard",Vn=[P,Z,Pn,In,zn,On,En,jn,Fn,Cn,Nn,Tn,_n,$n,Ln,Mn,Dn,Rn,Wn,Un,Yn,Xn,Gn,Hn];ua={},g(g(g(g(g(g(g(g(g(g(ua,P,Ce),Z,Ne),Pn,Te),In,_e),zn,$e),On,Le),En,Me),jn,De),Fn,Re),Cn,We),g(g(g(g(g(g(g(g(g(g(ua,Nn,Ue),Tn,Ye),_n,Xe),$n,Ge),Ln,He),Mn,Ve),Dn,Be),Rn,qe),Wn,Je),Un,Ke),g(g(g(g(ua,Yn,Qe),Xn,Ze),Gn,ar),Hn,nr);var tr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},er={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},rr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),ir={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Bn=["fak","fa-kit","fakd","fa-kit-duotone"],qn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},or=["kit"],sr="kit",lr="kit-duotone",fr="Kit",cr="Kit Duotone";g(g({},sr,fr),lr,cr);var ur={kit:{"fa-kit":"fak"}},mr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},dr={kit:{fak:"fa-kit"}},Jn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ma,da={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],vr="classic",pr="duotone",br="sharp",hr="sharp-duotone",yr="chisel",xr="etch",wr="graphite",Sr="jelly",Ar="jelly-duo",kr="jelly-fill",Pr="mosaic",Ir="notdog",zr="notdog-duo",Or="pixel",Er="slab",jr="slab-duo",Fr="slab-press",Cr="slab-press-duo",Nr="thumbprint",Tr="utility",_r="utility-duo",$r="utility-fill",Lr="vellum",Mr="whiteboard",Dr="Classic",Rr="Duotone",Wr="Sharp",Ur="Sharp Duotone",Yr="Chisel",Xr="Etch",Gr="Graphite",Hr="Jelly",Vr="Jelly Duo",Br="Jelly Fill",qr="Mosaic",Jr="Notdog",Kr="Notdog Duo",Qr="Pixel",Zr="Slab",ai="Slab Duo",ni="Slab Press",ti="Slab Press Duo",ei="Thumbprint",ri="Utility",ii="Utility Duo",oi="Utility Fill",si="Vellum",li="Whiteboard";ma={},g(g(g(g(g(g(g(g(g(g(ma,vr,Dr),pr,Rr),br,Wr),hr,Ur),yr,Yr),xr,Xr),wr,Gr),Sr,Hr),Ar,Vr),kr,Br),g(g(g(g(g(g(g(g(g(g(ma,Pr,qr),Ir,Jr),zr,Kr),Or,Qr),Er,Zr),jr,ai),Fr,ni),Cr,ti),Nr,ei),Tr,ri),g(g(g(g(ma,_r,ii),$r,oi),Lr,si),Mr,li);var fi="kit",ci="kit-duotone",ui="Kit",mi="Kit Duotone";g(g({},fi,ui),ci,mi);var di={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},gi={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Oa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},vi=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Kn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(gr,vi),pi=["solid","regular","light","thin","duotone","brands","semibold"],Qn=[1,2,3,4,5,6,7,8,9,10],bi=Qn.concat([11,12,13,14,15,16,17,18,19,20]),hi=["aw","fw","pull-left","pull-right"],yi=[].concat(O(Object.keys(gi)),pi,hi,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",da.GROUP,da.SWAP_OPACITY,da.PRIMARY,da.SECONDARY]).concat(Qn.map(function(a){return"".concat(a,"x")})).concat(bi.map(function(a){return"w-".concat(a)})),xi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_="___FONT_AWESOME___",Ea=16,Zn="fa",at="svg-inline--fa",Y="data-fa-i2svg",ja="data-fa-pseudo-element",wi="data-fa-pseudo-element-pending",Fa="data-prefix",Ca="data-icon",nt="fontawesome-i2svg",Si="async",Ai=["HTML","HEAD","STYLE","SCRIPT"],tt=["::before","::after",":before",":after"],et=function(){try{return!0}catch{return!1}}();function aa(a){return new Proxy(a,{get:function(t,e){return e in t?t[e]:t[P]}})}var rt=f({},An);rt[P]=f(f(f(f({},{"fa-duotone":"duotone"}),An[P]),qn.kit),qn["kit-duotone"]);var ki=aa(rt),Na=f({},ir);Na[P]=f(f(f(f({},{duotone:"fad"}),Na[P]),Jn.kit),Jn["kit-duotone"]);var it=aa(Na),Ta=f({},Oa);Ta[P]=f(f({},Ta[P]),dr.kit);var _a=aa(Ta),$a=f({},di);$a[P]=f(f({},$a[P]),ur.kit),aa($a);var Pi=Ee,ot="fa-layers-text",Ii=je,zi=f({},tr);aa(zi);var Oi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],La=Fe,Ei=[].concat(O(or),O(yi)),na=L.FontAwesomeConfig||{};function ji(a){var n=x.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function Fi(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(x&&typeof x.querySelector=="function"){var Ci=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ci.forEach(function(a){var n=la(a,2),t=n[0],e=n[1],r=Fi(ji(t));r!=null&&(na[e]=r)})}var st={styleDefault:"solid",familyDefault:P,cssPrefix:Zn,replacementClass:at,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};na.familyPrefix&&(na.cssPrefix=na.familyPrefix);var H=f(f({},st),na);H.autoReplaceSvg||(H.observeMutations=!1);var d={};Object.keys(st).forEach(function(a){Object.defineProperty(d,a,{enumerable:!0,set:function(t){H[a]=t,ta.forEach(function(e){return e(d)})},get:function(){return H[a]}})}),Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){H.cssPrefix=n,ta.forEach(function(t){return t(d)})},get:function(){return H.cssPrefix}}),L.FontAwesomeConfig=d;var ta=[];function Ni(a){return ta.push(a),function(){ta.splice(ta.indexOf(a),1)}}var V=Ea,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ti(a){if(!(!a||!T)){var n=x.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var t=x.head.childNodes,e=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return x.head.insertBefore(n,e),a}}var _i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){for(var a=12,n="";a-- >0;)n+=_i[Math.random()*62|0];return n}function B(a){for(var n=[],t=(a||[]).length>>>0;t--;)n[t]=a[t];return n}function Ma(a){return a.classList?B(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function ft(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $i(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(ft(a[t]),'" ')},"").trim()}function ga(a){return Object.keys(a||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(a[t].trim(),";")},"")}function Da(a){return a.size!==F.size||a.x!==F.x||a.y!==F.y||a.rotate!==F.rotate||a.flipX||a.flipY}function Li(a){var n=a.transform,t=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Mi(a){var n=a.transform,t=a.width,e=t===void 0?Ea:t,r=a.height,i=r===void 0?Ea:r,o="";return Sn?o+="translate(".concat(n.x/V-e/2,"em, ").concat(n.y/V-i/2,"em) "):o+="translate(calc(-50% + ".concat(n.x/V,"em), calc(-50% + ").concat(n.y/V,"em)) "),o+="scale(".concat(n.size/V*(n.flipX?-1:1),", ").concat(n.size/V*(n.flipY?-1:1),") "),o+="rotate(".concat(n.rotate,"deg) "),o}var Di=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ct(){var a=Zn,n=at,t=d.cssPrefix,e=d.replacementClass,r=Di;if(t!==a||e!==n){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(e))}return r}var ut=!1;function Ra(){d.autoAddCss&&!ut&&(Ti(ct()),ut=!0)}var Ri={mixout:function(){return{dom:{css:ct,insertCss:Ra}}},hooks:function(){return{beforeDOMElementCreation:function(){Ra()},beforeI2svg:function(){Ra()}}}},$=L||{};$[_]||($[_]={}),$[_].styles||($[_].styles={}),$[_].hooks||($[_].hooks={}),$[_].shims||($[_].shims=[]);var E=$[_],mt=[],dt=function(){x.removeEventListener("DOMContentLoaded",dt),va=1,mt.map(function(n){return n()})},va=!1;T&&(va=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),va||x.addEventListener("DOMContentLoaded",dt));function Wi(a){T&&(va?setTimeout(a,0):mt.push(a))}function ea(a){var n=a.tag,t=a.attributes,e=t===void 0?{}:t,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?ft(a):"<".concat(n," ").concat($i(e),">").concat(i.map(ea).join(""),"</").concat(n,">")}function gt(a,n,t){if(a&&a[n]&&a[n][t])return{prefix:n,iconName:t,icon:a[n][t]}}var Wa=function(n,t,e,r){var i=Object.keys(n),o=i.length,s=t,l,c,u;for(e===void 0?(l=1,u=n[i[0]]):(l=0,u=e);l<o;l++)c=i[l],u=s(u,n[c],c,n);return u};function vt(a){return O(a).length!==1?null:a.codePointAt(0).toString(16)}function pt(a){return Object.keys(a).reduce(function(n,t){var e=a[t],r=!!e.icon;return r?n[e.iconName]=e.icon:n[t]=e,n},{})}function Ua(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,r=e===void 0?!1:e,i=pt(n);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(a,pt(n)):E.styles[a]=f(f({},E.styles[a]||{}),i),a==="fas"&&Ua("fa",n)}var ra=E.styles,Ui=E.shims,bt=Object.keys(_a),Yi=bt.reduce(function(a,n){return a[n]=Object.keys(_a[n]),a},{}),Ya=null,ht={},yt={},xt={},wt={},St={};function Xi(a){return~Ei.indexOf(a)}function Gi(a,n){var t=n.split("-"),e=t[0],r=t.slice(1).join("-");return e===a&&r!==""&&!Xi(r)?r:null}var At=function(){var n=function(i){return Wa(ra,function(o,s,l){return o[l]=Wa(s,i,{}),o},{})};ht=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),yt=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),St=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var t="far"in ra||d.autoFetchSvg,e=Wa(Ui,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});xt=e.names,wt=e.unicodes,Ya=pa(d.styleDefault,{family:d.familyDefault})};Ni(function(a){Ya=pa(a.styleDefault,{family:d.familyDefault})}),At();function Xa(a,n){return(ht[a]||{})[n]}function Hi(a,n){return(yt[a]||{})[n]}function X(a,n){return(St[a]||{})[n]}function kt(a){return xt[a]||{prefix:null,iconName:null}}function Vi(a){var n=wt[a],t=Xa("fas",a);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function M(){return Ya}var Pt=function(){return{prefix:null,iconName:null,rest:[]}};function Bi(a){var n=P,t=bt.reduce(function(e,r){return e[r]="".concat(d.cssPrefix,"-").concat(r),e},{});return Vn.forEach(function(e){(a.includes(t[e])||a.some(function(r){return Yi[e].includes(r)}))&&(n=e)}),n}function pa(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,e=t===void 0?P:t,r=ki[e][a];if(e===Z&&!a)return"fad";var i=it[e][a]||it[e][r],o=a in E.styles?a:null,s=i||o||null;return s}function qi(a){var n=[],t=null;return a.forEach(function(e){var r=Gi(d.cssPrefix,e);r?t=r:e&&n.push(e)}),{iconName:t,rest:n}}function It(a){return a.sort().filter(function(n,t,e){return e.indexOf(n)===t})}var zt=Kn.concat(Bn);function ba(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,e=t===void 0?!1:t,r=null,i=It(a.filter(function(v){return zt.includes(v)})),o=It(a.filter(function(v){return!zt.includes(v)})),s=i.filter(function(v){return r=v,!kn.includes(v)}),l=la(s,1),c=l[0],u=c===void 0?null:c,m=Bi(i),p=f(f({},qi(o)),{},{prefix:pa(u,{family:m})});return f(f(f({},p),Zi({values:a,family:m,styles:ra,config:d,canonical:p,givenPrefix:r})),Ji(e,r,p))}function Ji(a,n,t){var e=t.prefix,r=t.iconName;if(a||!e||!r)return{prefix:e,iconName:r};var i=n==="fa"?kt(r):{},o=X(e,r);return r=i.iconName||o||r,e=i.prefix||e,e==="far"&&!ra.far&&ra.fas&&!d.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var Ki=Vn.filter(function(a){return a!==P||a!==Z}),Qi=Object.keys(Oa).filter(function(a){return a!==P}).map(function(a){return Object.keys(Oa[a])}).flat();function Zi(a){var n=a.values,t=a.family,e=a.canonical,r=a.givenPrefix,i=r===void 0?"":r,o=a.styles,s=o===void 0?{}:o,l=a.config,c=l===void 0?{}:l,u=t===Z,m=n.includes("fa-duotone")||n.includes("fad"),p=c.familyDefault==="duotone",v=e.prefix==="fad"||e.prefix==="fa-duotone";if(!u&&(m||p||v)&&(e.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(e.prefix="fab"),!e.prefix&&Ki.includes(t)){var w=Object.keys(s).find(function(S){return Qi.includes(S)});if(w||c.autoFetchSvg){var h=rr.get(t).defaultShortPrefixId;e.prefix=h,e.iconName=X(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=M()||"fas"),e}var ao=function(){function a(){xe(this,a),this.definitions={}}return Se(a,[{key:"add",value:function(){for(var t=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),Ua(s,o[s]);var l=_a[P][s];l&&Ua(l,o[s]),At()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];t[s]||(t[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(t[s][m]=c)}),t[s][l]=c}),t}}])}(),Ot=[],q={},J={},no=Object.keys(J);function to(a,n){var t=n.mixoutsTo;return Ot=a,q={},Object.keys(J).forEach(function(e){no.indexOf(e)===-1&&delete J[e]}),Ot.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),fa(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}e.provides&&e.provides(J)}),t}function Ga(a,n){for(var t=arguments.length,e=new Array(t>2?t-2:0),r=2;r<t;r++)e[r-2]=arguments[r];var i=q[a]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function G(a){for(var n=arguments.length,t=new Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];var r=q[a]||[];r.forEach(function(i){i.apply(null,t)})}function D(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return J[a]?J[a].apply(null,n):void 0}function Ha(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,t=a.prefix||M();if(n)return n=X(t,n)||n,gt(Et.definitions,t,n)||gt(E.styles,t,n)}var Et=new ao,eo=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,G("noAuto")},ro={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(G("beforeI2svg",n),D("pseudoElements2svg",n),D("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Wi(function(){oo({autoReplaceSvgRoot:t}),G("watch",n)})}},io={icon:function(n){if(n===null)return null;if(fa(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:X(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=pa(n[0]);return{prefix:e,iconName:X(e,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Pi))){var r=ba(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||M(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=M();return{prefix:i,iconName:X(i,n)||n}}}},z={noAuto:eo,config:d,dom:ro,parse:io,library:Et,findIconDefinition:Ha,toHtml:ea},oo=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,e=t===void 0?x:t;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&T&&d.autoReplaceSvg&&z.dom.i2svg({node:e})};function ha(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return ea(e)})}}),Object.defineProperty(a,"node",{get:function(){if(T){var e=x.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function so(a){var n=a.children,t=a.main,e=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(Da(o)&&t.found&&!e.found){var s=t.width,l=t.height,c={x:s/l/2,y:.5};r.style=ga(f(f({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function lo(a){var n=a.prefix,t=a.iconName,e=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:e}]}]}function fo(a){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(t){return t in a})}function Va(a){var n=a.icons,t=n.main,e=n.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,l=a.maskId,c=a.extra,u=a.watchable,m=u===void 0?!1:u,p=e.found?e:t,v=p.width,w=p.height,h=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(j){return c.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(c.classes).join(" "),S={children:[],attributes:f(f({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:c.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(w)})};!fo(c.attributes)&&!c.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),m&&(S.attributes[Y]="");var y=f(f({},S),{},{prefix:r,iconName:i,main:t,mask:e,maskId:l,transform:o,symbol:s,styles:f({},c.styles)}),A=e.found&&t.found?D("generateAbstractMask",y)||{children:[],attributes:{}}:D("generateAbstractIcon",y)||{children:[],attributes:{}},I=A.children,W=A.attributes;return y.children=I,y.attributes=W,s?lo(y):so(y)}function jt(a){var n=a.content,t=a.width,e=a.height,r=a.transform,i=a.extra,o=a.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[Y]="");var c=f({},i.styles);Da(r)&&(c.transform=Mi({transform:r,width:t,height:e}),c["-webkit-transform"]=c.transform);var u=ga(c);u.length>0&&(l.style=u);var m=[];return m.push({tag:"span",attributes:l,children:[n]}),m}function co(a){var n=a.content,t=a.extra,e=f(f({},t.attributes),{},{class:t.classes.join(" ")}),r=ga(t.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[n]}),i}var Ba=E.styles;function qa(a){var n=a[0],t=a[1],e=a.slice(4),r=la(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(La.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(La.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(La.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var uo={found:!1,width:512,height:512};function mo(a,n){!et&&!d.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function Ja(a,n){var t=n;return n==="fa"&&d.styleDefault!==null&&(n=M()),new Promise(function(e,r){if(t==="fa"){var i=kt(a)||{};a=i.iconName||a,n=i.prefix||n}if(a&&n&&Ba[n]&&Ba[n][a]){var o=Ba[n][a];return e(qa(o))}mo(a,n),e(f(f({},uo),{},{icon:d.showMissingIcons&&a?D("missingIconAbstract")||{}:{}}))})}var Ft=function(){},Ka=d.measurePerformance&&ca&&ca.mark&&ca.measure?ca:{mark:Ft,measure:Ft},ia='FA "7.3.1"',go=function(n){return Ka.mark("".concat(ia," ").concat(n," begins")),function(){return Ct(n)}},Ct=function(n){Ka.mark("".concat(ia," ").concat(n," ends")),Ka.measure("".concat(ia," ").concat(n),"".concat(ia," ").concat(n," begins"),"".concat(ia," ").concat(n," ends"))},Qa={begin:go,end:Ct},ya=function(){};function Nt(a){var n=a.getAttribute?a.getAttribute(Y):null;return typeof n=="string"}function vo(a){var n=a.getAttribute?a.getAttribute(Fa):null,t=a.getAttribute?a.getAttribute(Ca):null;return n&&t}function po(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(d.replacementClass)}function bo(){if(d.autoReplaceSvg===!0)return xa.replace;var a=xa[d.autoReplaceSvg];return a||xa.replace}function ho(a){return x.createElementNS("http://www.w3.org/2000/svg",a)}function yo(a){return x.createElement(a)}function Tt(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,e=t===void 0?a.tag==="svg"?ho:yo:t;if(typeof a=="string")return x.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild(Tt(o,{ceFn:e}))}),r}function xo(a){var n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var xa={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(Tt(r),t)}),t.getAttribute(Y)===null&&d.keepOriginalSource){var e=x.createComment(xo(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(n){var t=n[0],e=n[1];if(~Ma(t).indexOf(d.replacementClass))return xa.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return ea(s)}).join(`
`);t.setAttribute(Y,""),t.innerHTML=o}};function _t(a){a()}function $t(a,n){var t=typeof n=="function"?n:ya;if(a.length===0)t();else{var e=_t;d.mutateApproach===Si&&(e=L.requestAnimationFrame||_t),e(function(){var r=bo(),i=Qa.begin("mutate");a.map(r),i(),t()})}}var Za=!1;function Lt(){Za=!0}function an(){Za=!1}var wa=null;function Mt(a){if(wn&&d.observeMutations){var n=a.treeCallback,t=n===void 0?ya:n,e=a.nodeCallback,r=e===void 0?ya:e,i=a.pseudoElementsCallback,o=i===void 0?ya:i,s=a.observeMutationsRoot,l=s===void 0?x:s;wa=new wn(function(c){if(!Za){var u=M();B(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Nt(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),t(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&Nt(m.target)&&~Oi.indexOf(m.attributeName))if(m.attributeName==="class"&&vo(m.target)){var p=ba(Ma(m.target)),v=p.prefix,w=p.iconName;m.target.setAttribute(Fa,v||u),w&&m.target.setAttribute(Ca,w)}else po(m.target)&&r(m.target)})}}),T&&wa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wo(){wa&&wa.disconnect()}function So(a){var n=a.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),t}function Ao(a){var n=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=ba(Ma(a));return r.prefix||(r.prefix=M()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Hi(r.prefix,a.innerText)||Xa(r.prefix,vt(a.innerText))),!r.iconName&&d.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function ko(a){var n=B(a.attributes).reduce(function(t,e){return t.name!=="class"&&t.name!=="style"&&(t[e.name]=e.value),t},{});return n}function Po(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dt(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ao(a),e=t.iconName,r=t.prefix,i=t.rest,o=ko(a),s=Ga("parseNodeAttributes",{},a),l=n.styleParser?So(a):[];return f({iconName:e,prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Io=E.styles;function Rt(a){var n=d.autoReplaceSvg==="nest"?Dt(a,{styleParser:!1}):Dt(a);return~n.extra.classes.indexOf(ot)?D("generateLayersText",a,n):D("generateSvgReplacementMutation",a,n)}function zo(){return[].concat(O(Bn),O(Kn))}function Wt(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var t=x.documentElement.classList,e=function(m){return t.add("".concat(nt,"-").concat(m))},r=function(m){return t.remove("".concat(nt,"-").concat(m))},i=d.autoFetchSvg?zo():kn.concat(Object.keys(Io));i.includes("fa")||i.push("fa");var o=[".".concat(ot,":not([").concat(Y,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Y,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=B(a.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var l=Qa.begin("onTree"),c=s.reduce(function(u,m){try{var p=Rt(m);p&&u.push(p)}catch(v){et||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(p){$t(p,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),l(),u()})}).catch(function(p){l(),m(p)})})}function Oo(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rt(a).then(function(t){t&&$t([t],n)})}function Eo(a){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Ha(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Ha(r||{})),a(e,f(f({},t),{},{mask:r}))}}var jo=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,r=e===void 0?F:e,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,c=t.maskId,u=c===void 0?null:c,m=t.classes,p=m===void 0?[]:m,v=t.attributes,w=v===void 0?{}:v,h=t.styles,S=h===void 0?{}:h;if(n){var y=n.prefix,A=n.iconName,I=n.icon;return ha(f({type:"icon"},n),function(){return G("beforeDOMElementCreation",{iconDefinition:n,params:t}),Va({icons:{main:qa(I),mask:l?qa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:A,transform:f(f({},F),r),symbol:o,maskId:u,extra:{attributes:w,styles:S,classes:p}})})}},Fo={mixout:function(){return{icon:Eo(jo)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Wt,t.nodeCallback=Oo,t}}},provides:function(n){n.i2svg=function(t){var e=t.node,r=e===void 0?x:e,i=t.callback,o=i===void 0?function(){}:i;return Wt(r,o)},n.generateSvgReplacementMutation=function(t,e){var r=e.iconName,i=e.prefix,o=e.transform,s=e.symbol,l=e.mask,c=e.maskId,u=e.extra;return new Promise(function(m,p){Promise.all([Ja(r,i),l.iconName?Ja(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=la(v,2),h=w[0],S=w[1];m([t,Va({icons:{main:h,mask:S},prefix:i,iconName:r,transform:o,symbol:s,maskId:c,extra:u,watchable:!0})])}).catch(p)})},n.generateAbstractIcon=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,l=ga(s);l.length>0&&(r.style=l);var c;return Da(o)&&(c=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(c||i.icon),{children:e,attributes:r}}}},Co={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return ha({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:t,params:e});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(O(i)).join(" ")},children:o}]})}}}},No={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.title;var r=e.classes,i=r===void 0?[]:r,o=e.attributes,s=o===void 0?{}:o,l=e.styles,c=l===void 0?{}:l;return ha({type:"counter",content:t},function(){return G("beforeDOMElementCreation",{content:t,params:e}),co({content:t.toString(),extra:{attributes:s,styles:c,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(O(i))}})})}}}},To={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?F:r,o=e.classes,s=o===void 0?[]:o,l=e.attributes,c=l===void 0?{}:l,u=e.styles,m=u===void 0?{}:u;return ha({type:"text",content:t},function(){return G("beforeDOMElementCreation",{content:t,params:e}),jt({content:t,transform:f(f({},F),i),extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-text")].concat(O(s))}})})}}},provides:function(n){n.generateLayersText=function(t,e){var r=e.transform,i=e.extra,o=null,s=null;if(Sn){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([t,jt({content:t.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Ut=new RegExp('"',"ug"),Yt=[1105920,1112319],Xt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),er),xi),mr),nn=Object.keys(Xt).reduce(function(a,n){return a[n.toLowerCase()]=Xt[n],a},{}),_o=Object.keys(nn).reduce(function(a,n){var t=nn[n];return a[n]=t[900]||O(Object.entries(t))[0][1],a},{});function $o(a){var n=a.replace(Ut,"");return vt(O(n)[0]||"")}function Lo(a){var n=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),e=t.replace(Ut,""),r=e.codePointAt(0),i=r>=Yt[0]&&r<=Yt[1],o=e.length===2?e[0]===e[1]:!1;return i||o||n}function Mo(a,n){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(n),r=isNaN(e)?"normal":e;return(nn[t]||{})[r]||_o[t]}function Gt(a,n){var t="".concat(wi).concat(n.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(t)!==null)return e();var i=B(a.children),o=i.filter(function(K){return K.getAttribute(ja)===n})[0],s=L.getComputedStyle(a,n),l=s.getPropertyValue("font-family"),c=l.match(Ii),u=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!c)return a.removeChild(o),e();if(c&&m!=="none"&&m!==""){var p=s.getPropertyValue("content"),v=Mo(l,u),w=$o(p),h=c[0].startsWith("FontAwesome"),S=Lo(s),y=Xa(v,w),A=y;if(h){var I=Vi(w);I.iconName&&I.prefix&&(y=I.iconName,v=I.prefix)}if(y&&!S&&(!o||o.getAttribute(Fa)!==v||o.getAttribute(Ca)!==A)){a.setAttribute(t,A),o&&a.removeChild(o);var W=Po(),j=W.extra;j.attributes[ja]=n,Ja(y,v).then(function(K){var ka=Va(f(f({},W),{},{icons:{main:K,mask:Pt()},prefix:v,iconName:A,extra:j,watchable:!0})),U=x.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(U,a.firstChild):a.appendChild(U),U.outerHTML=ka.map(function(Es){return ea(Es)}).join(`
`),a.removeAttribute(t),e()}).catch(r)}else e()}else e()})}function Do(a){return Promise.all([Gt(a,"::before"),Gt(a,"::after")])}function Ro(a){return a.parentNode!==document.head&&!~Ai.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(ja)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Wo=function(n){return!!n&&tt.some(function(t){return n.includes(t)})},Uo=function(n){if(!n)return[];var t=new Set,e=n.split(/,(?![^()]*\))/).map(function(l){return l.trim()});e=e.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var r=sa(e),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Wo(o)){var s=tt.reduce(function(l,c){return l.replace(c,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){r.e(l)}finally{r.f()}return t};function Ht(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T){var t;if(n)t=a;else if(d.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var e=new Set,r=sa(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=sa(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,u=Uo(c.selectorText),m=sa(u),p;try{for(m.s();!(p=m.n()).done;){var v=p.value;e.add(v)}}catch(h){m.e(h)}finally{m.f()}}}catch(h){s.e(h)}finally{s.f()}}catch(h){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(h.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(h){r.e(h)}finally{r.f()}if(!e.size)return;var w=Array.from(e).join(", ");try{t=a.querySelectorAll(w)}catch{}}return new Promise(function(h,S){var y=B(t).filter(Ro).map(Do),A=Qa.begin("searchPseudoElements");Lt(),Promise.all(y).then(function(){A(),an(),h()}).catch(function(){A(),an(),S()})})}}var Yo={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ht,t}}},provides:function(n){n.pseudoElements2svg=function(t){var e=t.node,r=e===void 0?x:e;d.searchPseudoElements&&Ht(r)}}},Vt=!1,Xo={mixout:function(){return{dom:{unwatch:function(){Lt(),Vt=!0}}}},hooks:function(){return{bootstrap:function(){Mt(Ga("mutationObserverCallbacks",{}))},noAuto:function(){wo()},watch:function(t){var e=t.observeMutationsRoot;Vt?an():Mt(Ga("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Bt=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},t)},Go={mixout:function(){return{parse:{transform:function(t){return Bt(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-transform");return r&&(t.transform=Bt(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var e=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:m,path:p};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),v.path)}]}]}}}},tn={x:0,y:0,width:"100%",height:"100%"};function qt(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function Ho(a){return a.tag==="g"?a.children:[a]}var Vo={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-mask"),i=r?ba(r.split(" ").map(function(o){return o.trim()})):Pt();return i.prefix||(i.prefix=M()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var e=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,c=i.width,u=i.icon,m=o.width,p=o.icon,v=Li({transform:l,containerWidth:m,iconWidth:c}),w={tag:"rect",attributes:f(f({},tn),{},{fill:"white"})},h=u.children?{children:u.children.map(qt)}:{},S={tag:"g",attributes:f({},v.inner),children:[qt(f({tag:u.tag,attributes:f(f({},u.attributes),v.path)},h))]},y={tag:"g",attributes:f({},v.outer),children:[S]},A="mask-".concat(s||lt()),I="clip-".concat(s||lt()),W={tag:"mask",attributes:f(f({},tn),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,y]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Ho(p)},W]};return e.push(j,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(A,")")},tn)}),{children:e,attributes:r}}}},Bo={provides:function(n){var t=!1;L.matchMedia&&(t=L.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},qo={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},Jo=[Ri,Fo,Co,No,To,Yo,Xo,Go,Vo,Bo,qo];to(Jo,{mixoutsTo:z}),z.noAuto,z.config,z.library,z.dom;var en=z.parse;z.findIconDefinition,z.toHtml;var Ko=z.icon;z.layer,z.text,z.counter;var Jt={exports:{}},Qo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Zo=Qo,as=Zo;function Kt(){}function Qt(){}Qt.resetWarningCache=Kt;var ns=function(){function a(e,r,i,o,s,l){if(l!==as){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}a.isRequired=a;function n(){return a}var t={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:n,element:a,elementType:a,instanceOf:n,node:a,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Qt,resetWarningCache:Kt};return t.PropTypes=t,t};Jt.exports=ns();var ts=Jt.exports;const b=ue(ts);var es={};function rn(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=Array(n);t<n;t++)e[t]=a[t];return e}function rs(a){if(Array.isArray(a))return a}function is(a){if(Array.isArray(a))return rn(a)}function R(a,n,t){return(n=ds(n))in a?Object.defineProperty(a,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[n]=t,a}function os(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function ss(a,n){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e,r,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(a)).next,n!==0)for(;!(l=(e=i.call(t)).done)&&(s.push(e.value),s.length!==n);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function ls(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zt(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,e)}return t}function C(a){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Zt(Object(t),!0).forEach(function(e){R(a,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Zt(Object(t)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))})}return a}function cs(a,n){if(a==null)return{};var t,e,r=us(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(e=0;e<i.length;e++)t=i[e],n.indexOf(t)===-1&&{}.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}function us(a,n){if(a==null)return{};var t={};for(var e in a)if({}.hasOwnProperty.call(a,e)){if(n.indexOf(e)!==-1)continue;t[e]=a[e]}return t}function ae(a,n){return rs(a)||ss(a,n)||ne(a,n)||ls()}function on(a){return is(a)||os(a)||ne(a)||fs()}function ms(a,n){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var e=t.call(a,n);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function ds(a){var n=ms(a,"string");return typeof n=="symbol"?n:n+""}function Sa(a){"@babel/helpers - typeof";return Sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Sa(a)}function ne(a,n){if(a){if(typeof a=="string")return rn(a,n);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?rn(a,n):void 0}}var gs="7.0.0",sn;try{var vs=require("@fortawesome/fontawesome-svg-core/package.json");sn=vs.version}catch{sn=typeof process<"u"&&es.FA_VERSION||"7.0.0"}function ps(a){var n=a.beat,t=a.fade,e=a.beatFade,r=a.bounce,i=a.shake,o=a.flash,s=a.spin,l=a.spinPulse,c=a.spinReverse,u=a.pulse,m=a.fixedWidth,p=a.inverse,v=a.border,w=a.listItem,h=a.flip,S=a.size,y=a.rotation,A=a.pull,I=a.swapOpacity,W=a.rotateBy,j=a.widthAuto,K=bs(sn,gs),ka=R(R(R(R(R(R({"fa-beat":n,"fa-fade":t,"fa-beat-fade":e,"fa-bounce":r,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":m,"fa-inverse":p,"fa-border":v,"fa-li":w,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},"fa-".concat(S),typeof S<"u"&&S!==null),"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),"fa-pull-".concat(A),typeof A<"u"&&A!==null),"fa-swap-opacity",I),"fa-rotate-by",K&&W),"fa-width-auto",K&&j);return Object.keys(ka).map(function(U){return ka[U]?U:null}).filter(function(U){return U})}function bs(a,n){for(var t=a.split("-"),e=ae(t,2),r=e[0],i=e[1],o=n.split("-"),s=ae(o,2),l=s[0],c=s[1],u=r.split("."),m=l.split("."),p=0;p<Math.max(u.length,m.length);p++){var v=u[p]||"0",w=m[p]||"0",h=parseInt(v,10),S=parseInt(w,10);if(h!==S)return h>S}for(var y=0;y<Math.max(u.length,m.length);y++){var A=u[y]||"0",I=m[y]||"0";if(A!==I&&A.length!==I.length)return A.length<I.length}return!(i&&!c)}function hs(a){return a=a-0,a===a}function te(a){return hs(a)?a:(a=a.replace(/[\-_\s]+(.)?/g,function(n,t){return t?t.toUpperCase():""}),a.substr(0,1).toLowerCase()+a.substr(1))}var ys=["style"];function xs(a){return a.charAt(0).toUpperCase()+a.slice(1)}function ws(a){return a.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var e=t.indexOf(":"),r=te(t.slice(0,e)),i=t.slice(e+1).trim();return r.startsWith("webkit")?n[xs(r)]=i:n[r]=i,n},{})}function ee(a,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var e=(n.children||[]).map(function(l){return ee(a,l)}),r=Object.keys(n.attributes||{}).reduce(function(l,c){var u=n.attributes[c];switch(c){case"class":l.attrs.className=u,delete n.attributes.class;break;case"style":l.attrs.style=ws(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[te(c)]=u}return l},{attrs:{}}),i=t.style,o=i===void 0?{}:i,s=cs(t,ys);return r.attrs.style=C(C({},r.attrs.style),o),a.apply(void 0,[n.tag,C(C({},r.attrs),s)].concat(on(e)))}var re=!1;try{re=!0}catch{}function Ss(){if(!re&&console&&typeof console.error=="function"){var a;(a=console).error.apply(a,arguments)}}function ie(a){if(a&&Sa(a)==="object"&&a.prefix&&a.iconName&&a.icon)return a;if(en.icon)return en.icon(a);if(a===null)return null;if(a&&Sa(a)==="object"&&a.prefix&&a.iconName)return a;if(Array.isArray(a)&&a.length===2)return{prefix:a[0],iconName:a[1]};if(typeof a=="string")return{prefix:"fas",iconName:a}}function ln(a,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?R({},a,n):{}}var oe={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Aa=N.forwardRef(function(a,n){var t=C(C({},oe),a),e=t.icon,r=t.mask,i=t.symbol,o=t.className,s=t.title,l=t.titleId,c=t.maskId,u=ie(e),m=ln("classes",[].concat(on(ps(t)),on((o||"").split(" ")))),p=ln("transform",typeof t.transform=="string"?en.transform(t.transform):t.transform),v=ln("mask",ie(r)),w=Ko(u,C(C(C(C({},m),p),v),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!w)return Ss("Could not find icon",u),null;var h=w.abstract,S={ref:n};return Object.keys(t).forEach(function(y){oe.hasOwnProperty(y)||(S[y]=t[y])}),As(h[0],S)});Aa.displayName="FontAwesomeIcon",Aa.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),rotateBy:b.bool,shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool,widthAuto:b.bool};var As=ee.bind(null,N.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ks={prefix:"fas",iconName:"certificate",icon:[512,512,[],"f0a3","M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"]},Ps={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},Is={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},se={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},zs={prefix:"fas",iconName:"award",icon:[384,512,[],"f559","M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"]},le={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"]},fe={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]},fn=[{date:"Jul 2025 – heute",title:"QMS Process Manager",company:"Altstätten, Sankt Gallen, Schweiz",description:"Prozessmanagement, Prozessoptimierung, Qualitätsmanagement (ISO 9001), BPMN, Projektmanagement",icon:le,color:"#5000ca",category:"work",badge:{label:"Qualitätsmanagement",icon:ks}},{date:"Feb 2025 – Jul 2025",title:"Video Editor",company:"Sankt Gallen, Schweiz",description:"Videoschnitt, Videoproduktion, CapCut Pro, Content-Produktion",icon:Is,color:"#5000ca",category:"work",badge:{label:"Content Creation",icon:zs}},{date:"Jan 2024 – Mai 2024",title:"Rekrutenschule",company:"Frauenfeld, Thurgau, Schweiz",description:"Teamführung, Belastbarkeit, Kommunikationstechnik, Krisenmanagement",icon:fe,color:"#34c759",category:"education",badge:{label:"Ausbildung",icon:fe}},{date:"Sep 2023 – Nov 2023",title:"Softwareentwickler",company:"Altstätten, Sankt Gallen, Schweiz",description:"Mobile App Development, C# / Xamarin, Web Development, FileZilla, WordPress, PHP",icon:Ps,color:"#0071e3",category:"work",badge:{label:"Vollzeit",icon:le}},{date:"Aug 2022 – Jul 2023",title:"Software Entwickler – Praktikum",company:"Diepoldsau, Sankt Gallen, Schweiz",description:"App-Entwicklung, Technische Dokumentation, Cloud-Computing, IoT, MQTT, C++, Python, TortoiseSVN",icon:se,color:"#ff6b35",category:"work",badge:{label:"Praktikum",icon:se}}];function cn(){return k.jsx("div",{className:"telerik-timeline-container",children:k.jsxs("div",{className:"timeline-wrapper",children:[k.jsx("div",{className:"timeline-line"}),k.jsx("div",{className:"timeline-items",children:fn.map((a,n)=>k.jsx(Os,{item:a,index:n,isLast:n===fn.length-1},n))})]})})}function Os({item:a,index:n,isLast:t}){const e=n%2===0;return k.jsxs("div",{className:`timeline-item ${e?"timeline-item--left":"timeline-item--right"} ${a.category}`,"data-animate":"fade-up",style:{"--item-color":a.color,transitionDelay:`${n*100}ms`},children:[k.jsxs("div",{className:"timeline-card",children:[k.jsxs("div",{className:"card-header",children:[k.jsx("div",{className:"card-icon",style:{background:a.color},children:k.jsx(Aa,{icon:a.icon,size:"lg",color:"white"})}),k.jsx("div",{className:"card-date",style:{background:a.color},children:a.date})]}),k.jsxs("div",{className:"card-content",children:[k.jsx("h3",{className:"card-title",children:a.title}),k.jsx("h4",{className:"card-company",children:a.company}),k.jsx("p",{className:"card-description",children:a.description})]}),a.badge&&k.jsxs("div",{className:`card-badge ${a.category}`,style:{background:a.color},children:[k.jsx(Aa,{icon:a.badge.icon,size:"xs",color:"white"}),k.jsx("span",{children:a.badge.label})]})]}),k.jsx("div",{className:"timeline-dot",style:{background:a.color,boxShadow:`0 0 0 4px var(--color-bg), 0 0 0 6px ${a.color}`}}),!t&&k.jsx("div",{className:"timeline-connector",style:{background:`linear-gradient(180deg, ${a.color}, ${fn[n+1].color})`}})]})}window.PortfolioTimeline=cn;const ce=document.getElementById("timeline-react-root");return ce&&Q.createRoot(ce).render(k.jsx(cn,{})),cn});
