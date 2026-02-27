// frontend/aurum/src/app/collection-shipping/page.tsx
export const dynamic = 'force-dynamic';
import { CollectionShippingPage } from '@msaber/shared'

export default function CollectionShipping() {
  return <CollectionShippingPage brandName="Aurum" brandCode="aurum" />
}

export const metadata = {
  title: 'Collection & Shipping - Aurum',
  description: 'Learn about collection and shipping options for your Aurum auction purchases.',
}

