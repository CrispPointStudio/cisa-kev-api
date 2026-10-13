"""CISA KEV API quick start (Python 3, requires `pip install requests`).

Get a free key:
https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-cisa-cybersecurity-vulnerabilities-kev
"""

import requests

HOST = "live-cisa-cybersecurity-vulnerabilities-kev.p.rapidapi.com"
API_KEY = "YOUR_RAPIDAPI_KEY"

HEADERS = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": HOST,
}


def fetch_vulnerabilities(vendor: str | None = None, limit: int = 50) -> list[dict]:
    """Return up to `limit` KEV entries (newest first), optionally filtered by vendor."""
    params: dict[str, str | int] = {"limit": limit}
    if vendor:
        params["vendor"] = vendor
    response = requests.get(
        f"https://{HOST}/api/vulnerabilities",
        headers=HEADERS,
        params=params,
        timeout=15,
    )
    response.raise_for_status()
    return response.json()  # bare JSON array


if __name__ == "__main__":
    vulns = fetch_vulnerabilities("Microsoft", limit=100)
    print(f"Retrieved {len(vulns)} vulnerabilities.")
    for v in vulns:
        print(f"{v['cveID']}  {v['dateAdded']}  {v['vulnerabilityName']}")
