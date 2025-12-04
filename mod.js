// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(){var e,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function r(){var r,n,t,o,a,l,f,i,g,h,p,s;for(r=arguments[1],n=arguments[2],t=(l=arguments[3+(a=(o=arguments[0]).length)]).length,i=n,s=0;s<a;s++){if(g=o[s],p=arguments[s+3],"clamp"===(f=l[s%t]))p<0?p=0:p>=g&&(p=g-1);else if("wrap"===f)p<0?(p+=g)<0&&0!==(p%=g)&&(p+=g):p>=g&&(p-=g)>=g&&(p%=g);else if("normalize"===f&&p<0&&(p+=g),p<0||p>=g)throw new RangeError(e("0jX5J",s,p));(h=r[s])<0&&0===n?i-=p*h:i+=p*h}return i}export{r as default};
//# sourceMappingURL=mod.js.map
