webpackJsonp([0,2],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_resource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Hello__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_photos_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_photos_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_photos_vue__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_resource___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);




/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  routes: [{
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_3_components_Hello___default.a
  }, {
    path: '/photos',
    name: 'Photos',
    component: __WEBPACK_IMPORTED_MODULE_4_components_photos_vue___default.a
  }]
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'app'
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'hello',
  created() {
    this.tick();
  },
  methods: {
    tick() {
      setInterval(() => {
        this.counter++;
      }, 500);
    }
  },
  data() {
    return {
      msg: 'welcome to Your Vue.js App',
      counter: 0
    };
  }
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fixad_partition__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fixad_partition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fixad_partition__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  created() {},

  computed: {
    clientWidth: function () {
      return this.widthContainer;
    }
  },

  data() {
    return {
      photos: [],
      positions: [],
      heightContainer: 0,
      widthContainer: 0,
      currentPreview: null,
      currentPreviewSrc: 'javascript:;',
      currentActiveIndex: null,
      token: null
    };
  },

  mounted() {
    this.widthContainer = this.$el.clientWidth;

    this.fetchPhotos();

    window.addEventListener('resize', () => {
      this.widthContainer = this.$el.clientWidth;

      let elements = __WEBPACK_IMPORTED_MODULE_0__fixad_partition___default()(this.photos, {
        containerWidth: this.widthContainer || 5,
        idealElementHeight: 120,
        spacing: 2
      });

      this.positions = elements.positions;
      this.heightContainer = elements.height;
    });
  },

  methods: {
    fetchPhotos() {
      this.$http.get('/static/photos.json').then(response => {
        let photos = response.data.upload_list.filter(el => el.magick == 'jpeg');
        photos = photos.map(el => {
          el.active = false;
          return el;
        });

        let elements = __WEBPACK_IMPORTED_MODULE_0__fixad_partition___default()(photos, {
          containerWidth: this.widthContainer,
          idealElementHeight: 130,
          spacing: 2
        });

        this.photos = photos;
        this.positions = elements.positions;
        this.heightContainer = elements.height;
        this.widthContainer = elements.width;
        this.token = response.data.token;
      });
    },

    computeRow(y = 0) {
      return (y - y % 100) / 100;
    },

    openPreview(row, index) {

      // close preview
      if (this.currentActiveIndex === index) {
        this.currentPreview = null;
        this.currentActiveIndex = null;
        this.photos[this.currentActiveIndex].active = false;
        return;
      }

      this.currentPreview = `lastItem-${row}`;
      if (this.currentActiveIndex !== null) this.photos[this.currentActiveIndex].active = false;
      this.currentActiveIndex = index;
      this.photos[this.currentActiveIndex].active = true;
      this.currentPreviewSrc = `http://fex.net/show/${this.token}/${this.photos[this.currentActiveIndex].upload_id}?400h`;
    }
  }
};

// :ref="(photos.length != index+1) && computeRow(positions[index+1].y) > computeRow(positions[index].y) ? 'lastItem-'+computeRow(positions[index].y) : ''"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Algorithm: fixed-partition
 *
 * The algorithm outlined by Johannes Treitz in "The algorithm
 * for a perfectly balanced photo gallery" (see url below).
 *
 * Options:
 *   - containerWidth      Width of the parent container (in pixels)
 *   - idealElementHeight  Ideal element height (in pixels)
 *   - spacing             Spacing between items (in pixels)
 *
 * @throws
 * @see https://www.crispymtn.com/stories/the-algorithm-for-a-perfectly-balanced-photo-gallery
 * @param {object[]} elements
 * @param {object} options
 * @return {object}
 */
module.exports = function (elements, options) {
	var i,
	    j,
	    k,
	    n,
	    height,
	    positions = [],
	    elementCount;

	var spacing = options.spacing || 0;
	var containerWidth = options.containerWidth;
	var idealHeight = options.idealElementHeight || containerWidth / 3;
	if (!containerWidth) throw new Error('Invalid container width');

	// calculate aspect ratio of all photos
	var aspect;
	var aspects = [];
	var aspects100 = [];
	for (i = 0, n = elements.length; i < n; i++) {
		aspect = elements[i].width / elements[i].height;
		aspects.push(aspect);
		aspects100.push(Math.round(aspect * 100));
	}

	// calculate total width of all photos
	var summedWidth = 0;
	for (i = 0, n = aspects.length; i < n; i++) {
		summedWidth += aspects[i] * idealHeight;
	}

	// calculate rows needed
	var rowsNeeded = Math.round(summedWidth / containerWidth);

	// adjust photo sizes
	if (rowsNeeded < 1) {
		// (2a) Fallback to just standard size
		var xSum = 0,
		    width;
		elementCount = elements.length;

		var padLeft = 0;
		if (options.align === 'center') {
			var spaceNeeded = (elementCount - 1) * spacing;
			for (var i = 0; i < elementCount; i++) {
				spaceNeeded += Math.roun(idealHeight * aspects[i]) - spacing * (elementCount - 1) / elementCount;
			}
			padLeft = Math.floor((containerWidth - spaceNeeded) / 2);
		}

		for (var i = 0; i < elementCount; i++) {
			width = Math.round(idealHeight * aspects[i]) - spacing * (elementCount - 1) / elementCount;
			positions.push({
				y: 0,
				x: padLeft + xSum,
				width: width,
				height: idealHeight
			});
			xSum += width;
			if (i !== n - 1) {
				xSum += spacing;
			}
		}
		ySum = idealHeight;
	} else {
		// (2b) Distribute photos over rows using the aspect ratio as weight
		var partitions = linear_partition(aspects100, rowsNeeded);
		var index = 0;
		var ySum = 0,
		    xSum;
		for (i = 0, n = partitions.length; i < n; i++) {
			var element_index = index;
			var summedRatios = 0;
			for (j = 0, k = partitions[i].length; j < k; j++) {
				summedRatios += aspects[element_index + j];
				index++;
			}

			xSum = 0;
			height = Math.round(containerWidth / summedRatios);
			elementCount = partitions[i].length;
			for (j = 0; j < elementCount; j++) {
				width = (containerWidth - (elementCount - 1) * spacing) / summedRatios * aspects[element_index + j];
				positions.push({
					y: ySum,
					x: xSum,
					width: width,
					height: height
				});
				xSum += width;
				if (j !== elementCount - 1) {
					xSum += spacing;
				}
			}
			ySum += height;
			if (i !== n - 1) {
				ySum += spacing;
			}
		}
	}

	return {
		width: containerWidth,
		height: ySum,
		positions: positions
	};
};

/**
 * Partitions elements into rows.
 *
 * @author Johannes Treitz <https://twitter.com/jtreitz>
 * @see https://www.crispymtn.com/stories/the-algorithm-for-a-perfectly-balanced-photo-gallery
 * @param {int[]} seq
 * @param {int} k
 * @return {int[][]}
 */
