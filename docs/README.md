## Functions

<dl>
<dt><a href="#extend">extend(object, ...args)</a> ⇒ <code>object</code></dt>
<dd><p>Extend Deep Object</p>
</dd>
<dt><a href="#filter">filter(object, [callbackFilter])</a> ⇒ <code>object</code></dt>
<dd><p>Filter Ohject properties of falsy values, or apply a custom callback</p>
</dd>
<dt><a href="#isEmpty">isEmpty(obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if the value is empty, accepts object and primitive types</p>
</dd>
<dt><a href="#isSame">isSame(Param, Param)</a> ⇒ <code>boolean</code></dt>
<dd><p>isSame compares two parameters to determine whether they have identical structures and values.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#callbackFilter">callbackFilter</a> : <code>function</code></dt>
<dd></dd>
</dl>

<a name="extend"></a>

## extend(object, ...args) ⇒ <code>object</code>
Extend Deep Object

**Kind**: global function  
**Returns**: <code>object</code> - extended object  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | an object to extend |
| ...args | <code>object</code> | a series of objects to extend |

<a name="filter"></a>

## filter(object, [callbackFilter]) ⇒ <code>object</code>
Filter Ohject properties of falsy values, or apply a custom callback

**Kind**: global function  
**Returns**: <code>object</code> - filtered  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>object</code> |  | an object to filter |
| [callbackFilter] | [<code>callbackFilter</code>](#callbackFilter) | <code>truthy values</code> | Function is a predicate, to test each element of the Object. Return true to keep the element, |

<a name="isEmpty"></a>

## isEmpty(obj) ⇒ <code>boolean</code>
Determines if the value is empty, accepts object and primitive types

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> \| <code>array</code> \| <code>string</code> \| <code>number</code> | value |

<a name="isSame"></a>

## isSame(Param, Param) ⇒ <code>boolean</code>
isSame compares two parameters to determine whether they have identical structures and values.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if the two parameters have the same value  

| Param | Type | Description |
| --- | --- | --- |
| Param | <code>\*</code> | A - first parameter |
| Param | <code>\*</code> | B - second parameter |

**Example**  
```js
// returns true
isSame({a: {b: 1}}, {a: {b: 1}});
```
**Example**  
```js
// returns false
isSame({a: {b: 1}}, {a: {b: 2}});
```
**Example**  
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

