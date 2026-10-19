import AboutPage from '@/components/pages/AboutUsPage/AboutUsPage'
import { siteMetadata } from '@/seo/meta/metaData'
import { Metadata } from 'next';

export const metadata:Metadata = siteMetadata.about
export default function page() {
  return <AboutPage />
}
