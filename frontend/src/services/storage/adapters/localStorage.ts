import type { StorageAdapter } from "../types";

export class LocalStorageAdapter implements StorageAdapter {
  async get<T>(key: string): Promise<T | null> {
    if (typeof window === "undefined") return null;

    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null) return null;

      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  async set<T>(key: string, value: T): Promise<void> {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(key, JSON.stringify(value));
  }

  async remove(key: string): Promise<void> {
    if (typeof window === "undefined") return;

    window.localStorage.removeItem(key);
  }
}
