// import { SiteConfig } from "@/config/siteConfig";

import { SiteConfig } from "@/config/siteConfig";

export const siteMetadata = {
  // 1. Home Page (/) - Core Brand & Main Service Hub
  home: {
    title: "24/7 Mobile Car Repair & Battery Replacement Dubai | 5-30 Min Response",
    description: "Certified mobile mechanics in Dubai arriving in 5–30 mins. On-site car battery replacement, computer diagnostics & AC repair. 100% genuine parts. Call +971 5663 28021.",
    verification: {
      google: "",
    },
    alternates: {
      canonical: SiteConfig.url,
    },
    // openGraph: {
    //   title: `24/7 Emergency Mobile Car Repair & Roadside Rescue Dubai | ${SiteConfig.brandName}`,
    //   description: `Dubai's premier 24/7 mobile mechanic service. On-site computer diagnostics, car battery replacement, AC repair, and instant mechanical fixes delivered anywhere in Dubai within 5–30 minutes with zero towing needed.`,
    //   url: SiteConfig.url,
    //   siteName: SiteConfig.brandName,
    //   images: [
    //     {
    //       url: `${SiteConfig.url}/og-image.png`,
    //       width: 1200,
    //       height: 630,
    //       alt: `24/7 Emergency Mobile Car Repair Dubai - ${SiteConfig.brandName}`,
    //     },
    //   ],
    //   locale: "en_AE",
    //   type: "website",
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: `24/7 Mobile Car Repair Dubai | 5-30 Min Arrival | ${SiteConfig.brandName}`,
    //   description: `Emergency roadside assistance and mobile mechanics anywhere in Dubai in 5-30 mins. Upfront pricing & genuine spare parts. Call ${SiteConfig.displayNumber} now.`,
    //   images: [`${SiteConfig.url}/og-image.png`],
    // },
  },

  // 2. Services Main Hub (/services) - Transactional Intent Cluster
  services: {
    title: "Mobile Car Repair Services Dubai | On-Site Auto Mechanic 24/7",
    description: "Explore mobile car repair services in Dubai - battery replacement, computer diagnostics, starter motor, alternator & AC repair. Fast 5-30 min arrival.",
    alternates: {
      canonical: `${SiteConfig.url}/services`,
    },
    // openGraph: {
    //   title: `Certified On-Site Mobile Auto Repair & Diagnostic Services in Dubai`,
    //   description: `Explore fully equipped mobile workshop services in Dubai. Certified mechanics available round-the-clock for battery, electrical, engine, AC, and roadside repairs.`,
    //   url: `${SiteConfig.url}/services`,
    //   siteName: SiteConfig.brandName,
    //   images: [
    //     { 
    //       url: `${SiteConfig.url}/og-services.jpg`, 
    //       width: 1200, 
    //       height: 630,
    //       alt: `Mobile Auto Repair Services Dubai - ${SiteConfig.brandName}`
    //     }
    //   ],
    //   type: "website",
    // },
  },

  // 3. Area We Serve (/area-we-serve) - Hyper-Local GEO Footprint
  areaWeServe: {
    title: "Mobile Mechanic Service Areas in Dubai | 5-30 Min Rapid Dispatch",
    description: "24/7 mobile car repair covering 16+ Dubai districts: Jebel Ali, Discovery Gardens, JLT, Dubai Marina, DIP & more. Rapid on-site response. Call +971 50 941 1265.",
    alternates: {
      canonical: `${SiteConfig.url}/service-area`,
    },
    // openGraph: {
    //   title: `Fastest Onsite Mobile Auto Repair Service Across All Dubai Communities`,
    //   description: `Strategically deployed mobile mechanic fleets covering Sheikh Mohammed Bin Rashid Blvd, Business Bay, JVC, Al Quoz, Dubai Hills, and major Dubai expressways 24/7.`,
    //   url: `${SiteConfig.url}/area-we-serve`,
    //   siteName: SiteConfig.brandName,
    //   images: [
    //     { 
    //       url: `${SiteConfig.url}/og-areas.jpg`, 
    //       width: 1200, 
    //       height: 630,
    //       alt: `Dubai Service Areas Coverage Map - ${SiteConfig.brandName}`
    //     }
    //   ],
    //   type: "website",
    // },
  },

  // 4. Brands We Serve (/brands) - High-Intent Technical Search
  // brands: {
  //   title: `Car Repair for All Vehicle Brands in Dubai | German & Luxury Specialists`,
  //   description: `Expert mobile mechanics for Toyota, Nissan, BMW, Mercedes-Benz, Audi, Porsche, Ford, and Range Rover in Dubai. Dealer-grade OBD computer scanners and genuine OEM parts warranty.`,
  //   alternates: {
  //     canonical: `${SiteConfig.url}/brands`,
  //   },
  //   openGraph: {
  //     title: `Multi-Brand Specialist Mobile Mechanics Dubai | Japanese, European & American Cars`,
  //     description: `Certified technicians equipped with advanced diagnostic software to service European luxury, American, and Japanese vehicles directly at your home, office, or roadside.`,
  //     url: `${SiteConfig.url}/brands`,
  //     siteName: SiteConfig.brandName,
  //     images: [
  //       { 
  //         url: `${SiteConfig.url}/og-brands.jpg`, 
  //         width: 1200, 
  //         height: 630,
  //         alt: `Multi-Brand Mobile Car Repair Specialist Dubai`
  //       }
  //     ],
  //     type: "website",
  //   },
  // },

  // 5. Gallery (/gallery) - Visual Proof & Trust Signals
  projects: {
    title: `Mobile Car Repair Work projects | Onsite Service Photos Dubai | ${SiteConfig.brandName}`,
    description: `Browse verified photos of our mobile workshop fleet in action across Dubai: on-spot battery replacements, computer diagnostic scans, AC gas refills, and emergency rescues.`,
    alternates: {
      canonical: `${SiteConfig.url}/projects`,
    },
    openGraph: {
      title: `Real On-Site Mobile Auto Repair Photo projects Dubai | ${SiteConfig.brandName}`,
      description: `Transparent visual evidence of certified mechanics executing roadside repair services and routine car maintenance directly at client locations in Dubai.`,
      url: `${SiteConfig.url}/gallery`,
      siteName: SiteConfig.brandName,
      type: "website",
    },
  },

  // 6. Contact Us (/contact) - Immediate Conversion & Call Action
  contact: {
    title: "Contact 24/7 Mobile Mechanic Dubai | Call +971 50 941 1265",
    description:"Need emergency car repair or a battery change in Dubai? Contact our dispatch team 24/7 via phone or WhatsApp. Rapid 5-30 min arrival. Free quote!",
    alternates: {
      canonical: `${SiteConfig.url}/contact`,
    },
    // openGraph: {
    //   title: `24/7 Emergency Mobile Mechanic Contact Dubai | Rapid Dispatch`,
    //   description: `Get instant emergency assistance from certified mobile mechanics in Dubai. Contact us now for 5–30 minute arrival, upfront pricing, and guaranteed work.`,
    //   url: `${SiteConfig.url}/contact`,
    //   siteName: SiteConfig.brandName,
    //   images: [
    //     { 
    //       url: `${SiteConfig.url}/og-contact.jpg`, 
    //       width: 1200, 
    //       height: 630,
    //       alt: `Contact 24/7 Mobile Mechanic Service Dubai`
    //     }
    //   ],
    //   type: "website",
    // },
  },

  // 7. About Us (/about) - E-E-A-T & Authority Building
  about: {
    title:"About Go Battery Repair | Trusted Mobile Mechanics in Dubai",
    description: "Operating since 2014, Go Battery Repair provides 24/7 mobile auto fixes across Dubai. ASE-certified mechanics, genuine OEM parts, and guaranteed workmanship.",
    alternates: {
      canonical: `${SiteConfig.url}/about`,
    },
    // openGraph: {
    //   title: `About ${SiteConfig.brandName} - Dubai's Trusted 24/7 On-Site Auto Repair Service`,
    //   description: `Discover how ${SiteConfig.brandName} redefined roadside assistance in Dubai with 5-30 minute mobile mechanic response, certified technicians, transparent pricing, and service warranties.`,
    //   url: `${SiteConfig.url}/about`,
    //   siteName: SiteConfig.brandName,
    //   images: [
    //     { 
    //       url: `${SiteConfig.url}/og-about.jpg`, 
    //       width: 1200, 
    //       height: 630,
    //       alt: `About ${SiteConfig.brandName} Mobile Mechanic Dubai`
    //     }
    //   ],
    //   type: "website",
    // },
  },

  privacy: {
    title: `Privacy Policy | ${SiteConfig.brandName}`,
    description: `Official privacy policy for ${SiteConfig.brandName}. Understand how we handle customer data, location tracking for mobile dispatches, and secure payment processing.`,
    alternates: {
      canonical: `${SiteConfig.url}/privacy`,
    },
    openGraph: {
      title: `Privacy Policy | ${SiteConfig.brandName}`,
      description: `Data governance, customer privacy standards, and dispatch location protocols for ${SiteConfig.brandName}.`,
      url: `${SiteConfig.url}/privacy`,
      siteName: SiteConfig.brandName,
      type: "website",
    },
  },
  
  terms: {
    title: `Terms of Service & Warranty Policy | ${SiteConfig.brandName}`,
    description: `Review service agreements, labor warranties, transparent pricing guarantees, and emergency mobile mechanic dispatch policies for ${SiteConfig.brandName}.`,
    alternates: {
      canonical: `${SiteConfig.url}/terms`,
    },
    openGraph: {
      title: `Terms of Service & Repair Warranty | ${SiteConfig.brandName}`,
      description: `Official terms of service, repair warranties, and transparent pricing standards for ${SiteConfig.brandName} mobile auto services in Dubai.`,
      url: `${SiteConfig.url}/terms`,
      siteName: SiteConfig.brandName,
      type: "website",
    },
  },
};