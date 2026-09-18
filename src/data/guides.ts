export type GuideSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  image?: { src: string; alt: string };
};

export type Guide = {
  slug: string;
  title: string;
  kicker: string;
  lede: string;
  image: string;
  parent: "mobile" | "hub";
  sections: GuideSection[];
  takeaway: string;
};

export const mobileTopics: Guide[] = [
  {
    slug: "ram-storage",
    title: "RAM & Storage",
    kicker: "Mobile technology",
    lede: "The two numbers on a phone box that everyone talks about — and what they actually change in daily use.",
    image: "/images/mobile-ram-storage.jpg",
    parent: "mobile",
    sections: [],
    takeaway: "",
  },
  {
    slug: "battery",
    title: "Battery Technology",
    kicker: "Mobile technology",
    lede: "Why phones last a day, fade over years, and what actually helps battery health.",
    image: "/images/mobile-battery.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "What the battery is doing",
        body: [
          "A smartphone battery is a rechargeable lithium-ion pack. It stores chemical energy and converts it to electricity for the display, radio, camera and processor.",
          "Capacity is measured in milliamp-hours (mAh) or watt-hours. A larger number can mean longer runtime — but only if the phone is equally efficient. A bright 120 Hz screen and a 5G radio can empty a big battery faster than a modest one.",
        ],
      },
      {
        heading: "Charge cycles and wear",
        body: [
          "Every full charge cycle wears the cells a little. After hundreds of cycles, maximum capacity drops. That is normal chemistry, not a software trick.",
          "Heat is the real enemy. Charging under a pillow, gaming while plugged in, or leaving the phone on a car dashboard ages the pack faster than overnight charging at a normal temperature.",
        ],
        bullets: [
          "Avoid extreme heat while charging",
          "Use a charger that matches the phone's supported wattage",
          "A 20%–80% habit helps, but you do not need to obsess over it",
          "Swollen batteries should be replaced immediately",
        ],
      },
      {
        heading: "Fast charging is a trade-off",
        body: [
          "Modern phones accept high wattage so you can recover a lot of charge in minutes. The phone's controller slows the current as the pack fills, which is why the last 20% often feels slow.",
          "Using a cheap, unbranded charger is a common reason we see charging-port damage and unexpected shutdowns in the workshop.",
        ],
        image: { src: "/images/mobile-charging.jpg", alt: "Smartphone charging hardware" },
      },
    ],
    takeaway:
      "Battery health is mostly heat, cycles and charger quality. If runtime has collapsed or the back is lifting, stop using the phone and get the pack replaced.",
  },
  {
    slug: "motherboards",
    title: "Motherboards",
    kicker: "Mobile technology",
    lede: "The board is the phone. Almost every chip you care about lives on a few square centimetres of laminate.",
    image: "/images/mobile-motherboard.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "One board, many jobs",
        body: [
          "A smartphone motherboard (PCB) carries the SoC, RAM, storage, power-management ICs, radio modules and dozens of tiny support chips. Flex cables then reach the display, cameras, buttons and charging port.",
          "Water, a bent frame, or a badly seated connector can take down a phone even when the screen looks fine. That is why a proper diagnosis starts with the board, not with swapping the first part that looks related.",
        ],
      },
      {
        heading: "What usually fails",
        body: [
          "Charging ICs after cheap chargers, corrosion after liquid, and cracked solder after drops are the patterns we see most in Vijayawada.",
          "Board-level repair is possible in some cases. In others, a donor board or a replacement unit is the honest recommendation — we will tell you which, before you spend.",
        ],
        bullets: [
          "Do not dry a wet phone on a gas stove or in rice overnight and expect miracles",
          "Power it off, do not charge it, and bring it in",
          "A swollen battery can flex the board — treat that as urgent",
        ],
      },
    ],
    takeaway:
      "The motherboard is where cheap repairs become expensive. A five-minute inspection often saves a wasted screen or charging-port replacement.",
  },
  {
    slug: "cameras",
    title: "Cameras",
    kicker: "Mobile technology",
    lede: "Computational photography does most of the work. The lenses still have to be clean, aligned and undamaged.",
    image: "/images/mobile-camera.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "More than one sensor",
        body: [
          "A modern phone may combine a wide, ultrawide, telephoto and depth sensor. Software merges frames, lifts shadows and sharpens edges. That is why two phones with similar megapixel counts can look very different.",
          "Megapixels measure how many dots the sensor can capture, not how good the photograph is. Sensor size, lens quality, stabilisation and the image processor matter more.",
        ],
      },
      {
        heading: "When a camera 'goes bad'",
        body: [
          "Black photos, a camera app that force-closes, or a pink haze often point to a loose connector, a cracked module, or software after a drop.",
          "A cracked rear glass can still let dust onto the lens. We replace glass and modules separately when the phone design allows it.",
        ],
      },
    ],
    takeaway:
      "Clean the lenses before you blame the camera. If the viewfinder is black or the phone reboots in Camera, the module or its cable likely needs service.",
  },
  {
    slug: "microphones",
    title: "Microphones",
    kicker: "Mobile technology",
    lede: "Calls, videos and voice assistants all depend on tiny mics that hate dust, pockets and leftover screen glue.",
    image: "/images/mobile-microphone.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "Several mics, different jobs",
        body: [
          "Phones use a bottom mic for calls, extra mics for noise cancellation, and often a rear mic for video. If people cannot hear you but speaker playback is fine, the bottom mic or its mesh is the first place to look.",
          "A blocked mesh looks like a 'network problem'. We see this after pocket lint, a fall into powder, or a screen replacement where adhesive covered the opening.",
        ],
        bullets: [
          "Do not poke the mic hole with a pin",
          "Test voice notes and phone calls separately — they can use different mics",
          "After a screen change elsewhere, mic failure is a common complaint we correct",
        ],
      },
    ],
    takeaway:
      "If your voice is weak on calls, the mic mesh is more likely than the SIM. A two-minute test tells us which.",
  },
  {
    slug: "displays",
    title: "Displays",
    kicker: "Mobile technology",
    lede: "The part you look at all day — and the part that breaks first when a phone hits tile.",
    image: "/images/mobile-display.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "LCD vs OLED",
        body: [
          "LCD panels use a backlight. OLED pixels emit their own light, which is why blacks look deeper and the panel can be thinner. OLED is also why some phones show image retention if a static nav bar sits for months.",
          "Refresh rate (60 / 90 / 120 Hz) is how often the image updates. Higher feels smoother for scrolling and games, and uses more power if the phone does not drop the rate when idle.",
        ],
      },
      {
        heading: "Glass, digitizer, panel",
        body: [
          "A 'screen' is often three things: outer glass, the touch layer, and the image panel. On many phones they are fused, so a crack means a full display assembly.",
          "Green lines, a white flash at the top, or touch that works only in patches are panel or cable issues — not something a screen protector will fix.",
        ],
      },
    ],
    takeaway:
      "A cracked glass with a perfect image can sometimes wait. Lines, black spots or dead touch should be replaced before the damage creeps.",
  },
  {
    slug: "processors",
    title: "Processors",
    kicker: "Mobile technology",
    lede: "The SoC is the brain: CPU, GPU, ISP and AI engines sharing one piece of silicon and one cooling budget.",
    image: "/images/mobile-processes.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "What the SoC actually is",
        body: [
          "System-on-Chip means the processor, graphics, image signal processor, modem (sometimes) and memory controller sit together. Benchmarks measure peak speed. Daily speed is what remains after heat and background work.",
          "Two phones with the same chipset can feel different because of RAM, storage, cooling and software. That is why we never diagnose 'slowness' as a processor fault on day one.",
        ],
      },
      {
        heading: "When a phone feels slow",
        body: [
          "Almost always storage pressure, worn-out batteries limiting performance, or animation-heavy software — not a dead CPU.",
          "Thermal throttling during games is normal. Sudden shutdowns in the sun with 30% battery left often mean the pack cannot hold voltage, not that the chip failed.",
        ],
      },
    ],
    takeaway:
      "Buy a balanced SoC for your use, not the highest number on a chart. Heat, RAM and storage decide whether that chip can actually finish the job.",
  },
  {
    slug: "speakers",
    title: "Speakers & Audio",
    kicker: "Mobile technology",
    lede: "Stereo speakers, earpieces and Bluetooth — small parts that fail in very specific, fixable ways.",
    image: "/images/mobile-speakers.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "Earpiece vs loudspeaker",
        body: [
          "If you cannot hear calls unless on speaker, the earpiece is blocked or damaged. If videos are quiet but calls are fine, look at the bottom speaker and its grille.",
          "Water and pocket dust are the usual culprits. A distorted rattle after a drop often means the speaker module itself is torn.",
        ],
        bullets: [
          "Bluetooth audio bypasses the phone speakers — useful as a quick test",
          "Do not blow compressed air straight into the grille",
          "A screen replacement can leave the earpiece mesh misaligned; we check this on every display job",
        ],
      },
    ],
    takeaway:
      "Quiet calls and quiet videos are different faults. Tell us which one you have and we can usually isolate it in minutes.",
  },
  {
    slug: "cooling",
    title: "Cooling Technology",
    kicker: "Mobile technology",
    lede: "Phones do not have laptop fans. They move heat through vapour chambers, graphite and the frame — until they cannot.",
    image: "/images/mobile-cooling.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "Why phones get hot",
        body: [
          "The SoC, charging circuit and 5G radio all dump heat into a sealed slab of glass and aluminium. Graphite sheets and vapour chambers spread that heat so no single spot burns your fingers.",
          "A thick case, direct sun, and 65 W charging during a game stack the budget. The phone then slows the chip or pauses charging. That is protection, not a defect.",
        ],
      },
      {
        heading: "When heat is a warning",
        body: [
          "A phone that is too hot to hold while idle, or that shuts down in the shade, needs a look. Common causes: a failing battery, a shorted charging board, or a clogged charging port causing resistance.",
        ],
      },
    ],
    takeaway:
      "Warm under load is normal. Burning at rest is not. Let the phone cool before you charge it again.",
  },
  {
    slug: "connectivity",
    title: "Connectivity",
    kicker: "Mobile technology",
    lede: "Cellular, Wi-Fi, Bluetooth, NFC and GPS share antennas around the frame. A cracked band can drop more than a call.",
    image: "/images/mobile-connectivity.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "Radios in a metal sandwich",
        body: [
          "Antenna lines run through the frame and plastic splits. A cheap metal bumper, a swollen battery spreading the chassis, or a missed antenna flex during a screen job can ruin signal without touching the SIM.",
          "Wi-Fi and mobile data use different radios. If only one fails, we start with settings and then the related antenna path — not a full board swap.",
        ],
        bullets: [
          "Toggle airplane mode before you assume a network outage",
          "Test another SIM if calls fail on one carrier only",
          "GPS that never locks often needs a clear sky once — then we look at software",
        ],
      },
    ],
    takeaway:
      "Signal problems are as often mechanical as they are 'network'. After a drop or a screen change, get the antenna paths checked.",
  },
  {
    slug: "charging",
    title: "Charging Technology",
    kicker: "Mobile technology",
    lede: "Watts, cables and ports — the three things that decide whether your phone charges in 20 minutes or not at all.",
    image: "/images/mobile-charging.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "The path from wall to cell",
        body: [
          "Power travels from the adapter through a cable into the charging port, then through a power-management chip into the battery. A fault anywhere on that path looks like 'battery problem' to the owner.",
          "USB-C ports collect lint. A packed port can charge slowly, refuse fast charge, or stop entirely. We clean them carefully — pins are easy to bend.",
        ],
      },
      {
        heading: "Wireless and fast charge",
        body: [
          "Wireless charging wastes more energy as heat. Fine on a nightstand, poor as your only method if the phone already runs warm.",
          "The phone and the charger negotiate wattage. A 65 W brick on a 25 W phone will still charge at 25 W if the cable is good. The brick is not 'too powerful' — a damaged cable is the usual bottleneck.",
        ],
      },
    ],
    takeaway:
      "Try a known-good cable first. If the port is loose or the phone only charges at a certain angle, the port or board needs service.",
  },
  {
    slug: "sensors",
    title: "Sensors",
    kicker: "Mobile technology",
    lede: "Auto-rotate, proximity, fingerprint and compass — small chips that make the phone feel alive.",
    image: "/images/mobile-sensors.jpg",
    parent: "mobile",
    sections: [
      {
        heading: "The quiet hardware",
        body: [
          "An accelerometer and gyroscope handle rotation and shake. A proximity sensor turns the screen off on calls so your ear does not hang up. Magnetometers help the compass. Ambient light sensors set brightness.",
          "After a cheap screen replacement, auto-brightness and proximity often break because the new glass has no cut-out or the flex was not seated. We test both before we hand the phone back.",
        ],
        bullets: [
          "Calibrate compass outdoors if maps point the wrong way",
          "Fingerprint issues after a drop can be the button, the flex, or software",
          "A screen that stays on during calls is usually proximity, not 'Android'",
        ],
      },
    ],
    takeaway:
      "Sensor faults are highly specific. Describe the exact gesture that fails and we can usually name the part before we open the phone.",
  },
];

