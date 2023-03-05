# Test

Before testing install dependencies `npm i` or `yarn`.

Run tests `npm run test` or `yarn test`

## Explanation
_How returned value of `sort()` implementation works_:

__Return value__ | __sort order__
--- | ---
`> 0` | sort `a` after `b`
`< 0` | sort `a` before `b`
`=== 0` | keep original order of `a` and `b`

_So, the compare function has the following form:_
```js
function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```
