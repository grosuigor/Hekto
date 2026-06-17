import { LocalStorageAdapter } from "./adapters";
import { PreferencesStorage } from "./preferences";
import { ItemsStorage } from "./items";

const adapter = new LocalStorageAdapter();

export const preferencesStorage = new PreferencesStorage(adapter);
export const itemsStorage = new ItemsStorage(adapter);
