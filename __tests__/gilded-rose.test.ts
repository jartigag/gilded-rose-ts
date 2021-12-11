import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {
  it("Quality drops by one when a day passes", function () {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
  });
});
