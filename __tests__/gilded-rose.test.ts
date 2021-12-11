import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {
  it("Quality drops by one when a day passes", function () {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
  });

  it("SellIn drops by one when a day passes", function () {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
  });

  it("Quality drops twice as fast when the date has passed", function () {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 0, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(5);
  });

  it("Quality never goes negativity", function () {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("Aged Brie quality increase 1 by day", function () {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });

  it("Aged Brie quality increase when in date has passed", function () {
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });

  const agedBrie = ["Aged Brie", 1, 50];
  const agedBrieExpired = ["Aged Brie", 2, 49];
  const backstageTicketIncrementsBy1 = ["Backstage passes to a TAFKAL80ETC concert", 15, 50];
  const backstageTicketIncrementsBy2 = ["Backstage passes to a TAFKAL80ETC concert", 10, 49];
  const backstageTicketIncrementsBy3 = ["Backstage passes to a TAFKAL80ETC concert", 5, 48];

  const items = [agedBrie, agedBrieExpired, backstageTicketIncrementsBy1, backstageTicketIncrementsBy2, backstageTicketIncrementsBy3];

  it.each(items)("Quality must not go over 50 (%s)", function (name: string, sellIn: number, quality: number) {
    const item = new Item(name, sellIn, quality);
    const gildedRose = new GildedRose([item]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("'Sulfuras, Hand of Ragnaros' doesn't modify sellIn nor quality", function () {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

  it("Backstage passes increases quality by 1 each day", function () {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(21);
  });

  it("Backstage passes increases quality by 2 when expire date is less that 11 days", function () {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
  });

  it("Backstage passes increases quality by 3 when expire date is less that 6 days", function () {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(23);
  });

  it("Backstage passes quality drops to 0 when expired", function () {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });


});
