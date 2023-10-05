import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello Discord Clone</p>
      <Button variant="ghost">Click me</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
