import { arrayReplace } from "./arrayReplace";

describe(arrayReplace.name, () => {
  it("Test 1", () => {
    // arrange
    const data = [3, 5, 2, 4, 5];
    const elementToReplace = 5;
    const substitutionElement = -1;

    // act
    const response = arrayReplace(data, elementToReplace, substitutionElement);

    // assert
    expect(response).toEqual([3, -1, 2, 4, -1]);
  });
});
