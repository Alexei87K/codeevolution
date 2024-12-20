export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: '20px', border: '2px solid gray' }}>
          <h1>Общий Layout для Login и Register</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
