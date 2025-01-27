

export const metadata = {
  title: 'For All Pages',
  description: 'For All Project Pages',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
        <div style={{ padding: '20px', border: '2px solid gray' }}>
          <h1>Общий Layout для Login и Register</h1>
          {children}
        </div>
     
  );
}
