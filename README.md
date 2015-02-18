

<!-- Start utilities.js -->

# Impact JS Array Utilities Plugin

This plugins extends the native Array object with non-enumerable utility methods

__Installation__

As a submodule, from the git command line:

```
git submodule add https://github.com/Talesay/impact-plugin-array-utilities.git lib/plugins/array
``` 

Then require this module:

```
'plugins.array.utilities'
``` 

__JSLint Flags__

global ig

## Array.copy()

Returns a copy of the array

### Return:

* **Array** 

## Array.contains(element)

Checks if the array contains this __element__, then returns true or false

### Params:

* **Object** *element* 

### Return:

* **Boolean** 

## Array.count(element)

Counts the amount of times an __element__ can be found within the array, then returns a number

### Params:

* **Object** *element* 

### Return:

* **Number** 

## Array.rotate(n)

Returns a copy of the array, rotated __n__ times clockwise

### Params:

* **Number** *n* 

### Return:

* **Array** 

## Array.shuffle()

Returns a  shuffled copy of the array

### Return:

* **Array** 

## Array.difference(secondArray)

Returns a new array, that contains the difference between this array and a __secondArray__

### Params:

* **Array** *secondArray* 

### Return:

* **Array** 

## Array.intersection(secondArray)

Returns a new array, that contains the intersection between this array and a __secondArray__

### Params:

* **Array** *secondArray* 

### Return:

* **Array** 

## Array.union(secondArray)

Returns a new array, that contains the union between this array and a __secondArray__

### Params:

* **Array** *secondArray* 

### Return:

* **Array** 

# The MIT License (MIT)
## Copyright (c) 2015 Talesay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!-- End utilities.js -->