var linear_partition = function (seq, k) {
	var ans, i, j, m, n, solution, table, x, y, _i, _j, _k, _l;
	var _m, _nn;

	n = seq.length;
	if (k <= 0) {
		return [];
	}
	if (k > n) {
		return seq.map(function (x) {
			return [x];
		});
	}
	table = function () {
		var _i, _results;
		_results = [];
		for (y = _i = 0; 0 <= n ? _i < n : _i > n; y = 0 <= n ? ++_i : --_i) {
			_results.push(function () {
				var _j, _results1;
				_results1 = [];
				for (x = _j = 0; 0 <= k ? _j < k : _j > k; x = 0 <= k ? ++_j : --_j) {
					_results1.push(0);
				}
				return _results1;
			}());
		}
		return _results;
	}();
	solution = function () {
		var _i, _ref, _results;
		_results = [];
		for (y = _i = 0, _ref = n - 1; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
			_results.push(function () {
				var _j, _ref1, _results1;
				_results1 = [];
				for (x = _j = 0, _ref1 = k - 1; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
					_results1.push(0);
				}
				return _results1;
			}());
		}
		return _results;
	}();
	for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
		table[i][0] = seq[i] + (i ? table[i - 1][0] : 0);
	}
	for (j = _j = 0; 0 <= k ? _j < k : _j > k; j = 0 <= k ? ++_j : --_j) {
		table[0][j] = seq[0];
	}
	for (i = _k = 1; 1 <= n ? _k < n : _k > n; i = 1 <= n ? ++_k : --_k) {
		for (j = _l = 1; 1 <= k ? _l < k : _l > k; j = 1 <= k ? ++_l : --_l) {

			m = [];
			for (x = _m = 0; 0 <= i ? _m < i : _m > i; x = 0 <= i ? ++_m : --_m) {
				m.push([Math.max(table[x][j - 1], table[i][0] - table[x][0]), x]);
			}

			var minValue,
			    minIndex = false;
			for (_m = 0, _nn = m.length; _m < _nn; _m++) {
				if (_m === 0 || m[_m][0] < minValue) {
					minValue = m[_m][0];
					minIndex = _m;
				}
			}

			m = m[minIndex];
			table[i][j] = m[0];
			solution[i - 1][j - 1] = m[1];
		}
	}
	n = n - 1;
	k = k - 2;
	ans = [];
	while (k >= 0) {
		ans = [function () {
			var _m, _ref, _ref1, _results;
			_results = [];
			for (i = _m = _ref = solution[n - 1][k] + 1, _ref1 = n + 1; _ref <= _ref1 ? _m < _ref1 : _m > _ref1; i = _ref <= _ref1 ? ++_m : --_m) {
				_results.push(seq[i]);
			}
			return _results;
		}()].concat(ans);
		n = solution[n - 1][k];
		k = k - 1;
		if (n === 0) break;
	}
	return [function () {
		var _m, _ref, _results;
		_results = [];
		for (i = _m = 0, _ref = n + 1; 0 <= _ref ? _m < _ref : _m > _ref; i = 0 <= _ref ? ++_m : --_m) {
			_results.push(seq[i]);
		}
		return _results;
	}()].concat(ans);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  "data-v-874e372a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  "data-v-cce8b6d0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h1', [_vm._v(_vm._s(_vm.msg))]), _vm._v(" "), _c('h1', [_vm._v(_vm._s(_vm.counter))])])
},staticRenderFns: []}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    style: ({
      height: _vm.heightContainer + 'px'
    })
  }, [_vm._l((_vm.photos), function(photo, index) {
    return _vm._t("default", [_c('img', {
      class: {
        active: photo.active
      },
      style: ({
        width: _vm.positions[index].width + 'px',
        height: _vm.positions[index].height + 'px',

      }),
      attrs: {
        "src": ("http://fex.net/show/" + _vm.token + "/" + (photo.upload_id) + "?400h"),
        "alt": photo.name,
        "row": _vm.computeRow(_vm.positions[index].y)
      },
      on: {
        "click": function($event) {
          _vm.openPreview(_vm.computeRow(_vm.positions[index].y), index)
        }
      }
    }), _vm._v(" "), (((index + 1 != _vm.photos.length) && _vm.computeRow(_vm.positions[index + 1].y) > _vm.computeRow(_vm.positions[index].y)) || _vm.photos.length - 1 == index) ? _vm._t("default", [_c('transition', {
      attrs: {
        "name": "preview-trans"
      }
    }, [(_vm.currentPreview == 'lastItem-' + _vm.computeRow(_vm.positions[index].y)) ? _c('div', {
      staticClass: "preview"
    }, [_c('img', {
      attrs: {
        "src": _vm.currentPreviewSrc
      }
    })]) : _vm._e()])]) : _vm._e()])
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(2);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ })
],[22]);
//# sourceMappingURL=app.26de9d761ffc3cce0e66.js.map