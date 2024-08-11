import React,{ lazy,Suspense } from 'react'
const Soap=lazy(()=>import('../components/Soap'));
const Juice=lazy(()=>import('../components/Juice'));
const Banner=lazy(()=>import('../components/Banner'));
const ProBanner=lazy(()=>import('../components/ProBanner'));

function ProductPage() {
  return (
    <Suspense fallback=''>
      <Banner/>
      <Juice/>
      <ProBanner/>
      <Soap/>
    </Suspense>
  )
}

export default ProductPage