import ServicesPage from '@/components/pages/ServicePage/ServicePage'

import { siteMetadata } from '@/seo/meta/metaData'
import { Metadata } from 'next';

export const metadata:Metadata = siteMetadata.services
export default function page() {
  return <ServicesPage  />
}
