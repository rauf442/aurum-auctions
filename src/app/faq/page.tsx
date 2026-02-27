// frontend/aurum/src/app/faq/page.tsx
export const dynamic = 'force-dynamic';
// Purpose: Brand route for Aurum FAQ using shared FaqPage and default content
import { FaqPage, getDefaultFaq, aurumTheme } from '@msaber/shared'

export default function Page() {
  const items = getDefaultFaq('Aurum')
  return (
    <FaqPage intro="Answers to common questions about buying, accounts, payments and shipping." items={items} />
  )
}





