!function(){"use strict";var e,t,n,a={588:function(e,t,n){var a,r=n(294),c=n(745),l=n(655),o=n(250),i=n(324),u=n(357),s=n(294),h=function(){var e=(0,r.useState)(""),t=(0,i.Z)(e,2),n=t[0],a=t[1],c=(0,r.useState)(!1),l=(0,i.Z)(c,2),o=l[0],h=l[1],m=(0,r.useState)(0),g=(0,i.Z)(m,2),f=g[0],p=g[1],E=(0,r.useState)({destination:[],holidayPackages:[],packages:[],packagesHeading:[],themes:[],otherPackagesList:[],moreThemes:[]}),d=(0,i.Z)(E,2),y=d[0],k=d[1],T={listStyleType:"none"};function v(){var e;h(!1),(n=n.trim()).length>1&&""!==n?0==o&&((e="http://localhost:3001/package",u.Z.get(e).then((function(e){return e.data})).catch((function(e){return e}))).then((function(e){return function(e){console.log("inside autoSuggestSuccess ",e),O();var t=[],n=[],a=[],r="",c="";if(e.length>0){e.forEach((function(e){void 0!==e.searchType&&("THEME"===e.searchType||"ALL THEMES"===e.searchType?t.push(e.searchType):"Z_NAME"===e.searchType?a.push(e.searchType):n.push(e.searchType))})),console.log("allTheme",t),console.log("otherPackages",a),console.log("allDestination",n),e.forEach((function(e){r=e.searchType,c=e.searchString,"THEME"!==r&&"Z_NAME"!==r&&"ALL THEMES"!==c&&""!==c?n.length>0&&y.destination.push(e):t.indexOf("THEME")>-1||t.indexOf("ALL THEMES")>-1?"THEME"!=r&&"ALL THEMES"!=r||y.themes.push(e):(a.indexOf("Z_NAME")>-1||-1===t.indexOf("THEME")&&0===n.length)&&"Z_NAME"===r&&y.otherPackagesList.push(e)}));var l=4,o=0;y.destination.forEach((function(e){S(e,o,l,!1),o=l+1,l+=5})),y.themes.forEach((function(e){"THEME"!=e.searchType&&"ALL THEMES"!=e.searchType||(S(e,o,l,!1),o=l+1,l+=5)})),p(y.holidayPackages.length),o=y.holidayPackages.length,y.otherPackagesList.forEach((function(e){"Z_NAME"===e.searchType&&(S(e,o,l,!0),o=l+1,l+=5)}))}k(y),console.log("Search Object",y)}(e),e})).catch((function(e){return console.log("error",e),e})),h(!0)):O()}function S(e,t,n,a){var r,c,l=(r=e.searchType,c=e.searchString,c="THEME"==r?"Top "+c+" Packages":"Z_NAME"==r?"Packages":"ALL THEMES"==r?"More Themes..":"Top "+c+" Holiday Packages");y.packagesHeading.push({minIndex:t,maxIndex:n,packageHeading:l,isOtherPackage:a});var o=e.pkgnameIdMappingList.length,i=[];if(o>0)e.pkgnameIdMappingList.forEach((function(t,n){n<5&&(i.includes(t.packageId)?i.push(t.packageId):(t.searchType=e.searchType,t.searchString=e.searchString,t.cityName=e.cityName,t.countryCode=e.countryCode,t.countryName=e.countryName,t.continentName=e.continentName,t.isOtherPackage=a,y.holidayPackages.push(t)))}));else if(e.themeName.length>0){console.log("ALL THEMES",e);for(var u=0;u<e.themeName.length;u++)y.moreThemes.push(e.themeName[u])}}function O(){y.destination=[],y.holidayPackages=[],y.packages=[],y.packagesHeading=[],y.themes=[],y.otherPackagesList=[],f=0,y.moreThemes=[]}function b(e){a(e),O()}return 0==n.length&&O(),s.createElement(s.Fragment,null,s.createElement("div",null,s.createElement("div",{className:"container"},s.createElement("form",{className:"d-flex",role:"search"},s.createElement("input",{className:"form-control me-2",type:"search",value:n,placeholder:"Destination e.g. Europe / Theme e.g. Adventure",onChange:function(e){a(e.target.value),v()},"aria-label":"Search"})),s.createElement("div",null,s.createElement("div",{className:"table table-striped"},s.createElement("div",null,s.createElement("div",null,n.length>1&&y.destination.length>0&&s.createElement("ul",{style:T},s.createElement("li",null,s.createElement("b",null,"Destination"))),y.destination.map((function(e,t){return s.createElement("ul",{style:T,key:t},s.createElement("li",{onClick:function(){return b(e.searchString)}},s.createElement("a",null,"  ",e.searchString," ")))})),n.length>1&&y.themes.length>0&&s.createElement("ul",{style:T},s.createElement("li",null,s.createElement("b",null,"Theme"))),y.themes.map((function(e,t){return""!==e.searchString&&"ALL THEMES"!==e.searchString&&s.createElement("ul",{style:T,key:t},s.createElement("li",{onClick:function(){return b(e.searchString)}},s.createElement("a",null,"  ",e.searchString," ")))}))),n.length>1&&y.packagesHeading.length>0&&y.packagesHeading.map((function(e,t){return s.createElement("div",{key:"packHeading_"+t},e.minIndex===f&&!0===e.isOtherPackage?s.createElement("ul",{style:T},s.createElement("li",null,s.createElement("b",null,e.packageHeading))):s.createElement("ul",{style:T},s.createElement("li",null,s.createElement("b",null,!1===e.isOtherPackage&&e.packageHeading))),y.holidayPackages.map((function(t,n){return n>=e.minIndex&&n<=e.maxIndex&&s.createElement("ul",{style:T,key:t.packageId+"_"+n},s.createElement("li",{onClick:function(){return b(t.packageName)}},t.packageName))})))})),n.length>1&&y.moreThemes.length>0&&y.moreThemes.map((function(e,t){return s.createElement("ul",{style:T,key:"moretheme_"+t},s.createElement("li",null,e))}))))))))},m=n(294),g=function(){return m.createElement(m.Fragment,null,m.createElement(l.VK,null,m.createElement("div",{className:"main-wrapper"},m.createElement(o.Z5,null,m.createElement(o.AW,{exact:!0,path:"/holiday",element:m.createElement(h,null)})))))};c.createRoot(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement(g,null))),a&&a instanceof Function&&n.e(778).then(n.bind(n,131)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,l=e.getTTFB;t(a),n(a),r(a),c(a),l(a)}))}},r={};function c(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return a[e](n,n.exports,c),n.exports}c.m=a,e=[],c.O=function(t,n,a,r){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],r=e[s][2];for(var o=!0,i=0;i<n.length;i++)(!1&r||l>=r)&&Object.keys(c.O).every((function(e){return c.O[e](n[i])}))?n.splice(i--,1):(o=!1,r<l&&(l=r));if(o){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,a,r]},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var l={};t=t||[null,n({}),n([]),n(n)];for(var o=2&a&&e;"object"==typeof o&&!~t.indexOf(o);o=n(o))Object.getOwnPropertyNames(o).forEach((function(t){l[t]=function(){return e[t]}}));return l.default=function(){return e},c.d(r,l),r},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.e=function(){return Promise.resolve()},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.j=179,function(){var e={179:0};c.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,l=n[0],o=n[1],i=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in o)c.o(o,a)&&(c.m[a]=o[a]);if(i)var s=i(c)}for(t&&t(n);u<l.length;u++)r=l[u],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(s)},n=self.webpackChunkholiday=self.webpackChunkholiday||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=c.O(void 0,[778],(function(){return c(588)}));l=c.O(l)}();