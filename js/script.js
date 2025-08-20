// Product data with Italian translations
const products = [
  // MARISCO CONGELADO (Crostacei Congelati)
  {
    name: "Code di Gambero Pelate Cinesi",
    scientific: "Melantho chinensis",
    details: "25% glassatura",
    specs: "10/30 (6x1kg)",
    price: "7,80",
    category: "marisco",
  },
  {
    name: "Code di Gambero Pelate Cinesi",
    scientific: "Melantho chinensis",
    details: "25% glassatura",
    specs: "30/50 (6x1kg)",
    price: "6,80",
    category: "marisco",
  },
  {
    name: "Code di Gambero Pelate Cinesi",
    scientific: "Melantho chinensis",
    details: "25% glassatura",
    specs: "70/100 (6x1kg)",
    price: "4,90",
    category: "marisco",
  },
  {
    name: "Code di Gambero Pelate Cinesi",
    scientific: "Melantho chinensis",
    details: "15% senza marca",
    specs: "Grande (24x250g)",
    price: "10,00",
    category: "marisco",
  },
  {
    name: "Code di Gambero Pelate Cinesi",
    scientific: "Melantho chinensis",
    details: "15% senza marca",
    specs: "Medio (24x250g)",
    price: "8,00",
    category: "marisco",
  },
  {
    name: "Gamberone Argentino Terra",
    scientific: "Pleoticus muelleri",
    details: "L1 terra",
    specs: "(6x2kg)",
    price: "7,70",
    category: "marisco",
  },
  {
    name: "Code di Gamberone Argentino",
    scientific: "Pleoticus muelleri",
    details: "Code 1C1 - terra",
    specs: "A bordo",
    price: "9,90",
    category: "marisco",
  },
  {
    name: "Polpa di Gamberone Pelato",
    scientific: "Pleoticus muelleri",
    details: "10% naturale",
    specs: "20/40 (12x500g)",
    price: "13,50",
    category: "marisco",
  },
  {
    name: "Vongola Fine Coreana",
    scientific: "Ruditapes philippinarum",
    details: "60/100",
    specs: "(6x1kg)",
    price: "10,10", // Special price as requested
    category: "marisco",
  },
  {
    name: "Vongola Cotta Bianca Vietnam",
    scientific: "Meretrix lyrata",
    details: "40/60",
    specs: "(12x450g)",
    price: "2,20",
    category: "marisco",
  },
  {
    name: "Vongola Cotta Bianca Vietnam",
    scientific: "Meretrix lyrata",
    details: "60/80",
    specs: "(6x1kg)",
    price: "2,10",
    category: "marisco",
  },
  {
    name: "Vongola Cotta Marrone Vietnam",
    scientific: "Meretrix lyrata",
    details: "40/60 IQF",
    specs: "(6x1kg)",
    price: "2,25",
    category: "marisco",
  },
  {
    name: "Vongola Cotta Marrone Vietnam",
    scientific: "Meretrix lyrata",
    details: "60/80 IQF",
    specs: "(12x500g)",
    price: "2,20",
    category: "marisco",
  },
  {
    name: "Carne di Cozza Cilena",
    scientific: "Mytilus chilensis",
    details: "10% 100/200",
    specs: "(6x1kg)",
    price: "5,00",
    category: "marisco",
  },
  {
    name: "Carne di Cozza Cilena",
    scientific: "Mytilus chilensis",
    details: "10% 100/200",
    specs: "(10kg sfuso)",
    price: "4,50",
    category: "marisco",
  },
  {
    name: "Carne di Cozza Cilena",
    scientific: "Mytilus chilensis",
    details: "10% 200/300",
    specs: "(10kg sfuso)",
    price: "4,30",
    category: "marisco",
  },
  {
    name: "Cozza Jugosón Cilena",
    scientific: "Mytilus chilensis",
    details: "40/60",
    specs: "(5x1kg A/V)",
    price: "2,50",
    category: "marisco",
  },
  {
    name: "Carne di Granchio delle Nevi",
    scientific: "Cotta",
    details: "30% zampe 70% corpo",
    specs: "20x380g",
    price: "16,70",
    category: "marisco",
  },
  {
    name: "Pesce Argento Cinese",
    scientific: "Neosalanx tangkahkeii",
    details: "20%",
    specs: "5/7 (20x250g)",
    price: "6,80",
    category: "marisco",
  },

  // SALMON (Salmone)
  {
    name: "Lombo di Salmone Norvegese Senza Pelle",
    scientific: "Salmo salar",
    details: "25 unità/master",
    specs: "1x125g",
    price: "16,00",
    category: "salmon",
  },
  {
    name: "Lombo di Salmone Norvegese Senza Pelle",
    scientific: "Salmo salar",
    details: "25 unità/master",
    specs: "2x125g",
    price: "15,00",
    category: "salmon",
  },
  {
    name: "Lombo di Salmone BIO Con Pelle",
    scientific: "Salmo salar",
    details: "15 unità/master",
    specs: "2x110g",
    price: "24,00",
    category: "salmon",
  },
  {
    name: "Lombo di Salmone Norvegese Con Pelle",
    scientific: "Salmo salar",
    details: "Sfuso IQF",
    specs: "180/200 (5kg)",
    price: "12,00",
    category: "salmon",
  },
  {
    name: "Lombo di Salmone Norvegese Senza Pelle",
    scientific: "Salmo salar",
    details: "Sfuso IQF",
    specs: "180/200 (5kg)",
    price: "13,00",
    category: "salmon",
  },
  {
    name: "Ritagli di Salmone Affumicato",
    scientific: "Salmo salar Norvegese",
    details: "Confezioni da 1kg",
    specs: "(20x1kg)",
    price: "12,00",
    category: "salmon",
  },
  {
    name: "Filetto Salmone Affumicato Norvegese",
    scientific: "Filetto pretagliato IWP",
    details: "1kg x 10",
    specs: "10kg/scatola",
    price: "15,00",
    category: "salmon",
  },
  {
    name: "Dadini di Salmone Norvegese",
    scientific: "Salmo salar",
    details: "0% glassatura IQF",
    specs: "1,5x1,5cm (5x1kg)",
    price: "8,00",
    category: "salmon",
  },
  {
    name: "Code di Salmone Norvegese",
    scientific: "S. salar con pelle",
    details: "Glassatura max 5%",
    specs: "60/300g - Scatole 5kg",
    price: "8,50",
    category: "salmon",
  },
  {
    name: "Filetto di Salmone Elaborato Cina",
    scientific: "Keta",
    details: "25% glassatura trattato",
    specs: "800/2000g (1x10kg)",
    price: "4,60",
    category: "salmon",
  },
  {
    name: "Filetto di Salmone Elaborato Cina",
    scientific: "Keta",
    details: "25% glassatura senza additivi",
    specs: "800/2000g (1x10kg)",
    price: "5,00",
    category: "salmon",
  },
  {
    name: "Filetto di Salmone Elaborato Cina",
    scientific: "Keta",
    details: "25% glassatura naturale",
    specs: "800/2000g (1x10kg)",
    price: "5,60",
    category: "salmon",
  },

  // CEFALÓPODOS (Cefalopodi)
  {
    name: "Totanetto Cinese BLOCCO",
    scientific: "Loligo japonica",
    details: "Blocco 10%",
    specs: "3-5cm (6x1kg blocco)",
    price: "3,50",
    category: "cefalopodi",
  },
  {
    name: "Totanetto Cinese Senza Cartilagine",
    scientific: "Loligo japonica",
    details: "IQF 15% glassatura",
    specs: "3-6cm (6x1kg)",
    price: "5,60",
    category: "cefalopodi",
  },
  {
    name: "Totanetto Cinese Senza Cartilagine",
    scientific: "Loligo japonica",
    details: "IQF 15% glassatura",
    specs: "4-6cm (6x1kg)",
    price: "5,45",
    category: "cefalopodi",
  },
  {
    name: "Totanetto Vietnam Senza Cartilagine",
    scientific: "Loligo spp",
    details: "IQF 15% glassatura",
    specs: "3-6cm (6x1kg IQF)",
    price: "4,20",
    category: "cefalopodi",
  },
  {
    name: "Totanetto Indiano Senza Cartilagine",
    scientific: "Loligo duvaceli",
    details: "IQF 15% glassatura",
    specs: "80/up (6x1kg)",
    price: "3,10",
    category: "cefalopodi",
  },
  {
    name: "Seppia Intera Pulita Indiana",
    scientific: "Sepia pharaonis",
    details: "25% glassatura",
    specs: "U/1 (1x10kg)",
    price: "6,00",
    category: "cefalopodi",
  },
  {
    name: "Seppia Intera Pulita Indiana",
    scientific: "Sepia pharaonis",
    details: "25% glassatura",
    specs: "2/4 (1x6kg)",
    price: "6,00",
    category: "cefalopodi",
  },
  {
    name: "Seppia Intera Pulita Indiana",
    scientific: "Sepia pharaonis",
    details: "25% glassatura",
    specs: "5/7 (6x1kg)",
    price: "6,00",
    category: "cefalopodi",
  },
  {
    name: "Seppia Intera Pulita Indiana",
    scientific: "Sepia pharaonis",
    details: "25% glassatura",
    specs: "8/12 (6x1kg)",
    price: "5,50",
    category: "cefalopodi",
  },
  {
    name: "Tubo Totano Pulito",
    scientific: "Gigas",
    details: "25% glassatura IQF",
    specs: "M 200/400g (5x1kg)",
    price: "4,00",
    category: "cefalopodi",
  },
  {
    name: "Tubo Totano Pulito",
    scientific: "Gigas",
    details: "30% glassatura INTERF.",
    specs: "M 200/400g (1x5kg)",
    price: "3,80",
    category: "cefalopodi",
  },
  {
    name: "Anelli di Totano",
    scientific: "Gigas",
    details: "20% glassatura",
    specs: "6x1kg",
    price: "5,00",
    category: "cefalopodi",
  },
  {
    name: "Dadini di Totano",
    scientific: "Gigas",
    details: "20% glassatura",
    specs: "6x1kg",
    price: "5,80",
    category: "cefalopodi",
  },
  {
    name: "Strisce di Totano",
    scientific: "Gigas",
    details: "20% glassatura",
    specs: "6x1kg",
    price: "5,50",
    category: "cefalopodi",
  },

  // FILETTI DI PESCE (Filetti di Pesce)
  {
    name: "Coda di Rana Pescatrice Cinese",
    scientific: "Lophius litulon",
    details: "20% glassatura",
    specs: "150/200g (6x1kg)",
    price: "3,50",
    category: "filetti",
  },
  {
    name: "Coda di Rana Pescatrice Cinese",
    scientific: "Lophius litulon",
    details: "20% glassatura",
    specs: "200/300g (6x1kg)",
    price: "3,60",
    category: "filetti",
  },
  {
    name: "Coda di Rana Pescatrice Cinese",
    scientific: "Lophius litulon",
    details: "20% glassatura",
    specs: "300/500g (3x2kg)",
    price: "3,75",
    category: "filetti",
  },
  {
    name: "Coda di Rana Pescatrice Cinese",
    scientific: "Lophius litulon",
    details: "20% glassatura",
    specs: "500/700g (6kg sfuso)",
    price: "3,90",
    category: "filetti",
  },
  {
    name: "Coda di Rana Pescatrice Cinese",
    scientific: "Lophius litulon",
    details: "20% glassatura",
    specs: "700/1000g (10kg sfuso)",
    price: "4,15",
    category: "filetti",
  },
  {
    name: "Coda di Rana Pescatrice Cinese",
    scientific: "Lophius litulon",
    details: "20% glassatura",
    specs: "1000/up (6kg sfuso)",
    price: "4,25",
    category: "filetti",
  },
  {
    name: "Dadini di Rana Pescatrice",
    scientific: "Lophius litulon",
    details: "20% glassatura",
    specs: "6x1kg",
    price: "4,60",
    category: "filetti",
  },
  {
    name: "Filetto di Rana Pescatrice",
    scientific: "Lophius litulon",
    details: "20% glassatura",
    specs: "6x1kg",
    price: "4,50",
    category: "filetti",
  },
  {
    name: "Lometti di Baccalà",
    scientific: "Gadus morhua",
    details: "Naturale",
    specs: "250g in 2 lombi x 125g",
    price: "16,50",
    category: "filetti",
  },
  {
    name: "Filetto di Baccalà Pacifico c/p",
    scientific: "Gadus macrocephalus",
    details: "30% glassatura",
    specs: "1000/up (11kg IQF)",
    price: "4,50",
    category: "filetti",
  },
  {
    name: "Filetto di Carbonaro c/p",
    scientific: "Pollachius virens",
    details: "30% glassatura",
    specs: "1000/up (11kg IQF)",
    price: "3,50",
    category: "filetti",
  },
  {
    name: "Filetto di Limanda Cinese",
    scientific: "Limanda aspera",
    details: "30% glassatura",
    specs: "80/120g (6x1kg)",
    price: "3,90",
    category: "filetti",
  },
  {
    name: "Filetto di Gallinella Cinese",
    scientific: "Sebastes mentella",
    details: "30% glassatura",
    specs: "180/260g (6x1kg)",
    price: "3,70",
    category: "filetti",
  },
  {
    name: "Filetto di Halibut Cinese",
    scientific: "Atheresthes stomias",
    details: "200/400g",
    specs: "(1x6kg)",
    price: "2,90",
    category: "filetti",
  },
  {
    name: "Filetto di Merluzzo d'Alaska Cinese",
    scientific: "Theragra chalcograma",
    details: "30% 100/200g",
    specs: "(1x5kg sfuso IQF)",
    price: "1,95",
    category: "filetti",
  },
  {
    name: "Filetto di Panga 1ª Vietnam",
    scientific: "IQF",
    details: "25% glassatura bianco",
    specs: "120/170g (5x1kg)",
    price: "2,30",
    category: "filetti",
  },
  {
    name: "Filetto di Panga 1ª Vietnam",
    scientific: "IQF",
    details: "20% glassatura bianco",
    specs: "170/220g (5x1kg)",
    price: "2,50",
    category: "filetti",
  },
  {
    name: "Preparato di Paella",
    scientific: "Arito, cozza, merluzzo",
    details: "Peperone e totano",
    specs: "IQF (5x1kg)",
    price: "4,90",
    category: "filetti",
  },
  {
    name: "Calamaro alla Romana",
    scientific: "4x1kg",
    details: "IQF",
    specs: "(1x1kg)",
    price: "3,50",
    category: "filetti",
  },
  {
    name: "Cosce di Rana Vietnam",
    scientific: "8/12",
    details: "",
    specs: "(10x1kg)",
    price: "7,90",
    category: "filetti",
  },
  {
    name: "Cosce di Rana Vietnam",
    scientific: "13/15",
    details: "",
    specs: "(10x1kg)",
    price: "8,10",
    category: "filetti",
  },
  {
    name: "Cosce di Rana Vietnam",
    scientific: "16/20",
    details: "",
    specs: "(10x1kg)",
    price: "8,70",
    category: "filetti",
  },
  {
    name: "Cosce di Rana Vietnam",
    scientific: "21/25",
    details: "",
    specs: "(10x1kg)",
    price: "8,70",
    category: "filetti",
  },
]

