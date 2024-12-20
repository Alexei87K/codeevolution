export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
         <>
        <html lang="en">
        <body>
          <header>Product Header</header>
          <main>{children}</main>
          <footer>Product Footer</footer>
          </body>
          </html>
        </>
    )
  }