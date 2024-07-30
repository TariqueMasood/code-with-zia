import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { FormProvider } from "@/context/form-context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code with Zia",
  description: "Online Coding with Zia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <FormProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Header />
          {children}
          <Footer />
        </FormProvider>
      </body>
    </html>
  );
}
