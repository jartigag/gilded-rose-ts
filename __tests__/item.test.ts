import { Item } from "../app/gilded-rose";

describe("Item", function() {
    it("should have a name property", function() {
      const item = new Item("foo", 1, 0);
      expect(item.name).toEqual("foo");
    });
    it("should have a sellIn property", function() {
      const item = new Item("foo", 1, 0);
      expect(item.sellIn).toEqual(1);
    });
    it("should have a quality property", function() {
      const item = new Item("foo", 1, 0);
      expect(item.quality).toEqual(0);
    });
  })
