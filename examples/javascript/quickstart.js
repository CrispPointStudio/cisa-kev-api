// CISA KEV API quick start (Node 18+ or any runtime with global fetch)
// Get a free key: https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-cisa-cybersecurity-vulnerabilities-kev

const HOST = 'live-cisa-cybersecurity-vulnerabilities-kev.p.rapidapi.com';
const API_KEY = 'YOUR_RAPIDAPI_KEY';

async function getVulnerabilities(vendor, limit = 50) {
  const url = new URL(`https://${HOST}/api/vulnerabilities`);
  url.searchParams.set('limit', String(limit));
  if (vendor) url.searchParams.set('vendor', vendor);

  const response = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': HOST,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }
  return response.json(); // array of vulnerability objects
}

getVulnerabilities('Microsoft', 100)
  .then((vulns) => {
    console.log(`Retrieved ${vulns.length} vulnerabilities.`);
    for (const v of vulns) {
      console.log(`${v.cveID}  ${v.dateAdded}  ${v.vulnerabilityName}`);
    }
  })
  .catch((err) => console.error('Error fetching CISA KEV data:', err));
