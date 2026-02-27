// frontend/aurum/src/app/about/page.tsx
export const dynamic = 'force-dynamic';
import { AboutPage } from '@msaber/shared'

export default function About() {
  return <AboutPage brandName="Aurum" brandCode="aurum" />
}

export const metadata = {
  title: 'About Aurum',
  description: 'Learn about Aurum, our heritage, values, and commitment to fine art auctions.',
}

