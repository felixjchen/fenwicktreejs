# fenwicktreejs

### Description

Fenwick Tree with log(n) update and query to implement a prefix sum.

### Usage

```
import { FenwickTree } from "fenwicktreejs";
const A = [1, 5, -1, 0, 5];
fenwickTree = new FenwickTree(A);
console.log(fenwickTree.query(1)) // 1
console.log(fenwickTree.query(2)) // 6
console.log(fenwickTree.query(3)) // 5
console.log(fenwickTree.query(4)) // 5
console.log(fenwickTree.query(5)) // 10
```

### Notes

- query(i) is 1-indexed
- update(i, diff) is 1-indexed

### Sources

- [Igor Carpanese](https://medium.com/carpanese/a-visual-introduction-to-fenwick-tree-89b82cac5b3c)
