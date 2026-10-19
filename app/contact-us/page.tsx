import ContactPage from "@/components/pages/ContactPage/ContactPage";

import { siteMetadata } from '@/seo/meta/metaData'
import { Metadata } from 'next';

export const metadata:Metadata = siteMetadata.contact
export default function Contact() {
  return <ContactPage />;
}
