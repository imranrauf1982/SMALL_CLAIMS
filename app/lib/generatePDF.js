'use client'

export async function generateSmallClaimsPDF(formData, stateInfo) {
  const { jsPDF } = await import('jspdf')

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' })
  const margin = 20
  const pageW = 215.9
  const pageH = 279.4
  const contentW = pageW - margin * 2
  const bottomMargin = 20

  let y = 0

  // ── Auto page break helper ──────────────────────────────────────
  function checkPage(needed = 10) {
    if (y + needed > pageH - bottomMargin) {
      doc.addPage()
      y = 20
      drawPageHeader()
    }
  }

  // Thin header strip on continuation pages
  function drawPageHeader() {
    doc.setFillColor(15, 56, 85)
    doc.rect(0, 0, pageW, 10, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'normal')
    doc.text('SMALL CLAIMS COURT COMPLAINT — SmallClaimsHelper.com', pageW / 2, 7, { align: 'center' })
  }

  // ── Section heading ─────────────────────────────────────────────
  function sectionHead(title) {
    checkPage(12)
    doc.setFillColor(230, 241, 251)
    doc.rect(margin, y, contentW, 7, 'F')
    doc.setTextColor(24, 95, 165)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.text(title.toUpperCase(), margin + 2, y + 5)
    y += 10
  }

  // ── Field row ───────────────────────────────────────────────────
  function field(label, value) {
    checkPage(8)
    doc.setTextColor(90, 90, 90)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.text(label + ':', margin, y)
    doc.setTextColor(10, 10, 10)
    doc.setFont('helvetica', 'bold')
    const val = value || '________________________________'
    const valLines = doc.splitTextToSize(val, contentW - 52)
    doc.text(valLines, margin + 50, y)
    y += Math.max(valLines.length * 5, 7)
  }

  // ── Format date nicely ──────────────────────────────────────────
  function formatDate(dateStr) {
    if (!dateStr) return 'Not specified'
    const d = new Date(dateStr + 'T12:00:00')
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  // ══════════════════════════════════════════════════════════════
  // PAGE 1 — HEADER
  // ══════════════════════════════════════════════════════════════
  doc.setFillColor(15, 56, 85)
  doc.rect(0, 0, pageW, 30, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(17)
  doc.setFont('helvetica', 'bold')
  doc.text('SMALL CLAIMS COURT COMPLAINT', pageW / 2, 13, { align: 'center' })
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text(`State of ${stateInfo.name} — ${stateInfo.court}`, pageW / 2, 21, { align: 'center' })
  doc.setTextColor(180, 210, 240)
  doc.setFontSize(7.5)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | SmallClaimsHelper.com`, pageW / 2, 27, { align: 'center' })

  y = 36

  // Disclaimer
  doc.setFillColor(255, 248, 220)
  doc.setDrawColor(200, 150, 0)
  doc.roundedRect(margin, y, contentW, 13, 2, 2, 'FD')
  doc.setTextColor(120, 80, 0)
  doc.setFontSize(7.5)
  doc.setFont('helvetica', 'bold')
  doc.text('IMPORTANT LEGAL NOTICE:', margin + 3, y + 5)
  doc.setFont('helvetica', 'normal')
  const disclaimerLines = doc.splitTextToSize(
    'This document is a starting template only and does not constitute legal advice. Verify all filing requirements with your local court clerk before submitting.',
    contentW - 6
  )
  doc.text(disclaimerLines, margin + 3, y + 10)
  y += 18

  // ── Key info bar ────────────────────────────────────────────────
  const barItems = [
    { label: 'Max claim limit', value: `$${stateInfo.limit.toLocaleString()}` },
    { label: 'Filing fee', value: stateInfo.filingFee },
    { label: 'Court', value: stateInfo.court },
  ]
  const barW = contentW / 3
  doc.setDrawColor(220, 230, 245)
  doc.setFillColor(245, 249, 255)
  doc.roundedRect(margin, y, contentW, 14, 2, 2, 'FD')
  barItems.forEach((item, i) => {
    const x = margin + i * barW + barW / 2
    doc.setFontSize(7)
    doc.setTextColor(100, 120, 150)
    doc.setFont('helvetica', 'normal')
    doc.text(item.label, x, y + 5, { align: 'center' })
    doc.setFontSize(9)
    doc.setTextColor(15, 56, 85)
    doc.setFont('helvetica', 'bold')
    doc.text(item.value, x, y + 11, { align: 'center' })
    if (i < 2) {
      doc.setDrawColor(200, 215, 235)
      doc.line(margin + (i + 1) * barW, y + 2, margin + (i + 1) * barW, y + 12)
    }
  })
  y += 19

  // ── PLAINTIFF ──────────────────────────────────────────────────
  sectionHead('Plaintiff (You — the person filing)')
  field('Full name', formData.plaintiffName)
  field('Street address', formData.plaintiffAddress)
  field('City, State, ZIP', `${formData.plaintiffCity}, ${formData.plaintiffState} ${formData.plaintiffZip}`)
  field('Phone number', formData.plaintiffPhone)
  field('Email address', formData.plaintiffEmail)
  y += 2

  // ── DEFENDANT ─────────────────────────────────────────────────
  sectionHead('Defendant (Person / business you are suing)')
  field('Full name / business', formData.defendantName)
  field('Street address', formData.defendantAddress)
  field('City, State, ZIP', `${formData.defendantCity}, ${formData.defendantState} ${formData.defendantZip}`)
  field('Phone (if known)', formData.defendantPhone || 'Unknown')
  y += 2

  // ── CLAIM DETAILS ─────────────────────────────────────────────
  sectionHead('Claim details')
  field('Type of claim', formData.claimType)
  field('Date of incident', formatDate(formData.incidentDate))
  field('Amount claimed', `$${parseFloat(formData.amountClaimed || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`)
  field('Filing fee (approx.)', stateInfo.filingFee)
  field('Court to file in', stateInfo.court)
  y += 2

  // ── STATEMENT ─────────────────────────────────────────────────
  sectionHead('Statement of claim (your description)')
  const stmtLines = doc.splitTextToSize(formData.claimStatement || 'No statement provided.', contentW - 6)
  const stmtH = stmtLines.length * 5 + 8
  checkPage(stmtH)
  doc.setDrawColor(200, 200, 200)
  doc.setFillColor(250, 250, 252)
  doc.roundedRect(margin, y, contentW, stmtH, 2, 2, 'FD')
  doc.setTextColor(20, 20, 20)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text(stmtLines, margin + 3, y + 6)
  y += stmtH + 4

  // ── EVIDENCE CHECKLIST ────────────────────────────────────────
  sectionHead('Evidence checklist — bring copies of ALL that apply')
  const evidence = [
    '[ ]  Written contract or service agreement',
    '[ ]  Receipts, invoices, estimates, or bills',
    '[ ]  Text messages or emails with the defendant',
    '[ ]  Photographs of damage or defective goods',
    '[ ]  Bank statements or cancelled checks (proof of payment)',
    '[ ]  Witness names and contact information',
    '[ ]  Any police reports or incident reports',
    '[ ]  Your demand letter and proof it was sent',
  ]
  doc.setTextColor(25, 25, 25)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  evidence.forEach(e => {
    checkPage(7)
    doc.text(e, margin + 2, y)
    y += 6.5
  })
  y += 2

  // ── FILING INSTRUCTIONS ───────────────────────────────────────
  sectionHead(`How to file in ${stateInfo.name}`)
  const instrLines = doc.splitTextToSize(stateInfo.filingInstructions, contentW - 4)
  instrLines.forEach(line => {
    checkPage(6)
    doc.setTextColor(25, 25, 25)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text(line, margin + 2, y)
    y += 5.5
  })
  y += 3

  // ── NEXT STEPS ────────────────────────────────────────────────
  sectionHead('Next steps after printing this form')
  const steps = [
    '1.  Call your local court clerk to confirm the current filing fee.',
    '2.  Print 3 copies of this completed form.',
    '3.  Bring the original to the court clerk\'s office and pay the filing fee.',
    '4.  The court will notify you of your hearing date (usually 30–70 days).',
    '5.  Serve a copy on the defendant as instructed by the clerk.',
    '6.  On your hearing day, arrive 30 minutes early with all your evidence.',
  ]
  steps.forEach(s => {
    checkPage(7)
    doc.setTextColor(25, 25, 25)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text(s, margin + 2, y)
    y += 6.5
  })
  y += 3

  // ── SIGNATURE BLOCK ───────────────────────────────────────────
  checkPage(35)
  sectionHead('Plaintiff certification')
  doc.setTextColor(30, 30, 30)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('I certify that the information in this claim is true and correct to the best of my knowledge.', margin, y)
  y += 14
  doc.setDrawColor(40, 40, 40)
  doc.line(margin, y, margin + 85, y)
  doc.line(margin + 105, y, margin + 175, y)
  y += 5
  doc.setFontSize(8)
  doc.setTextColor(100, 100, 100)
  doc.text('Plaintiff signature', margin, y)
  doc.text('Date signed', margin + 105, y)
  y += 12

  // Print date pre-filled
  doc.setFontSize(8)
  doc.setTextColor(120, 120, 120)
  doc.text(`Printed: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, margin, y)

  // ── FOOTER on every page ──────────────────────────────────────
  const totalPages = doc.internal.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFillColor(245, 247, 250)
    doc.rect(0, pageH - 10, pageW, 10, 'F')
    doc.setFontSize(7)
    doc.setTextColor(130, 130, 130)
    doc.text(
      `SmallClaimsHelper.com — Free small claims court forms for all 50 US states — Page ${i} of ${totalPages}`,
      pageW / 2, pageH - 4, { align: 'center' }
    )
  }

  const safeName = (formData.defendantName || 'complaint').replace(/[^a-z0-9]/gi, '-').toLowerCase().slice(0, 30)
  doc.save(`small-claims-${stateInfo.abbr}-${safeName}.pdf`)
}
