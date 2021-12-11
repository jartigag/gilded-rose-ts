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

    if (item.name === sulfurasName) {
      return item;
    }

    item.sellIn--;

    if (item.name === backstageName) {
      if (item.sellIn <= 5) {
        item.quality += 3;
      } else if (item.sellIn <= 10) {
        item.quality += 2;
      } else {
        item.quality++;
      }
    } else if (item.name === agedBrieName) {
      item.quality++;
    } else {
      item.quality--;
    }

    if (item.sellIn < 0) {
      if (item.name !== agedBrieName) {
        if (item.name !== backstageName) {
          item.quality--;
        } else {
          item.quality = 0;
        }
      } else {
        item.quality++;
      }
    }

    if (item.quality < 0) {
      item.quality = 0;
    }
    if (item.quality > 50 && item.name !== sulfurasName) {
      item.quality = 50;
    }

    return item;
  }

  updateQuality() {
    return this.items.map(this.updateQualityForItem);
  }
}
