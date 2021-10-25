"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[555],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={},s="Forwarder",p={unversionedId:"classes/Forwarder",id:"classes/Forwarder",isDocsHomePage:!1,title:"Forwarder",description:"The Forwarder class allows the forwarding of a MIDI message to a predetermined list of",source:"@site/api/classes/Forwarder.md",sourceDirName:"classes",slug:"/classes/Forwarder",permalink:"/webmidi/api/classes/Forwarder",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventEmitter",permalink:"/webmidi/api/classes/EventEmitter"},next:{title:"Input",permalink:"/webmidi/api/classes/Input"}},d=[{value:"<code>Constructor</code>",id:"constructor",children:[],level:3},{value:"Properties",id:"properties",children:[{value:"<code>.channels</code>",id:"channels",children:[],level:3},{value:"<code>.destinations</code>",id:"destinations",children:[],level:3},{value:"<code>.suspended</code>",id:"suspended",children:[],level:3},{value:"<code>.types</code>",id:"types",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"<code>.forward(...)</code>",id:"forward",children:[],level:3}],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"forwarder"},"Forwarder"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Forwarder")," class allows the forwarding of a MIDI message to a predetermined list of\n",(0,l.kt)("a",{parentName:"p",href:"Output"},(0,l.kt)("inlineCode",{parentName:"a"},"Output"))," objects as long as the message matches certain conditions."),(0,l.kt)("p",null,"While it certainly can be manually instantiated, you are more likely to come across a ",(0,l.kt)("inlineCode",{parentName:"p"},"Forwarder"),"\nobject as the return value of the ",(0,l.kt)("a",{parentName:"p",href:"Input#addForwarder"},(0,l.kt)("inlineCode",{parentName:"a"},"Input.addForwarder()"))," method."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0"),(0,l.kt)("h3",{id:"constructor"},(0,l.kt)("inlineCode",{parentName:"h3"},"Constructor")),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"new Forwarder(destinations, [options])"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"destinations"))),(0,l.kt)("td",{parentName:"tr",align:null},"Output",(0,l.kt)("br",null),"Array.","<","Output",">",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An ",(0,l.kt)("a",{parentName:"td",href:"Output"},(0,l.kt)("inlineCode",{parentName:"a"},"Output"))," object, or an array of such objects, to forward the message to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"object",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.types")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"string",(0,l.kt)("br",null),"Array.","<","string",">",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A MIDI message type (",(0,l.kt)("inlineCode",{parentName:"td"},'"noteon"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"controlchange"'),", etc.), or an array of such types, that the specified message must match in order to be forwarded. If this option is not specified, all types of messages will be forwarded. Valid messages are the ones found in either ",(0,l.kt)("a",{parentName:"td",href:"Enumerations#MIDI_SYSTEM_MESSAGES"},(0,l.kt)("inlineCode",{parentName:"a"},"MIDI_SYSTEM_MESSAGES"))," or ",(0,l.kt)("a",{parentName:"td",href:"Enumerations#MIDI_CHANNEL_MESSAGES"},(0,l.kt)("inlineCode",{parentName:"a"},"MIDI_CHANNEL_MESSAGES")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.channels")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]"),(0,l.kt)("td",{parentName:"tr",align:null},"A MIDI channel number or an array of channel numbers that the message must match in order to be forwarded. By default all MIDI channels are included (",(0,l.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,l.kt)("inlineCode",{parentName:"td"},"16"),")."))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"channels"},(0,l.kt)("inlineCode",{parentName:"h3"},".channels")),(0,l.kt)("p",null,"An array of MIDI channel numbers that the message must match in order to be forwarded. By\ndefault, this array includes all MIDI channels (",(0,l.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"16"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array.","<","number",">",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"destinations"},(0,l.kt)("inlineCode",{parentName:"h3"},".destinations")),(0,l.kt)("p",null,"An array of ",(0,l.kt)("a",{parentName:"p",href:"Output"},(0,l.kt)("inlineCode",{parentName:"a"},"Output"))," objects to forward the message to."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array.","<","Output",">",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"suspended"},(0,l.kt)("inlineCode",{parentName:"h3"},".suspended")),(0,l.kt)("p",null,"Indicates whether message forwarding is currently suspended or not in this forwarder."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"types"},(0,l.kt)("inlineCode",{parentName:"h3"},".types")),(0,l.kt)("p",null,"An array of message types (",(0,l.kt)("inlineCode",{parentName:"p"},'"noteon"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"controlchange"'),", etc.) that must be matched in order\nfor messages to be forwarded. By default, this array includes all\n",(0,l.kt)("a",{parentName:"p",href:"Enumerations#MIDI_SYSTEM_MESSAGES"},(0,l.kt)("inlineCode",{parentName:"a"},"Enumerations.MIDI_SYSTEM_MESSAGES"))," and\n",(0,l.kt)("a",{parentName:"p",href:"Enumerations#MIDI_CHANNEL_MESSAGES"},(0,l.kt)("inlineCode",{parentName:"a"},"Enumerations.MIDI_CHANNEL_MESSAGES")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array.","<","string",">",(0,l.kt)("br",null)),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"forward"},(0,l.kt)("inlineCode",{parentName:"h3"},".forward(...)")),(0,l.kt)("p",null,"Sends the specified message to the forwarder's destination(s) if it matches the specified\ntype(s) and channel(s)."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"forward(message)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"message"))),(0,l.kt)("td",{parentName:"tr",align:null},"Message",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"Message"},(0,l.kt)("inlineCode",{parentName:"a"},"Message"))," object to forward."))))))}m.isMDXComponent=!0}}]);