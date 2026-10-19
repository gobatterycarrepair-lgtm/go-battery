import ServiceAreaPage from '@/components/pages/ServiceAreaPage/ServiceAreaPage'


import { siteMetadata } from '@/seo/meta/metaData'
import { Metadata } from 'next';

export const metadata:Metadata = siteMetadata.areaWeServe
export default function page() {
  return <ServiceAreaPage />
}

