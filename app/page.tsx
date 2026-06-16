import { Card } from '@/components/ui/card'

export default function Page() {
  return (
    <div className='p-6 grid grid-cols-3 gap-4'>
      <Card>Jobs</Card>
      <Card>CVs</Card>
      <Card>Revenue</Card>
    </div>
  )
}
