// frontend/aurum/src/app/core-values/page.tsx
export const dynamic = 'force-dynamic';
import { CoreValuesPage } from '@msaber/shared'

export default function CoreValues() {
  return <CoreValuesPage brandName="Aurum" brandCode="aurum" />
}

export const metadata = {
  title: 'Our Core Values - Aurum',
  description: 'Discover the core values that guide Aurum in providing exceptional auction services.',
}

