<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sub2ind

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert subscripts to a linear index.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import sub2ind from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-sub2ind@v0.2.1-esm/index.mjs';
```

#### sub2ind( shape, strides, offset, ...subscripts, mode )

Converts subscripts to a linear index.

```javascript
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];
var offset = 0;
var mode = [ 'throw' ];

var idx = sub2ind( shape, strides, offset, 1, 0, mode );
// returns 2
```

The function supports the following modes:

-   **throw**: specifies that the function should throw an error when a subscript exceeds array dimensions.
-   **normalize**: specifies that the function should normalize negative subscripts and throw an error when a subscript exceeds array dimensions.
-   **wrap**: specifies that the function should wrap around subscripts exceeding array dimensions using modulo arithmetic.
-   **clamp**: specifies that the function should set subscripts exceeding array dimensions to either `0` (minimum index) or the maximum index along a particular dimension.

```javascript
var shape = [ 2, 2 ];
var strides = [ 2, 1 ];
var offset = 0;

var mode = [ 'wrap' ];
var idx = sub2ind( shape, strides, offset, -2, 0, mode );
// returns 0

mode = [ 'clamp' ];
idx = sub2ind( shape, strides, offset, 10, 10, mode );
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When provided fewer `modes` than dimensions, the function recycles `modes` using modulo arithmetic.

    ```javascript
    var shape = [ 2, 2, 2 ];
    var strides = [ 4, 2, 1 ];
    var offset = 0;
    var mode = [ 'wrap', 'clamp' ];

    var idx = sub2ind( shape, strides, offset, -2, 10, -1, mode );
    // returns 3
    ```

-   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function treats subscripts as mapping to a linear index in an underlying data buffer for the array, thus returning a linear index from the perspective of that buffer. If an `offset` is equal to `0`, the function treats subscripts as mapping to a linear index in an array view, thus returning a linear index from the perspective of that view.

    ```text
    Dims: 2x2
    Buffer: [ 1, 2, 3, 4 ]

    View = [ a00, a01,
             a10, a11 ]

    Strides: 2,1
    Offset: 0

    View = [ 1, 2,
             3, 4 ]

    Strides: 2,-1
    Offset: 1

    View = [ 2, 1,
             4, 3 ]

    Strides: -2,1
    Offset: 2

    View = [ 3, 4,
             1, 2 ]

    Strides: -2,-1
    Offset: 3

    View = [ 4, 3,
             2, 1 ]
    ```

    ```javascript
    var shape = [ 2, 2 ];
    var strides = [ -2, 1 ];
    var offset = 2;
    var mode = [ 'throw' ];

    // From the perspective of a view...
    var idx = sub2ind( shape, strides, 0, 0, 0, mode );
    // returns 0

    idx = sub2ind( shape, strides, 0, 0, 1, mode );
    // returns 1

    idx = sub2ind( shape, strides, 0, 1, 0, mode );
    // returns 2

    idx = sub2ind( shape, strides, 0, 1, 1, mode );
    // returns 3

    // From the perspective of an underlying buffer...
    idx = sub2ind( shape, strides, offset, 0, 0, mode );
    // returns 2

    idx = sub2ind( shape, strides, offset, 0, 1, mode );
    // returns 3

    idx = sub2ind( shape, strides, offset, 1, 0, mode );
    // returns 0

    idx = sub2ind( shape, strides, offset, 1, 1, mode );
    // returns 1
    ```

    In short, from the perspective of a view, view data is always ordered.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import shape2strides from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs';
import strides2offset from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs';
import numel from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import sub2ind from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-sub2ind@v0.2.1-esm/index.mjs';

var shape = [ 3, 3 ];
var strides = shape2strides( shape, 'row-major' );
var mode = [ 'throw' ];
var len = numel( shape );

var arr = [];
var i;
for ( i = 0; i < len; i++ ) {
    arr.push( i );
}

var offset;
var idx;
var row;
var j;
var n;
var m;
for ( i = 0; i < 20; i++ ) {
    j = discreteUniform( 0, shape.length-1 );
    strides[ j ] = ( randu() < 0.5 ) ? -1 : 1;
    offset = strides2offset( shape, strides );

    console.log( '' );
    console.log( 'Dimensions: %s.', shape.join( 'x' ) );
    console.log( 'Strides: %s.', strides.join( ',' ) );
    console.log( 'View:' );
    for ( n = 0; n < shape[ 0 ]; n++ ) {
        row = '  ';
        for ( m = 0; m < shape[ 1 ]; m++ ) {
            idx = sub2ind( shape, strides, offset, n, m, mode );
            row += arr[ idx ];
            if ( m < shape[ 1 ]-1 ) {
                row += ', ';
            }
        }
        console.log( row );
    }
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-sub2ind.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-sub2ind

[test-image]: https://github.com/stdlib-js/ndarray-base-sub2ind/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-sub2ind/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-sub2ind?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-sub2ind.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-sub2ind/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-sub2ind/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-sub2ind/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-sub2ind/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-sub2ind/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-sub2ind/main/LICENSE

</section>

<!-- /.links -->
