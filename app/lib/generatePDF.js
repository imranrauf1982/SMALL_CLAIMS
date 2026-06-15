'use client'

export async function generateSmallClaimsPDF(formData, stateInfo) {
  const { jsPDF } = await import('jspdf')
  await import('jspdf-autotable')

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' })
  const margin = 20
  const pageW = 215.9
  const contentW = pageW - margin * 2

  // Header bar
  doc.setFillColor(15, 56, 85)
  doc.rect(0, 0, pageW, 28, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('SMALL CLAIMS COURT COMPLAINT', pageW / 2, 12, { align: 'center' })
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text(`State of ${stateInfo.name} — ${stateInfo.court}`, pageW / 2, 20, { align: 'center' })

  // Generated date watermark
  doc.setTextColor(150, 150, 150)
  doc.setFontSize(8)
  doc.text(`Generated: ${new Date().toLocaleDateString()} | SmallClaimsHelper.com`, pageW / 2, 25, { align: 'center' })

  let y = 38

  // Disclaimer box
  doc.setFillColor(255, 248, 220)
  doc.setDrawColor(200, 150, 0)
  doc.roundedRect(margin, y, contentW, 14, 2, 2, 'FD')
  doc.setTextColor(120, 80, 0)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'bold')
  doc.text('IMPORTANT LEGAL NOTICE:', margin + 3, y + 5)
  doc.setFont('helvetica', 'normal')
  doc.text('This document is a starting template only and does not constitute legal advice. Verify all requirements with your local court before filing.', margin + 3, y + 10)
  y += 20

  // Helper: section heading
  const sectionHead = (title) => {
    doc.setFillColor(230, 241, 251)
    doc.rect(margin, y, contentW, 7, 'F')
    doc.setTextColor(24, 95, 165)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.text(title.toUpperCase(), margin + 2, y + 5)
    y += 10
  }

  // Helper: field row
  const field = (label, value, half = false) => {
    doc.setTextColor(80, 80, 80)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.text(label + ':', margin, y)
    doc.setTextColor(10, 10, 10)
    doc.setFont('helvetica', 'bold')
    doc.text(value || '________________________________', margin + (half ? 40 : 50), y)
    y += 7
  }

  // PLAINTIFF
  sectionHead('Plaintiff (You — the person filing)')
  field('Full name', formData.plaintiffName)
  field('Street address', formData.plaintiffAddress)
  field('City, State, ZIP', `${formData.plaintiffCity}, ${formData.plaintiffState} ${formData.plaintiffZip}`)
  field('Phone number', formData.plaintiffPhone)
  field('Email address', formData.plaintiffEmail)
  y += 3

  // DEFENDANT
  sectionHead('Defendant (Person / business you are suing)')
  field('Full name / business name', formData.defendantName)
  field('Street address', formData.defendantAddress)
  field('City, State, ZIP', `${formData.defendantCity}, ${formData.defendantState} ${formData.defendantZip}`)
  field('Phone (if known)', formData.defendantPhone || 'Unknown')
  y += 3

  // CLAIM DETAILS
  sectionHead('Claim details')
  field('Type of claim', formData.claimType)
  field('Date of incident', formData.incidentDate)
  field('Amount claimed', `$${parseFloat(formData.amountClaimed || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`)
  field('Filing fee (approx.)', stateInfo.filingFee)
  field('Court to file in', stateInfo.court)
  y += 3

  // STATEMENT
  sectionHead('Statement of claim (your description)')
  doc.setTextColor(10, 10, 10)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  const stmtLines = doc.splitTextToSize(formData.claimStatement || 'No statement provided.', contentW - 4)
  doc.setDrawColor(200, 200, 200)
  doc.setFillColor(250, 250, 250)
  doc.roundedRect(margin, y, contentW, Math.max(stmtLines.length * 5 + 6, 30), 2, 2, 'FD')
  doc.text(stmtLines, margin + 3, y + 5)
  y += Math.max(stmtLines.length * 5 + 10, 36)

  // EVIDENCE CHECKLIST
  sectionHead('Evidence checklist — bring copies of ALL that apply')
  const evidence = [
    '[ ] Written contract or agreement',
    '[ ] Receipts, invoices, or estimates',
    '[ ] Text messages or emails with defendant',
    '[ ] Photographs of damage or defective goods',
    '[ ] Bank statements or cancelled checks',
    '[ ] Witness names and contact information',
    '[ ] Any police or incident reports',
  ]
  doc.setTextColor(30, 30, 30)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  evidence.forEach(e => { doc.text(e, margin + 2, y); y += 6 })
  y += 3

  // FILING INSTRUCTIONS
  sectionHead(`How to file in ${stateInfo.name}`)
  doc.setTextColor(30, 30, 30)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  const instrLines = doc.splitTextToSize(stateInfo.filingInstructions, contentW - 4)
  doc.text(instrLines, margin + 2, y)
  y += instrLines.length * 5 + 6

  // NEXT STEPS numbered list
  sectionHead('Next steps after printing this form')
  const steps = [
    '1. Call your local court clerk and confirm the current filing fee.',
    '2. Print 3 copies of this completed form.',
    '3. File the original at the court clerk\'s office and pay the filing fee.',
    '4. The court will notify you of your hearing date (usually 30–70 days out).',
    '5. Serve a copy on the defendant as instructed by the clerk.',
    '6. On your hearing day, bring all evidence and arrive 30 minutes early.',
  ]
  doc.setTextColor(30, 30, 30)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  steps.forEach(s => { doc.text(s, margin + 2, y); y += 6 })

  // SIGNATURE BLOCK
  if (y > 240) { doc.addPage(); y = 20 }
  y += 6
  sectionHead('Plaintiff certification')
  doc.setTextColor(30, 30, 30)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('I certify that the information in this claim is true and correct to the best of my knowledge.', margin, y)
  y += 12
  doc.setDrawColor(50, 50, 50)
  doc.line(margin, y, margin + 80, y)
  doc.line(margin + 100, y, margin + 160, y)
  y += 5
  doc.setFontSize(8)
  doc.setTextColor(100, 100, 100)
  doc.text('Plaintiff signature', margin, y)
  doc.text('Date', margin + 100, y)

  // Footer
  const totalPages = doc.internal.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(7)
    doc.setTextColor(150, 150, 150)
    doc.text(`SmallClaimsHelper.com — Free small claims forms for all 50 US states — Page ${i} of ${totalPages}`, pageW / 2, 275, { align: 'center' })
  }

  const fileName = `small-claims-${stateInfo.abbr}-${formData.defendantName?.replace(/\s+/g, '-').toLowerCase() || 'complaint'}.pdf`
  doc.save(fileName)
}
