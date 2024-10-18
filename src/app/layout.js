import "./globals.css";

export const metadata = {
  title: "Car Doctor",
  description: "Car Doctor by SM Noushan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className="antialiased">{children}</body>
    </html>
  );
}
