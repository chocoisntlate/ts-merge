import { merge } from "./merge";

const c1 = [1, 4, 7];
const c2 = [2, 5, 8];
const c3 = [9, 6, 3];

const merged = merge(c1, c2, c3);
console.log(merged);