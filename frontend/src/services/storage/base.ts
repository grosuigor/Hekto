import type { StorageAdapter } from "./types";

export class BaseStorage {
  constructor(protected readonly storage: StorageAdapter) {}
}