// DOM elements
const productsGrid = document.getElementById("productsGrid")
const searchInput = document.getElementById("searchInput")
const filterButtons = document.querySelectorAll(".filter-btn")

// State
let currentFilter = "all"
let currentSearch = ""

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  renderProducts()
  setupEventListeners()
  window.cookieManager = new CookieManager()
})

// Setup event listeners
function setupEventListeners() {
  // Filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((b) => b.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      currentFilter = this.dataset.category
      renderProducts()
    })
  })

  // Search input
  searchInput.addEventListener("input", function () {
    currentSearch = this.value.toLowerCase()
    renderProducts()
  })
}

// Filter products based on current filter and search
function getFilteredProducts() {
  return products.filter((product) => {
    // Filter by category
    const matchesCategory = currentFilter === "all" || product.category === currentFilter

    // Filter by search term
    const matchesSearch =
      currentSearch === "" ||
      product.name.toLowerCase().includes(currentSearch) ||
      product.scientific.toLowerCase().includes(currentSearch) ||
      product.details.toLowerCase().includes(currentSearch)

    return matchesCategory && matchesSearch
  })
}

// Render products
function renderProducts() {
  const filteredProducts = getFilteredProducts()

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
            <div class="no-results">
                <p>Nessun prodotto trovato per i criteri di ricerca selezionati.</p>
            </div>
        `
    return
  }

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-header">
                <div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-scientific">${product.scientific}</p>
                </div>
                <div class="product-price">€${product.price}</div>
            </div>
            
            <div class="product-details">${product.details}</div>
            
            <div class="product-specs">
                <span class="spec-tag">${product.specs}</span>
            </div>
            
            <div class="category-tag">${getCategoryName(product.category)}</div>
            
            <button class="whatsapp-btn" onclick="orderProduct('${product.name}', '${product.price}')">
                📱 Ordina su WhatsApp
            </button>
        </div>
    `,
    )
    .join("")
}

