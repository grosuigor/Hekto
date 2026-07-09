import { LocalStorageAdapter } from "./adapters";
import { ItemsStorage } from "./items";
import { PreferencesStorage } from "./preferences";

const adapter = new LocalStorageAdapter();

export const preferencesStorage = new PreferencesStorage(adapter);
export const itemsStorage = new ItemsStorage(adapter);
