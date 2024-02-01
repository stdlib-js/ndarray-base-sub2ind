// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(){var r,t,n,i,s,a,l,o,m,d,u,f;for(r=arguments[1],t=arguments[2],n=(a=arguments[3+(s=(i=arguments[0]).length)]).length,o=t,f=0;f<s;f++){if(m=i[f],u=arguments[f+3],"clamp"===(l=a[f%n]))u<0?u=0:u>=m&&(u=m-1);else if("wrap"===l)u<0?(u+=m)<0&&0!==(u%=m)&&(u+=m):u>=m&&(u-=m)>=m&&(u%=m);else if("normalize"===l&&u<0&&(u+=m),u<0||u>=m)throw new RangeError(e("invalid argument. Subscripts must not exceed array dimensions. Subscript: `%u`. Value: `%d`.",f,u));(d=r[f])<0&&0===t?o-=u*d:o+=u*d}return o}export{r as default};
//# sourceMappingURL=index.mjs.map
