!function(){"use strict";var e,t,a,n={748:function(e,t,a){var n=a(294),r=a(745),c=a(655),o=a(250),l=a(152),i=a(648),s=a(41),u=function(e){var t,a,n=(null!=(0,s.getCookie)("requestId")&&(t=(0,s.getCookie)("requestId")),null!=(0,s.getCookie)("sessionId")&&(a=(0,s.getCookie)("sessionId")),{headers:{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,PUT,DELETE,OPTIONS",requestId:t,sessionId:a}});return i.Z.get(e,{headers:n.headers}).then((function(e){return e.data})).catch((function(e){return console.log("Error In GET METHOD ",e),e}))},g=new(a(821).yh)({isDarkMode:!0,URL:""});function h(e){e=(e=(e=e.replace(/'/g,"")).replace(/’/g,"")).toLowerCase().replace(/[^a-zA-Z0-9/.]/g,"-");for(var t=1,a=0;a<t;a++)-1!==e.indexOf("--")&&(e=e.replace("--","-"),t++);return"-"==e.slice(-1)&&(e=e.slice(0,-1)),e}function d(e){var t=0;e=e.toLowerCase().replace(/[^a-zA-Z0-9.]/g,"-");for(var a=1,n=0;n<a;n++)-1!==e.indexOf("--")&&(e=e.replace("--","-"),a++);return 0===t&&("-"===e.charAt(e.length-1)&&(e=e.slice(0,-1)),t+=1),e}var p,m=function(e){if(void 0!==e.selectedSearchData&&"{}"!==JSON.stringify(e.selectedSearchData)){console.log("selectedSearchData",e.selectedSearchData);var t=e.selectedSearchData,a="",n=t.searchString,r=t.searchType,c=t.countryCode,o=void 0!==t.budgetHoliday?t.budgetHoliday:"",l=void 0!==t.monthHoliday?t.monthHoliday:"",i=t.packageName,s=t.isDynamicPackage,u=t.pdpSeoUrl,p=t.packageId,m=!1;if(""!==p&&void 0!==p)if(i=i.replace(/[^a-zA-Z0-9.]/g,"-"),null!=s&&""!==s&&"Y"===s)a="packages/customized/"+h(i)+"?pkgId="+p;else{if(null!=u&&"undefined"!=u&&""!=u){u=u.replace(/[^a-zA-Z0-9.]/g,"-");for(var f=1,E=0;E<f;E++)-1!==u.indexOf("--")&&(u=u.replace("--","-"),f++);"-"==u.slice(-1)&&(u=u.slice(0,-1))}else{for(f=1,E=0;E<f;E++)-1!==i.indexOf("--")&&(i=i.replace("--","-"),f++);"-"==i.slice(-1)&&(i=i.slice(0,-1))}0!==sessionStorage.getItem("compare")&&void 0!==sessionStorage.getItem("compare")&&null!==sessionStorage.getItem("compare")||sessionStorage.setItem("compare","0"),"THEME"===r?(window.location.href.indexOf("india-tour-packages")>-1?a+="india-tour-packages/":window.location.href.indexOf("international-tour-packages")>-1&&(a+="international-tour-packages/"),a+=h(n)+"-tour-packages/",a=h(a+=null!=u&&"undefined"!=u&&""!=u?u:i),a+="IN"===c?"?pkgId="+p+"&theme="+p+"_"+n+"_0&destTag="+n:"?pkgId="+p+"&theme="+p+"_"+n+"_1"):("CONTINENT"===r?a+="international-tour-packages/"+n+"-tour-packages":"COUNTRY"===r?a+="IN"===c||"BT"===c||"LK"===c?"IN"===c?"india-tour-packages/india-tour-packages":"india-tour-packages/"+n+"-tour-packages":"international-tour-packages/"+n+"-tour-packages":"STATE"===r?a+="india-tour-packages/"+n+"-tour-packages":"CITY"===r&&(a+="IN"===c||"BT"===c||"LK"===c?"india-tour-packages/"+n+"-tour-packages":"international-tour-packages/"+n+"-tour-packages"),a=h(a+="Z_NAME"===r?null!=u&&"undefined"!=u&&""!=u?"packages/"+u:"packages/"+i:null!=u&&"undefined"!=u&&""!=u?"/"+u:"/"+i),a+="IN"===c?"?pkgId="+p+"&theme="+p+"_"+n+"_0&destTag="+n:"Z_NAME"===r?null!=u&&"undefined"!=u&&""!=u?"?pkgId="+p+"&destination="+p+"_"+d(u)+"_"+r+"_1":"?pkgId="+p+"&destination="+p+"_"+d(i)+"_"+r+"_1":"?pkgId="+p+"&destination="+p+"_"+n+"_"+r+"_1&destTag="+n)}else m=!0,"CONTINENT"===r?a+="international-tour-packages/"+n+"-tour-packages":"COUNTRY"===r?a+="IN"===c||"BT"===c||"LK"===c?"IN"===c?"india-tour-packages":"india-tour-packages/"+n+"-tour-packages":"international-tour-packages/"+n+"-tour-packages":"STATE"===r?a+="india-tour-packages/"+n+"-tour-packages":"CITY"===r?a+="IN"===c||"BT"===c||"LK"===c?"india-tour-packages/"+n+"-tour-packages":"international-tour-packages/"+n+"-tour-packages":"THEME"===r?(window.location.href.indexOf("india-tour-packages")>-1?a+="india-tour-packages/":window.location.href.indexOf("international-tour-packages")>-1&&(a+="international-tour-packages/"),a+=n+"-tour-packages"):""!==o||""!==l?(a+="packages",m=!0):(a="",m=!1),a=h(a),sessionStorage.setItem("view","list"),m&&((""!==o&&0!==o||""!==l)&&(a+="?"),""!==o&&0!==o&&(a+="holidayBudget="+o),""!==l&&(a+=""===o?"holidayMonth="+l:"&holidayMonth="+l))}console.log("FINAL URL",a),g.update((function(e){e.URL=a}))},f=a(294),E=function(e){var t={listStyleType:"none"},a=(0,n.useState)(!1),r=(0,l.Z)(a,2),o=r[0],i=r[1],s=g.useState((function(e){return e.URL})).trim();return f.createElement(f.Fragment,null,void 0!==e.selectedSearchData&&"{}"!==JSON.stringify(e.selectedSearchData)&&f.createElement(m,{selectedSearchData:e.selectedSearchData}),f.createElement("div",null,f.createElement("div",{className:"container"},f.createElement("form",{className:"d-flex",role:"search"},f.createElement("input",{className:"form-control me-2",type:"search",value:e.text,placeholder:"Destination e.g. Europe / Theme e.g. Adventure",onChange:function(t){e.setText(t.target.value),e.Search(),i(!1)},"aria-label":"Search"}),f.createElement("button",{type:"button",onClick:function(){i(!0)}}," ",f.createElement(c.rU,{to:s}," Search"))),!0===o&&0==e.text.length&&"No Result Founds",f.createElement("div",null,f.createElement("div",{className:"table table-striped"},f.createElement("div",null,f.createElement("div",null,e.text.length>1&&e.searchData.destination.length>0&&f.createElement("ul",{style:t},f.createElement("li",null,f.createElement("b",null,"Destination"))),e.searchData.destination.map((function(a,n){return f.createElement("ul",{style:t,key:n},f.createElement("li",{onClick:function(){return e.showTextInSearchBox(a.searchString,a)}},f.createElement("a",null,"  ",a.searchString," ")))})),e.text.length>1&&e.searchData.themes.length>0&&f.createElement("ul",{style:t},f.createElement("li",null,f.createElement("b",null,"Theme"))),e.searchData.themes.map((function(a,n){return""!==a.searchString&&"ALL THEMES"!==a.searchString&&f.createElement("ul",{style:t,key:n},f.createElement("li",{onClick:function(){return e.showTextInSearchBox(a.searchString,a)}},f.createElement("a",null,"  ",a.searchString," ")))}))),e.text.length>1&&e.searchData.packagesHeading.length>0&&e.searchData.packagesHeading.map((function(a,n){return f.createElement("div",{key:"packHeading_"+n},a.minIndex===e.otherPackagesListStartIndex&&!0===a.isOtherPackage?f.createElement("ul",{style:t},f.createElement("li",null,f.createElement("b",null,a.packageHeading))):f.createElement("ul",{style:t},f.createElement("li",null,f.createElement("b",null,!1===a.isOtherPackage&&a.packageHeading))),e.searchData.holidayPackages.map((function(n,r){return r>=a.minIndex&&r<=a.maxIndex&&f.createElement("ul",{style:t,key:n.packageId+"_"+r},f.createElement("li",{onClick:function(){return e.showTextInSearchBox(n.packageName,n)}},n.packageName))})))})),e.text.length>1&&e.searchData.moreThemes.length>0&&e.searchData.moreThemes.map((function(e,a){return f.createElement("ul",{style:t,key:"moretheme_"+a},f.createElement("li",null,e))}))))))))},k=a(294),y=function(){var e=(0,n.useState)(""),t=(0,l.Z)(e,2),a=t[0],r=t[1],c=(0,n.useState)(!1),o=(0,l.Z)(c,2),i=o[0],s=o[1],g=(0,n.useState)(0),h=(0,l.Z)(g,2),d=h[0],p=h[1],m=(0,n.useState)({destination:[],holidayPackages:[],packages:[],packagesHeading:[],themes:[],otherPackagesList:[],moreThemes:[]}),f=(0,l.Z)(m,2),y=f[0],T=f[1],S=(0,n.useState)({}),v=(0,l.Z)(S,2),x=v[0],I=v[1];function N(e,t,a,n){var r,c,o=(r=e.searchType,c=e.searchString,c="THEME"==r?"Top "+c+" Packages":"Z_NAME"==r?"Packages":"ALL THEMES"==r?"More Themes..":"Top "+c+" Holiday Packages");y.packagesHeading.push({minIndex:t,maxIndex:a,packageHeading:o,isOtherPackage:n});var l=e.pkgnameIdMappingList.length,i=[];if(l>0)e.pkgnameIdMappingList.forEach((function(t,a){a<5&&(i.includes(t.packageId)?i.push(t.packageId):(t.searchType=e.searchType,t.searchString=e.searchString,t.cityName=e.cityName,t.countryCode=e.countryCode,t.countryName=e.countryName,t.continentName=e.continentName,t.isOtherPackage=n,y.holidayPackages.push(t)))}));else if(e.themeName.length>0){console.log("ALL THEMES",e);for(var s=0;s<e.themeName.length;s++)y.moreThemes.push(e.themeName[s])}}function O(){y.destination=[],y.holidayPackages=[],y.packages=[],y.packagesHeading=[],y.themes=[],y.otherPackagesList=[],d=0,y.moreThemes=[]}return 0==a.length&&O(),k.createElement(k.Fragment,null,k.createElement(E,{text:a,setText:r,Search:function(){s(!1),(a=a.trim()).length>1&&""!==a?0==i&&(u("http://localhost:3001/package").then((function(e){return function(e){O();var t=[],a=[],n=[],r="",c="";if(e.length>0){e.forEach((function(e){void 0!==e.searchType&&("THEME"===e.searchType||"ALL THEMES"===e.searchType?t.push(e.searchType):"Z_NAME"===e.searchType?n.push(e.searchType):a.push(e.searchType))})),e.forEach((function(e){r=e.searchType,c=e.searchString,"THEME"!==r&&"Z_NAME"!==r&&"ALL THEMES"!==c&&""!==c?a.length>0&&y.destination.push(e):t.indexOf("THEME")>-1||t.indexOf("ALL THEMES")>-1?"THEME"!=r&&"ALL THEMES"!=r||y.themes.push(e):(n.indexOf("Z_NAME")>-1||-1===t.indexOf("THEME")&&0===a.length)&&"Z_NAME"===r&&y.otherPackagesList.push(e)}));var o=4,l=0;y.destination.forEach((function(e){N(e,l,o,!1),l=o+1,o+=5})),y.themes.forEach((function(e){"THEME"!=e.searchType&&"ALL THEMES"!=e.searchType||(N(e,l,o,!1),l=o+1,o+=5)})),p(y.holidayPackages.length),l=y.holidayPackages.length,y.otherPackagesList.forEach((function(e){"Z_NAME"===e.searchType&&(N(e,l,o,!0),l=o+1,o+=5)}))}T(y)}(e),e})).catch((function(e){return console.log("error",e),e})),s(!0)):O()},otherPackagesListStartIndex:d,searchData:y,showTextInSearchBox:function(e,t){I(t),r(e),O()},selectedSearchData:x}))},T=a(294),S=function(){var e=(0,c.lr)(),t=(0,l.Z)(e,2),a=t[0],r=(t[1],(0,n.useState)(a.get("pkgId"))),o=(0,l.Z)(r,2),i=o[0];return o[1],(0,n.useEffect)((function(){var e="http://172.16.177.159:7602/tcHolidayRS/packagedetails/pdp/".concat(i);console.log("PDP Page Dyna"+e),u(e).then((function(e){console.log("Dyna response ",e)})).catch((function(e){console.log("Error",e)}))}),[i]),T.createElement("div",null,T.createElement("h1",null,"Dynamic Package PDP Page   "))},v=function(){return n.createElement("div",null,n.createElement(n.Fragment,null,"Not Found"))},x=function(){return n.createElement("div",null,n.createElement("h1",null,"SRP PAGE"))},I=function(){return n.createElement("div",null,n.createElement("h1",null,"Hplus PDP Page"))},N="/holiday",O="".concat(N,"/india-tour-packages"),P="".concat(N,"/international-tour-packages"),A="".concat(O,"/:detsinationtourname"),L="".concat(P,"/:detsinationtourname"),M="".concat(N,"/packages/customized/:detsinationtourname"),_="".concat(N,"/packages/:hpluspackage"),H="".concat(P,"/:detsinationtourname/:packagename"),D="".concat(O,"/:detsinationtourname/:packagename"),b=a(294),C=function(){return b.createElement(b.Fragment,null,b.createElement(c.VK,null,b.createElement("div",{className:"main-wrapper"},b.createElement(o.Z5,null,b.createElement(o.AW,{exact:!0,path:N,element:b.createElement(y,null)}),b.createElement(o.AW,{exact:!0,path:O,element:b.createElement(y,null)}),b.createElement(o.AW,{exact:!0,path:P,element:b.createElement(y,null)}),b.createElement(o.AW,{exact:!0,path:A,element:b.createElement(x,null)}),b.createElement(o.AW,{exact:!0,path:L,element:b.createElement(x,null)}),b.createElement(o.AW,{exact:!0,path:M,element:b.createElement(S,null)}),b.createElement(o.AW,{exact:!0,path:_,element:b.createElement(I,null)}),b.createElement(o.AW,{exact:!0,path:H,element:b.createElement(I,null)}),b.createElement(o.AW,{exact:!0,path:D,element:b.createElement(I,null)}),b.createElement(o.AW,{path:"*",element:b.createElement(v,null)})))))};r.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(C,null))),p&&p instanceof Function&&a.e(778).then(a.bind(a,131)).then((function(e){var t=e.getCLS,a=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;t(p),a(p),n(p),r(p),c(p)}))}},r={};function c(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e].call(a.exports,a,a.exports,c),a.exports}c.m=n,e=[],c.O=function(t,a,n,r){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],r=e[u][2];for(var l=!0,i=0;i<a.length;i++)(!1&r||o>=r)&&Object.keys(c.O).every((function(e){return c.O[e](a[i])}))?a.splice(i--,1):(l=!1,r<o&&(o=r));if(l){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,n,r]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var o={};t=t||[null,a({}),a([]),a(a)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=a(l))Object.getOwnPropertyNames(l).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},c.d(r,o),r},c.d=function(e,t){for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.e=function(){return Promise.resolve()},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};c.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,o=a[0],l=a[1],i=a[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(n in l)c.o(l,n)&&(c.m[n]=l[n]);if(i)var u=i(c)}for(t&&t(a);s<o.length;s++)r=o[s],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(u)},a=self.webpackChunkholiday=self.webpackChunkholiday||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var o=c.O(void 0,[778],(function(){return c(748)}));o=c.O(o)}();