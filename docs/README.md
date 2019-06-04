## Functions

<dl>
<dt><a href="#extend">extend(base, ...args)</a> ⇒ <code>object</code></dt>
<dd><p>Extend Object works like Object.assign(...) but recurses into the nested properties</p>
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
</dl>

## Typedefs

<dl>
<dt><a href="#callbackFilter">callbackFilter</a> : <code>function</code></dt>
<dd></dd>
</dl>

<a name="extend"></a>

## extend(base, ...args) ⇒ <code>object</code>
Extend Object works like Object.assign(...) but recurses into the nested properties

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
<a name="callbackFilter"></a>

## callbackFilter : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>value</code> | value |
| item | <code>string</code> | key |

