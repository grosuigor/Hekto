import { type Currency, type Locale } from "@/constants";

import { BaseStorage } from "./base";
import { STORAGE_KEYS } from "./keys";

export class PreferencesStorage extends BaseStorage {
  async getCurrency(): Promise<Currency | null> {
    return this.storage.get<Currency>(STORAGE_KEYS.currency);
  }

  async setCurrency(currency: Currency): Promise<void> {
    await this.storage.set(STORAGE_KEYS.currency, currency);
  }

  async getLocale(): Promise<Locale | null> {
    return this.storage.get<Locale>(STORAGE_KEYS.locale);
  }

  async setLocale(locale: Locale): Promise<void> {
    await this.storage.set(STORAGE_KEYS.locale, locale);
  }
}
