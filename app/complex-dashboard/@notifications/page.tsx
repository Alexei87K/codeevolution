import React from 'react'
import Card from '@/components/card'
import Link from 'next/link'

const notifications = () => {
  return (
    <Card>
      <div>notifications</div>
      <Link href="/complex-dashboard/arhive">Arhive</Link>
    </Card>
  )
}

export default notifications