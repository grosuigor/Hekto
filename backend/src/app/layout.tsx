import { permanentRedirect } from "next/navigation";

export default function RootLayout() {
  return permanentRedirect("/api")
}
