#!/usr/bin/env bash
# CISA KEV API quick start (curl)
# Get a free key: https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-cisa-cybersecurity-vulnerabilities-kev

curl --request GET \
  --url 'https://live-cisa-cybersecurity-vulnerabilities-kev.p.rapidapi.com/api/vulnerabilities?vendor=Microsoft&limit=100' \
  --header 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
  --header 'X-RapidAPI-Host: live-cisa-cybersecurity-vulnerabilities-kev.p.rapidapi.com'
