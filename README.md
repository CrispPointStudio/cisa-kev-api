# CISA KEV API — Known Exploited Vulnerabilities as JSON

REST API for the US Government's CISA Known Exploited Vulnerabilities (KEV) catalog. Query actively exploited CVEs as clean JSON, filter by vendor, and feed threat-intelligence dashboards, vulnerability scanners, or automated patch-priority alerts. Includes CWE IDs, ransomware-campaign flags, forensic-triage flags, and BOD 26-04 due dates.

👉 **[Get a free API key on RapidAPI](https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-cisa-cybersecurity-vulnerabilities-kev)**

---

## Quick Start

```bash
curl 'https://live-cisa-cybersecurity-vulnerabilities-kev.p.rapidapi.com/api/vulnerabilities?vendor=Microsoft' \
  -H 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
  -H 'X-RapidAPI-Host: live-cisa-cybersecurity-vulnerabilities-kev.p.rapidapi.com'
```

Full examples: [Python](examples/python/quickstart.py) · [JavaScript](examples/javascript/quickstart.js) · [curl](examples/curl.sh)

Responses default to the 50 most recent entries. Add `limit=2000` to get the entire catalog in one call.

---

## Endpoint Reference

Base URL: `https://live-cisa-cybersecurity-vulnerabilities-kev.p.rapidapi.com`

### `GET /api/vulnerabilities`

Returns the most recently added actively exploited vulnerabilities from the CISA KEV catalog, newest first. Defaults to 50 entries; raise `limit` to get more, up to the full catalog.

#### Query Parameters

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `vendor` | string | No | — | Filter by vendor/project, e.g. `Microsoft`, `Cisco`, `Apple`. Case-insensitive. |
| `limit` | integer | No | `50` | Maximum entries to return, 1 to 2000. The full catalog is currently under 2000 entries, so `limit=2000` returns everything. |

#### Response

A JSON array of vulnerability objects, newest first.

| Field | Type | Description |
| :--- | :--- | :--- |
| `cveID` | string | CVE identifier |
| `vendorProject` | string | Vendor or project name |
| `product` | string | Affected product |
| `vulnerabilityName` | string | CISA's name for the vulnerability |
| `dateAdded` | string (date) | Date added to the KEV catalog |
| `shortDescription` | string | One-sentence summary |
| `requiredAction` | string | CISA's required remediation |
| `dueDate` | string (date) | BOD 26-04 remediation deadline for federal agencies |
| `knownRansomwareCampaignUse` | string | `Known` or `Unknown` |
| `forensicTriage` | string | `Yes` or `No` — whether CISA's forensic triage requirements apply |
| `notes` | string | Semicolon-separated reference URLs (vendor advisory, NVD, CISA directives) |
| `cwes` | string[] | CWE identifiers, may be empty |

#### Sample Response

`GET /api/vulnerabilities?vendor=Microsoft`

```json
[
  {
    "cveID": "CVE-2026-65660",
    "vendorProject": "Microsoft",
    "product": "SharePoint",
    "vulnerabilityName": "Microsoft SharePoint Code Injection Vulnerability",
    "dateAdded": "2026-09-25",
    "shortDescription": "Microsoft SharePoint contains a code injection vulnerability which could allow an authorized attacker to execute code over a network.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA's BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA's \"Forensics Triage Requirements\" (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "dueDate": "2026-09-28",
    "knownRansomwareCampaignUse": "Unknown",
    "forensicTriage": "Yes",
    "notes": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-65660 ; ; BOD 26-04: https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk ; Forensics Triage Requirements: https://www.cisa.gov/news-events/directives/bod-26-04-implementation-guidance-prioritizing-security-updates-based-risk ; https://nvd.nist.gov/vuln/detail/CVE-2026-65660",
    "cwes": ["CWE-94"]
  },
  {
    "cveID": "CVE-2026-81963",
    "vendorProject": "Microsoft",
    "product": "Windows",
    "vulnerabilityName": "Microsoft Windows Link Following Vulnerability",
    "dateAdded": "2026-09-08",
    "shortDescription": "Microsoft Windows Update Stack contains a link following vulnerability that allows a local attacker to escalate privileges locally up to SYSTEM.",
    "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA's BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA's \"Forensics Triage Requirements\" (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.",
    "dueDate": "2026-09-22",
    "knownRansomwareCampaignUse": "Unknown",
    "forensicTriage": "No",
    "notes": "https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2026-81963 ; BOD 26-04: https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk ; Forensics Triage Requirements: https://www.cisa.gov/news-events/directives/bod-26-04-implementation-guidance-prioritizing-security-updates-based-risk ; https://nvd.nist.gov/vuln/detail/CVE-2026-81963",
    "cwes": ["CWE-59", "CWE-284"]
  }
]
```

---

## Pricing

All plans are billed through RapidAPI. Full details on the [pricing tab](https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-cisa-cybersecurity-vulnerabilities-kev/pricing).

| Plan | Price | Requests / month | Rate limit |
| :--- | :--- | :--- | :--- |
| Basic | Free | 100 | 1,000 per hour |
| Pro | $9.99 / month | 10,000 | — |
| Ultra | $29.99 / month | 50,000 | — |

---

## Data Source

Data comes from the official [CISA Known Exploited Vulnerabilities Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), the US government's authoritative list of CVEs with evidence of active exploitation.

**Refresh frequency: real-time.** Responses reflect the current CISA catalog with no lag. CISA typically adds entries several times per week, and new entries are available through this API immediately.

## License

The example code in this repository is released under the [MIT License](LICENSE). The API service itself and the data it returns are governed by the RapidAPI terms of service and CISA's data terms, not by this license.

---

👉 **[Subscribe on RapidAPI](https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-cisa-cybersecurity-vulnerabilities-kev)** · Built by Crisp Point Studio
