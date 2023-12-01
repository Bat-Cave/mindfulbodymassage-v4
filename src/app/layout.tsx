import type { Metadata } from "next";
import Layout from "~/components/Layout";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "The Mindful Body Massage",
  description:
    "A place where the power of massage is combined with other alternative healing modalitis to give you the best experience in your healing journey.",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../favicon.ico" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
