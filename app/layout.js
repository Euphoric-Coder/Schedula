import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import CreateEventDrawer from "@/components/create-event";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schedula",
  description: "Your goto Scheduling App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
          {/* <CreateEventDrawer /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
