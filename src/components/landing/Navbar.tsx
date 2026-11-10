"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { UserMenu } from "@/components/auth/UserMenu";
import { Terminal, ChevronDown, Search } from "lucide-react";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const companiesList = [
    { name: "Google", color: "#4285F4" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Meta", color: "#0668E1" },
    { name: "Apple", color: "#000000" },
    { name: "NVIDIA", color: "#76B900" },
    { name: "Netflix", color: "#E50914" },
    { name: "Salesforce", color: "#00A1E0" },
    { name: "Uber", color: "#000000" },
    { name: "Stripe", color: "#635BFF" },
    { name: "Adobe", color: "#FF0000" },
    { name: "Oracle", color: "#F80000" },
    { name: "Atlassian", color: "#0052CC" },
    { name: "Palantir", color: "#101828" },
    { name: "Cisco", color: "#1BA0D7" },
    { name: "Intuit", color: "#0077C5" },
    { name: "Goldman Sachs", color: "#00609C" },
    { name: "Bloomberg", color: "#101828" },
    { name: "PayPal", color: "#003087" },
    { name: "Shopify", color: "#96BF48" },
    { name: "Coinbase", color: "#0052FF" },
    { name: "Databricks", color: "#FF3621" },
    { name: "Snowflake", color: "#29B5E8" },
    { name: "Spotify", color: "#1ED760" },
    { name: "Twilio", color: "#F22F46" },
    { name: "ServiceNow", color: "#293E40" },
    { name: "DoorDash", color: "#FF3008" },
    { name: "Qualcomm", color: "#3253DC" },
    { name: "D.E. Shaw", color: "#0F172A" },
    { name: "Citadel", color: "#0F172A" },
    { name: "Jane Street", color: "#166534" },
    { name: "Optiver", color: "#0F172A" },
    { name: "Tower Research", color: "#0369A1" },
    { name: "Two Sigma", color: "#4338CA" },
    { name: "Hudson River Trading", color: "#1E293B" },
    { name: "Jump Trading", color: "#B91C1C" },
    { name: "Morgan Stanley", color: "#1E3A8A" },
    { name: "J.P. Morgan Chase", color: "#172554" },
    { name: "Airbnb", color: "#FF5A5F" },
    { name: "LinkedIn", color: "#0A66C2" },
    { name: "Pinterest", color: "#BD081C" },
    { name: "Instacart", color: "#43B02A" },
    { name: "Robinhood", color: "#00C805" },
    { name: "Snapchat", color: "#FFFC00" },
    { name: "ByteDance / TikTok", color: "#000000" },
    { name: "AMD", color: "#ED1C24" },
    { name: "Intel", color: "#0071C5" },
    { name: "Broadcom", color: "#CC092F" },
    { name: "IBM", color: "#0530AD" },
    { name: "VMware", color: "#717074" },
    { name: "CrowdStrike", color: "#EA1F25" },
    { name: "Palo Alto Networks", color: "#FA582D" },
    { name: "Cloudflare", color: "#F38020" },
    { name: "MongoDB", color: "#00ED64" },
    { name: "Elastic", color: "#005571" },
    { name: "HashiCorp", color: "#000000" },
    { name: "GitLab", color: "#FC6D26" },
    { name: "GitHub", color: "#24292E" },
    { name: "Slack", color: "#4A154B" },
    { name: "Zoom", color: "#2D8CFF" },
    { name: "Dropbox", color: "#0061FF" },
    { name: "Box", color: "#0061D5" },
    { name: "Zscaler", color: "#0076CE" },
    { name: "Splunk", color: "#000000" },
    { name: "DocuSign", color: "#FF2B06" },
    { name: "HubSpot", color: "#FF7A59" },
    { name: "Zendesk", color: "#03363D" },
    { name: "Asana", color: "#F06A6A" },
    { name: "Monday.com", color: "#FF3D57" },
    { name: "Notion", color: "#000000" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Canva", color: "#00C4CC" },
    { name: "Square / Block", color: "#000000" },
    { name: "Affirm", color: "#0048FF" },
    { name: "SoFi", color: "#008CD2" },
    { name: "Plaid", color: "#000000" },
    { name: "Ramp", color: "#000000" },
    { name: "Brex", color: "#E02E2B" },
    { name: "Checkout.com", color: "#000000" },
    { name: "Revolut", color: "#0075EB" },
    { name: "Chime", color: "#25C974" },
    { name: "Klarna", color: "#FFB3C7" },
    { name: "Lyft", color: "#FF00BF" },
    { name: "Grab", color: "#00B14F" },
    { name: "GoTo", color: "#00AA13" },
    { name: "Deliveroo", color: "#00CDBC" },
    { name: "Wayfair", color: "#7F187F" },
    { name: "Etsy", color: "#F1641E" },
    { name: "eBay", color: "#E53238" },
    { name: "Booking.com", color: "#003580" },
    { name: "Expedia", color: "#002554" },
    { name: "Tripadvisor", color: "#00AF87" },
    { name: "Cruise", color: "#FF5E00" },
    { name: "Waymo", color: "#00A651" },
    { name: "Aurora", color: "#1C1C1E" },
    { name: "Tesla (Autopilot)", color: "#E82127" },
    { name: "Rivian", color: "#F1B82D" },
    { name: "Scale AI", color: "#6A00FF" },
    { name: "OpenAI", color: "#10A37F" },
    { name: "Anthropic", color: "#D97706" }
  ];

  const getSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const filteredCompanies = companiesList.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-300 bg-white/95 backdrop-blur-md">
      <div className="w-full flex h-20 items-center justify-between px-6 sm:px-10 lg:px-14">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform group-hover:scale-105">
              <Terminal className="h-5 w-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-950 font-sans">
              DAY-ZERO<span className="text-primary">.AI</span>
            </span>
          </Link>
          <span className="hidden sm:inline-flex items-center ml-2 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-300">
            v1.0 LIVE
          </span>
        </div>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-[14px] font-semibold text-slate-700">
          <a href="#features" className="whitespace-nowrap hover:text-slate-950 transition-colors">
            Core Architecture
          </a>
          <a href="#pipeline" className="whitespace-nowrap hover:text-slate-950 transition-colors">
            Simulation Pipeline
          </a>

          {/* 50+ Tech Tracks Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1.5 whitespace-nowrap hover:text-slate-950 transition-colors py-2 group focus:outline-none"
            >
              <span className={isDropdownOpen ? "text-slate-950 font-bold" : ""}>50+ Tech Tracks</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180 text-primary" : "text-slate-500 group-hover:text-slate-950"
                }`}
              />
            </button>

            {/* Dropdown Container */}
            {isDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[720px] max-w-[92vw] rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-xl z-50 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <h4 className="text-base font-bold text-slate-950 font-sans">
                      Target Enterprise Recruiter Tracks ({companiesList.length})
                    </h4>
                    <p className="text-xs text-slate-600 font-sans mt-0.5">
                      Calibrated question banks, OA environments & Bar-Raiser criteria
                    </p>
                  </div>

                  <div className="relative w-full sm:w-56">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search company..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-sm font-sans font-medium border-2 border-slate-300 rounded-lg focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>

                {/* Grid List with Link navigation */}
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
                  {filteredCompanies.map((c, i) => (
                    <Link
                      key={i}
                      href={`/login?next=/tracks/${getSlug(c.name)}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border-2 border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-800 transition-colors cursor-pointer"
                    >
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: c.color }}
                      />
                      <span className="text-sm font-bold text-slate-900 font-sans truncate">
                        {c.name}
                      </span>
                    </Link>
                  ))}
                  {filteredCompanies.length === 0 && (
                    <div className="col-span-3 text-center py-8 text-sm font-sans text-slate-500 font-medium">
                      No matching company track found.
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs font-sans text-slate-600">
                  <span className="font-medium">Standardized for SDE 1, 2, 3 & Specialist Loops</span>
                  <a
                    href="#tracks"
                    onClick={() => setIsDropdownOpen(false)}
                    className="font-bold text-primary hover:underline"
                  >
                    View Interactive Marquee →
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#pricing" className="whitespace-nowrap hover:text-slate-950 transition-colors">
            Access & Pricing
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3.5 shrink-0">
          <UserMenu />
          <Link href="#tracks">
            <Button variant="outline" size="md" className="hidden sm:inline-flex font-semibold border-slate-300 text-slate-800 text-sm shadow-sm hover:border-slate-900">
              Launch Diagnostic
            </Button>
          </Link>
          <Link href="#tracks">
            <Button variant="primary" size="md" className="font-semibold text-sm px-5 shadow-sm">
              Enter Cockpit →
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
