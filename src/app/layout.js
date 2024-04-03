import './globals.css';

export const metadata = {
  title: 'Software as a Service',
  description: 'Making life easier',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
