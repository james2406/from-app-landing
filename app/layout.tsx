import "./ui/global.css";
import { Toaster } from "./ui/toaster";

export const metadata = {
  title: "from.app",
  description: "from.app is for sale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
