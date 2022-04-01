// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=r;var t=function(){var r,t,n,s,i,a,l,o,d,m,u,f;for(r=arguments[1],t=arguments[2],n=(a=arguments[3+(i=(s=arguments[0]).length)]).length,o=t,f=0;f<i;f++){if(d=s[f],u=arguments[f+3],"clamp"===(l=a[f%n]))u<0?u=0:u>=d&&(u=d-1);else if("wrap"===l)u<0?(u+=d)<0&&0!==(u%=d)&&(u+=d):u>=d&&(u-=d)>=d&&(u%=d);else if(u<0||u>=d)throw new RangeError(e("invalid argument. Subscripts must not exceed array dimensions. Subscript: %u. Value: `%d`.",f,u));(m=r[f])<0&&0===t?o-=u*m:o+=u*m}return o};export{t as default};
//# sourceMappingURL=index.mjs.map
