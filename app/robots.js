import { MetadataRoute } from 'next'

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: 'https://smallclaimshelper.com/sitemap.xml',
  }
}
