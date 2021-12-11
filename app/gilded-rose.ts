export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateSellIn() {
    this.sellIn--;
  }

  updateQuality() {
    if (this.sellIn < 0) {
      this.quality--;
    }
    this.quality--;
  }
}

class Sulfuras extends Item {
  updateSellIn() {}
  updateQuality() {}
}

class BackstagePasses extends Item {
  updateQuality() {
    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality += 3;
    } else if (this.sellIn <= 10) {
      this.quality += 2;
    } else {
      this.quality++;
    }
  }
}

class AgedBrie extends Item {
  updateQuality() {
    this.quality++;
    if (this.sellIn < 0) {
      this.quality++;
    }
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

    if (item.name === agedBrieName) {
      item = new AgedBrie(item.name, item.sellIn, item.quality);
    }
    if (item.name === backstageName) {
      item = new BackstagePasses(item.name, item.sellIn, item.quality);
    }

    if (item.name === sulfurasName) {
      item = new Sulfuras(item.name, item.sellIn, item.quality);
    }

    item.updateSellIn();
    item.updateQuality();

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
