-- ============================================================
-- SmallClaimsHelper.com — Supabase SQL Schema
-- Run this in your Supabase SQL Editor (supabase.com/dashboard)
-- ============================================================

-- Anonymous usage analytics table (NO personal info stored)
CREATE TABLE IF NOT EXISTS claims (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  state       TEXT NOT NULL,              -- e.g. 'CA', 'TX'
  claim_type  TEXT,                       -- e.g. 'Unpaid debt or loan'
  amount      NUMERIC(10, 2),            -- amount claimed
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE claims ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT (anonymous tracking only)
CREATE POLICY "Allow anonymous inserts" ON claims
  FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated users (your admin) can SELECT
CREATE POLICY "Allow authenticated reads" ON claims
  FOR SELECT TO authenticated USING (true);

-- Analytics view — useful for your dashboard
CREATE OR REPLACE VIEW claims_by_state AS
  SELECT
    state,
    COUNT(*) AS total_claims,
    ROUND(AVG(amount), 2) AS avg_amount,
    DATE_TRUNC('month', created_at) AS month
  FROM claims
  GROUP BY state, DATE_TRUNC('month', created_at)
  ORDER BY total_claims DESC;

-- Analytics view — claims by type
CREATE OR REPLACE VIEW claims_by_type AS
  SELECT
    claim_type,
    COUNT(*) AS total,
    ROUND(AVG(amount), 2) AS avg_amount
  FROM claims
  WHERE claim_type IS NOT NULL
  GROUP BY claim_type
  ORDER BY total DESC;
