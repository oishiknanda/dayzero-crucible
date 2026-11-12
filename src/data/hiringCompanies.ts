/** Base directory names (same list as the Navbar dropdown). Extra Indian companies come from indianCompanies.ts. */
import { EXTRA_COMPANIES } from "./indianCompanies";

export const BASE_COMPANY_NAMES: readonly string[] = ["Google", "Microsoft", "Amazon", "Meta", "Apple", "NVIDIA", "Netflix", "Salesforce", "Uber", "Stripe", "Adobe", "Oracle", "Atlassian", "Palantir", "Cisco", "Intuit", "Goldman Sachs", "Bloomberg", "PayPal", "Shopify", "Coinbase", "Databricks", "Snowflake", "Spotify", "Twilio", "ServiceNow", "DoorDash", "Qualcomm", "D.E. Shaw", "Citadel", "Jane Street", "Optiver", "Tower Research", "Two Sigma", "Hudson River Trading", "Jump Trading", "Morgan Stanley", "J.P. Morgan Chase", "Airbnb", "LinkedIn", "Pinterest", "Instacart", "Robinhood", "Snapchat", "ByteDance / TikTok", "AMD", "Intel", "Broadcom", "IBM", "VMware", "CrowdStrike", "Palo Alto Networks", "Cloudflare", "MongoDB", "Elastic", "HashiCorp", "GitLab", "GitHub", "Slack", "Zoom", "Dropbox", "Box", "Zscaler", "Splunk", "DocuSign", "HubSpot", "Zendesk", "Asana", "Monday.com", "Notion", "Figma", "Canva", "Square / Block", "Affirm", "SoFi", "Plaid", "Ramp", "Brex", "Checkout.com", "Revolut", "Chime", "Klarna", "Lyft", "Grab", "GoTo", "Deliveroo", "Wayfair", "Etsy", "eBay", "Booking.com", "Expedia", "Tripadvisor", "Cruise", "Waymo", "Aurora", "Tesla (Autopilot)", "Rivian", "Scale AI", "OpenAI", "Anthropic"];

export const ALL_COMPANY_NAMES: string[] = Array.from(
  new Set([...BASE_COMPANY_NAMES, ...EXTRA_COMPANIES.map((c) => c.name)])
);
