import { merge } from "../src/merge";

describe("Test merge function", () => {
    test("All three arrays case", () => {
        const collection_1: number[] = [1, 4, 7];
        const collection_2: number[] = [2, 5, 8];
        const collection_3: number[] = [9, 6, 3];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test("Some empty arrays case", () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [2, 5, 8];
        const collection_3: number[] = [9, 6, 3];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([2, 3, 5, 6, 8, 9]);
    });

    test("All empty arrasy case", () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });

    test("Different lengths case", () => {
        const collection_1: number[] = [1, 3];
        const collection_2: number[] = [2, 4, 6, 8];
        const collection_3: number[] = [7, 5];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

});