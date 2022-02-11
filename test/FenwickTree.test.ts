import { FenwickTree } from "../src/index";

const range = (start: number, end: number) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};
const getPrefixSum = (A: number[]) => {
  const prefixSum: number[] = [];
  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      prefixSum.push(A[i]);
    } else {
      prefixSum.push(prefixSum[i - 1] + A[i]);
    }
  }
  return prefixSum;
};

const A = [1, 5, -1, 0, 5];
let fenwickTree: FenwickTree;
beforeEach(async () => {
  fenwickTree = new FenwickTree(A);
});

test("Should have an accurate internal representation", async () => {
  expect(fenwickTree.fenwick).toEqual([0, 1, 6, -1, 5, 5]);
});

test("Should match a naive prefix sum", async () => {
  const fenwickPrefixSum = range(1, 6).map((i) => fenwickTree.query(i));
  const prefixSum = getPrefixSum(A);
  expect(fenwickPrefixSum).toEqual(prefixSum);
});

test("Should let me update any index", async () => {
  // Update array and fenwick tree
  const B = [...A];
  B[1] -= 3;
  fenwickTree.update(1 + 1, -3); // update is 1-indexed

  // Check match
  const fenwickPrefixSum = range(1, 6).map((i) => fenwickTree.query(i));
  const prefixSum = getPrefixSum(B);
  expect(fenwickPrefixSum).toEqual(prefixSum);
});
