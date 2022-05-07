import { Navbar } from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-1">{children}</div>
    </>
  )
}
