import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'company-incorporation',
    title: 'Company Incorporation Services',
    category: 'incorporation',
    categoryGroup: 'Corporate Setup',
    shortDescription: 'End-to-end corporate registration and statutory entity setup for Indian and international founders.',
    detailedDescription: 'End-to-end corporate setup with Digital Signatures, DIN allocation, SPICe+ MCA filings, PAN/TAN issuance, and bank account setup in 3-5 business days.',
    checklist: [
      'Private Limited Company Registration',
      'Limited Liability Partnership (LLP)',
      'One Person Company (OPC)',
      'Section 8 (Non-Profit) Company',
      'Partnership Firm Registration',
      'MSME / Udyam Registration',
      'Startup India Registration',
      'Digital Signature Certificate (DSC) & Director Identification Number (DIN)'
    ],
    benefits: ['Incorporated within 3-5 business days', 'Includes PAN/TAN & Corporate Bank Account setup', 'Custom MOA/AOA drafting'],
    bestFor: 'Startups, SMEs, and foreign promoters seeking fast, compliant company setup in India.',
    iconName: 'Building2',
    tag: 'Fast-Track Setup'
  },
  {
    id: 'cfo-advisory',
    title: 'CFO Advisory (Virtual CFO)',
    category: 'cfo',
    categoryGroup: 'Leadership & Strategy',
    shortDescription: 'Fractional C-suite financial direction, cash flow management, budgeting, and board reporting.',
    detailedDescription: 'Fractional C-suite level financial direction giving growing companies and startups high-level strategic financial planning, budgeting, investor metrics, and treasury oversight.',
    checklist: [
      'Monthly financial reviews',
      'Budgeting & forecasting',
      'Board & investor reporting',
      'Strategic decision support',
      'Coordination with auditors',
      'Working capital & cash flow forecasting'
    ],
    benefits: ['Fractional C-suite expertise at a fraction of full-time cost', 'Investor-grade financial modeling', 'Actionable cash runway expansion'],
    bestFor: 'Growing businesses needing CFO-level oversight without full-time leadership.',
    iconName: 'TrendingUp',
    tag: 'Strategic Leadership'
  },
  {
    id: 'financial-reporting-compliance',
    title: 'Financial Reporting & Compliance',
    category: 'compliance',
    categoryGroup: 'Audit & Statutory Compliance',
    shortDescription: 'Statutory audits, GST filings, MCA/ROC annual returns, bookkeeping, and GAAP/Ind AS financial statements.',
    detailedDescription: 'End-to-end statutory audit, GST return reconciliation, MCA filing, and financial statement preparation ensuring complete governance.',
    checklist: [
      'Accurate financial statements',
      'Regulatory compliance support',
      'Audit preparation assistance',
      'Performance dashboards',
      'Ongoing monitoring & updates',
      'MCA/ROC filings & GST returns'
    ],
    benefits: ['100% statutory compliance guarantee', 'Prevent penalties & MCA director disqualifications', 'Bank & investor ready audited books'],
    bestFor: 'Businesses needing transparent reporting and compliance with Indian regulations.',
    iconName: 'FileCheck2',
    tag: 'Core Governance'
  },
  {
    id: 'tech-systems-support',
    title: 'Tech & Systems Support',
    category: 'tech',
    categoryGroup: 'Technology & ERP',
    shortDescription: 'Cloud accounting ERP setups, automated e-invoicing, financial tech integrations, and secure digital workflows.',
    detailedDescription: 'Modernizing financial operations with accounting software migration (Tally, Zoho Books, QuickBooks), custom API integrations, automated approval matrices, and cloud data security.',
    checklist: [
      'Cloud ERP & Accounting Software Setup (Tally, Zoho, QuickBooks)',
      'Automated E-Invoicing & Payment Gateway Integrations',
      'Payroll & HRMS System Integration',
      'Custom Financial Reporting Dashboards',
      'Data Security, Cloud Encryption & Automated Backups'
    ],
    benefits: ['100% paperless digital financial operations', 'Automated reconciliations & real-time analytics', 'Enhanced financial data security'],
    bestFor: 'SMEs and tech startups looking to modernize financial workflows and ERP systems.',
    iconName: 'Cpu',
    tag: 'Digital Operations'
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    category: 'wealth',
    categoryGroup: 'Wealth & Asset Strategy',
    shortDescription: 'Holistic wealth planning, family office advisory, asset allocation, capital gains tax optimization, and estate planning.',
    detailedDescription: 'Bespoke financial strategy and capital structuring tailored for business promoters, high-net-worth individuals, family offices, and global NRIs.',
    checklist: [
      'Bespoke Portfolio Asset Allocation',
      'Capital Gains & Real Estate Tax Advisory',
      'Family Office Advisory & Trust Structuring',
      'Generational Wealth Transfer & Estate Planning',
      'NRI Investments & Repatriation Compliance'
    ],
    benefits: ['Tax-efficient long-term wealth accumulation', 'Preservation of family assets across generations', 'Comprehensive cross-border asset compliance'],
    bestFor: 'Founders, HNWIs, Promoters, Family Offices, and Global NRIs.',
    iconName: 'Wallet',
    tag: 'Bespoke Advisory'
  },
  {
    id: 'income-planning-advisory',
    title: 'Income Planning Advisory',
    category: 'income-planning',
    categoryGroup: 'Tax & Financial Strategy',
    shortDescription: 'Strategic corporate & personal income tax optimization, advance tax forecasting, salary structuring, and tax dispute defense.',
    detailedDescription: 'Proactive tax planning and income structuring designed to legally minimize tax liabilities for corporations, business owners, and salaried executives.',
    checklist: [
      'Corporate & Individual Income Tax Return (ITR) Filings',
      'Advance Tax Computation & Cash Flow Planning',
      'Executive Salary & Benefits Tax Optimization',
      'Tax Department Scrutiny & Appeals Representation',
      'DTAA Relief & NRI Cross-Border Tax Filing'
    ],
    benefits: ['Up to 25% legitimate tax optimization', 'Zero penalty risk with proactive deadlines', 'Audit-ready tax records'],
    bestFor: 'Corporates, Salaried Executives, Business Owners, and HNWIs.',
    iconName: 'PieChart',
    tag: 'Tax Optimization'
  }
];
