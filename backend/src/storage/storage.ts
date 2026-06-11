import { promises as fs } from "fs";
import path from "path";
import { FilterModel, ProductModel } from "./models";

type StorageInstance = {
  FilterModel: FilterModel;
  ProductModel: ProductModel;
};

type NullableStorageInstance = {
  [Model in keyof StorageInstance]: StorageInstance[Model] | null;
};

const DB_PATH = path.join(process.cwd(), "src/db.json");

export class Storage {
  private static _instance: NullableStorageInstance = {
    FilterModel: null,
    ProductModel: null,
  };
  private static _initPromise?: Promise<StorageInstance>;

  private static async initModels(): Promise<StorageInstance> {
    if (
      this._instance.FilterModel !== null &&
      this._instance.ProductModel !== null
    ) {
      return this._instance as StorageInstance;
    }

    if (this._initPromise) {
      return this._initPromise;
    }

    this._initPromise = (async () => {
      const file = await fs.readFile(DB_PATH, "utf8");
      const data = JSON.parse(file);

      if (this._instance.FilterModel === null) {
        this._instance.FilterModel = new FilterModel(data[FilterModel.dbKey]);
      }

      if (this._instance.ProductModel === null) {
        this._instance.ProductModel = new ProductModel(
          data[ProductModel.dbKey],
        );
      }

      return this._instance as StorageInstance;
    })();

    return this._initPromise;
  }

  static get FilterModel(): Promise<FilterModel> {
    if (this._instance.FilterModel) {
      return Promise.resolve(this._instance.FilterModel)
    }

    return this.initModels().then((s) => s.FilterModel)
  }

  static get ProductModel(): Promise<ProductModel> {
    if (this._instance.ProductModel) {
      return Promise.resolve(this._instance.ProductModel)
    }

    return this.initModels().then((s) => s.ProductModel)
  }
}
