## Functions

<dl>
<dt><a href="#diff">diff(a, b)</a> ⇒ <code>Array</code></dt>
<dd><p>Array diff
Returns all items in the first array which are also in the second</p>
</dd>
<dt><a href="#find">find(arr, callback, thisArg)</a> ⇒ <code>*</code></dt>
<dd><p>Array find
Returns the first non undefined response
If the response is (Boolean) True, then the value of that array item is returned instead...</p>
</dd>
<dt><a href="#partition">partition(a, partitionIndexer)</a> ⇒ <code>Array</code></dt>
<dd><p>Partition
Partition an array into separate arrays</p>
</dd>
<dt><a href="#toArray">toArray(obj)</a> ⇒ <code>Array</code></dt>
<dd><p>Converts an iterable value to an Array</p>
</dd>
<dt><a href="#unique">unique(a)</a> ⇒ <code>Array</code></dt>
<dd><p>Unique
Filter an Array for unique values</p>
</dd>
<dt><a href="#extend">extend(base, ...args)</a> ⇒ <code>object</code></dt>
<dd><p>Extend Object works like Object.assign(...) but recurses into the nested properties</p>
</dd>
<dt><a href="#extendWithArrayIndex">extendWithArrayIndex(base, ...args)</a> ⇒ <code>object</code></dt>
<dd><p>Extend Object works like Object.assign(...) but recurses into the nested properties
With Array Index will merge objects within an array, extend treats them as being different and merely pushes them on to end of array</p>
</dd>
<dt><a href="#filter">filter(data, [callbackFilter])</a> ⇒ <code>object</code></dt>
<dd><p>Filter Object properties of falsy values, or apply a custom callback</p>
</dd>
<dt><a href="#isEmpty">isEmpty(obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if the value is empty, accepts object and primitive types</p>
</dd>
<dt><a href="#isSame">isSame(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>isSame compares two parameters to determine whether they have identical structures and values.</p>
</dd>
<dt><a href="#capitalize">capitalize(str)</a> ⇒ <code>string</code></dt>
<dd><p>Capitalize
Converts the first character of a sting to uppercase</p>
</dd>
<dt><a href="#JSONParse">JSONParse(str)</a> ⇒ <code>object</code></dt>
<dd><p>JSONParse
Wraps JSON.parse in a try/catch</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#callbackFilter">callbackFilter</a> : <code>function</code></dt>
<dd></dd>
</dl>

<a name="diff"></a>

## diff(a, b) ⇒ <code>Array</code>
Array diff
Returns all items in the first array which are also in the second

**Kind**: global function  
**Returns**: <code>Array</code> - All items which are in both arrays  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | First array |
| b | <code>Array</code> | Second array |

<a name="find"></a>

## find(arr, callback, thisArg) ⇒ <code>\*</code>
Array find
Returns the first non undefined response
If the response is (Boolean) True, then the value of that array item is returned instead...

**Kind**: global function  
**Returns**: <code>\*</code> - returns the found item in the array if the callback returned true, or the response from the callback.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arr | <code>Array</code> |  | Array or iterable object to search |
| callback | <code>function</code> |  | callback to run tests on, return value other than undefined to stop searching |
| thisArg | <code>object</code> | <code></code> | Instance to execute the callback on |

<a name="partition"></a>

## partition(a, partitionIndexer) ⇒ <code>Array</code>
Partition
Partition an array into separate arrays

**Kind**: global function  
**Returns**: <code>Array</code> - An array of arrays, unflattened  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | Array to filter |
| partitionIndexer | <code>function</code> | Partition indexer hander, returns the index of where to put the new array. |

<a name="toArray"></a>

## toArray(obj) ⇒ <code>Array</code>
Converts an iterable value to an Array

**Kind**: global function  
**Returns**: <code>Array</code> - The object as an array  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | Object to convert into an array |

<a name="unique"></a>

## unique(a) ⇒ <code>Array</code>
Unique
Filter an Array for unique values

**Kind**: global function  
**Returns**: <code>Array</code> - A unique array  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | Array to filter |

<a name="extend"></a>

## extend(base, ...args) ⇒ <code>object</code>
Extend Object works like Object.assign(...) but recurses into the nested properties

**Kind**: global function  
**Returns**: <code>object</code> - extended object  

| Param | Type | Description |
| --- | --- | --- |
| base | <code>object</code> | an object to extend |
| ...args | <code>object</code> | a series of objects to extend |

<a name="extendWithArrayIndex"></a>

## extendWithArrayIndex(base, ...args) ⇒ <code>object</code>
Extend Object works like Object.assign(...) but recurses into the nested properties
With Array Index will merge objects within an array, extend treats them as being different and merely pushes them on to end of array

**Kind**: global function  
**Returns**: <code>object</code> - extended object  

| Param | Type | Description |
| --- | --- | --- |
| base | <code>object</code> | an object to extend |
| ...args | <code>object</code> | a series of objects to extend |

<a name="filter"></a>

## filter(data, [callbackFilter]) ⇒ <code>object</code>
Filter Object properties of falsy values, or apply a custom callback

**Kind**: global function  
**Returns**: <code>object</code> - Filtered  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | an object to filter |
| [callbackFilter] | <code>function</code> | Function is a predicate, to test each element of the Object [default is not falsy]. Return true to keep the element, |

**Example** *(filter out falsy values)*  
```js
filter({a: 1, b: null, c: 0})
// {a: 1}
```
**Example** *(filter out with callback)*  
```js
filter({a: 1, b: null, c: 0}, (item) => item !== null)
// {a: 1, c: 0}
```
<a name="isEmpty"></a>

## isEmpty(obj) ⇒ <code>boolean</code>
Determines if the value is empty, accepts object and primitive types

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns true is the object is falsy, or an empty object/array.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | value |

**Example** *(Returns true for empty objects)*  
```js
isEmpty(null)
isEmpty([])
isEmpty(0)
isEmpty({})
isEmpty('')
```
<a name="isSame"></a>

## isSame(a, b) ⇒ <code>boolean</code>
isSame compares two parameters to determine whether they have identical structures and values.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if the two parameters have the same value  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> | first parameter |
| b | <code>\*</code> | second parameter |

**Example** *(matches nested objects with same keys &#x3D;&gt; values)*  
```js
// returns true
isSame({a: {b: 1}}, {a: {b: 1}});
```
**Example** *(does not match nested objects with same keys, but different values)*  
```js
// returns false
isSame({a: {b: 1}}, {a: {b: 2}});
```
**Example** *(does not match nested objects with additional properties)*  
```js
// returns false
isSame({a: {b: 1}}, {a: {b: 1, c: 2}});
```
<a name="capitalize"></a>

## capitalize(str) ⇒ <code>string</code>
Capitalize
Converts the first character of a sting to uppercase

**Kind**: global function  
**Returns**: <code>string</code> - String with the first character made uppercase  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to capitalize |

<a name="JSONParse"></a>

## JSONParse(str) ⇒ <code>object</code>
JSONParse
Wraps JSON.parse in a try/catch

**Kind**: global function  
**Returns**: <code>object</code> - JSON Object  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to parse |

**Example** *(JSONParse)*  
```js
JSONParse(null)
// undefined
```
<a name="callbackFilter"></a>

## callbackFilter : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>value</code> | item value |
| key | <code>string</code> | item key |

