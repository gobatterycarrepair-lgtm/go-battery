import ProjectsPage from '@/components/pages/ProjectPage/ProjectPage'
import React from 'react'
import { siteMetadata } from '@/seo/meta/metaData'
import { Metadata } from 'next';

export const metadata:Metadata = siteMetadata.projects
export default function page() {
  return <ProjectsPage />
}
