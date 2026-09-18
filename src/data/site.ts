export const company = {
  name: "Star Computers",
  tagline: "Your Technology Partner",
  city: "Vijayawada",
  phones: [
    { label: "+91 94923 93954", href: "tel:+919492393954", whatsapp: "https://wa.me/919492393954" },
    { label: "+91 93987 96496", href: "tel:+919398796496", whatsapp: "https://wa.me/919398796496" },
  ],
  email: "starcomputers309@gmail.com",
  emailHref: "mailto:starcomputers309@gmail.com",
  addressLines: ["19-29 Telephone Colony", "Gollapudi", "Andhra Pradesh 521225"],
  address: "19-29 Telephone Colony, Gollapudi, Andhra Pradesh 521225",
  mapsQuery: "19-29 Telephone Colony Gollapudi Andhra Pradesh 521225",
  mapsEmbed:
    "https://maps.google.com/maps?q=19-29%20Telephone%20Colony%20Gollapudi%20Andhra%20Pradesh%20521225&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=19-29+Telephone+Colony+Gollapudi+Andhra+Pradesh+521225",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/tech-hub", label: "Tech Hub" },
  { to: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "computer-repair",
    title: "Computer Repair",
    summary: "Desktop, PC and all-in-one repairs with genuine parts and careful diagnosis.",
    image: "/images/computer-repair.jpg",
    details: [
      "Slow performance, boot failures and unexpected shutdowns",
      "Power supply, motherboard and storage replacement",
      "Windows reinstall, data backup and virus cleanup",
      "On-site service for homes, shops and offices in Vijayawada",
    ],
  },
  {
    slug: "laptop-service",
    title: "Laptop Service",
    summary: "Screen, battery, keyboard and motherboard repair for all major brands.",
    image: "/images/laptop-repair.jpg",
    details: [
      "Broken hinges, swollen batteries and charging-port faults",
      "Display replacement for LCD and IPS panels",
      "SSD upgrades and RAM expansion",
      "Pickup and drop for selected workshop repairs",
    ],
  },
  {
    slug: "mobile-repair",
    title: "Mobile Repair",
    summary: "Android and iPhone hardware and software solutions, done properly.",
    image: "/images/mobile-repair.jpg",
    details: [
      "Screen, battery, charging port and camera module work",
      "Water-damage assessment and board-level inspection",
      "Software issues, updates and data recovery where possible",
      "Honest advice before any part is replaced",
    ],
  },
  {
    slug: "networking",
    title: "Networking",
    summary: "Wi-Fi, LAN setup and office network installation for reliable connectivity.",
    image: "/images/tech-hub-networking.jpg",
    details: [
      "Home mesh Wi-Fi and range planning",
      "Office LAN, switches and structured cabling",
      "Router configuration, guest networks and basic security",
      "Printer and CCTV network integration",
    ],
  },
  {
    slug: "cctv",
    title: "CCTV Solutions",
    summary: "Complete security camera installation and configuration for home and office.",
    image: "/images/tech-hub-cctv.jpg",
    details: [
      "IP and analog camera planning by coverage area",
      "NVR/DVR setup, remote viewing and night vision",
      "Storage sizing so footage actually lasts",
      "Maintenance, cleaning and camera repositioning",
    ],
  },
  {
    slug: "web-solutions",
    title: "Web Solutions",
    summary: "Business websites, domain registration and professional email setup.",
    image: "/images/tech-hub-web.jpg",
    details: [
      "Clean business websites that work on phones",
      "Domain, hosting and Google Workspace / professional email",
      "WhatsApp and call buttons that customers actually use",
      "Simple updates you can request without a developer on staff",
    ],
  },
  {
    slug: "design-printing",
    title: "Design & Printing",
    summary: "Visiting cards, invitations, posters, banners and custom print work.",
    image: "/images/tech-hub-printing.jpg",
    details: [
      "Visiting cards, letterheads and shop boards",
      "Wedding and event invitations",
      "Posters, flex banners and standees",
      "Print-ready design with a local turnaround",
    ],
  },
  {
    slug: "accessories",
    title: "Accessories & Upgrades",
    summary: "Original accessories, SSD/RAM upgrades and parts for better performance.",
    image: "/images/accessories.jpg",
    details: [
      "Laptop RAM and NVMe SSD upgrades",
      "Chargers, cables, adapters and input devices",
      "Phone accessories with quality you can trust",
      "Advice on what is worth upgrading — and what is not",
    ],
  },
] as const;

export const whyChoose = [
  {
    title: "Experienced technicians",
    body: "A skilled, friendly team that diagnoses before it replaces.",
  },
  {
    title: "Genuine parts",
    body: "Original and quality components — we tell you the difference.",
  },
  {
    title: "Quick turnaround",
    body: "On-time work with a clear estimate before we begin.",
  },
  {
    title: "Transparent pricing",
    body: "No hidden charges. You approve the job, then we start.",
  },
  {
    title: "Service at your home",
    body: "Doorstep service across Vijayawada when you cannot travel.",
  },
  {
    title: "Customer first",
    body: "We would rather fix it correctly than upsell a new device.",
  },
] as const;

export const testimonials = [
  {
    name: "Sagar",
    initial: "S",
    quote: "Excellent service. They fixed my laptop at home very quickly. Highly recommended.",
  },
  {
    name: "Arjun",
    initial: "A",
    quote: "Professional and affordable. Good support and genuine service.",
  },
  {
    name: "Tarak",
    initial: "T",
    quote: "Very responsive and came to my home. Fixed my mobile screen in less time. Great service.",
  },
] as const;

export const deviceOptions = [
  "Desktop / PC",
  "Laptop",
  "Mobile phone",
  "Networking / Wi-Fi",
  "CCTV",
  "Website / email",
  "Printing / design",
  "Other",
] as const;

export const visitOptions = [
  "Home visit",
  "Pickup & drop",
  "Bring to workshop",
] as const;
