// frontend/aurum/src/app/careers/page.tsx
export const dynamic = 'force-dynamic';
import { CareersPage } from '@msaber/shared'

export default function Careers() {
  return <CareersPage brandName="Aurum" brandCode="aurum" />
}

export const metadata = {
  title: 'Careers at Aurum',
  description: 'Join our passionate team of art specialists and help shape the future of fine art auctions.',
}
