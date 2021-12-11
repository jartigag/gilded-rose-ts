export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQualityForItem(item: Item): Item {
    const agedBrieName = "Aged Brie";
    const backstageName = "Backstage passes to a TAFKAL80ETC concert";
    const sulfurasName = "Sulfuras, Hand of Ragnaros";
    if (item.name != agedBrieName && item.name != backstageName) {
      if (item.quality > 0 && item.name != sulfurasName) {
        item.quality = item.quality - 1;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == backstageName) {
          if (item.sellIn < 11 && item.quality < 50) {
            item.quality = item.quality + 1;
          }
          if (item.sellIn < 6 && item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
    if (item.name != sulfurasName) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != agedBrieName) {
        if (item.name != backstageName) {
          if (item.quality > 0 && item.name != sulfurasName) {
            item.quality = item.quality - 1;
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
    return item;
  }

  updateQuality() {
    return this.items.map(this.updateQualityForItem);
  }
}
