import "./globals.css";

export const metadata = {
  title: "Bitten Apple",
  description: "Gadget Store KE"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
