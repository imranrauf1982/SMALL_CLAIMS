'use client'
import { useEffect } from 'react'

// Replace ca-pub-XXXXXXXXXXXXXXXX with your actual AdSense publisher ID
// Replace each data-ad-slot value with your actual ad unit slot IDs from AdSense dashboard

export function AdLeaderboard() {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch {}
  }, [])
  return (
    <div className="ad-unit ad-unit-leaderboard" aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '90px' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="1111111111"
        data-ad-format="horizontal"
        data-full-width-responsive="false"
      />
    </div>
  )
}

export function AdRectangle() {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch {}
  }, [])
  return (
    <div className="ad-unit ad-unit-rectangle" aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '300px', height: '250px' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="2222222222"
        data-ad-format="rectangle"
      />
    </div>
  )
}

export function AdInArticle() {
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch {}
  }, [])
  return (
    <div className="ad-unit" style={{ margin: '2rem 0' }} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="3333333333"
        data-ad-layout="in-article"
        data-ad-format="fluid"
      />
    </div>
  )
}
