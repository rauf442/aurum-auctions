// frontend/aurum/src/app/buying/page.tsx
export const dynamic = 'force-dynamic';
// Purpose: Brand route for Buying with Aurum using shared BuyingPage component
import { BuyingPage, aurumTheme } from '@msaber/shared'

export default function Page() {
  return (
    <BuyingPage brandName="Aurum" brandCode="AURUM" />
  )
}