// Get category display name
function getCategoryName(category) {
  const categoryNames = {
    marisco: "Crostacei",
    salmon: "Salmone",
    cefalopodi: "Cefalopodi",
    filetti: "Filetti di Pesce",
  }
  return categoryNames[category] || category
}

// Order product via WhatsApp
function orderProduct(productName, price) {
  const message = `Ciao! Sono interessato a ordinare: ${productName} - €${price}`
  const whatsappUrl = `https://wa.me/393356578341?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

class CookieManager {
  constructor() {
    this.cookieConsent = document.getElementById("cookieConsent")
    this.cookieModal = document.getElementById("cookieModal")
    this.acceptAllBtn = document.getElementById("acceptAll")
    this.acceptNecessaryBtn = document.getElementById("acceptNecessary")
    this.cookieSettingsBtn = document.getElementById("cookieSettings")
    this.manageCookiesLink = document.getElementById("manageCookies")
    this.closeModalBtn = document.getElementById("closeModal")
    this.saveSettingsBtn = document.getElementById("saveSettings")

    this.analyticsCookies = document.getElementById("analyticsCookies")
    this.marketingCookies = document.getElementById("marketingCookies")

    this.init()
  }

  init() {
    // Check if user has already made a choice
    if (!this.getCookie("cookieConsent")) {
      this.showBanner()
    }

    this.setupEventListeners()
    this.loadUserPreferences()
  }

  setupEventListeners() {
    this.acceptAllBtn?.addEventListener("click", () => this.acceptAll())
    this.acceptNecessaryBtn?.addEventListener("click", () => this.acceptNecessary())
    this.cookieSettingsBtn?.addEventListener("click", () => this.showSettings())
    this.manageCookiesLink?.addEventListener("click", (e) => {
      e.preventDefault()
      this.showSettings()
    })
    this.closeModalBtn?.addEventListener("click", () => this.hideSettings())
    this.saveSettingsBtn?.addEventListener("click", () => this.saveCustomSettings())

    // Close modal when clicking outside
    this.cookieModal?.addEventListener("click", (e) => {
      if (e.target === this.cookieModal) {
        this.hideSettings()
      }
    })
  }

  showBanner() {
    if (this.cookieConsent) {
      this.cookieConsent.classList.add("show")
    }
  }

  hideBanner() {
    if (this.cookieConsent) {
      this.cookieConsent.classList.remove("show")
    }
  }

  showSettings() {
    if (this.cookieModal) {
      this.cookieModal.classList.add("show")
      document.body.style.overflow = "hidden"
    }
  }

  hideSettings() {
    if (this.cookieModal) {
      this.cookieModal.classList.remove("show")
      document.body.style.overflow = "auto"
    }
  }

  acceptAll() {
    this.setCookie("cookieConsent", "all", 365)
    this.setCookie("analyticsCookies", "true", 365)
    this.setCookie("marketingCookies", "true", 365)
    this.hideBanner()
    this.loadAnalytics()
    this.loadMarketing()
  }

  acceptNecessary() {
    this.setCookie("cookieConsent", "necessary", 365)
    this.setCookie("analyticsCookies", "false", 365)
    this.setCookie("marketingCookies", "false", 365)
    this.hideBanner()
  }

  saveCustomSettings() {
    const analytics = this.analyticsCookies?.checked || false
    const marketing = this.marketingCookies?.checked || false

    this.setCookie("cookieConsent", "custom", 365)
    this.setCookie("analyticsCookies", analytics.toString(), 365)
    this.setCookie("marketingCookies", marketing.toString(), 365)

    if (analytics) {
      this.loadAnalytics()
    }

    if (marketing) {
      this.loadMarketing()
    }

    this.hideSettings()
    this.hideBanner()
  }

  loadUserPreferences() {
    const analytics = this.getCookie("analyticsCookies") === "true"
    const marketing = this.getCookie("marketingCookies") === "true"

    if (this.analyticsCookies) {
      this.analyticsCookies.checked = analytics
    }

    if (this.marketingCookies) {
      this.marketingCookies.checked = marketing
    }

    // Load scripts if user has consented
    if (analytics) {
      this.loadAnalytics()
    }

    if (marketing) {
      this.loadMarketing()
    }
  }

  loadAnalytics() {
    // Example: Load Google Analytics
    console.log("[v0] Analytics cookies accepted - would load Google Analytics here")
    // You would add your actual analytics code here
  }

  loadMarketing() {
    // Example: Load marketing pixels
    console.log("[v0] Marketing cookies accepted - would load marketing pixels here")
    // You would add your actual marketing code here
  }

  setCookie(name, value, days) {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
  }

  getCookie(name) {
    const nameEQ = name + "="
    const ca = document.cookie.split(";")
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }
}
