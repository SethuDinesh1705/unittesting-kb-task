describe("YouTube Api", function () {
  it("length is as expected", function () {
    return getResponse("Epam").then(function (result) {
      expect(result.length).toEqual(50);
    });
  });

  it("current page is working", () => {
    const res = currentpage(50);
    expect(res).toEqual(5);
  });

  it("NextPage is Working", () => {
    const res = nextPage(5);
    expect(res).toBe(6);
  });

  it("prevPage is working ", () => {
    const res = prevPage(5);
    expect(res).toBe(4);
  });
});
