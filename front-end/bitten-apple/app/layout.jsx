import "./globals.css";
import { Providers } from "./providers"

export const metadata = {
  title: "Bitten Apple",
  description: "Gadget Store KE"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
