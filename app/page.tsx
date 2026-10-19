import HomePage from "@/components/pages/HomePage/HomePage";
import { getServicesNameSlug } from "@/utils/getServiceNameSlug";
import { siteMetadata } from '@/seo/meta/metaData'
import { Metadata } from 'next';

export const metadata:Metadata = siteMetadata.home
export default function Page() {
  return <HomePage />
}
