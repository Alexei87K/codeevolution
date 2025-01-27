

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
         <>
        
          <header>Product Header</header>
          <main>{children}</main>
          <footer>Product Footer</footer>
          
        </>
    )
  }