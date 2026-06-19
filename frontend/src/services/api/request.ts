import { secrets } from "@/secrets";

function normalizeUrl(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

const API_URL = normalizeUrl(secrets.apiUrl);

export async function request<R>(
  path: string,
  init?: RequestInit,
): Promise<R | null> {
  try {
    const response = await fetch(`${API_URL}${path.replace(/^\//, "")}`, {
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
      ...init,
    });

    if (!response.ok) {
      throw new Error(
        `${path} returned ${response.status} - ${response.statusText}`,
      );
    }

    const result: R = await response.json();
    return result;
  } catch (error: unknown) {
    console.error(error);
  }

  return null;
}
