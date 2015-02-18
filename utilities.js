/**
# Impact JS Array Utilities Plugin

This plugins extends the native Array object with non-enumerable utility methods

__Installation__

As a submodule, from the git command line:

```
git submodule add https://github.com/Talesay/impact-plugin-array-utilities.git lib/plugins/array
``` 

Then require this plugin:

```
'plugins.array.utilities'
``` 

__JSLint Flags__
*/
/*global ig*/
ig.module(
	'plugins.array.utilities'
).requires().defines(function () {
	'use strict';
	var ArrayUtilities = {
			/**
			 *Returns a copy of the array
			 *@method Array.copy
			 *@return {Array}
			 */
			copy: function () {
				return this.slice(0);
			},
			/**
			 *Checks if the array contains this __element__, then returns true or false
			 *@method Array.contains
			 *@param {Object} element
			 *@return {Boolean}
			 */
			contains: function (element) {
				return this.indexOf(element) >= 0;
			},
			/**
			 *Counts the amount of times an __element__ can be found within the array, then returns a number
			 *@method Array.count
			 *@param {Object} element
			 *@return {Number}
			 */
			count: function (element) {
				var count = 0,
					i = 0;
				for (i; i < this.length; i += 1) {
					if (this[i] === element) {
						count += 1;
					}
				}
				return count;
			},
			/**
			 *Returns a copy of the array, rotated __n__ times clockwise
			 *@method Array.rotate
			 *@param {Number} n
			 *@return {Array}
			 */
			rotate: function (n) {
				if (!n) {
					return this.slice(0);
				}
				var length = this.length,
					thisIndex = (n > 0) ? n : length + n,
					i = 0,
					j = 0,
					copy = [];
				for (i = thisIndex; i < length; i += 1) {
					copy[j] = this[i];
					j += 1;
				}
				for (i = 0; i < thisIndex; i += 1) {
					copy[j] = this[i];
					j += 1;
				}
				return copy;
			},
			/**
			 *Returns a  shuffled copy of the array
			 *@method Array.shuffle
			 *@return {Array}
			 */
			shuffle: function () {
				var copy = this.splice(0),
					m = copy.length,
					t,
					i;
				while (m) {
					i = Math.floor(Math.random() * m);
					m -= 1;
					t = copy[m];
					copy[m] = copy[i];
					copy[i] = t;
				}
				return copy;
			},
			/**
			 *Returns a new array, that contains the difference between this array and a __secondArray__
			 *@method Array.difference
			 *@param {Array} secondArray
			 *@return {Array}
			 */
			difference: function (secondArray) {
				return this.filter(function (i) {
					return (secondArray.indexOf(i) < 0);
				});
			},
			/**
			 *Returns a new array, that contains the intersection between this array and a __secondArray__
			 *@method Array.intersection
			 *@param {Array} secondArray
			 *@return {Array}
			 */
			intersection: function (secondArray) {
				return this.filter(function (i) {
					return (secondArray.indexOf(i) !== -1);
				});
			},
			/**
			 *Returns a new array, that contains the union between this array and a __secondArray__
			 *@method Array.union
			 *@param {Array} secondArray
			 *@return {Array}
			 */
			union: function (secondArray) {
				var obj = {},
					result = [],
					i,
					key;
				for (i = this.length - 1; i >= 0; i = i - 1) {
					obj[this[i]] = this[i];
				}
				for (i = secondArray.length - 1; i >= 0; i = i - 1) {
					obj[secondArray[i]] = secondArray[i];
				}
				for (key in obj) {
					if (obj.hasOwnProperty(key)) {
						result.push(obj[key]);
					}
				}
				return result;
			}
		},
		methodName;

	function installFunction(name, fn) {
		if (Array.prototype[name]) {
			throw ("Array Utilities method " + name + "() already defined elsewhere.");
		}
		Object.defineProperty(Array.prototype, name, {
			value: fn,
			enumerable: false
		});
	}
	for (methodName in ArrayUtilities) {
		if (ArrayUtilities.hasOwnProperty(methodName)) {
			installFunction(methodName, ArrayUtilities[methodName]);
		}
	}
});
/**
 * # The MIT License (MIT)
 * ## Copyright (c) 2015 Talesay
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */