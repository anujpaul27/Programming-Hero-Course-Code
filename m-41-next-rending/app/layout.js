import "./globals.css";

export const metadata = {
  title: "Anuj Paul — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in MERN Stack and Next.js. Building scalable web apps with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "JavaScript",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
