export const STATES = {
  alabama: {
    name: 'Alabama', abbr: 'AL', slug: 'alabama',
    limit: 6000, filingFee: '$50–$70', court: 'District Court',
    filingInstructions: 'File at your local District Court clerk\'s office. Serve defendant by certified mail or sheriff.',
    keywords: ['small claims court Alabama', 'sue someone in Alabama', 'Alabama small claims limit'],
    counties: ['Jefferson','Mobile','Madison','Montgomery','Shelby']
  },
  alaska: {
    name: 'Alaska', abbr: 'AK', slug: 'alaska',
    limit: 10000, filingFee: '$30–$100', court: 'District Court',
    filingInstructions: 'File at Alaska District Court. Serve defendant by certified mail or process server.',
    keywords: ['small claims court Alaska', 'Alaska small claims limit $10000'],
    counties: ['Anchorage','Fairbanks','Juneau','Matanuska-Susitna','Kenai Peninsula']
  },
  arizona: {
    name: 'Arizona', abbr: 'AZ', slug: 'arizona',
    limit: 3500, filingFee: '$20–$50', court: 'Justice Court',
    filingInstructions: 'File at Justice Court in the precinct where defendant lives or the dispute occurred.',
    keywords: ['small claims court Arizona', 'Arizona Justice Court small claims', 'sue in Arizona'],
    counties: ['Maricopa','Pima','Pinal','Yavapai','Yuma']
  },
  arkansas: {
    name: 'Arkansas', abbr: 'AR', slug: 'arkansas',
    limit: 5000, filingFee: '$30–$75', court: 'District Court',
    filingInstructions: 'File at District Court. Defendant served by certified mail by the court clerk.',
    keywords: ['small claims court Arkansas', 'Arkansas small claims'],
    counties: ['Pulaski','Benton','Washington','Sebastian','Faulkner']
  },
  california: {
    name: 'California', abbr: 'CA', slug: 'california',
    limit: 12500, filingFee: '$30–$100', court: 'Superior Court – Small Claims Division',
    filingInstructions: 'File at your local Superior Court Small Claims Division. You must serve the defendant at least 15 days before the hearing (30 days if outside the county).',
    keywords: ['small claims court California', 'California small claims limit 2024', 'sue someone in California small claims', 'SC-100 form California'],
    counties: ['Los Angeles','San Diego','Orange','Riverside','San Bernardino','Santa Clara','Alameda','Sacramento']
  },
  colorado: {
    name: 'Colorado', abbr: 'CO', slug: 'colorado',
    limit: 7500, filingFee: '$31–$55', court: 'County Court',
    filingInstructions: 'File at the County Court in the county where defendant lives or business is located.',
    keywords: ['small claims court Colorado', 'Colorado County Court small claims'],
    counties: ['Denver','El Paso','Arapahoe','Jefferson','Adams']
  },
  connecticut: {
    name: 'Connecticut', abbr: 'CT', slug: 'connecticut',
    limit: 5000, filingFee: '$75–$175', court: 'Superior Court – Small Claims',
    filingInstructions: 'File JD-CV-40 form at Superior Court. Court mails notice to defendant.',
    keywords: ['small claims court Connecticut', 'CT small claims JD-CV-40'],
    counties: ['Fairfield','Hartford','New Haven','Litchfield','Middlesex']
  },
  delaware: {
    name: 'Delaware', abbr: 'DE', slug: 'delaware',
    limit: 15000, filingFee: '$35–$100', court: 'Justice of the Peace Court',
    filingInstructions: 'File at Justice of the Peace Court. Delaware has one of the highest small claims limits in the US.',
    keywords: ['small claims Delaware', 'Delaware Justice of the Peace small claims'],
    counties: ['New Castle','Kent','Sussex']
  },
  florida: {
    name: 'Florida', abbr: 'FL', slug: 'florida',
    limit: 8000, filingFee: '$55–$300', court: 'County Court',
    filingInstructions: 'File at County Court clerk\'s office. Serve defendant via process server or sheriff (required in Florida).',
    keywords: ['small claims court Florida', 'Florida small claims limit 2024', 'sue in Florida small claims', 'Florida County Court small claims'],
    counties: ['Miami-Dade','Broward','Palm Beach','Hillsborough','Orange','Pinellas','Duval']
  },
  georgia: {
    name: 'Georgia', abbr: 'GA', slug: 'georgia',
    limit: 15000, filingFee: '$35–$75', court: 'Magistrate Court',
    filingInstructions: 'File at Magistrate Court. Georgia small claims are handled by Magistrate Courts, not Superior Courts.',
    keywords: ['small claims court Georgia', 'Georgia Magistrate Court', 'Georgia small claims $15000'],
    counties: ['Fulton','Gwinnett','Cobb','DeKalb','Clayton']
  },
  hawaii: {
    name: 'Hawaii', abbr: 'HI', slug: 'hawaii',
    limit: 5000, filingFee: '$35–$80', court: 'District Court',
    filingInstructions: 'File at Hawaii District Court. Serve defendant by certified mail or process server.',
    keywords: ['small claims Hawaii', 'Hawaii District Court small claims'],
    counties: ['Honolulu','Hawaii','Maui','Kauai']
  },
  idaho: {
    name: 'Idaho', abbr: 'ID', slug: 'idaho',
    limit: 5000, filingFee: '$40–$80', court: 'Magistrate Division – District Court',
    filingInstructions: 'File at Magistrate Division of District Court in the county where defendant lives.',
    keywords: ['small claims Idaho', 'Idaho small claims court'],
    counties: ['Ada','Canyon','Kootenai','Bonneville','Twin Falls']
  },
  illinois: {
    name: 'Illinois', abbr: 'IL', slug: 'illinois',
    limit: 10000, filingFee: '$30–$210', court: 'Circuit Court',
    filingInstructions: 'File at Circuit Court clerk. Defendant served by certified mail by the clerk.',
    keywords: ['small claims court Illinois', 'Illinois Circuit Court small claims', 'sue in Illinois'],
    counties: ['Cook','DuPage','Lake','Will','Kane']
  },
  indiana: {
    name: 'Indiana', abbr: 'IN', slug: 'indiana',
    limit: 10000, filingFee: '$35–$80', court: 'Small Claims Court',
    filingInstructions: 'File at the Small Claims Court docket of the County Court. Serve defendant by certified mail.',
    keywords: ['small claims court Indiana', 'Indiana small claims $10000'],
    counties: ['Marion','Lake','Allen','Hamilton','St. Joseph']
  },
  iowa: {
    name: 'Iowa', abbr: 'IA', slug: 'iowa',
    limit: 6500, filingFee: '$35–$95', court: 'Small Claims Court – District Court',
    filingInstructions: 'File at District Court. Iowa small claims are informally heard with relaxed evidence rules.',
    keywords: ['small claims Iowa', 'Iowa District Court small claims'],
    counties: ['Polk','Linn','Scott','Johnson','Black Hawk']
  },
  kansas: {
    name: 'Kansas', abbr: 'KS', slug: 'kansas',
    limit: 4000, filingFee: '$30–$60', court: 'District Court – Small Claims',
    filingInstructions: 'File at District Court. Attorneys are NOT permitted in Kansas small claims hearings.',
    keywords: ['small claims Kansas', 'Kansas small claims no attorney'],
    counties: ['Johnson','Sedgwick','Wyandotte','Douglas','Shawnee']
  },
  kentucky: {
    name: 'Kentucky', abbr: 'KY', slug: 'kentucky',
    limit: 2500, filingFee: '$30–$75', court: 'District Court',
    filingInstructions: 'File at District Court. Kentucky has one of the lowest limits — consider Circuit Court for larger amounts.',
    keywords: ['small claims Kentucky', 'Kentucky District Court small claims'],
    counties: ['Jefferson','Fayette','Kenton','Boone','Warren']
  },
  louisiana: {
    name: 'Louisiana', abbr: 'LA', slug: 'louisiana',
    limit: 5000, filingFee: '$40–$90', court: 'City Court / Justice of the Peace',
    filingInstructions: 'File at City Court or Justice of the Peace. Louisiana uses parishes instead of counties.',
    keywords: ['small claims Louisiana', 'Louisiana City Court small claims'],
    counties: ['Orleans','Jefferson','East Baton Rouge','Caddo','Calcasieu']
  },
  maine: {
    name: 'Maine', abbr: 'ME', slug: 'maine',
    limit: 6000, filingFee: '$50–$100', court: 'District Court – Small Claims',
    filingInstructions: 'File at Maine District Court. Hearing scheduled within 30 days.',
    keywords: ['small claims Maine', 'Maine District Court small claims'],
    counties: ['Cumberland','York','Penobscot','Kennebec','Androscoggin']
  },
  maryland: {
    name: 'Maryland', abbr: 'MD', slug: 'maryland',
    limit: 5000, filingFee: '$30–$80', court: 'District Court',
    filingInstructions: 'File at Maryland District Court. One of the most plaintiff-friendly states for small claims.',
    keywords: ['small claims Maryland', 'Maryland District Court small claims'],
    counties: ['Montgomery','Prince George\'s','Baltimore City','Baltimore County','Anne Arundel']
  },
  massachusetts: {
    name: 'Massachusetts', abbr: 'MA', slug: 'massachusetts',
    limit: 7000, filingFee: '$40–$150', court: 'Small Claims Session – District Court',
    filingInstructions: 'File at the Small Claims Session at your local District Court or Boston Municipal Court.',
    keywords: ['small claims Massachusetts', 'Massachusetts small claims court', 'sue in Massachusetts'],
    counties: ['Middlesex','Worcester','Suffolk','Norfolk','Essex']
  },
  michigan: {
    name: 'Michigan', abbr: 'MI', slug: 'michigan',
    limit: 6500, filingFee: '$30–$70', court: 'District Court',
    filingInstructions: 'File at Michigan District Court. Landlord-tenant and auto cases are very common.',
    keywords: ['small claims Michigan', 'Michigan District Court small claims', 'sue in Michigan'],
    counties: ['Wayne','Oakland','Macomb','Kent','Genesee']
  },
  minnesota: {
    name: 'Minnesota', abbr: 'MN', slug: 'minnesota',
    limit: 15000, filingFee: '$75', court: 'Conciliation Court',
    filingInstructions: 'File at Conciliation Court (Minnesota\'s name for small claims court). High $15,000 limit.',
    keywords: ['small claims Minnesota', 'Minnesota Conciliation Court', 'sue in Minnesota small claims'],
    counties: ['Hennepin','Ramsey','Dakota','Anoka','Washington']
  },
  mississippi: {
    name: 'Mississippi', abbr: 'MS', slug: 'mississippi',
    limit: 3500, filingFee: '$25–$50', court: 'Justice Court',
    filingInstructions: 'File at Justice Court in the county where defendant lives or contract was made.',
    keywords: ['small claims Mississippi', 'Mississippi Justice Court'],
    counties: ['Hinds','Harrison','DeSoto','Rankin','Jackson']
  },
  missouri: {
    name: 'Missouri', abbr: 'MO', slug: 'missouri',
    limit: 5000, filingFee: '$25–$50', court: 'Associate Circuit Court',
    filingInstructions: 'File at Associate Circuit Court. Missouri allows attorney representation in small claims.',
    keywords: ['small claims Missouri', 'Missouri Associate Circuit Court small claims'],
    counties: ['Jackson','St. Louis City','St. Louis County','Greene','Clay']
  },
  montana: {
    name: 'Montana', abbr: 'MT', slug: 'montana',
    limit: 7000, filingFee: '$30–$75', court: 'Justice Court / City Court',
    filingInstructions: 'File at Justice Court or City Court in the county where defendant resides.',
    keywords: ['small claims Montana', 'Montana Justice Court small claims'],
    counties: ['Yellowstone','Missoula','Gallatin','Cascade','Lewis and Clark']
  },
  nebraska: {
    name: 'Nebraska', abbr: 'NE', slug: 'nebraska',
    limit: 3600, filingFee: '$30–$60', court: 'County Court',
    filingInstructions: 'File at Nebraska County Court. Attorneys may not represent parties in small claims.',
    keywords: ['small claims Nebraska', 'Nebraska County Court small claims'],
    counties: ['Douglas','Lancaster','Sarpy','Hall','Buffalo']
  },
  nevada: {
    name: 'Nevada', abbr: 'NV', slug: 'nevada',
    limit: 10000, filingFee: '$30–$90', court: 'Justice Court',
    filingInstructions: 'File at Justice Court in the township where defendant lives or the event occurred.',
    keywords: ['small claims Nevada', 'Nevada Justice Court small claims', 'sue in Las Vegas small claims'],
    counties: ['Clark','Washoe','Carson City','Douglas','Elko']
  },
  'new-hampshire': {
    name: 'New Hampshire', abbr: 'NH', slug: 'new-hampshire',
    limit: 10000, filingFee: '$45–$90', court: 'Circuit Court – District Division',
    filingInstructions: 'File at Circuit Court District Division. New Hampshire has an online filing option.',
    keywords: ['small claims New Hampshire', 'NH small claims court'],
    counties: ['Hillsborough','Rockingham','Merrimack','Cheshire','Strafford']
  },
  'new-jersey': {
    name: 'New Jersey', abbr: 'NJ', slug: 'new-jersey',
    limit: 5000, filingFee: '$30–$75', court: 'Special Civil Part – Small Claims',
    filingInstructions: 'File at the Special Civil Part Small Claims section of Superior Court.',
    keywords: ['small claims New Jersey', 'NJ Special Civil Part small claims', 'sue in NJ'],
    counties: ['Bergen','Middlesex','Essex','Hudson','Monmouth']
  },
  'new-mexico': {
    name: 'New Mexico', abbr: 'NM', slug: 'new-mexico',
    limit: 10000, filingFee: '$25–$70', court: 'Magistrate Court / Metropolitan Court',
    filingInstructions: 'File at Magistrate Court or Metropolitan Court (Bernalillo County only).',
    keywords: ['small claims New Mexico', 'New Mexico Magistrate Court small claims'],
    counties: ['Bernalillo','Doña Ana','Sandoval','Santa Fe','San Juan']
  },
  'new-york': {
    name: 'New York', abbr: 'NY', slug: 'new-york',
    limit: 10000, filingFee: '$15–$20', court: 'City Court / Town or Village Justice Court',
    filingInstructions: 'NYC: File at Civil Court Small Claims Part. Outside NYC: File at Town or Village Justice Court. NY has some of the lowest filing fees in the country.',
    keywords: ['small claims court New York', 'NYC small claims court', 'New York small claims $10000', 'how to sue in New York small claims'],
    counties: ['New York City','Los Angeles','Kings','Queens','Bronx','Nassau','Suffolk','Westchester']
  },
  'north-carolina': {
    name: 'North Carolina', abbr: 'NC', slug: 'north-carolina',
    limit: 10000, filingFee: '$96', court: 'Magistrate\'s Court – District Court',
    filingInstructions: 'File at the Magistrate\'s Court (District Court). NC requires payment of the full $96 filing fee upfront.',
    keywords: ['small claims North Carolina', 'NC Magistrate Court small claims', 'sue in NC'],
    counties: ['Mecklenburg','Wake','Guilford','Forsyth','Cumberland']
  },
  'north-dakota': {
    name: 'North Dakota', abbr: 'ND', slug: 'north-dakota',
    limit: 15000, filingFee: '$35–$80', court: 'Small Claims Court – District Court',
    filingInstructions: 'File at the Small Claims division of District Court. High $15,000 limit.',
    keywords: ['small claims North Dakota', 'ND small claims court'],
    counties: ['Cass','Burleigh','Grand Forks','Ward','Morton']
  },
  ohio: {
    name: 'Ohio', abbr: 'OH', slug: 'ohio',
    limit: 6000, filingFee: '$30–$80', court: 'Municipal Court / County Court',
    filingInstructions: 'File at Municipal Court Small Claims Division or County Court. Ohio is very common for contractor and landlord disputes.',
    keywords: ['small claims Ohio', 'Ohio Municipal Court small claims', 'sue contractor Ohio'],
    counties: ['Franklin','Cuyahoga','Hamilton','Summit','Montgomery']
  },
  oklahoma: {
    name: 'Oklahoma', abbr: 'OK', slug: 'oklahoma',
    limit: 10000, filingFee: '$55–$95', court: 'Small Claims – District Court',
    filingInstructions: 'File at District Court Small Claims Division. Attorneys generally not allowed.',
    keywords: ['small claims Oklahoma', 'Oklahoma District Court small claims'],
    counties: ['Oklahoma','Tulsa','Cleveland','Canadian','Comanche']
  },
  oregon: {
    name: 'Oregon', abbr: 'OR', slug: 'oregon',
    limit: 10000, filingFee: '$35–$90', court: 'Circuit Court – Small Claims Department',
    filingInstructions: 'File at Circuit Court Small Claims Department. Oregon offers online filing in some counties.',
    keywords: ['small claims Oregon', 'Oregon Circuit Court small claims', 'sue in Oregon'],
    counties: ['Multnomah','Washington','Clackamas','Lane','Marion']
  },
  pennsylvania: {
    name: 'Pennsylvania', abbr: 'PA', slug: 'pennsylvania',
    limit: 12000, filingFee: '$35–$100', court: 'Magisterial District Court',
    filingInstructions: 'File at Magisterial District Court (MDJ). Pennsylvania\'s MDJ system is unique — decisions can be appealed to County Court of Common Pleas.',
    keywords: ['small claims Pennsylvania', 'PA Magisterial District Court', 'MDJ Pennsylvania small claims'],
    counties: ['Philadelphia','Allegheny','Montgomery','Bucks','Delaware']
  },
  'rhode-island': {
    name: 'Rhode Island', abbr: 'RI', slug: 'rhode-island',
    limit: 2500, filingFee: '$60–$100', court: 'District Court – Small Claims',
    filingInstructions: 'File at Rhode Island District Court Small Claims. Low $2,500 limit — one of the lowest in the US.',
    keywords: ['small claims Rhode Island', 'RI District Court small claims'],
    counties: ['Providence','Kent','Washington','Newport','Bristol']
  },
  'south-carolina': {
    name: 'South Carolina', abbr: 'SC', slug: 'south-carolina',
    limit: 7500, filingFee: '$35–$80', court: 'Magistrate\'s Court',
    filingInstructions: 'File at Magistrate\'s Court in the county where defendant lives or business is located.',
    keywords: ['small claims South Carolina', 'SC Magistrate Court small claims'],
    counties: ['Greenville','Richland','Charleston','Horry','Spartanburg']
  },
  'south-dakota': {
    name: 'South Dakota', abbr: 'SD', slug: 'south-dakota',
    limit: 12000, filingFee: '$25–$70', court: 'Magistrate Court',
    filingInstructions: 'File at Magistrate Court. South Dakota has a reasonable $12,000 limit.',
    keywords: ['small claims South Dakota', 'SD Magistrate Court'],
    counties: ['Minnehaha','Pennington','Lincoln','Brown','Codington']
  },
  tennessee: {
    name: 'Tennessee', abbr: 'TN', slug: 'tennessee',
    limit: 25000, filingFee: '$30–$110', court: 'General Sessions Court',
    filingInstructions: 'File at General Sessions Court. Tennessee has one of the highest small claims limits in the nation at $25,000.',
    keywords: ['small claims Tennessee', 'Tennessee General Sessions Court', 'TN small claims $25000'],
    counties: ['Shelby','Davidson','Knox','Hamilton','Rutherford']
  },
  texas: {
    name: 'Texas', abbr: 'TX', slug: 'texas',
    limit: 20000, filingFee: '$30–$150', court: 'Justice Court (Justice of the Peace)',
    filingInstructions: 'File at Justice Court (Justice of the Peace). Texas calls small claims "Justice Court" cases. High $20,000 limit.',
    keywords: ['small claims Texas', 'Texas Justice Court small claims', 'sue someone in Texas', 'JP Court Texas small claims'],
    counties: ['Harris','Dallas','Tarrant','Bexar','Travis','Collin','Denton']
  },
  utah: {
    name: 'Utah', abbr: 'UT', slug: 'utah',
    limit: 11000, filingFee: '$60–$185', court: 'Small Claims Court',
    filingInstructions: 'File at Utah Small Claims Court. Utah has an online case filing option at utcourts.gov.',
    keywords: ['small claims Utah', 'Utah small claims court online filing'],
    counties: ['Salt Lake','Utah','Davis','Weber','Washington']
  },
  vermont: {
    name: 'Vermont', abbr: 'VT', slug: 'vermont',
    limit: 5000, filingFee: '$70–$105', court: 'Small Claims Court',
    filingInstructions: 'File at Vermont Small Claims Court. Defendant served by certified mail.',
    keywords: ['small claims Vermont', 'Vermont small claims court'],
    counties: ['Chittenden','Rutland','Washington','Franklin','Windsor']
  },
  virginia: {
    name: 'Virginia', abbr: 'VA', slug: 'virginia',
    limit: 5000, filingFee: '$30–$75', court: 'General District Court',
    filingInstructions: 'File at General District Court. Virginia has a very streamlined small claims process.',
    keywords: ['small claims Virginia', 'Virginia General District Court small claims', 'sue in Virginia'],
    counties: ['Fairfax','Prince William','Loudoun','Chesterfield','Henrico']
  },
  washington: {
    name: 'Washington', abbr: 'WA', slug: 'washington',
    limit: 10000, filingFee: '$14–$54', court: 'District Court',
    filingInstructions: 'File at District Court. Washington State has very low filing fees. Defendant served by certified mail.',
    keywords: ['small claims Washington State', 'WA District Court small claims', 'sue in Washington state'],
    counties: ['King','Pierce','Snohomish','Spokane','Clark']
  },
  'west-virginia': {
    name: 'West Virginia', abbr: 'WV', slug: 'west-virginia',
    limit: 10000, filingFee: '$25–$90', court: 'Magistrate Court',
    filingInstructions: 'File at Magistrate Court. West Virginia Magistrate Courts handle small claims up to $10,000.',
    keywords: ['small claims West Virginia', 'WV Magistrate Court small claims'],
    counties: ['Kanawha','Berkeley','Cabell','Wood','Monongalia']
  },
  wisconsin: {
    name: 'Wisconsin', abbr: 'WI', slug: 'wisconsin',
    limit: 10000, filingFee: '$50–$95', court: 'Circuit Court – Small Claims',
    filingInstructions: 'File at Circuit Court Small Claims Division. Wisconsin allows lawyers only with court permission.',
    keywords: ['small claims Wisconsin', 'Wisconsin Circuit Court small claims'],
    counties: ['Milwaukee','Dane','Waukesha','Brown','Racine']
  },
  wyoming: {
    name: 'Wyoming', abbr: 'WY', slug: 'wyoming',
    limit: 6000, filingFee: '$25–$70', court: 'Circuit Court',
    filingInstructions: 'File at Wyoming Circuit Court. Hearing typically held within 45 days of filing.',
    keywords: ['small claims Wyoming', 'Wyoming Circuit Court small claims'],
    counties: ['Laramie','Natrona','Campbell','Sweetwater','Uinta']
  }
}

export const STATE_LIST = Object.values(STATES).sort((a, b) => a.name.localeCompare(b.name))

export function getState(slug) {
  return STATES[slug] || null
}

export const CLAIM_TYPES = [
  { value: 'unpaid_debt', label: 'Unpaid debt or loan' },
  { value: 'security_deposit', label: 'Security deposit not returned' },
  { value: 'property_damage', label: 'Property damage' },
  { value: 'contractor', label: 'Contractor did poor/no work' },
  { value: 'auto_accident', label: 'Auto accident damages' },
  { value: 'bad_check', label: 'Bounced / bad check' },
  { value: 'retail', label: 'Defective product / retail dispute' },
  { value: 'personal_injury', label: 'Personal injury (minor)' },
  { value: 'wages', label: 'Unpaid wages' },
  { value: 'other', label: 'Other' },
]
