var TD=TD||{};TD.donors=[],TD.expiry="16 Januray 2017 00:00 UTC+8",TD.lucks=[],TD.seed={},function(){"use strict";TD.seed={get:function e(){var t=window.location.hash.substring(1);return t?t:Date.now().toString()},set:function e(t){window.location.hash=t}}}(),function(){"use strict";var e=document,t=e.getElementsByTagName("body")[0];t.addEventListener("touchstart",function(){})}(),function(){"use strict";var e=document,t=TD.expiry,n="./csv/donors.csv",r={method:"GET",mode:"cors",headers:{Pragma:"no-cache","Cache-Control":"no-cache"}},s={header:!0},a=function e(){var t=TD.seed.get();return TD.seed.set(t),new Chance(t)},o=function e(t){for(var n=[],r=0;r<t.length;r++)"ind"===t[r].type&&"0"===t[r].flag&&n.push(t[r]);return n},c=function e(t,n){for(var r=void 0,s=a(),o=0;o<n;o++)r=s.integer({min:0,max:t.length-(1+o)}),TD.lucks.push(t[r]),t.splice(r,1)},i=function t(){var n=o(TD.donors),r=e.querySelector("#rnd-num"),s=r.value;c(n,s),d(),u()},d=function t(){var n=e.querySelector(".machine");n.classList.add("is-hidden")},u=function t(){var n=e.querySelector(".announce"),r=e.getElementById("tmpl-result").text,s=doT.template(r),a=s(TD.lucks);n.innerHTML=a,n.classList.add("is-show")};fetch(n,r).then(function(e){if(e.ok)return e.text();var t=new Error(e.statusText);throw t.res=e,t}).then(function(n){TD.donors=Papa.parse(n,s).data;var r=e.querySelector(".ack-time"),a=e.querySelector(".ack-num"),o=e.querySelector(".ack");r.textContent=t,a.textContent=TD.donors.length,o.classList.remove("is-disabled");var c=e.querySelector("#draw-btn");c.classList.remove("is-disabled"),c.addEventListener("click",i)})}(),function(){"use strict";var e=document,t=e.querySelector(".modal"),n=function n(a,o,c,i){var d=e.getElementsByClassName(a)[0],u=e.getElementById(o).text,l=doT.template(u),v=l(c);d.innerHTML=v,setTimeout(r,50),t.addEventListener("click",function(e){for(var t=e.target;t&&!t.matches("#"+i+",."+a);)t=t.parentNode;t&&t.matches("#"+i)&&s()})},r=function e(){t.classList.add("is-active")},s=function e(){t.classList.remove("is-active")},a=e.getElementById("action-donors"),o=function e(){n("modal-main","tmpl-donors",TD.donors,"modal-close")};a.addEventListener("click",o)}(),function(){"use strict";var e=document,t=e.querySelector("#rnd-num"),n=e.querySelector("#rnd-dec"),r=e.querySelector("#rnd-inc"),s=function e(){var r=t.value;return r<=1?void n.classList.add("is-disabled"):(r--,t.value=r,n.classList.remove("is-disabled"),void(r<=1&&n.classList.add("is-disabled")))},a=function e(){var r=t.value;r++,t.value=r,r>1&&n.classList.remove("is-disabled")};n.addEventListener("click",s),r.addEventListener("click",a)}();