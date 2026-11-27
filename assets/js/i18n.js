(() => {
  const STORAGE_KEY = "naka-lang";
  const supported = ["en", "id"];

  const dictionaries = {
    en: {
      // Page metadata (applied via document.body.dataset.page)
      "meta.home.title": "NAKA Coffee and Space",
      "meta.home.description":
        "NAKA Coffee and Space, an Indonesian coffee shop shaped by terracotta walls, black steel, concrete, and open-air greenery.",
      "meta.menu.title": "Menu · NAKA Coffee and Space",
      "meta.menu.description":
        "Explore the full menu at NAKA Coffee and Space in Ciracas, East Jakarta: specialty coffee, signature cold brew, non-coffee drinks, snacks, Nusantara dishes, donburi, and ramen.",
      "meta.about.title": "About · NAKA Coffee and Space",
      "meta.about.description":
        "About NAKA Coffee and Space, an Indonesian coffee shop built around terracotta, black steel, concrete, and open-air greenery.",

      // Shared chrome, navigation, and language switcher
      "common.skipToContent": "Skip to content",
      "common.brandTopAria": "NAKA Coffee and Space, back to top",
      "common.brandHomeAria": "NAKA Coffee and Space, home",
      "common.prototypeNote": "Pre-launch prototype. Concept visuals and dummy WhatsApp numbers.",

      "nav.primaryAria": "Primary navigation",
      "nav.mobileAria": "Mobile navigation",
      "nav.siteMenuAria": "Site menu",
      "nav.home": "Home",
      "nav.menu": "Menu",
      "nav.about": "About",
      "nav.ourSpace": "Our Space",
      "nav.location": "Location",
      "nav.contact": "Contact",
      "nav.menuToggle": "Menu",
      "nav.closeMenuAria": "Close menu",
      "nav.drawerLocation": "Ciracas, East Jakarta / Open Daily 09:00 - 23:00",

      "lang.switcherAria": "Language switcher",
      "lang.triggerAria": "Change language",
      "lang.menuTitle": "Choose language",
      "lang.enAria": "Switch to English",
      "lang.idAria": "Switch to Indonesian",

      // Footer and contact
      "footer.brandCopy":
        "An Indonesian coffee shop shaped by terracotta walls, black steel, concrete, and open-air greenery.",
      "footer.followUs": "Follow Us",
      "footer.instagramAria": "Instagram, official link pending",
      "footer.tiktokAria": "TikTok, official link pending",
      "footer.explore": "Explore",
      "footer.contact": "Contact",
      "footer.customerService": "Customer Service",
      "footer.customerServiceHref":
        "https://wa.me/6281200000001?text=Hello%20NAKA%20Coffee%20and%20Space%2C%20I%20would%20like%20to%20reach%20Customer%20Service.",
      "footer.customerServiceAria":
        "Chat with NAKA Customer Service on WhatsApp at +62 812 0000 0001 (dummy number)",
      "footer.bulkOrder": "Bulk & Event Order",
      "footer.bulkOrderHref":
        "https://wa.me/6281200000002?text=Hello%20NAKA%20Coffee%20and%20Space%2C%20I%20would%20like%20to%20inquire%20about%20a%20Bulk%20or%20Event%20Order.",
      "footer.bulkOrderAria":
        "Chat with NAKA Bulk and Event Order on WhatsApp at +62 812 0000 0002 (dummy number)",
      "footer.locationLabel": "Location",
      "footer.locationAddress": "Jl. Pengantin Ali No. 55, Ciracas, East Jakarta",
      "footer.locationAria":
        "Open NAKA Coffee and Space on Google Maps, Jl. Pengantin Ali No. 55, Ciracas, East Jakarta",
      "footer.dummyWaNote": "Dummy WhatsApp numbers for prototype preview.",
      "footer.copyright": "\u00A9 2026 NAKA Coffee and Space.",

      // Pending link dialog
      "dialog.pendingTitle": "Official link pending",
      "dialog.close": "Close",
      "dialog.instagram.title": "Instagram link pending",
      "dialog.instagram.body":
        "NAKA's official Instagram profile URL has not been supplied yet. This button will link directly to Instagram once confirmed.",
      "dialog.tiktok.title": "TikTok link pending",
      "dialog.tiktok.body":
        "NAKA's official TikTok profile URL has not been supplied yet. This button will link directly to TikTok once confirmed.",

      // Home: Hero
      "home.hero.title": "NAKA Coffee and Space",
      "home.hero.imgAlt":
        "Concept architectural view of NAKA Coffee and Space showing the concrete bar, terracotta wall, black steel framing, and open-air courtyard greenery.",

      // Home: Our Space & Lightbox
      "home.space.title": "Our Space",
      "home.space.subtitle": "Inside the bar and out in the courtyard.",
      "home.space.filterAria": "Filter space photos",
      "home.space.filterAll": "All",
      "home.space.filterIndoor": "Indoor",
      "home.space.filterOutdoor": "Outdoor",
      "home.space.zoneIndoor": "Indoor",
      "home.space.zoneOutdoor": "Outdoor",
      "home.space.shot.coffeeBar.name": "Coffee Bar",
      "home.space.shot.coffeeBar.aria": "Inspect Coffee Bar photo",
      "home.space.shot.coffeeBar.alt":
        "Concept view of the poured concrete coffee bar counter, matte black steel shelving, and terracotta wall.",
      "home.space.shot.indoorSeating.name": "Indoor Seating",
      "home.space.shot.indoorSeating.aria": "Inspect Indoor Seating photo",
      "home.space.shot.indoorSeating.alt":
        "Concept view of indoor seating along a concrete bench beside tall black steel windows looking out to greenery.",
      "home.space.shot.courtyard.name": "Terracotta Courtyard",
      "home.space.shot.courtyard.aria": "Inspect Terracotta Courtyard photo",
      "home.space.shot.courtyard.alt":
        "Concept view of the open-air terracotta courtyard with black steel pergola, concrete paving, and tropical trees.",
      "home.space.shot.pavilion.name": "Communal Pavilion",
      "home.space.shot.pavilion.aria": "Inspect Communal Pavilion photo",
      "home.space.shot.pavilion.alt":
        "Concept view of a long timber communal table under a black steel truss roof surrounded by greenery.",
      "home.space.shot.garden.name": "Garden Corner",
      "home.space.shot.garden.aria": "Inspect Garden Corner photo",
      "home.space.shot.garden.alt":
        "Concept view of a quiet two-seat garden corner beside concrete planters, tropical leaves, and a terracotta wall.",
      "home.space.note":
        "Concept visuals reflecting NAKA's terracotta, black steel, concrete, and planting palette. Official photography pending.",
      "home.lightbox.closeAria": "Close photo view",
      "home.lightbox.note": "Concept visual pending official NAKA photography.",
      "home.lightbox.prev": "Previous",
      "home.lightbox.next": "Next",

      // Home: Menu Preview
      "home.menuPreview.title": "On the Menu",
      "home.menuPreview.subtitleHtml":
        'Coffee, signature cold brew, snacks, Nusantara classics, donburi, and ramen served daily from <span class="tabular-nums">09:00</span> to <span class="tabular-nums">23:00</span>.',
      "home.menuPreview.cta": "Explore Full Menu",
      "home.menuPreview.coffee.aria": "Browse Coffee and Cold Brew on the full menu",
      "home.menuPreview.coffee.alt":
        "Eight NAKA signature iced coffee drinks arranged on stone tiers.",
      "home.menuPreview.coffee.title": "Coffee & Cold Brew",
      "home.menuPreview.coffee.link": "Browse Coffee & Drinks",
      "home.menuPreview.snacks.aria": "Browse Snacks and Sharing on the full menu",
      "home.menuPreview.snacks.alt":
        "Four NAKA snack bowls and trays including corn ribs, yakitori, tori kawa, and sharing platter.",
      "home.menuPreview.snacks.title": "Snacks & Sharing",
      "home.menuPreview.snacks.link": "Browse All Snacks",
      "home.menuPreview.kitchen.aria": "Browse Warm Kitchen dishes on the full menu",
      "home.menuPreview.kitchen.alt":
        "Three NAKA ramen bowls served hot with toppings and rich broth.",
      "home.menuPreview.kitchen.title": "Warm Kitchen",
      "home.menuPreview.kitchen.link": "Browse Kitchen Bowls",

      // Home: Plan Your Visit & Outlet Facilities
      "home.visit.title": "Plan Your Visit",
      "home.visit.text":
        "One dedicated outlet in Ciracas designed for morning coffee, focused work sessions, and unhurried evening meals with indoor comfort and open-air courtyard seating.",
      "home.visit.hoursLabel": "Opening Hours",
      "home.visit.hoursValue": "Open Daily, 09:00 - 23:00",
      "home.visit.outletLabel": "Outlet",
      "home.visit.outletValue": "Single Location · Ciracas, East Jakarta",
      "home.visit.mapCta": "See Location & Map",
      "home.visit.waCta": "Ask on WhatsApp",
      "home.visit.facilitiesTitle": "Outlet Facilities",
      "home.visit.facility.seating.title": "Indoor AC & Open-Air Courtyard",
      "home.visit.facility.seating.desc":
        "Air-conditioned coffee bar inside paired with shaded outdoor courtyard tables.",
      "home.visit.facility.wifi.title": "Free Wi-Fi & Power Outlets",
      "home.visit.facility.wifi.desc":
        "Complimentary Wi-Fi and accessible power outlets suited for remote work and study.",
      "home.visit.facility.smoking.title": "Smoking & Non-Smoking Areas",
      "home.visit.facility.smoking.desc":
        "Dedicated non-smoking indoor room with open-air smoking seating outside.",
      "home.visit.facility.mushola.title": "Prayer Room (Mushola)",
      "home.visit.facility.mushola.desc":
        "Quiet on-site mushola available for guests throughout opening hours.",
      "home.visit.facility.parking.title": "Parking Area",
      "home.visit.facility.parking.desc":
        "On-site parking available for both motorcycles and cars.",

      // Home: Find Us
      "home.location.title": "Find Us",
      "home.location.areaLabel": "Area",
      "home.location.areaValue": "Ciracas, East Jakarta",
      "home.location.hoursLabel": "Open Hours",
      "home.location.hoursValue": "Daily, 09:00 - 23:00",
      "home.location.addressLabel": "Address",
      "home.location.addressValue":
        "Jl. Pengantin Ali No. 55, RT.4/RW.6, Ciracas, East Jakarta, DKI Jakarta 13740",
      "home.location.directionsLabel": "Directions",
      "home.location.directionsValue": "NAKA Coffee & Space on Google Maps",
      "home.location.cta": "Get Directions",
      "home.location.mapTitle":
        "Google Maps location of NAKA Coffee and Space at Jl. Pengantin Ali No. 55, Ciracas, East Jakarta",

      // About page
      "about.hero.imgAlt":
        "Concept view of NAKA's open-air terracotta courtyard with black steel pergola, poured concrete paving, and tropical trees.",
      "about.hero.title": "Discover NAKA",
      "about.hero.caption": "Concept photography pending official NAKA shoot.",
      "about.hero.lead": "A coffee space shaped by open air, black steel, and warm earth.",
      "about.hero.text":
        "NAKA Coffee and Space is an Indonesian coffee shop centered on physical calm. The architecture pairs fired terracotta walls, matte black structural steel, poured concrete, and tropical planting around unhurried indoor and outdoor seating.",
      "about.hero.note":
        "Official business story and brand copy will replace this introduction once approved by NAKA.",
      "about.hero.ctaMenu": "Browse Our Menu",
      "about.hero.ctaSpace": "Explore Our Space",
      "about.hero.ctaLocation": "Find Our Location",
      "about.materials.title": "Material Character",
      "about.materials.lead":
        "Four grounded surfaces define the room before a single cup is served.",
      "about.materials.text":
        "Instead of decorative ornament, NAKA relies on honest building textures that age naturally under tropical sun and rain: warm clay plaster, dark steel framing, grey concrete paving, and surrounding trees.",
      "about.materials.terracotta.name": "Terracotta",
      "about.materials.terracotta.note": "Exterior & feature wall",
      "about.materials.steel.name": "Black Steel",
      "about.materials.steel.note": "Structural frame & canopy",
      "about.materials.concrete.name": "Concrete",
      "about.materials.concrete.note": "Floor, bar & paving",
      "about.materials.greenery.name": "Greenery",
      "about.materials.greenery.note": "Courtyard planting",
      "about.courtyard.imgAlt":
        "Concept view of NAKA's open-air communal pavilion with a long timber table under a black steel roof surrounded by greenery.",
      "about.courtyard.caption": "Communal pavilion concept visual.",
      "about.courtyard.title": "Designed to linger",
      "about.courtyard.text":
        "Whether you stop by the concrete espresso bar or settle under the courtyard pergola, every zone keeps sightlines open toward daylight and greenery.",
      "about.courtyard.ctaSpace": "See All Space Views",
      "about.courtyard.ctaHome": "Back to Home",

      // Menu page: Rail & shared tags
      "menu.rail.navAria": "Menu navigation",
      "menu.rail.title": "Menu",
      "menu.rail.lead": "Good food, fine drinks, and everyday comfort.",
      "menu.rail.hours": "Open 09:00 - 23:00",
      "menu.rail.prices": "Prices in K IDR",
      "menu.rail.tabsAria": "Menu categories",
      "menu.rail.bookLink": "Open Menu Book",

      "menu.temp.hotIced": "(Hot / Iced)",
      "menu.temp.hot": "(Hot)",

      "menu.tab.coffee": "Coffee",
      "menu.tab.coldBrew": "Cold Brew",
      "menu.tab.signature": "Signature",
      "menu.tab.moreDrinks": "More Drinks",
      "menu.tab.snacks": "Snacks",
      "menu.tab.nusantara": "Nusantara",
      "menu.tab.donburi": "Donburi",
      "menu.tab.ramen": "Ramen",

      // Menu: 1. Coffee
      "menu.coffee.imgAlt": "Overhead view of a NAKA latte cup with rosetta latte art.",
      "menu.coffee.title": "Coffee",
      "menu.coffee.desc":
        "Filter pours, espresso classics, and velvety milk coffee brewed to order at the bar.",
      "menu.coffee.count": "6 items + 4 add-ons",
      "menu.coffee.group.filter.title": "Filter Coffee",
      "menu.coffee.group.filter.note":
        "Single-origin pour-over highlighting the nuance of black coffee.",
      "menu.coffee.group.black.title": "Black",
      "menu.coffee.group.black.note": "Fragrant fruit aroma, bold body, and a sweet finish.",
      "menu.coffee.group.milk.title": "Milk Based",
      "menu.coffee.group.milk.note":
        "Medium body with nutty cocoa notes and natural sweetness.",
      "menu.coffee.item.lokalBeans.desc": "Rotating Indonesian single-origin filter brew.",
      "menu.coffee.item.imporBeans.desc": "Rotating international single-origin filter brew.",
      "menu.coffee.item.espresso.desc":
        "Concentrated shot with bold body and sweet aftertaste.",
      "menu.coffee.item.blackCoffee.nameHtml":
        'Black Coffee <span class="menu-item__temp">(Hot / Iced)</span>',
      "menu.coffee.item.blackCoffee.desc": "Clean black coffee served hot or over ice.",
      "menu.coffee.item.latte.nameHtml":
        'Latte <span class="menu-item__temp">(Hot / Iced)</span>',
      "menu.coffee.item.latte.desc": "Espresso balanced with silky steamed or chilled milk.",
      "menu.coffee.item.cappuccino.nameHtml":
        'Cappuccino <span class="menu-item__temp">(Hot)</span>',
      "menu.coffee.item.cappuccino.desc": "Espresso layered with dense, velvety microfoam.",
      "menu.coffee.addons.title": "Add-Ons",
      "menu.coffee.addons.oatMilk": "Oat Milk",
      "menu.coffee.addons.extraEspresso": "Extra Espresso",
      "menu.coffee.addons.syrup": "Syrup",
      "menu.coffee.addons.coffeeJelly": "Coffee Jelly",

      // Menu: 2. Cold Brew
      "menu.coldBrew.imgAlt": "Four NAKA signature iced cold brew cups with orange lids.",
      "menu.coldBrew.title": "Cold Brew",
      "menu.coldBrew.desc":
        "Signature iced cold brew built on NAKA's Continental Blend and house-made sauces.",
      "menu.coldBrew.count": "7 items",
      "menu.coldBrew.item.monday.desc":
        "Cold brew with bright citrusy orange and smooth cream.",
      "menu.coldBrew.item.hikari.desc": "Cold brew layered with tropical, refreshing mango.",
      "menu.coldBrew.item.kaze.desc": "Fruity cold brew infused with peach and lychee.",
      "menu.coldBrew.item.sunday.desc":
        "Sparkling cold brew with tonic water and smooth vanilla.",
      "menu.coldBrew.item.blackIchigo.desc":
        "Cold brew paired with strawberry and honey for a fruity finish.",
      "menu.coldBrew.item.pinkMonday.desc": "Cold brew topped with creamy strawberry cream.",
      "menu.coldBrew.item.tansa.desc":
        "Crisp, refreshing cold brew brightened with soda water.",

      // Menu: 3. Signature Coffee
      "menu.signature.imgAlt":
        "Eight NAKA signature iced coffee drinks arranged on stone tiers.",
      "menu.signature.title": "Signature Coffee",
      "menu.signature.desc":
        "House-crafted milk coffee pairing NAKA espresso with palm sugar, pandan, honey, and aromatic infusions.",
      "menu.signature.count": "11 items",
      "menu.signature.item.nakaSignature.desc":
        "NAKA's house blend of espresso, milk, and aromatic palm sugar.",
      "menu.signature.item.naka.desc": "Everyday creamy palm sugar iced milk coffee.",
      "menu.signature.item.nakaDouble.desc":
        "Bold palm sugar milk coffee pulled with a double shot of espresso.",
      "menu.signature.item.nakaHoney.desc":
        "Espresso, milk, and honey with a smooth natural sweetness.",
      "menu.signature.item.nakaDorian.desc":
        "Palm sugar milk coffee finished with creamy durian notes.",
      "menu.signature.item.avocadoCoffee.desc":
        "Velvety blended avocado layered with bold espresso.",
      "menu.signature.item.pandanLatte.nameHtml":
        'Pandan Latte <span class="menu-item__temp">(Hot / Iced)</span>',
      "menu.signature.item.pandanLatte.desc": "Espresso and milk infused with fragrant pandan.",
      "menu.signature.item.caramelLatte.nameHtml":
        'Caramel Latte <span class="menu-item__temp">(Hot / Iced)</span>',
      "menu.signature.item.caramelLatte.desc": "Espresso and milk finished with rich caramel.",
      "menu.signature.item.vanillaLatte.nameHtml":
        'Vanilla Latte <span class="menu-item__temp">(Hot / Iced)</span>',
      "menu.signature.item.vanillaLatte.desc":
        "Espresso and milk with soft, sweet vanilla aroma.",
      "menu.signature.item.daichi.desc":
        "Palm sugar milk coffee with aromatic pandan and coconut.",
      "menu.signature.item.yoru.desc":
        "Smooth, lightly sweet milk coffee with a subtle kahlua-style note.",

      // Menu: 4. More Drinks
      "menu.moreDrinks.imgAlt": "Three NAKA non-coffee drinks served on wooden saucers.",
      "menu.moreDrinks.title": "More Drinks",
      "menu.moreDrinks.desc":
        "Non-coffee lattes, fruit blends, floral black teas, sparkling refreshers, and warming ginger infusions.",
      "menu.moreDrinks.count": "15 items",
      "menu.moreDrinks.item.matcha.nameHtml":
        'Matcha <span class="menu-item__temp">(Hot / Iced)</span>',
      "menu.moreDrinks.item.matcha.desc": "Earthy matcha whisked with creamy milk.",
      "menu.moreDrinks.item.taro.nameHtml":
        'Taro <span class="menu-item__temp">(Hot / Iced)</span>',
      "menu.moreDrinks.item.taro.desc": "Sweet, creamy taro milk latte.",
      "menu.moreDrinks.item.chocolate.nameHtml":
        'Chocolate <span class="menu-item__temp">(Hot / Iced)</span>',
      "menu.moreDrinks.item.chocolate.desc": "Rich, comforting cocoa and milk.",
      "menu.moreDrinks.item.yoruChocolate.desc":
        "Indulgent chocolate milk with a smooth kahlua-style touch.",
      "menu.moreDrinks.item.mango.desc": "Fresh, juicy tropical mango blend.",
      "menu.moreDrinks.item.ichigo.desc": "Fruity, creamy, and refreshing strawberry blend.",
      "menu.moreDrinks.item.berry.desc": "Bright rosella and strawberry refresher.",
      "menu.moreDrinks.item.sora.desc":
        "Peach, lychee, calamansi, and rosella blended in one cup.",
      "menu.moreDrinks.item.kaori.desc":
        "Floral black tea with sakura, peach, mojito, and fresh mint.",
      "menu.moreDrinks.item.hana.desc":
        "Sparkling rosella, peach, and lychee over soda water.",
      "menu.moreDrinks.item.rashi.desc": "Smooth fruity black tea with peach and lychee.",
      "menu.moreDrinks.item.remon.desc": "Clean, citrusy black tea with fresh lemon.",
      "menu.moreDrinks.item.raichi.desc": "Light, refreshing black tea with sweet lychee.",
      "menu.moreDrinks.item.shogahani.nameHtml":
        'Shogahani <span class="menu-item__temp">(Hot)</span>',
      "menu.moreDrinks.item.shogahani.desc": "Warm milk steeped with honey and fresh ginger.",
      "menu.moreDrinks.item.shoga.nameHtml":
        'Shoga <span class="menu-item__temp">(Hot)</span>',
      "menu.moreDrinks.item.shoga.desc":
        "Traditional warming spiced ginger infusion (wedang jahe).",

      // Menu: 5. Snacks
      "menu.snacks.img1Alt":
        "Four NAKA snack bowls and trays including corn ribs, yakitori, tori kawa, and sharing platter.",
      "menu.snacks.img2Alt":
        "NAKA paper tray of takoyaki topped with mayonnaise, sweet sauce, and katsuobushi.",
      "menu.snacks.title": "Snacks",
      "menu.snacks.desc":
        "Savory bites, crispy sharing trays, and sweet Indonesian cafe staples made for lingering at the table.",
      "menu.snacks.count": "14 items",
      "menu.snacks.item.nakaPlatter.desc":
        "Sharing tray of crispy onion rings, savory sausage, crispy chicken skin, and french fries.",
      "menu.snacks.item.cornRibs.desc":
        "Fried sweet corn ribs tossed in sweet, spicy, and savory seasoning.",
      "menu.snacks.item.toriKawa.desc": "Crispy, savory fried chicken skin.",
      "menu.snacks.item.yakitori.desc": "Skewered chicken glazed in savory teriyaki marinade.",
      "menu.snacks.item.takoyaki.desc":
        "Japanese savory bites topped with mayonnaise, sweet sauce, and katsuobushi.",
      "menu.snacks.item.karageBites.desc":
        "Crispy, juicy fried chicken bites served with fresh coleslaw.",
      "menu.snacks.item.tahuCabeGaram.desc":
        "Golden fried tofu topped with crispy garlic and chili seasoning.",
      "menu.snacks.item.onionRings.desc":
        "Crispy battered onion rings served with chili dipping sauce.",
      "menu.snacks.item.cheeseFries.desc":
        "French fries topped with warm cheese sauce and diced smoked beef.",
      "menu.snacks.item.frenchFries.desc":
        "Crispy golden fries dusted with savory seaweed seasoning.",
      "menu.snacks.item.cireng.desc":
        "Crispy fried tapioca bites served with tangy rujak dipping sauce.",
      "menu.snacks.item.singkong.desc":
        "Crisp fried cassava topped with grated cheese and condensed milk.",
      "menu.snacks.item.pisangGoreng.desc":
        "Crispy battered sweet banana finished with chocolate, cheese, and condensed milk.",
      "menu.snacks.item.rotiBakar.desc":
        "Toasted bread with your choice of chocolate, cheese, tiramisu, and condensed milk.",

      // Menu: 6. Nusantara
      "menu.nusantara.imgAlt": "Overhead view of NAKA Nasi Goreng and Kwetiaw bowls.",
      "menu.nusantara.title": "Nusantara",
      "menu.nusantara.desc":
        "Comforting Indonesian wok-fried rice, noodles, and spiced chicken served with a sunny-side-up egg.",
      "menu.nusantara.count": "5 items",
      "menu.nusantara.item.nasgorKampung.desc":
        "Classic Indonesian chicken fried rice topped with a sunny-side-up egg.",
      "menu.nusantara.item.nasgorOriental.desc":
        "Asian-style savory fried rice topped with a sunny-side-up or scrambled egg.",
      "menu.nusantara.item.kwetiawNaka.desc":
        "Stir-fried flat rice noodles with chicken, vegetables, and a sunny-side-up egg.",
      "menu.nusantara.item.mieGorengNaka.desc":
        "Wok-fried egg noodles with chicken, vegetables, and a sunny-side-up egg.",
      "menu.nusantara.item.chiliPadiRice.desc":
        "Coriander-spiced fried chicken with fiery chili padi sambal and a sunny-side-up egg.",

      // Menu: 7. Donburi
      "menu.donburi.imgAlt":
        "Overhead view of four NAKA donburi rice bowls topped with beef and crispy chicken.",
      "menu.donburi.title": "Donburi",
      "menu.donburi.desc":
        "Warm Japanese-inspired rice bowls topped with sauteed beef or crispy chicken.",
      "menu.donburi.count": "5 items",
      "menu.donburi.item.kuroGyudon.desc":
        "Sauteed sliced beef in blackpepper sauce over rice with soft scrambled egg.",
      "menu.donburi.item.tamaGyudon.desc":
        "Sauteed sliced beef in sweet teriyaki glaze over rice with soft scrambled egg.",
      "menu.donburi.item.siNanbanRice.desc":
        "Sweet-glazed crispy chicken karaage over rice finished with creamy tartar sauce.",
      "menu.donburi.item.moKarageRice.desc":
        "Crispy chicken karaage over rice with mayonnaise and fresh coleslaw.",
      "menu.donburi.item.katsuCurry.desc":
        "Crispy chicken katsu over rice with savory Japanese curry sauce and vegetables.",

      // Menu: 8. Ramen
      "menu.ramen.imgAlt":
        "Three NAKA ramen bowls served hot with toppings and rich broth.",
      "menu.ramen.title": "Ramen",
      "menu.ramen.desc":
        "House-crafted broth and dry ramen bowls served hot from the kitchen.",
      "menu.ramen.count": "5 items",
      "menu.ramen.item.toriRamen.desc": "Ramen in a rich, comforting chicken broth.",
      "menu.ramen.item.spicyToriRamen.desc": "Ramen in a warming, spicy chicken broth.",
      "menu.ramen.item.hishioRamen.desc": "Ramen in a clean, savory shoyu broth.",
      "menu.ramen.item.dryAburaRamen.desc":
        "Brothless ramen tossed in savory shoyu oil seasoning.",
      "menu.ramen.item.dryCurryRamen.desc":
        "Brothless ramen coated in aromatic curry seasoning."
    },

    id: {
      // Page metadata (applied via document.body.dataset.page)
      "meta.home.title": "NAKA Coffee and Space",
      "meta.home.description":
        "NAKA Coffee and Space, kedai kopi Indonesia dengan dinding terakota, baja hitam, beton, dan ruang terbuka hijau.",
      "meta.menu.title": "Menu · NAKA Coffee and Space",
      "meta.menu.description":
        "Lihat menu lengkap NAKA Coffee and Space di Ciracas, Jakarta Timur: kopi, cold brew signature, minuman non-kopi, camilan, hidangan Nusantara, donburi, dan ramen.",
      "meta.about.title": "Tentang · NAKA Coffee and Space",
      "meta.about.description":
        "Tentang NAKA Coffee and Space, kedai kopi Indonesia yang dibangun dari terakota, baja hitam, beton, dan ruang terbuka hijau.",

      // Shared chrome, navigation, and language switcher
      "common.skipToContent": "Langsung ke konten",
      "common.brandTopAria": "NAKA Coffee and Space, kembali ke atas",
      "common.brandHomeAria": "NAKA Coffee and Space, beranda",
      "common.prototypeNote":
        "Purwarupa pra-peluncuran. Visual konsep dan nomor WhatsApp simulasi.",

      "nav.primaryAria": "Navigasi utama",
      "nav.mobileAria": "Navigasi seluler",
      "nav.siteMenuAria": "Menu situs",
      "nav.home": "Beranda",
      "nav.menu": "Menu",
      "nav.about": "Tentang",
      "nav.ourSpace": "Ruang Kami",
      "nav.location": "Lokasi",
      "nav.contact": "Kontak",
      "nav.menuToggle": "Menu",
      "nav.closeMenuAria": "Tutup menu",
      "nav.drawerLocation": "Ciracas, Jakarta Timur / Buka Setiap Hari 09:00 - 23:00",

      "lang.switcherAria": "Pilihan bahasa",
      "lang.triggerAria": "Ubah bahasa",
      "lang.menuTitle": "Pilih bahasa",
      "lang.enAria": "Ganti ke bahasa Inggris",
      "lang.idAria": "Ganti ke bahasa Indonesia",

      // Footer and contact
      "footer.brandCopy":
        "Kedai kopi Indonesia dengan dinding terakota, baja hitam, beton, dan ruang terbuka hijau.",
      "footer.followUs": "Ikuti Kami",
      "footer.instagramAria": "Instagram, tautan resmi menyusul",
      "footer.tiktokAria": "TikTok, tautan resmi menyusul",
      "footer.explore": "Jelajahi",
      "footer.contact": "Kontak",
      "footer.customerService": "Layanan Pelanggan",
      "footer.customerServiceHref":
        "https://wa.me/6281200000001?text=Halo%20NAKA%20Coffee%20and%20Space%2C%20saya%20ingin%20menghubungi%20Layanan%20Pelanggan.",
      "footer.customerServiceAria":
        "Hubungi Layanan Pelanggan NAKA lewat WhatsApp di +62 812 0000 0001 (nomor simulasi)",
      "footer.bulkOrder": "Pesanan Besar & Acara",
      "footer.bulkOrderHref":
        "https://wa.me/6281200000002?text=Halo%20NAKA%20Coffee%20and%20Space%2C%20saya%20ingin%20bertanya%20mengenai%20Pesanan%20Besar%20atau%20Acara.",
      "footer.bulkOrderAria":
        "Hubungi Pesanan Besar dan Acara NAKA lewat WhatsApp di +62 812 0000 0002 (nomor simulasi)",
      "footer.locationLabel": "Lokasi",
      "footer.locationAddress": "Jl. Pengantin Ali No. 55, Ciracas, Jakarta Timur",
      "footer.locationAria":
        "Buka NAKA Coffee and Space di Google Maps, Jl. Pengantin Ali No. 55, Ciracas, Jakarta Timur",
      "footer.dummyWaNote": "Nomor WhatsApp simulasi untuk pratinjau purwarupa.",
      "footer.copyright": "\u00A9 2026 NAKA Coffee and Space.",

      // Pending link dialog
      "dialog.pendingTitle": "Tautan resmi menyusul",
      "dialog.close": "Tutup",
      "dialog.instagram.title": "Tautan Instagram menyusul",
      "dialog.instagram.body":
        "Tautan profil Instagram resmi NAKA belum tersedia. Tombol ini akan langsung mengarah ke Instagram setelah dikonfirmasi.",
      "dialog.tiktok.title": "Tautan TikTok menyusul",
      "dialog.tiktok.body":
        "Tautan profil TikTok resmi NAKA belum tersedia. Tombol ini akan langsung mengarah ke TikTok setelah dikonfirmasi.",

      // Home: Hero
      "home.hero.title": "NAKA Coffee and Space",
      "home.hero.imgAlt":
        "Visual konsep arsitektur NAKA Coffee and Space yang menampilkan bar beton, dinding terakota, rangka baja hitam, dan halaman terbuka hijau.",

      // Home: Our Space & Lightbox
      "home.space.title": "Ruang Kami",
      "home.space.subtitle": "Di dalam bar kopi hingga ke halaman terbuka.",
      "home.space.filterAria": "Saring foto ruang",
      "home.space.filterAll": "Semua",
      "home.space.filterIndoor": "Dalam Ruang",
      "home.space.filterOutdoor": "Luar Ruang",
      "home.space.zoneIndoor": "Dalam Ruang",
      "home.space.zoneOutdoor": "Luar Ruang",
      "home.space.shot.coffeeBar.name": "Bar Kopi",
      "home.space.shot.coffeeBar.aria": "Lihat foto Bar Kopi",
      "home.space.shot.coffeeBar.alt":
        "Visual konsep meja bar kopi beton cor, rak baja hitam doff, dan dinding terakota.",
      "home.space.shot.indoorSeating.name": "Area Duduk Dalam",
      "home.space.shot.indoorSeating.aria": "Lihat foto Area Duduk Dalam",
      "home.space.shot.indoorSeating.alt":
        "Visual konsep area duduk dalam sepanjang bangku beton di samping jendela baja hitam tinggi menghadap pepohonan.",
      "home.space.shot.courtyard.name": "Halaman Terakota",
      "home.space.shot.courtyard.aria": "Lihat foto Halaman Terakota",
      "home.space.shot.courtyard.alt":
        "Visual konsep halaman terakota terbuka dengan pergola baja hitam, lantai beton, dan pohon tropis.",
      "home.space.shot.pavilion.name": "Paviliun Komunal",
      "home.space.shot.pavilion.aria": "Lihat foto Paviliun Komunal",
      "home.space.shot.pavilion.alt":
        "Visual konsep meja komunal kayu panjang di bawah atap rangka baja hitam yang dikelilingi tanaman hijau.",
      "home.space.shot.garden.name": "Sudut Taman",
      "home.space.shot.garden.aria": "Lihat foto Sudut Taman",
      "home.space.shot.garden.alt":
        "Visual konsep sudut taman tenang untuk dua orang di samping pot beton, dedaunan tropis, dan dinding terakota.",
      "home.space.note":
        "Visual konsep yang menampilkan palet terakota, baja hitam, beton, dan tanaman NAKA. Foto resmi menyusul.",
      "home.lightbox.closeAria": "Tutup tampilan foto",
      "home.lightbox.note": "Visual konsep, foto resmi NAKA menyusul.",
      "home.lightbox.prev": "Sebelumnya",
      "home.lightbox.next": "Berikutnya",

      // Home: Menu Preview
      "home.menuPreview.title": "Pilihan Menu",
      "home.menuPreview.subtitleHtml":
        'Kopi, cold brew signature, camilan, hidangan Nusantara, donburi, dan ramen disajikan setiap hari pukul <span class="tabular-nums">09:00</span> hingga <span class="tabular-nums">23:00</span>.',
      "home.menuPreview.cta": "Lihat Semua Menu",
      "home.menuPreview.coffee.aria": "Lihat Kopi dan Cold Brew di menu lengkap",
      "home.menuPreview.coffee.alt":
        "Delapan minuman kopi dingin signature NAKA tersusun di undakan batu.",
      "home.menuPreview.coffee.title": "Kopi & Cold Brew",
      "home.menuPreview.coffee.link": "Lihat Kopi & Minuman",
      "home.menuPreview.snacks.aria": "Lihat Camilan dan Sajian Berbagi di menu lengkap",
      "home.menuPreview.snacks.alt":
        "Empat sajian camilan NAKA berisi corn ribs, yakitori, tori kawa, dan platter berbagi.",
      "home.menuPreview.snacks.title": "Camilan & Berbagi",
      "home.menuPreview.snacks.link": "Lihat Semua Camilan",
      "home.menuPreview.kitchen.aria": "Lihat hidangan Dapur Hangat di menu lengkap",
      "home.menuPreview.kitchen.alt":
        "Tiga mangkuk ramen NAKA disajikan hangat dengan topping dan kuah gurih.",
      "home.menuPreview.kitchen.title": "Dapur Hangat",
      "home.menuPreview.kitchen.link": "Lihat Menu Makanan",

      // Home: Plan Your Visit & Outlet Facilities
      "home.visit.title": "Rencanakan Kunjungan",
      "home.visit.text":
        "Satu gerai di Ciracas untuk kopi pagi, kerja fokus, hingga makan malam santai dengan ruang dalam ber-AC dan halaman terbuka.",
      "home.visit.hoursLabel": "Jam Buka",
      "home.visit.hoursValue": "Buka Setiap Hari, 09:00 - 23:00",
      "home.visit.outletLabel": "Gerai",
      "home.visit.outletValue": "Satu Lokasi · Ciracas, Jakarta Timur",
      "home.visit.mapCta": "Lihat Lokasi & Peta",
      "home.visit.waCta": "Tanya via WhatsApp",
      "home.visit.facilitiesTitle": "Fasilitas Gerai",
      "home.visit.facility.seating.title": "Ruang Dalam AC & Halaman Terbuka",
      "home.visit.facility.seating.desc":
        "Bar kopi ber-AC di dalam ruang, dipadukan meja halaman luar yang teduh.",
      "home.visit.facility.wifi.title": "Wi-Fi Gratis & Stop Kontak",
      "home.visit.facility.wifi.desc":
        "Wi-Fi gratis dan stop kontak yang mudah dijangkau untuk bekerja maupun belajar.",
      "home.visit.facility.smoking.title": "Area Merokok & Bebas Asap Rokok",
      "home.visit.facility.smoking.desc":
        "Ruang dalam khusus bebas asap rokok dengan area duduk merokok di ruang terbuka.",
      "home.visit.facility.mushola.title": "Mushola",
      "home.visit.facility.mushola.desc":
        "Mushola tenang tersedia di lokasi bagi tamu selama jam operasional.",
      "home.visit.facility.parking.title": "Area Parkir",
      "home.visit.facility.parking.desc":
        "Area parkir tersedia di lokasi untuk sepeda motor dan mobil.",

      // Home: Find Us
      "home.location.title": "Temukan Kami",
      "home.location.areaLabel": "Kawasan",
      "home.location.areaValue": "Ciracas, Jakarta Timur",
      "home.location.hoursLabel": "Jam Operasional",
      "home.location.hoursValue": "Setiap Hari, 09:00 - 23:00",
      "home.location.addressLabel": "Alamat",
      "home.location.addressValue":
        "Jl. Pengantin Ali No. 55, RT.4/RW.6, Ciracas, Jakarta Timur, DKI Jakarta 13740",
      "home.location.directionsLabel": "Penunjuk Arah",
      "home.location.directionsValue": "NAKA Coffee & Space di Google Maps",
      "home.location.cta": "Petunjuk Arah",
      "home.location.mapTitle":
        "Lokasi Google Maps NAKA Coffee and Space di Jl. Pengantin Ali No. 55, Ciracas, Jakarta Timur",

      // About page
      "about.hero.imgAlt":
        "Visual konsep halaman terakota terbuka NAKA dengan pergola baja hitam, lantai beton cor, dan pohon tropis.",
      "about.hero.title": "Kenali NAKA",
      "about.hero.caption": "Foto konsep, pemotretan resmi NAKA menyusul.",
      "about.hero.lead":
        "Ruang kopi yang dibentuk oleh udara terbuka, baja hitam, dan hangatnya tanah liat.",
      "about.hero.text":
        "NAKA Coffee and Space adalah kedai kopi Indonesia yang mengutamakan ketenangan ruang. Arsitekturnya memadukan dinding terakota bakar, baja struktural hitam doff, beton cor, dan tanaman tropis di sekeliling area duduk dalam dan luar ruang.",
      "about.hero.note":
        "Kisah resmi dan teks profil akan menggantikan pengantar ini setelah disetujui NAKA.",
      "about.hero.ctaMenu": "Lihat Menu Kami",
      "about.hero.ctaSpace": "Jelajahi Ruang Kami",
      "about.hero.ctaLocation": "Lihat Lokasi Kami",
      "about.materials.title": "Karakter Material",
      "about.materials.lead":
        "Empat permukaan jujur membentuk suasana ruang bahkan sebelum cangkir pertama disajikan.",
      "about.materials.text":
        "Alih-alih ornamen berlebih, NAKA mengandalkan tekstur bangunan yang menua secara alami di bawah matahari dan hujan tropis: plester tanah liat hangat, rangka baja gelap, lantai beton abu-abu, dan pepohonan di sekitarnya.",
      "about.materials.terracotta.name": "Terakota",
      "about.materials.terracotta.note": "Fasad & dinding utama",
      "about.materials.steel.name": "Baja Hitam",
      "about.materials.steel.note": "Rangka struktur & kanopi",
      "about.materials.concrete.name": "Beton",
      "about.materials.concrete.note": "Lantai, bar & halaman",
      "about.materials.greenery.name": "Tanaman Hijau",
      "about.materials.greenery.note": "Tanaman halaman",
      "about.courtyard.imgAlt":
        "Visual konsep paviliun komunal terbuka NAKA dengan meja kayu panjang di bawah atap baja hitam yang dikelilingi tanaman hijau.",
      "about.courtyard.caption": "Visual konsep paviliun komunal.",
      "about.courtyard.title": "Dirancang untuk betah",
      "about.courtyard.text":
        "Baik saat mampir sebentar di bar espresso beton maupun duduk lama di bawah pergola halaman, setiap sudut tetap terbuka ke arah cahaya alami dan pepohonan.",
      "about.courtyard.ctaSpace": "Lihat Semua Sudut Ruang",
      "about.courtyard.ctaHome": "Kembali ke Beranda",

      // Menu page: Rail & shared tags
      "menu.rail.navAria": "Navigasi menu",
      "menu.rail.title": "Menu",
      "menu.rail.lead": "Makanan enak, minuman nikmat, dan kenyamanan sehari-hari.",
      "menu.rail.hours": "Buka 09:00 - 23:00",
      "menu.rail.prices": "Harga dalam ribuan Rp",
      "menu.rail.tabsAria": "Kategori menu",
      "menu.rail.bookLink": "Buka Buku Menu",

      "menu.temp.hotIced": "(Panas / Dingin)",
      "menu.temp.hot": "(Panas)",

      "menu.tab.coffee": "Kopi",
      "menu.tab.coldBrew": "Cold Brew",
      "menu.tab.signature": "Signature",
      "menu.tab.moreDrinks": "Minuman Lain",
      "menu.tab.snacks": "Camilan",
      "menu.tab.nusantara": "Nusantara",
      "menu.tab.donburi": "Donburi",
      "menu.tab.ramen": "Ramen",

      // Menu: 1. Coffee
      "menu.coffee.imgAlt": "Tampak atas secangkir latte NAKA dengan latte art rosetta.",
      "menu.coffee.title": "Kopi",
      "menu.coffee.desc":
        "Seduhan filter, espresso klasik, dan kopi susu lembut yang diseduh langsung di bar.",
      "menu.coffee.count": "6 menu + 4 tambahan",
      "menu.coffee.group.filter.title": "Kopi Filter",
      "menu.coffee.group.filter.note":
        "Seduhan pour-over single-origin yang menonjolkan karakter kopi hitam.",
      "menu.coffee.group.black.title": "Kopi Hitam",
      "menu.coffee.group.black.note":
        "Aroma buah harum, body kuat, dengan akhir rasa manis.",
      "menu.coffee.group.milk.title": "Kopi Susu",
      "menu.coffee.group.milk.note":
        "Body sedang dengan sentuhan kacang, kakao, dan manis alami.",
      "menu.coffee.item.lokalBeans.desc":
        "Seduhan filter single-origin Indonesia yang berganti berkala.",
      "menu.coffee.item.imporBeans.desc":
        "Seduhan filter single-origin mancanegara yang berganti berkala.",
      "menu.coffee.item.espresso.desc":
        "Ekstraksi pekat dengan body kuat dan akhir rasa manis.",
      "menu.coffee.item.blackCoffee.nameHtml":
        'Black Coffee <span class="menu-item__temp">(Panas / Dingin)</span>',
      "menu.coffee.item.blackCoffee.desc": "Kopi hitam bersih, disajikan panas atau dingin.",
      "menu.coffee.item.latte.nameHtml":
        'Latte <span class="menu-item__temp">(Panas / Dingin)</span>',
      "menu.coffee.item.latte.desc":
        "Espresso seimbang dengan susu panas lembut atau susu dingin.",
      "menu.coffee.item.cappuccino.nameHtml":
        'Cappuccino <span class="menu-item__temp">(Panas)</span>',
      "menu.coffee.item.cappuccino.desc":
        "Espresso berlapis microfoam susu yang padat dan lembut.",
      "menu.coffee.addons.title": "Tambahan",
      "menu.coffee.addons.oatMilk": "Susu Oat",
      "menu.coffee.addons.extraEspresso": "Ekstra Espresso",
      "menu.coffee.addons.syrup": "Sirup",
      "menu.coffee.addons.coffeeJelly": "Coffee Jelly",

      // Menu: 2. Cold Brew
      "menu.coldBrew.imgAlt":
        "Empat gelas cold brew dingin signature NAKA dengan tutup oranye.",
      "menu.coldBrew.title": "Cold Brew",
      "menu.coldBrew.desc":
        "Cold brew dingin khas NAKA dari Continental Blend dan saus racikan sendiri.",
      "menu.coldBrew.count": "7 menu",
      "menu.coldBrew.item.monday.desc":
        "Cold brew dengan kesegaran jeruk sitrus dan krim lembut.",
      "menu.coldBrew.item.hikari.desc":
        "Cold brew berpadu rasa mangga tropis yang menyegarkan.",
      "menu.coldBrew.item.kaze.desc": "Cold brew segar dengan paduan persik dan leci.",
      "menu.coldBrew.item.sunday.desc":
        "Cold brew bersoda ringan dengan air tonik dan vanila lembut.",
      "menu.coldBrew.item.blackIchigo.desc":
        "Cold brew dengan stroberi dan madu untuk akhir rasa buah yang segar.",
      "menu.coldBrew.item.pinkMonday.desc":
        "Cold brew dengan lapisan krim stroberi yang lembut.",
      "menu.coldBrew.item.tansa.desc":
        "Cold brew ringan dan menyegarkan dengan tambahan air soda.",

      // Menu: 3. Signature Coffee
      "menu.signature.imgAlt":
        "Delapan minuman kopi dingin signature NAKA tersusun di undakan batu.",
      "menu.signature.title": "Kopi Signature",
      "menu.signature.desc":
        "Kopi susu racikan NAKA yang memadukan espresso dengan gula aren, pandan, madu, dan rempah aromatik.",
      "menu.signature.count": "11 menu",
      "menu.signature.item.nakaSignature.desc":
        "Racikan khas NAKA dari espresso, susu, dan gula aren aromatik.",
      "menu.signature.item.naka.desc": "Es kopi susu gula aren creamy untuk teman harian.",
      "menu.signature.item.nakaDouble.desc":
        "Kopi susu gula aren lebih kuat dengan double shot espresso.",
      "menu.signature.item.nakaHoney.desc":
        "Espresso, susu, dan madu dengan manis alami yang lembut.",
      "menu.signature.item.nakaDorian.desc":
        "Kopi susu gula aren dengan sentuhan durian yang creamy.",
      "menu.signature.item.avocadoCoffee.desc":
        "Alpukat halus yang lembut berpadu espresso pekat.",
      "menu.signature.item.pandanLatte.nameHtml":
        'Pandan Latte <span class="menu-item__temp">(Panas / Dingin)</span>',
      "menu.signature.item.pandanLatte.desc":
        "Espresso dan susu dengan aroma pandan harum.",
      "menu.signature.item.caramelLatte.nameHtml":
        'Caramel Latte <span class="menu-item__temp">(Panas / Dingin)</span>',
      "menu.signature.item.caramelLatte.desc":
        "Espresso dan susu berpadu karamel gurih manis.",
      "menu.signature.item.vanillaLatte.nameHtml":
        'Vanilla Latte <span class="menu-item__temp">(Panas / Dingin)</span>',
      "menu.signature.item.vanillaLatte.desc":
        "Espresso dan susu dengan aroma vanila manis lembut.",
      "menu.signature.item.daichi.desc":
        "Kopi susu gula aren dengan aroma pandan dan kelapa.",
      "menu.signature.item.yoru.desc":
        "Kopi susu lembut sedikit manis dengan sentuhan ala kahlua.",

      // Menu: 4. More Drinks
      "menu.moreDrinks.imgAlt":
        "Tiga minuman non-kopi NAKA disajikan di atas tatakan kayu.",
      "menu.moreDrinks.title": "Minuman Lain",
      "menu.moreDrinks.desc":
        "Latte non-kopi, racikan buah segar, teh hitam floral, minuman soda, dan seduhan jahe hangat.",
      "menu.moreDrinks.count": "15 menu",
      "menu.moreDrinks.item.matcha.nameHtml":
        'Matcha <span class="menu-item__temp">(Panas / Dingin)</span>',
      "menu.moreDrinks.item.matcha.desc": "Matcha autentik dikocok lembut bersama susu creamy.",
      "menu.moreDrinks.item.taro.nameHtml":
        'Taro <span class="menu-item__temp">(Panas / Dingin)</span>',
      "menu.moreDrinks.item.taro.desc": "Latte susu taro manis dan creamy.",
      "menu.moreDrinks.item.chocolate.nameHtml":
        'Chocolate <span class="menu-item__temp">(Panas / Dingin)</span>',
      "menu.moreDrinks.item.chocolate.desc":
        "Cokelat pekat yang hangat dan menenangkan dengan susu.",
      "menu.moreDrinks.item.yoruChocolate.desc":
        "Susu cokelat pekat dengan sentuhan halus ala kahlua.",
      "menu.moreDrinks.item.mango.desc": "Racikan mangga tropis segar.",
      "menu.moreDrinks.item.ichigo.desc": "Minuman stroberi creamy yang segar dan manis.",
      "menu.moreDrinks.item.berry.desc": "Minuman segar perpaduan rosela dan stroberi.",
      "menu.moreDrinks.item.sora.desc":
        "Perpaduan persik, leci, jeruk calamansi, dan rosela dalam satu gelas.",
      "menu.moreDrinks.item.kaori.desc":
        "Teh hitam floral dengan sakura, persik, mojito, dan daun mint segar.",
      "menu.moreDrinks.item.hana.desc":
        "Rosela, persik, dan leci menyegarkan dengan air soda.",
      "menu.moreDrinks.item.rashi.desc":
        "Teh hitam lembut dengan rasa buah persik dan leci.",
      "menu.moreDrinks.item.remon.desc": "Teh hitam segar dengan perasan lemon.",
      "menu.moreDrinks.item.raichi.desc":
        "Teh hitam ringan dan menyegarkan dengan leci manis.",
      "menu.moreDrinks.item.shogahani.nameHtml":
        'Shogahani <span class="menu-item__temp">(Panas)</span>',
      "menu.moreDrinks.item.shogahani.desc": "Susu hangat berpadu madu dan jahe segar.",
      "menu.moreDrinks.item.shoga.nameHtml":
        'Shoga <span class="menu-item__temp">(Panas)</span>',
      "menu.moreDrinks.item.shoga.desc":
        "Wedang jahe rempah tradisional yang menghangatkan.",

      // Menu: 5. Snacks
      "menu.snacks.img1Alt":
        "Empat sajian camilan NAKA berisi corn ribs, yakitori, tori kawa, dan platter berbagi.",
      "menu.snacks.img2Alt":
        "Nampan kertas takoyaki NAKA dengan mayones, saus manis, dan katsuobushi.",
      "menu.snacks.title": "Camilan",
      "menu.snacks.desc":
        "Camilan gurih, sajian berbagi renyah, dan kudapan manis khas kafe Indonesia untuk menemani obrolan.",
      "menu.snacks.count": "14 menu",
      "menu.snacks.item.nakaPlatter.desc":
        "Sajian berbagi berisi onion ring renyah, sosis gurih, kulit ayam krispi, dan kentang goreng.",
      "menu.snacks.item.cornRibs.desc":
        "Jagung manis goreng dibalut bumbu manis, pedas, dan gurih.",
      "menu.snacks.item.toriKawa.desc": "Kulit ayam goreng renyah dan gurih.",
      "menu.snacks.item.yakitori.desc":
        "Sate ayam panggang dengan olesan bumbu teriyaki gurih.",
      "menu.snacks.item.takoyaki.desc":
        "Bola gurih khas Jepang dengan mayones, saus manis, dan katsuobushi.",
      "menu.snacks.item.karageBites.desc":
        "Potongan ayam goreng krispi dan juicy disajikan bersama coleslaw segar.",
      "menu.snacks.item.tahuCabeGaram.desc":
        "Tahu goreng keemasan dengan taburan bawang putih renyah dan cabai.",
      "menu.snacks.item.onionRings.desc":
        "Onion ring berbalut tepung renyah disajikan dengan saus sambal.",
      "menu.snacks.item.cheeseFries.desc":
        "Kentang goreng dengan saus keju hangat dan potongan daging asap.",
      "menu.snacks.item.frenchFries.desc":
        "Kentang goreng renyah dengan taburan bumbu rumput laut gurih.",
      "menu.snacks.item.cireng.desc":
        "Cireng renyah disajikan bersama bumbu rujak asam manis pedas.",
      "menu.snacks.item.singkong.desc":
        "Singkong goreng renyah dengan parutan keju dan susu kental manis.",
      "menu.snacks.item.pisangGoreng.desc":
        "Pisang goreng tepung renyah dengan cokelat, keju, dan susu kental manis.",
      "menu.snacks.item.rotiBakar.desc":
        "Roti bakar dengan pilihan cokelat, keju, tiramisu, dan susu kental manis.",

      // Menu: 6. Nusantara
      "menu.nusantara.imgAlt": "Tampak atas sajian Nasi Goreng dan Kwetiaw NAKA.",
      "menu.nusantara.title": "Nusantara",
      "menu.nusantara.desc":
        "Nasi goreng, mie, kwetiaw, dan ayam berbumbu khas Nusantara disajikan dengan telur mata sapi.",
      "menu.nusantara.count": "5 menu",
      "menu.nusantara.item.nasgorKampung.desc":
        "Nasi goreng ayam klasik Indonesia disajikan dengan telur mata sapi.",
      "menu.nusantara.item.nasgorOriental.desc":
        "Nasi goreng gurih bergaya oriental dengan telur mata sapi atau orak-arik.",
      "menu.nusantara.item.kwetiawNaka.desc":
        "Kwetiaw goreng ayam dan sayuran disajikan dengan telur mata sapi.",
      "menu.nusantara.item.mieGorengNaka.desc":
        "Mie goreng ayam dan sayuran disajikan dengan telur mata sapi.",
      "menu.nusantara.item.chiliPadiRice.desc":
        "Ayam goreng ketumbar dengan sambal cabai rawit pedas dan telur mata sapi.",

      // Menu: 7. Donburi
      "menu.donburi.imgAlt":
        "Tampak atas empat mangkuk nasi donburi NAKA dengan topping daging sapi dan ayam krispi.",
      "menu.donburi.title": "Donburi",
      "menu.donburi.desc":
        "Mangkuk nasi hangat ala Jepang dengan tumisan daging sapi atau ayam krispi.",
      "menu.donburi.count": "5 menu",
      "menu.donburi.item.kuroGyudon.desc":
        "Irisan daging sapi tumis saus lada hitam di atas nasi hangat dengan telur orak-arik lembut.",
      "menu.donburi.item.tamaGyudon.desc":
        "Irisan daging sapi tumis saus teriyaki manis di atas nasi hangat dengan telur orak-arik lembut.",
      "menu.donburi.item.siNanbanRice.desc":
        "Ayam karaage krispi berlapis saus manis di atas nasi dengan saus tartar creamy.",
      "menu.donburi.item.moKarageRice.desc":
        "Ayam karaage krispi di atas nasi hangat dengan mayones dan coleslaw segar.",
      "menu.donburi.item.katsuCurry.desc":
        "Chicken katsu renyah di atas nasi hangat dengan kuah kari Jepang gurih dan sayuran.",

      // Menu: 8. Ramen
      "menu.ramen.imgAlt":
        "Tiga mangkuk ramen NAKA disajikan hangat dengan topping dan kuah gurih.",
      "menu.ramen.title": "Ramen",
      "menu.ramen.desc":
        "Ramen kuah racikan dapur dan ramen kering disajikan hangat langsung dari dapur.",
      "menu.ramen.count": "5 menu",
      "menu.ramen.item.toriRamen.desc":
        "Ramen dengan kuah kaldu ayam gurih yang menghangatkan.",
      "menu.ramen.item.spicyToriRamen.desc":
        "Ramen dengan kuah kaldu ayam pedas yang hangat.",
      "menu.ramen.item.hishioRamen.desc": "Ramen dengan kuah shoyu gurih dan ringan.",
      "menu.ramen.item.dryAburaRamen.desc":
        "Ramen tanpa kuah berbalut minyak bumbu shoyu gurih.",
      "menu.ramen.item.dryCurryRamen.desc":
        "Ramen tanpa kuah dengan bumbu kari aromatik."
    }
  };

  let activeLang = null;

  const normalizeLang = (value) => {
    if (typeof value !== "string") return null;
    const cleaned = value.trim().toLowerCase();
    return supported.includes(cleaned) ? cleaned : null;
  };

  const readUrlLang = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      return normalizeLang(params.get("lang"));
    } catch (_error) {
      return null;
    }
  };

  const readStorageLang = () => {
    try {
      return normalizeLang(window.localStorage.getItem(STORAGE_KEY));
    } catch (_error) {
      return null;
    }
  };

  const writeStorageLang = (lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_error) {
      // Ignore storage errors in restricted or private browsing modes.
    }
  };

  const getLang = () => {
    return readUrlLang() || readStorageLang() || activeLang || "en";
  };

  const lookup = (key, lang) => {
    if (!key) return undefined;
    const resolvedLang = normalizeLang(lang) || activeLang || getLang();
    const primary = dictionaries[resolvedLang];
    if (primary && Object.prototype.hasOwnProperty.call(primary, key)) {
      return primary[key];
    }
    const fallback = dictionaries.en;
    if (fallback && Object.prototype.hasOwnProperty.call(fallback, key)) {
      return fallback[key];
    }
    return undefined;
  };

  const t = (key, lang) => {
    const value = lookup(key, lang);
    return value !== undefined ? value : key;
  };

  const attrBindings = [
    ["[data-i18n-aria-label]", "i18nAriaLabel", "aria-label"],
    ["[data-i18n-href]", "i18nHref", "href"],
    ["[data-i18n-title]", "i18nTitle", "title"],
    ["[data-i18n-alt]", "i18nAlt", "alt"]
  ];

  const datasetBindings = [
    ["[data-i18n-lightbox-title]", "i18nLightboxTitle", "lightboxTitle"],
    ["[data-i18n-lightbox-zone]", "i18nLightboxZone", "lightboxZone"],
    ["[data-i18n-lightbox-alt]", "i18nLightboxAlt", "lightboxAlt"]
  ];

  const SWITCH_ANIM_MS = 340;
  const DROPDOWN_EXIT_MS = 240;

  let langSwitchTimer = null;
  const dropdownStates = new WeakMap();

  const prefersReducedMotion = () =>
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const triggerLangSwitchMotion = () => {
    const root = document.documentElement;
    if (langSwitchTimer) {
      window.clearTimeout(langSwitchTimer);
      langSwitchTimer = null;
    }
    if (root.classList.contains("is-lang-switching")) {
      root.classList.remove("is-lang-switching");
      void root.offsetWidth;
    }
    root.classList.add("is-lang-switching");
    langSwitchTimer = window.setTimeout(() => {
      langSwitchTimer = null;
      root.classList.remove("is-lang-switching");
    }, SWITCH_ANIM_MS);
  };

  const getDropdownState = (dropdown) => {
    let state = dropdownStates.get(dropdown);
    if (!state) {
      state = { closeTimer: null, openRaf: null };
      dropdownStates.set(dropdown, state);
    }
    return state;
  };

  const cancelDropdownTimers = (dropdown) => {
    const state = dropdownStates.get(dropdown);
    if (!state) return;
    if (state.closeTimer) {
      window.clearTimeout(state.closeTimer);
      state.closeTimer = null;
    }
    if (state.openRaf !== null) {
      window.cancelAnimationFrame(state.openRaf);
      state.openRaf = null;
    }
  };

  const getDropdownParts = (dropdown) => {
    if (!dropdown) return { trigger: null, menu: null };
    return {
      trigger: dropdown.querySelector("[data-lang-trigger]"),
      menu: dropdown.querySelector("[data-lang-menu]")
    };
  };

  const isDropdownOpen = (dropdown) => {
    const { trigger, menu } = getDropdownParts(dropdown);
    return Boolean(trigger && menu && trigger.getAttribute("aria-expanded") === "true");
  };

  const getOpenDropdowns = () =>
    Array.from(document.querySelectorAll("[data-lang-dropdown]")).filter((dropdown) =>
      isDropdownOpen(dropdown)
    );

  const closeDropdown = (dropdown, { returnFocus = false } = {}) => {
    const { trigger, menu } = getDropdownParts(dropdown);
    if (!trigger || !menu) return;

    cancelDropdownTimers(dropdown);
    trigger.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");

    if (returnFocus && typeof trigger.focus === "function") {
      trigger.focus();
    }

    if (prefersReducedMotion() || menu.hidden) {
      menu.hidden = true;
      return;
    }

    const state = getDropdownState(dropdown);
    state.closeTimer = window.setTimeout(() => {
      state.closeTimer = null;
      if (trigger.getAttribute("aria-expanded") !== "true") {
        menu.hidden = true;
      }
    }, DROPDOWN_EXIT_MS);
  };

  const openDropdown = (dropdown, { focusActive = false } = {}) => {
    const { trigger, menu } = getDropdownParts(dropdown);
    if (!trigger || !menu) return;

    getOpenDropdowns().forEach((other) => {
      if (other !== dropdown) {
        closeDropdown(other, { returnFocus: false });
      }
    });

    cancelDropdownTimers(dropdown);
    menu.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    void menu.offsetWidth;

    const state = getDropdownState(dropdown);
    state.openRaf = window.requestAnimationFrame(() => {
      state.openRaf = null;
      if (trigger.getAttribute("aria-expanded") !== "true") return;
      menu.classList.add("is-open");
      if (focusActive) {
        const targetOption =
          menu.querySelector("[data-lang-option].is-active") ||
          menu.querySelector("[data-lang-option]");
        if (targetOption && typeof targetOption.focus === "function") {
          targetOption.focus();
        }
      }
    });
  };

  const applyLanguage = (
    lang,
    { persist = true, updateUrl = false, announce = false } = {}
  ) => {
    const prevLang = activeLang;
    const targetLang = normalizeLang(lang) || "en";
    activeLang = targetLang;

    document.documentElement.lang = targetLang;
    document.documentElement.dataset.lang = targetLang;

    const page = (document.body && document.body.dataset.page) || "home";
    const pageTitle = lookup(`meta.${page}.title`, targetLang);
    if (pageTitle !== undefined) {
      document.title = pageTitle;
    }

    const pageDesc = lookup(`meta.${page}.description`, targetLang);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && pageDesc !== undefined) {
      metaDesc.setAttribute("content", pageDesc);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = lookup(element.dataset.i18n, targetLang);
      if (value !== undefined) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = lookup(element.dataset.i18nHtml, targetLang);
      if (value !== undefined) element.innerHTML = value;
    });

    attrBindings.forEach(([selector, dataKey, attrName]) => {
      document.querySelectorAll(selector).forEach((element) => {
        const value = lookup(element.dataset[dataKey], targetLang);
        if (value !== undefined) element.setAttribute(attrName, value);
      });
    });

    datasetBindings.forEach(([selector, sourceKey, targetKey]) => {
      document.querySelectorAll(selector).forEach((element) => {
        const value = lookup(element.dataset[sourceKey], targetLang);
        if (value !== undefined) element.dataset[targetKey] = value;
      });
    });

    document.querySelectorAll("[data-lang-current]").forEach((element) => {
      element.textContent = targetLang.toUpperCase();
    });

    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const optionLang = normalizeLang(button.dataset.langOption);
      const isActive = optionLang === targetLang;
      button.classList.toggle("is-active", isActive);
      if (button.getAttribute("role") === "menuitemradio") {
        button.setAttribute("aria-checked", String(isActive));
        button.removeAttribute("aria-pressed");
      } else {
        button.setAttribute("aria-pressed", String(isActive));
      }
    });

    if (persist) {
      writeStorageLang(targetLang);
    }

    if (window.history && typeof window.history.replaceState === "function") {
      try {
        const url = new URL(window.location.href);
        if (updateUrl || (persist && url.searchParams.has("lang"))) {
          url.searchParams.set("lang", targetLang);
          window.history.replaceState(null, "", url.pathname + url.search + url.hash);
        }
      } catch (_error) {
        // Ignore URL replacement errors on restricted origins.
      }
    }

    document.dispatchEvent(
      new CustomEvent("naka:langchange", {
        detail: { lang: targetLang }
      })
    );

    if (announce && prevLang && targetLang !== prevLang) {
      triggerLangSwitchMotion();
    }

    return targetLang;
  };

  document.addEventListener("click", (event) => {
    const target = event.target;
    const trigger = target && target.closest ? target.closest("[data-lang-trigger]") : null;
    if (trigger) {
      const dropdown = trigger.closest("[data-lang-dropdown]");
      if (!dropdown) return;
      if (isDropdownOpen(dropdown)) {
        closeDropdown(dropdown, { returnFocus: false });
      } else {
        openDropdown(dropdown, { focusActive: event.detail === 0 });
      }
      return;
    }

    const option = target && target.closest ? target.closest("[data-lang-option]") : null;
    if (option) {
      const nextLang = normalizeLang(option.dataset.langOption);
      if (nextLang) {
        applyLanguage(nextLang, { persist: true, updateUrl: false, announce: true });
      }
      const dropdown = option.closest("[data-lang-dropdown]");
      if (dropdown) {
        closeDropdown(dropdown, { returnFocus: event.detail === 0 });
      }
      return;
    }

    getOpenDropdowns().forEach((dropdown) => {
      if (!dropdown.contains(target)) {
        closeDropdown(dropdown, { returnFocus: false });
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    const target = event.target;

    if (event.key === "Escape") {
      const openDropdowns = getOpenDropdowns();
      if (openDropdowns.length) {
        event.preventDefault();
        openDropdowns.forEach((dropdown) => {
          closeDropdown(dropdown, { returnFocus: true });
        });
      }
      return;
    }

    const trigger = target && target.closest ? target.closest("[data-lang-trigger]") : null;
    if (trigger && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      const dropdown = trigger.closest("[data-lang-dropdown]");
      if (!dropdown) return;
      event.preventDefault();
      openDropdown(dropdown, { focusActive: true });
      return;
    }

    const menu = target && target.closest ? target.closest("[data-lang-menu]") : null;
    if (!menu) return;
    const dropdown = menu.closest("[data-lang-dropdown]");
    if (!dropdown || !isDropdownOpen(dropdown)) return;

    if (event.key === "Tab") {
      closeDropdown(dropdown, { returnFocus: false });
      return;
    }

    const options = Array.from(menu.querySelectorAll("[data-lang-option]"));
    if (!options.length) return;

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const currentIndex = options.indexOf(document.activeElement);
      const nextIndex =
        event.key === "ArrowDown"
          ? currentIndex < 0
            ? 0
            : (currentIndex + 1) % options.length
          : currentIndex <= 0
            ? options.length - 1
            : currentIndex - 1;
      options[nextIndex].focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      options[0].focus();
    } else if (event.key === "End") {
      event.preventDefault();
      options[options.length - 1].focus();
    }
  });

  window.NAKA_I18N = {
    STORAGE_KEY,
    supported: supported.slice(),
    getLang,
    t,
    applyLanguage,
    openDropdown,
    closeDropdown
  };

  const init = () => {
    applyLanguage(getLang(), { persist: false, updateUrl: false, announce: false });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
