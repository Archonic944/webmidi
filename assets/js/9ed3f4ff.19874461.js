"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[255],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),d=r,N=s["".concat(p,".").concat(d)]||s[d]||k[d]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1588:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={},p="Utilities",u={unversionedId:"classes/Utilities",id:"classes/Utilities",isDocsHomePage:!1,title:"Utilities",description:"The Utilities class contains general-purpose utility methods. All methods are static and",source:"@site/api/classes/Utilities.md",sourceDirName:"classes",slug:"/classes/Utilities",permalink:"/webmidi/api/classes/Utilities",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OutputChannel",permalink:"/webmidi/api/classes/OutputChannel"},next:{title:"WebMidi",permalink:"/webmidi/api/classes/WebMidi"}},m=[{value:"Methods",id:"methods",children:[{value:"<code>.buildNote(...)</code>",id:"buildNote",children:[],level:3},{value:"<code>.buildNoteArray(...)</code>",id:"buildNoteArray",children:[],level:3},{value:"<code>.from7bitToFloat(...)</code>",id:"from7bitToFloat",children:[],level:3},{value:"<code>.fromFloatTo7Bit(...)</code>",id:"fromFloatTo7Bit",children:[],level:3},{value:"<code>.fromFloatToMsbLsb(...)</code>",id:"fromFloatToMsbLsb",children:[],level:3},{value:"<code>.fromMsbLsbToFloat(...)</code>",id:"fromMsbLsbToFloat",children:[],level:3},{value:"<code>.getNoteDetails(...)</code>",id:"getNoteDetails",children:[],level:3},{value:"<code>.getPropertyByValue(...)</code>",id:"getPropertyByValue",children:[],level:3},{value:"<code>.guessNoteNumber(...)</code>",id:"guessNoteNumber",children:[],level:3},{value:"<code>.offsetNumber(...)</code>",id:"offsetNumber",children:[],level:3},{value:"<code>.sanitizeChannels(...)</code>",id:"sanitizeChannels",children:[],level:3},{value:"<code>.toNoteIdentifier(...)</code>",id:"toNoteIdentifier",children:[],level:3},{value:"<code>.toNoteNumber(...)</code>",id:"toNoteNumber",children:[],level:3},{value:"<code>.toTimestamp(...)</code>",id:"toTimestamp",children:[],level:3}],level:2}],k={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"utilities"},"Utilities"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Utilities")," class contains general-purpose utility methods. All methods are static and\nshould be called using the class name. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},'Utilities.getNoteDetails("C4")'),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"buildNote"},(0,l.kt)("inlineCode",{parentName:"h3"},".buildNote(...)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": version 3.0.0",(0,l.kt)("br",null)),(0,l.kt)("p",null,"Converts the ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," parameter to a valid ",(0,l.kt)("a",{parentName:"p",href:"Note"},"Note")," object. The input usually is an unsigned\ninteger (0-127) or a note identifier (",(0,l.kt)("inlineCode",{parentName:"p"},'"C4"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"G#5"'),", etc.). If the input is a ",(0,l.kt)("a",{parentName:"p",href:"Note"},"Note"),"\nobject, it will be returned as is."),(0,l.kt)("p",null,"If the input is a note number or identifier, it is possible to specify options by providing the\n",(0,l.kt)("inlineCode",{parentName:"p"},"options")," parameter."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"buildNote([input], [options])"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"input")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null),"string",(0,l.kt)("br",null),"Note",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"object",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.duration")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Infinity"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds before the note should be explicitly stopped.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.attack")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's attack velocity as an integer between 0 and 127.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.release")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's release velocity as an integer between 0 and 127.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.octaveOffset")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer to offset the octave by. ",(0,l.kt)("strong",{parentName:"td"},"This is only used when the input value is a note identifier.")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Note")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TypeError The input could not be parsed to a note")),(0,l.kt)("h3",{id:"buildNoteArray"},(0,l.kt)("inlineCode",{parentName:"h3"},".buildNoteArray(...)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null)),(0,l.kt)("p",null,"Converts an input value, which can be an unsigned integer (0-127), a note identifier, a\n",(0,l.kt)("a",{parentName:"p",href:"Note"},"Note")," object or an array of the previous types, to an array of ",(0,l.kt)("a",{parentName:"p",href:"Note"},"Note")," objects."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Note"},"Note")," objects are returned as is. For note numbers and identifiers, a ",(0,l.kt)("a",{parentName:"p",href:"Note"},"Note"),"\nobject is created with the options specified. An error will be thrown when encountering invalid\ninput."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"buildNoteArray([notes], [options])"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"notes")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null),"string",(0,l.kt)("br",null),"Note",(0,l.kt)("br",null),"Array.","<","number",">",(0,l.kt)("br",null),"Array.","<","string",">",(0,l.kt)("br",null),"Array.","<","Note",">",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"object",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.duration")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Infinity"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of milliseconds before the note should be explicitly stopped.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.attack")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's attack velocity as a decimal number between 0 and 1.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.release")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's release velocity as a decimal number between 0 and 1.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.rawAttack")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's attack velocity as an integer between 0 and 127.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.rawRelease")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"The note's release velocity as an integer between 0 and 127.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options.octaveOffset")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"An integer to offset the octave by. ",(0,l.kt)("strong",{parentName:"td"},"This is only used when the input value is a note identifier.")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Array.<Note>")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TypeError An element could not be parsed as a note.")),(0,l.kt)("h3",{id:"from7bitToFloat"},(0,l.kt)("inlineCode",{parentName:"h3"},".from7bitToFloat(...)")),(0,l.kt)("p",null,"Returns a number between 0 and 1 representing the ratio of the input value divided by 127 (7\nbit). The returned value is restricted between 0 and 1 even if the input is greater than 127 or\nsmaller than 0."),(0,l.kt)("p",null,"Passing ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity")," will return ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," and passing ",(0,l.kt)("inlineCode",{parentName:"p"},"-Infinity")," will return ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),". Otherwise, when the\ninput value cannot be converted to an integer, the method returns 0."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"from7bitToFloat(value)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A positive integer between 0 and 127 (inclusive)"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A number between 0 and 1 (inclusive)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("h3",{id:"fromFloatTo7Bit"},(0,l.kt)("inlineCode",{parentName:"h3"},".fromFloatTo7Bit(...)")),(0,l.kt)("p",null,"Returns a number between 0 and 127 which is the result of multiplying the input value by 127.\nThe input value should be number between 0 and 1 (inclusively). The returned value is\nrestricted between 0 and 127 even if the input is greater than 1 or smaller than 0."),(0,l.kt)("p",null,"Passing ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity")," will return ",(0,l.kt)("inlineCode",{parentName:"p"},"127")," and passing ",(0,l.kt)("inlineCode",{parentName:"p"},"-Infinity")," will return ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),". Otherwise, when\nthe input value cannot be converted to a number, the method returns 0."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"fromFloatTo7Bit(value)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A positive integer between 0 and 127 (inclusive)"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A number between 0 and 1 (inclusive)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("h3",{id:"fromFloatToMsbLsb"},(0,l.kt)("inlineCode",{parentName:"h3"},".fromFloatToMsbLsb(...)")),(0,l.kt)("p",null,"Extracts 7bit MSB and LSB values from the supplied float."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"fromFloatToMsbLsb(value)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A float between 0 and 1"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("h3",{id:"fromMsbLsbToFloat"},(0,l.kt)("inlineCode",{parentName:"h3"},".fromMsbLsbToFloat(...)")),(0,l.kt)("p",null,"Combines and converts MSB and LSB values (0-127) to a float between 0 and 1. The returned value\nis within between 0 and 1 even if the result is greater than 1 or smaller than 0."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"fromMsbLsbToFloat(msb, [lsb])"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"msb"))),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The most significant byte as a integer between 0 and 127.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"lsb")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"The least significant byte as a integer between 0 and 127."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A float between 0 and 1.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("h3",{id:"getNoteDetails"},(0,l.kt)("inlineCode",{parentName:"h3"},".getNoteDetails(...)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null)),(0,l.kt)("p",null,'Given a proper note identifier ("C#4", "Gb-1", etc.) or a valid MIDI note number (9-127), this\nmethod returns an object containing broken down details about the specified note (uppercase\nletter, accidental and octave).'),(0,l.kt)("p",null,"When a number is specified, the translation to note is done using a value of 60 for middle C\n(C4 = middle C)."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"getNoteDetails(value)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:null},"string",(0,l.kt)("br",null),"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'A note identifier A  atring ("C#4", "Gb-1", etc.) or a MIDI note number (0-127).'))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TypeError Invalid note identifier")),(0,l.kt)("h3",{id:"getPropertyByValue"},(0,l.kt)("inlineCode",{parentName:"h3"},".getPropertyByValue(...)")),(0,l.kt)("p",null,"Returns the name of the first property of the supplied object whose value is equal to the one\nsupplied."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"getPropertyByValue(object, value)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"object"))),(0,l.kt)("td",{parentName:"tr",align:null},"object",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:null},"*",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The name of the matching property")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("h3",{id:"guessNoteNumber"},(0,l.kt)("inlineCode",{parentName:"h3"},".guessNoteNumber(...)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null)),(0,l.kt)("p",null,"Returns a valid MIDI note number (0-127) given the specified input. The input usually is a\nstring containing a note identifier (",(0,l.kt)("inlineCode",{parentName:"p"},'"C3"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"F#4"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"D-2"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"G8"'),", etc.). If an integer\nbetween 0 and 127 is passed, it will simply be returned as is (for convenience). Other strings\nwill be parsed for integer value, if possible."),(0,l.kt)("p",null,"If the input is an identifier, the resulting note number is offset by the ",(0,l.kt)("inlineCode",{parentName:"p"},"octaveOffset"),'\nparameter. For example, if you pass in "C4" (note number 60) and the ',(0,l.kt)("inlineCode",{parentName:"p"},"octaveOffset")," value is\n-2, the resulting MIDI note number will be 36."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"guessNoteNumber(input)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"input"))),(0,l.kt)("td",{parentName:"tr",align:null},"string",(0,l.kt)("br",null),"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A string or number to extract the MIDI note number from."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A valid MIDI note number (0-127) or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," if the input could not\nsuccessfully be parsed to a note number.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("h3",{id:"offsetNumber"},(0,l.kt)("inlineCode",{parentName:"h3"},".offsetNumber(...)")),(0,l.kt)("p",null,"Returns the supplied MIDI note number offset by the requested octave and semitone values. If\nthe calculated value is less than 0, 0 will be returned. If the calculated value is more than\n127, 127 will be returned. If an invalid offset value is supplied, 0 will be used."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"offsetNumber(offset)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"offset"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"An integer between 0 and 127")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Error")," : Invalid note number")),(0,l.kt)("h3",{id:"sanitizeChannels"},(0,l.kt)("inlineCode",{parentName:"h3"},".sanitizeChannels(...)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null)),(0,l.kt)("p",null,"Returns a sanitized array of valid MIDI channel numbers (1-16). The parameter should be a\nsingle integer or an array of integers."),(0,l.kt)("p",null,"For backwards-compatibility, passing ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," as a parameter to this method results in all\nchannels being returned (1-16). Otherwise, parameters that cannot successfully be parsed to\nintegers between 1 and 16 are silently ignored."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"sanitizeChannels([channel])"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"channel")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null),"Array.","<","number",">",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An integer or an array of integers to parse as channel numbers."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Array")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"An array of 0 or more valid MIDI channel numbers.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("h3",{id:"toNoteIdentifier"},(0,l.kt)("inlineCode",{parentName:"h3"},".toNoteIdentifier(...)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null)),(0,l.kt)("p",null,"Returns an identifier string representing a note name (with optional accidental) followed by an\noctave number. The octave can be offset by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"octaveOffset")," parameter."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"toNoteIdentifier(number, octaveOffset)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"number"))),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The MIDI note number to convert to a note identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"octaveOffset"))),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"An offset to apply to the resulting octave"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RangeError Invalid note number"),(0,l.kt)("li",{parentName:"ul"},"RangeError Invalid octaveOffset value")),(0,l.kt)("h3",{id:"toNoteNumber"},(0,l.kt)("inlineCode",{parentName:"h3"},".toNoteNumber(...)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null)),(0,l.kt)("p",null,"Returns a MIDI note number matching the identifier passed in the form of a string. The\nidentifier must include the octave number. The identifier also optionally include a sharp (#),\na double sharp (##), a flat (b) or a double flat (bb) symbol. For example, these are all valid\nidentifiers: C5, G4, D#-1, F0, Gb7, Eb-1, Abb4, B##6, etc."),(0,l.kt)("p",null,"When converting note identifiers to numbers, C4 is considered to be middle C (MIDI note number\n60) as per the scientific pitch notation standard."),(0,l.kt)("p",null,"The resulting note number can be offset by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"octaveOffset")," parameter."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"toNoteNumber(identifier, [octaveOffset])"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"identifier"))),(0,l.kt)("td",{parentName:"tr",align:null},"string",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'The identifier in the form of a letter, followed by an optional "#", "##", "b" or "bb" followed by the octave number. For exemple: C5, G4, D#-1, F0, Gb7, Eb-1, Abb4, B##6, etc.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"octaveOffset")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"A integer to offset the octave by."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The MIDI note number (an integer between 0 and 127).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RangeError Invalid 'octaveOffset' value"),(0,l.kt)("li",{parentName:"ul"},"TypeError Invalid note identifier")),(0,l.kt)("h3",{id:"toTimestamp"},(0,l.kt)("inlineCode",{parentName:"h3"},".toTimestamp(...)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0",(0,l.kt)("br",null)),(0,l.kt)("p",null,"Returns a valid timestamp, relative to the navigation start of the document, derived from the\n",(0,l.kt)("inlineCode",{parentName:"p"},"time"),' parameter. If the parameter is a string starting with the "+" sign and followed by a\nnumber, the resulting timestamp will be the sum of the current timestamp plus that number. If\nthe parameter is a positive number, it will be returned as is. Otherwise, false will be\nreturned.'),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature: ",(0,l.kt)("inlineCode",{parentName:"p"},"toTimestamp([time])"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"time")),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"number",(0,l.kt)("br",null),"string",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The time string (e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},'"+2000"'),") or number to parse"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A positive number or ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," (if the time cannot be converted)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes"),": static"))}s.isMDXComponent=!0}}]);