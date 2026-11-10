"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { EXTRA_COMPANIES } from "@/data/indianCompanies";

export const CompanyMarquee = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  const setupDragScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    return {
      onMouseDown: (e: React.MouseEvent) => {
        const slider = ref.current;
        if (!slider) return;
        const startX = e.pageX - slider.offsetLeft;
        const scrollLeft = slider.scrollLeft;

        const onMouseMove = (moveEvent: MouseEvent) => {
          moveEvent.preventDefault();
          const x = moveEvent.pageX - slider.offsetLeft;
          slider.scrollLeft = scrollLeft - (x - startX) * 1.5;
        };

        const onMouseUp = () => {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
      },
    };
  };

  const getSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const row1 = [
    {
      name: "Google",
      svg: (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      )
    },
    {
      name: "Microsoft",
      svg: (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 23 23">
          <path fill="#f35325" d="M1 1h10v10H1z"/>
          <path fill="#81bc06" d="M12 1h10v10H12z"/>
          <path fill="#05a6f0" d="M1 12h10v10H1z"/>
          <path fill="#ffba08" d="M12 12h10v10H12z"/>
        </svg>
      )
    },
    {
      name: "Amazon",
      svg: (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#FF9900" d="M1.6 15.3c3.8 2.3 8.3 3.5 12.9 3.5 3.3 0 6.6-.7 9.5-2 .4-.2.5-.7.2-1-.3-.4-.8-.4-1.2-.2-2.6 1.2-5.5 1.8-8.5 1.8-4.2 0-8.2-1.1-11.7-3.2-.4-.2-.9-.1-1.1.3-.2.3-.1.8.2 1z"/>
          <path fill="#FF9900" d="M22.8 14.5c-.3-.4-1.8-.4-2.8-.3-.3 0-.4.3-.2.5.8 1.1 1.9 2.5 3.1 2.9.3.1.5-.1.5-.4-.1-1.1-.3-2.3-.6-2.7z"/>
        </svg>
      )
    },
    {
      name: "Meta",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#0668E1]" viewBox="0 0 24 24">
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
        </svg>
      )
    },
    {
      name: "Apple",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-slate-900" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.66-.82 1.11-1.95.99-3.08-1 .04-2.14.67-2.81 1.46-.59.68-1.11 1.8-1.02 2.9 1.12.09 2.21-.49 2.84-1.28z"/>
        </svg>
      )
    },
    {
      name: "NVIDIA",
      svg: (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#76B900" d="M8.9 6.2c-2.8.9-5 3.1-5.7 5.8-.4 1.5-.2 3.1.5 4.5l1.6-.9c-.5-1-.7-2.2-.4-3.3.5-2.1 2.2-3.8 4.3-4.3 1.8-.4 3.7.1 5.1 1.3l1.4-1.4C13.8 6.4 11.2 5.6 8.9 6.2zm1.8 3.5c-1.5.5-2.6 1.7-2.9 3.2-.3 1.2.1 2.5.9 3.4l1.5-.9c-.4-.5-.6-1.2-.4-1.9.2-.8.8-1.4 1.6-1.7 1-.3 2.1 0 2.8.8l1.4-1.3c-1.2-1.1-2.9-1.8-4.9-1.6zm6.3 3.8c-.2 1.9-1.5 3.5-3.3 4.1-.7.2-1.4.2-2.1 0l-.8 1.6c1.1.4 2.3.5 3.5.2 2.7-.8 4.6-3.1 4.9-5.9h-2.2z"/>
        </svg>
      )
    },
    {
      name: "Netflix",
      svg: (
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
          <path fill="#B81D24" d="M4 1v22l5.5-1.5V1H4z"/>
          <path fill="#B81D24" d="M14.5 1v20.5L20 23V1h-5.5z"/>
          <path fill="#E50914" d="M4 1l10.5 20.5h5.5L9.5 1H4z"/>
        </svg>
      )
    },
    {
      name: "Salesforce",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#00A1E0]" viewBox="0 0 24 24">
          <path d="M19.4 9.1c-.6-.7-1.3-1.1-2.1-1.4-.4-1.9-1.9-3.4-3.8-3.7-1.5-.2-3 .4-4 1.6-.7-.3-1.4-.4-2.1-.4-2.6 0-4.8 2-5 4.6-.9.4-1.7 1.1-2.1 2-.6 1.1-.6 2.4 0 3.5.6 1.1 1.6 1.9 2.8 2.2.4.1.8.1 1.2.1h15.2c1.7 0 3.2-.9 4-2.4.8-1.5.7-3.3-.3-4.7-.6-.9-1.5-1.5-2.5-1.8z"/>
        </svg>
      )
    },
    {
      name: "Uber",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-slate-900" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.6 14.8c-.8.8-1.8 1.2-3.6 1.2s-2.8-.4-3.6-1.2c-.8-.8-1.2-2-1.2-3.6V8h2.4v5.2c0 1.8.6 2.4 2.4 2.4s2.4-.6 2.4-2.4V8H18v5.2c0 1.6-.4 2.8-1.2 3.6z"/>
        </svg>
      )
    },
    {
      name: "Stripe",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#635BFF]" viewBox="0 0 24 24">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.522.5 6.05.5 2.051 3.847 2.051 8.94c0 6.671 9.176 5.617 9.176 8.5 0 .983-.872 1.474-2.28 1.474-2.378 0-5.35-1.196-7.228-2.282l-.934 5.568C2.569 23.01 5.92 23.5 8.94 23.5c6.726 0 10.996-3.313 10.996-8.599 0-6.908-9.176-5.874-9.176-8.751 0-.916.738-1.305 2.05-1.305 1.852 0 3.967.653 5.483 1.439l.683-5.634z"/>
        </svg>
      )
    },
    {
      name: "Adobe",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#FF0000]" viewBox="0 0 24 24">
          <path d="M13.966 22h10.034l-8.627-20h-5.263l8.627 20zm-9.966 0h4.229l4.57-10.638h-4.322l-4.477 10.638zm-4 0l8.627-20h5.263l-8.627 20h-5.263z"/>
        </svg>
      )
    },
    {
      name: "Oracle",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#F80000]" viewBox="0 0 24 24">
          <path d="M16.462 17.514c-3.134 0-5.675-2.541-5.675-5.675 0-3.133 2.541-5.674 5.675-5.674 3.133 0 5.674 2.541 5.674 5.674 0 3.134-2.541 5.675-5.674 5.675zm0-8.918c-1.788 0-3.243 1.455-3.243 3.243 0 1.789 1.455 3.244 3.243 3.244 1.789 0 3.244-1.455 3.244-3.244 0-1.788-1.455-3.243-3.244-3.243zM7.538 17.514C4.405 17.514 1.864 14.973 1.864 11.839c0-3.133 2.541-5.674 5.674-5.674 3.134 0 5.675 2.541 5.675 5.674 0 3.134-2.541 5.675-5.675 5.675zm0-8.918c-1.789 0-3.244 1.455-3.244 3.243 0 1.789 1.455 3.244 3.244 3.244 1.788 0 3.243-1.455 3.243-3.244 0-1.788-1.455-3.243-3.243-3.243z"/>
        </svg>
      )
    },
    {
      name: "Atlassian",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#0052CC]" viewBox="0 0 24 24">
          <path d="M11.53 2c-.37 0-.71.21-.88.54L5.09 13.78a1.002 1.002 0 0 0 .89 1.44h4.89l-2.02 5.86c-.14.4.05.85.44 1.02.13.06.27.08.41.08.28 0 .55-.13.71-.37l7.26-10.74c.26-.38.19-.9-.16-1.19-.13-.11-.3-.17-.47-.17h-4.8l2.95-6.88c.17-.4-.01-.86-.4-1.04-.15-.08-.31-.11-.47-.11z"/>
        </svg>
      )
    },
    {
      name: "Palantir",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-slate-900" viewBox="0 0 24 24">
          <path d="M20.25 15.65c-1.34 2.32-3.83 3.88-6.68 3.88-2.84 0-5.33-1.56-6.68-3.88L2 18.47C4.15 22.04 8.01 24 13.57 24s9.42-1.96 11.57-5.53l-4.89-2.82zm-6.68-4.22c2.84 0 5.34-1.56 6.68-3.88l4.89 2.82C22.99 6.8 19.13 4.84 13.57 4.84S4.15 6.8 2 10.37l4.89 2.82c1.35-2.32 3.84-3.76 6.68-3.76z"/>
        </svg>
      )
    },
    {
      name: "Cisco",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#1BA0D7]" viewBox="0 0 24 24">
          <path d="M12 8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 12 8zm-5 2.5a1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-3 0V12A1.5 1.5 0 0 1 7 10.5zm10 0a1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-3 0V12a1.5 1.5 0 0 1 1.5-1.5z"/>
        </svg>
      )
    },
    {
      name: "Intuit",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#0077C5]" viewBox="0 0 24 24">
          <path d="M2.5 12c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5-9.5-4.25-9.5-9.5zm6-4h-2v8h2V8zm9 0h-2v8h2V8z"/>
        </svg>
      )
    }
  ];

  const row2 = [
    {
      name: "Goldman Sachs",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#00609C]" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      )
    },
    {
      name: "Bloomberg",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-slate-900" viewBox="0 0 24 24">
          <path d="M14.61 0C10.74 0 8.05 2.76 8.05 6.44v1.86C5.07 8.3 2 10.7 2 15.22 2 19.98 5.76 24 10.74 24c4.85 0 8.65-4.02 8.65-8.78 0-3.32-1.74-5.83-4.14-6.84V6.44c0-1.8 1.4-3.1 3.36-3.1 1.7 0 2.84.97 2.97 2.37h2.39C23.77 2.37 20.32 0 14.61 0zm-3.87 11.64c3.48 0 5.92 2.68 5.92 6.4 0 3.73-2.44 6.41-5.92 6.41-3.48 0-5.92-2.68-5.92-6.41 0-3.72 2.44-6.4 5.92-6.4z"/>
        </svg>
      )
    },
    {
      name: "PayPal",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#003087]" viewBox="0 0 24 24">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.502a.843.843 0 0 1 .832-.707h6.634c3.67 0 6.068 1.782 5.513 5.344-.47 3.013-2.52 4.957-5.59 4.957H9.72l-1.47 7.915a.843.843 0 0 1-.832.707h-.342z"/>
        </svg>
      )
    },
    {
      name: "Shopify",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#96BF48]" viewBox="0 0 24 24">
          <path d="M19.8 4.7l-2.4-.7c-.2-.1-.5 0-.6.2l-1.3 2.9-2.2-.6c-.2 0-.4.1-.5.3L9.6 13.9 7 9.8c-.1-.2-.3-.3-.5-.3l-3.9-.2c-.3 0-.5.3-.4.6l5.2 13.6c.1.2.3.4.6.4h11.4c.3 0 .6-.2.6-.5l2.4-17.9c.1-.4-.2-.7-.6-.8z"/>
        </svg>
      )
    },
    {
      name: "Coinbase",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#0052FF]" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 17.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
        </svg>
      )
    },
    {
      name: "Databricks",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#FF3621]" viewBox="0 0 24 24">
          <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 3.2l7.5 4.3v8.6L12 20.4l-7.5-4.3V7.5L12 3.2z"/>
        </svg>
      )
    },
    {
      name: "Snowflake",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#29B5E8]" viewBox="0 0 24 24">
          <path d="M12 0v5.5l-4-2.3-1 1.7 4 2.3L7 9.5l-4.5-2.6-1 1.7 4.5 2.6H1v2h5l-4.5 2.6 1 1.7L7 14.9l4 2.3-4 2.3 1 1.7 4-2.3V24h2v-5.5l4 2.3 1-1.7-4-2.3 4-2.3 4.5 2.6 1-1.7-4.5-2.6H23v-2h-5l4.5-2.6-1-1.7-4.5 2.6-4-2.3 4-2.3-1-1.7-4 2.3V0h-2z"/>
        </svg>
      )
    },
    {
      name: "Spotify",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#1ED760]" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    },
    {
      name: "Twilio",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#F22F46]" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c1.988 0 3.6 1.612 3.6 3.6s-1.612 3.6-3.6 3.6-3.6-1.612-3.6-3.6 1.612-3.6 3.6-3.6zm0 14.4c-3.976 0-7.2-3.224-7.2-7.2h2.4c0 2.651 2.149 4.8 4.8 4.8s4.8-2.149 4.8-4.8h2.4c0 3.976-3.224 7.2-7.2 7.2z"/>
        </svg>
      )
    },
    {
      name: "ServiceNow",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#293E40]" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z"/>
        </svg>
      )
    },
    {
      name: "DoorDash",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#FF3008]" viewBox="0 0 24 24">
          <path d="M23.071 8.41a6.035 6.035 0 0 0-5.24-3.136H1.142A1.14 1.14 0 0 0 0 6.417a1.14 1.14 0 0 0 1.142 1.144H17.83a3.75 3.75 0 0 1 3.256 1.947 3.753 3.753 0 0 1-.34 4.093l-4.526 5.56a1.143 1.143 0 0 0 .167 1.599 1.14 1.14 0 0 0 1.598-.168l4.527-5.56a6.035 6.035 0 0 0 .559-7.021z"/>
        </svg>
      )
    },
    {
      name: "Qualcomm",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-[#3253DC]" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 14.93V15h-2v1.93A8.016 8.016 0 0 1 4.07 11H6V9H4.07A8.016 8.016 0 0 1 11 4.07V6h2V4.07A8.016 8.016 0 0 1 19.93 11H18v2h1.93A8.016 8.016 0 0 1 13 16.93z"/>
        </svg>
      )
    },
    {
      name: "D.E. Shaw",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-slate-900" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: "Citadel",
      svg: (
        <svg className="h-5 w-5 shrink-0 fill-slate-900" viewBox="0 0 24 24">
          <path d="M2 4h20v4H2V4zm0 6h20v4H2v-4zm0 6h20v4H2v-4z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="tracks" className="py-14 border-b border-slate-300 bg-white select-none">
      <div className="w-full px-6 sm:px-10 lg:px-14 mb-7 text-center">
        <p className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-slate-600">
          Rehearsal Environments Calibrated for 50+ Top-Tier Tech Recruiters (Click to Select Track)
        </p>
      </div>

      {/* Row 1 */}
      <div
        ref={row1Ref}
        {...setupDragScroll(row1Ref)}
        className="flex gap-3 overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 px-6 sm:px-10 lg:px-14"
      >
        {row1.map((item, i) => (
          <Link
            key={i}
            href={`/tracks/${getSlug(item.name)}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-sans font-bold text-sm tracking-tight shadow-sm hover:border-slate-800 transition-colors shrink-0 cursor-pointer"
          >
            {item.svg}
            <span className="whitespace-nowrap">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Row 2 */}
      <div
        ref={row2Ref}
        {...setupDragScroll(row2Ref)}
        className="flex gap-3 overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 px-6 sm:px-10 lg:px-14 mt-3"
      >
        {row2.map((item, i) => (
          <Link
            key={i}
            href={`/tracks/${getSlug(item.name)}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-sans font-bold text-sm tracking-tight shadow-sm hover:border-slate-800 transition-colors shrink-0 cursor-pointer"
          >
            {item.svg}
            <span className="whitespace-nowrap">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Row 3: Indian and global companies (coming soon) */}
      <div
        ref={row3Ref}
        {...setupDragScroll(row3Ref)}
        className="flex gap-3 overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 px-6 sm:px-10 lg:px-14 mt-3"
      >
        {EXTRA_COMPANIES.map((item) => (
          <Link
            key={item.name}
            href={`/tracks/${getSlug(item.name)}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 border-slate-300 bg-white text-slate-900 font-sans font-bold text-sm tracking-tight shadow-sm hover:border-slate-800 transition-colors shrink-0 cursor-pointer"
          >
            <span
              className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-extrabold text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase()}
            </span>
            <span className="whitespace-nowrap">{item.name}</span>
            <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Soon</span>
          </Link>
        ))}
      </div>
    </section>
  );
};