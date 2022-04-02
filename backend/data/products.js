const products = [
  {
    name: 'AMD Ryzen 5 5600X 6-core',
    image: '/images/ryzen5.jpg',
    description:
      'AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler' +
      'CPU Model	Ryzen 5' +
      'CPU Speed	4.6 GHz' +
      'CPU Socket	Socket AM4',
    brand: 'AMD',
    category: 'CPU',
    price: 222.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Intel Core i7-12700K Processor 12-core',
    image: '/images/i7.jpg',
    description:
      'Intel Core i7-12700K Desktop Processor 12 (8P+4E) Cores up to 5.0 GHz Unlocked  LGA1700 600 Series Chipset 125W' +
      'CPU Model  Core i7' +
      'CPU Speed  3.6' +
      'CPU Socket	LGA 1700',
    brand: 'Intel',
    category: 'CPU',
    price: 384.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'AMD Ryzen 7 5800X 8-core Processor',
    image: '/images/ryzen7.jpg',
    description:
      'AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor' +
      'CPU Model	AMD Ryzen 7' +
      'CPU Speed	4.7 GHz' +
      'CPU Socket	Socket AM4',
    brand: 'AMD',
    category: 'CPU',
    price: 339.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'ASUS ROG Strix B550-F Gaming (WiFi 6) AMD AM4 Zen 3',
    image: '/images/mobo1.jpg',
    description:
      'ASUS ROG Strix B550-F Gaming (WiFi 6) AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)' +
      'CPU Socket	Socket AM4' +
      'Compatible Devices	Personal Computer' +
      'RAM Memory Technology	DDR4' +
      'Compatible Processors	AMD 3rd Generation Ryzen' +
      'Chipset Type	AMD B550' +
      'Memory Speed	4400 MHz' +
      'Platform	Windows 10' +
      'Series	ROG STRIX B550-F GAMING (WI-FI)' +
      'Memory Storage Capacity	128 GB',
    brand: 'ASUS',
    category: 'MOBO',
    price: 194.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'ASUS Prime Z690-A LGA 1700(Intel 12th)',
    image: '/images/mobo2.jpg',
    description:
      'ASUS Prime Z690-A LGA 1700(Intel 12th) ATX Motherboard (16+1 DrMOS,PCIe 5.0,DDR5,4X M.2, Intel 2.5 Gb LAN,USB 3.2 Gen 2 Front Panel Type-C,Thunderbolt™ 4,Aura Sync RGB Lighting)' +
      'CPU Socket	LG1700' +
      'Compatible Devices	Personal Computer' +
      'RAM Memory Technology	DDR5' +
      'Chipset Type	Intel' +
      'Platform	Windows 11' +
      'Series	PRIME Z690-A' +
      'RAM Memory Maximum Size	128 GB' +
      'Graphics Card Interface	PCI-E' +
      'Memory Slots Available	4',
    brand: 'ASUS',
    category: 'MOBO',
    price: 279.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'GIGABYTE AORUS GeForce RTX 3060 Elite 12GB',
    image: '/images/gpu1.jpg',
    description:
      'GIGABYTE AORUS GeForce RTX 3060 Elite 12G (REV2.0) Graphics Card, 3X WINDFORCE Fans, 12GB 192-bit GDDR6, GV-N3060AORUS E-12GD REV2.0 Video Card' +
      'Graphics Coprocessor	NVIDIA GeForce RTX 306' +
      'Video Output Interface	DisplayPort, HDM' +
      'Chipset Brand	NVIDI' +
      'Graphics RAM Type	GDDR6',
    brand: 'GIGABYTE',
    category: 'GPU',
    price: 813.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'PowerColor Hellhound AMD Radeon RX 6700 XT Gaming Graphics Card with 12GB',
    image: '/images/gpu2.jpg',
    description:
      'PowerColor Hellhound AMD Radeon RX 6700 XT Gaming Graphics Card with 12GB GDDR6 Memory, Powered by AMD RDNA 2, Raytracing, PCI Express 4.0, HDMI 2.1, AMD Infinity Cache' +
      'Graphics Coprocessor	AMD Radeon RX 6700 XT' +
      'Video Output Interface	DisplayPort, HDMI' +
      'Chipset Brand	AMD' +
      'Graphics RAM Type	GDDR6',
    brand: 'POWERCOLOR',
    category: 'GPU',
    price: 649.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 3200MHz',
    image: '/images/ram1.jpg',
    description:
      'Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 3200MHz C16 LED Desktop Memory - Black' +
      'Form Factor	Desktop' +
      'RAM Memory Technology	DDR4' +
      'Computer Memory Size	16 GB' +
      'Memory Speed	3200 MHz',
    brand: 'Corsair',
    category: 'RAM',
    price: 77.99,
    countInStock: 50,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'G.Skill Trident Z RGB Series 32GB (2 x 16GB) DDR4 3600',
    image: '/images/ram2.jpg',
    description:
      'G.Skill Trident Z RGB Series 32GB (2 x 16GB) 288-Pin SDRAM PC4-28800 DDR4 3600 CL18-22-22-42 1.35V Dual Channel Desktop Memory Model F4-3600C18D-32GTZR' +
      'Form Factor	DIMM' +
      'RAM Memory Technology	DDR4' +
      'Computer Memory Size	32 GB' +
      'Memory Speed	3600 MHz',
    brand: 'G.Skill',
    category: 'RAM',
    price: 149.99,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'NZXT H510 Flow',
    image: '/images/case1.jpg',
    description:
      'NZXT H510 Flow - CA-H52FW-01 - Compact ATX Mid-Tower PC Gaming Case - Perforated Front Panel - Tempered Glass Side Panel - Cable Management System - Water-Cooling Ready - White/Black' +
      'Color	White' +
      'Material	Tempered Glass' +
      'Cooling Method	Water, Air' +
      'Motherboard Compatability	ATX' +
      'Item Weight	18 Pounds' +
      'Item Dimensions LxWxH	20.08 x 10.83 x 20 inches' +
      'Case Type	Mid Tower' +
      'Fan Count	2',
    brand: 'NZXT',
    category: 'CASE',
    price: 89.99,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Phanteks Eclipse P360A',
    image: '/images/case1.jpg',
    description:
      'Phanteks (PH-EC360ATG_DWT01) Eclipse P360A Ultra-fine Performance Mesh, Mid-Tower case, Tempered Glass, Digital-RGB Lighting, White' +
      'Color	White' +
      'Material	Tempered Glass' +
      'Cooling Method	Air' +
      'Motherboard Compatability	ATX, micro-ATX, mini-ITX, E-ATX (up to 280mm wide)' +
      'Item Weight	6700 Grams' +
      'Item Dimensions LxWxH	17.91 x 7.87 x 18.31 inches' +
      'Case Type	Mid Tower' +
      'Fan Count	1' +
      'Total USB Ports	2',
    brand: 'Phanteks',
    category: 'CASE',
    price: 89.99,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Thermaltake Smart 500W 80+',
    image: '/images/psu1.jpg',
    description:
      'Thermaltake Smart 500W 80+ White Certified PSU, Continuous Power with 120mm Ultra Quiet Cooling Fan, ATX 12V V2.3/EPS 12V Active PFC Power Supply PS-SPD-0500NPCWUS-W' +
      'Series	TMT-PSSPD0500NPCWUSW' +
      'Connector Type	PCI Express' +
      'Output Wattage	500 Watts' +
      'Form Factor	ATX12V / EPS12V' +
      'Wattage	500' +
      'Cooling Method	Air' +
      'Item Dimensions LxWxH	8.9 x 4 x 7 inches' +
      'Item Weight	3.8 Pounds' +
      'Current Rating	8 Amps',
    brand: 'Thermaltake',
    category: 'PSU',
    price: 34.99,
    countInStock: 41,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'EVGA Supernova 1000 P2 80+ Platinum, 1000W',
    image: '/images/psu2.jpg',
    description:
      'EVGA Supernova 1000 P2 80+ Platinum, 1000W ECO Mode Fully Modular NVIDIA SLI and Crossfire Ready 10 Year Warranty Power Supply 220-P2-1000-XR' +
      'Series	220-P2-1000-XR' +
      'Connector Type	Fan_rpm' +
      'Output Wattage	1000 Watts' +
      'Form Factor	ATX12V / EPS12V' +
      'Wattage	1000 watts' +
      'Cooling Method	Air' +
      'Item Dimensions LxWxH	7.8 x 6 x 3.3 inches' +
      'Item Weight	2 Kilograms' +
      'Power Supply Design	Modular',
    brand: 'EVGA',
    category: 'PSU',
    price: 224.08,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'SAMSUNG 980 SSD 1TB M.2 NVMe',
    image: '/images/ssd.jpg',
    description:
      'SAMSUNG 980 SSD 1TB M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology for Gaming, Heavy Graphics, Full Power Mode, MZ-V8V1T0B/AM' +
      'Digital Storage Capacity	1 TB' +
      'Compatible Devices	PC' +
      'Hard Disk Interface	Solid State' +
      'Series	SAMSUNG 980 SSD' +
      'Specific Uses For Product	Gaming' +
      'Connectivity Technology	SATA' +
      'Hard Disk Size	1 TB' +
      'Read Speed	3500 Megabytes Per Second' +
      'Cache Size	1',
    brand: 'SAMSUNG',
    category: 'STORAGE',
    price: 99.99,
    countInStock: 41,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Seagate BarraCuda 2TB Internal Hard Drive HDD',
    image: '/images/hdd.jpg',
    description:
      'Seagate BarraCuda 2TB Internal Hard Drive HDD, 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache 3.5-Inch' +
      'Digital Storage Capacity	2 TB' +
      'Compatible Devices	Server, Storage System' +
      'Hard Disk Interface	Serial ATA' +
      'Series	BarraCuda' +
      'Specific Uses For Product	Business, personal' +
      'Connectivity Technology	SATA' +
      'Hard Disk Form Factor	3.5 Inches' +
      'Hard Disk Size	2 TB' +
      'Form Factor	3.5-Inch',
    brand: 'SEAGATE',
    category: 'STORAGE',
    price: 46.99,
    countInStock: 21,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