export const hubGuides: Guide[] = [
  {
    slug: "laptops",
    title: "Laptops & PCs",
    kicker: "Tech Hub",
    lede: "Practical guidance from the bench: upgrades that help, faults that wait, and the ones that should not.",
    image: "/images/tech-hub-pc.jpg",
    parent: "hub",
    sections: [
      {
        heading: "The upgrades that actually feel faster",
        body: [
          "On most laptops we service, an SSD and a clean Windows install change daily life more than a new processor would. RAM helps if you keep 30 Chrome tabs and WhatsApp Desktop open. A higher-refresh display does nothing for Excel.",
          "Desktops are more flexible: power supply, storage and cooling can be swapped independently. Laptops share heat between the chip and the battery — a clogged fan is a performance bug.",
        ],
        bullets: [
          "HDD to SSD is the highest-value upgrade we do",
          "8 GB is tight in 2026 for Windows; 16 GB is the comfortable floor",
          "Thermal paste and a dust-out every couple of years prevent shutdowns",
        ],
        image: { src: "/images/laptop-repair.jpg", alt: "Laptop internals during service" },
      },
      {
        heading: "Do not ignore these",
        body: [
          "A swollen battery that lifts the trackpad, a charger brick that is too hot to hold, and a machine that only boots when the charger is wiggled. Those are safety issues, not 'it still works'.",
        ],
      },
    ],
    takeaway:
      "Most slow laptops are storage, heat or a tired battery. We will say so before we quote a motherboard.",
  },
  {
    slug: "networking",
    title: "Networking",
    kicker: "Tech Hub",
    lede: "Home Wi-Fi that reaches the back bedroom, and office LANs that do not fall over when someone prints.",
    image: "/images/tech-hub-networking.jpg",
    parent: "hub",
    sections: [
      {
        heading: "Place the router like it matters",
        body: [
          "A router in a TV cabinet behind a steel dish will lose a floor of coverage. Put it high, central, and away from a microwave. Thick RCC walls in Vijayawada apartments block 5 GHz more than people expect — that is physics, not a 'bad Jio connection'.",
          "Mesh beats a cheap repeater. Repeaters halve throughput and create two network names. Mesh keeps one name and hands you off as you walk.",
        ],
      },
      {
        heading: "A short office checklist",
        body: [
          "Separate the guest network. Put printers and CCTV on a known VLAN or at least a reserved IP. Label the cables. Future-you will thank present-you when a camera goes dark at 9 pm.",
        ],
        bullets: [
          "Change the default admin password",
          "Note the fibre ONT and router login before we leave",
          "A 20-metre indoor run is often cheaper than another mesh node",
        ],
      },
    ],
    takeaway:
      "Coverage is placement and a sensible band plan. We survey first, then we sell hardware — not the other way around.",
  },
  {
    slug: "cctv",
    title: "CCTV",
    kicker: "Tech Hub",
    lede: "Cameras only help if they see the right door, record for enough days, and still work in April heat.",
    image: "/images/tech-hub-cctv.jpg",
    parent: "hub",
    sections: [
      {
        heading: "Plan the shot, then pick the camera",
        body: [
          "A 4K turret pointed at the sky is worse than a 2 MP bullet aimed at a face-height gate. We walk the site for entry points, glare from the afternoon sun, and where a ladder can actually reach.",
          "Night vision needs IR distance that matches the driveway, not the brochure. Number-plate capture at a gate is a different camera than a shop-floor overview.",
        ],
      },
      {
        heading: "Storage is the quiet cost",
        body: [
          "Bitrate × cameras × days = hard-disk size. Motion-only recording stretches days. Continuous recording on eight 4K streams fills a disk before the month ends. We size this on paper before installation day.",
        ],
        bullets: [
          "Ask how many days of footage you will actually have",
          "Remote viewing should use the official app, not a random APK",
          "A UPS on the NVR is cheaper than a gap in the recording",
        ],
      },
    ],
    takeaway:
      "A camera job is coverage, recording days and a login you can use. If any of those is missing, the system is incomplete.",
  },
  {
    slug: "web",
    title: "Web Development",
    kicker: "Tech Hub",
    lede: "A business website should load on a phone, show the number, and make WhatsApp one tap away.",
    image: "/images/tech-hub-web.jpg",
    parent: "hub",
    sections: [
      {
        heading: "What a small business site must do",
        body: [
          "Name, what you do, where you are, how to call. Then proof: photos, a few words from customers, and the services you actually offer. Everything else is decoration.",
          "We register the domain, set professional email, and keep the site something you can ask us to change without hiring a full-time developer.",
        ],
      },
      {
        heading: "Avoid these",
        body: [
          "A Facebook page is not a website — you do not own the layout or the URL. A 12 MB homepage will lose customers on Jio 4G. Auto-playing video with sound will lose the rest.",
        ],
      },
    ],
    takeaway:
      "If someone in Gollapudi cannot find your number in five seconds on their phone, the site is not finished.",
  },
  {
    slug: "printing",
    title: "Printing & Designing",
    kicker: "Tech Hub",
    lede: "Cards, banners and invitations that look like they came from a studio — because the file was built for print.",
    image: "/images/tech-hub-printing.jpg",
    parent: "hub",
    sections: [
      {
        heading: "Design for the printer, not the screen",
        body: [
          "RGB looks bright on a phone and dull on paper. We work in print colour, with bleed, and with fonts that will still read from a two-wheeler at 20 metres.",
          "Visiting cards, flex, wedding cards and standees each have a different resolution and material. Send us the content; we will tell you what size actually makes sense for the location.",
        ],
      },
    ],
    takeaway:
      "A sharp print starts with a correct file. Bring the wording and a reference you like — we handle the rest.",
  },
];

export function mobileTopic(slug: string) {
  return mobileTopics.find((t) => t.slug === slug);
}

export function hubGuide(slug: string) {
  return hubGuides.find((t) => t.slug === slug);
}
