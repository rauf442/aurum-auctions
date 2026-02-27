// frontend/aurum/src/app/seller-terms-conditions/page.tsx
export const dynamic = 'force-dynamic';
// Purpose: Aurum Seller Terms and Conditions page using shared legal component
import { getPublicBrandByCode } from '@msaber/shared'
import { 
  LegalPage, 
  getLegalContent, 
  getBrandTheme, 
  type BrandData 
} from '@msaber/shared'

export default async function SellerTermsConditionsPage() {
  const brandData = await getPublicBrandByCode('AURUM') as BrandData

  if (!brandData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-yellow-400 mb-4">Brand Not Found</h1>
          <p className="text-gray-300">Unable to load brand data for this page.</p>
        </div>
      </div>
    )
  }

  const content = getLegalContent('seller-terms')
  const theme = getBrandTheme('AURUM')

  return (
    <LegalPage 
      brandData={brandData}
      content={content}
      theme={theme}
      backUrl="/"
    />
  )
}