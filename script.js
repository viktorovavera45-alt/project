const products = [
  {
    id: 1,
    name: "Rose Cloud Essence",
    category: "Skincare",
    skin: "Dry",
    price: 2950,
    oldPrice: 3400,
    rating: 4.9,
    tag: "Best seller",
    badge: "Peptides",
    ingredients: "Rose water, niacinamide",
    description: "Легкая эссенция для сияния и комфорта кожи.",
    colors: ["#f4d8cb", "#eed4b9"],
    popularity: 97,
    isNew: false
  },
  {
    id: 2,
    name: "Velvet Dew Cream",
    category: "Skincare",
    skin: "Sensitive",
    price: 3250,
    oldPrice: 3590,
    rating: 4.8,
    tag: "Calm skin",
    badge: "Ceramides",
    ingredients: "Ceramides, oat milk",
    description: "Кремовый барьерный уход для чувствительной кожи.",
    colors: ["#f7e3db", "#d8e0d3"],
    popularity: 92,
    isNew: true
  },
  {
    id: 3,
    name: "Glass Tint Blush",
    category: "Makeup",
    skin: "Все",
    price: 1890,
    oldPrice: 0,
    rating: 4.7,
    tag: "New shade",
    badge: "Cream blush",
    ingredients: "Jojoba, vitamin E",
    description: "Кремовые румяна с полупрозрачным сияющим финишем.",
    colors: ["#efc0b5", "#e78a78"],
    popularity: 88,
    isNew: true
  },
  {
    id: 4,
    name: "Pure Balance Toner",
    category: "Skincare",
    skin: "Oily",
    price: 1790,
    oldPrice: 2190,
    rating: 4.6,
    tag: "Oil control",
    badge: "PHA",
    ingredients: "PHA acids, green tea",
    description: "Балансирующий тоник для сужения пор и свежести.",
    colors: ["#d2e0ce", "#f7f1ea"],
    popularity: 84,
    isNew: false
  },
  {
    id: 5,
    name: "Golden Hour SPF 50",
    category: "Skincare",
    skin: "Combination",
    price: 2490,
    oldPrice: 2790,
    rating: 4.9,
    tag: "Daily SPF",
    badge: "Sun shield",
    ingredients: "Rice extract, squalane",
    description: "Невесомая защита с мягким сиянием и без белого следа.",
    colors: ["#f0d9b8", "#f8ede0"],
    popularity: 95,
    isNew: false
  },
  {
    id: 6,
    name: "Moon Silk Mask",
    category: "Body",
    skin: "Dry",
    price: 2150,
    oldPrice: 2490,
    rating: 4.8,
    tag: "Night ritual",
    badge: "Overnight",
    ingredients: "Panthenol, shea butter",
    description: "Ночная маска для глубокого восстановления кожи лица и шеи.",
    colors: ["#dcd0e8", "#f6e7df"],
    popularity: 90,
    isNew: false
  },
  {
    id: 7,
    name: "Mirror Glow Foundation",
    category: "Makeup",
    skin: "Все",
    price: 3390,
    oldPrice: 3790,
    rating: 4.7,
    tag: "Studio finish",
    badge: "Buildable",
    ingredients: "Peptides, hyaluronic acid",
    description: "Тональное средство со средним покрытием и glow-финишем.",
    colors: ["#e6c7aa", "#f3e4d7"],
    popularity: 86,
    isNew: true
  },
  {
    id: 8,
    name: "Botanic Scalp Elixir",
    category: "Haircare",
    skin: "Sensitive",
    price: 2590,
    oldPrice: 0,
    rating: 4.5,
    tag: "Hair care",
    badge: "Scalp tonic",
    ingredients: "Mint, peptides",
    description: "Тоник для кожи головы с ощущением чистоты и объема.",
    colors: ["#d8e3ce", "#c7d3e5"],
    popularity: 78,
    isNew: false
  },
  {
    id: 9,
    name: "Soft Veil Cleansing Oil",
    category: "Skincare",
    skin: "Combination",
    price: 2290,
    oldPrice: 2590,
    rating: 4.8,
    tag: "Double cleanse",
    badge: "Oil wash",
    ingredients: "Camellia oil, enzymes",
    description: "Масло для мягкого демакияжа и чистых пор без сухости.",
    colors: ["#f6dfc5", "#ebe7d6"],
    popularity: 93,
    isNew: false
  },
  {
    id: 10,
    name: "Amber Body Souffle",
    category: "Body",
    skin: "Все",
    price: 1990,
    oldPrice: 2390,
    rating: 4.6,
    tag: "SPA mood",
    badge: "Body cream",
    ingredients: "Amber oil, cacao butter",
    description: "Плотное суфле для тела с теплыми амбровыми нотами.",
    colors: ["#d8b697", "#f5e8da"],
    popularity: 82,
    isNew: false
  },
  {
    id: 11,
    name: "Petal Jelly Serum",
    category: "Skincare",
    skin: "Oily",
    price: 2790,
    oldPrice: 3150,
    rating: 4.7,
    tag: "Fresh texture",
    badge: "Gel serum",
    ingredients: "Niacinamide, centella",
    description: "Гелевая сыворотка для сияния без перегруза и липкости.",
    colors: ["#c9e3d9", "#f6e1d7"],
    popularity: 91,
    isNew: true
  },
  {
    id: 12,
    name: "Velour Brow Fix",
    category: "Makeup",
    skin: "Все",
    price: 1490,
    oldPrice: 1690,
    rating: 4.4,
    tag: "Everyday",
    badge: "Brow gel",
    ingredients: "Plant waxes",
    description: "Фиксирующий гель для бровей с натуральной укладкой.",
    colors: ["#e1c7b9", "#d7cec4"],
    popularity: 74,
    isNew: false
  }
];

const articles = [
  {
    id: 1,
    title: "Как собрать утренний уход из 4 шагов",
    tag: "Skin",
    readTime: "5 мин",
    date: "03 апреля",
    description: "Простой алгоритм: очищение, актив, крем и SPF без перегруза кожи.",
    colors: ["#f2d5c8", "#e7efe3"]
  },
  {
    id: 2,
    title: "Кремовые текстуры в макияже: почему они снова в центре внимания",
    tag: "Make up",
    readTime: "7 мин",
    date: "01 апреля",
    description: "Разбираем, как работать с glow-румянами, тоном и хайлайтерами.",
    colors: ["#f0c7bd", "#f8e6dc"]
  },
  {
    id: 3,
    title: "Домашний SPA-вечер: лосьон, маска и музыка",
    tag: "Lifestyle",
    readTime: "4 мин",
    date: "28 марта",
    description: "Небольшой ритуал, который превращает обычный вечер в восстановление.",
    colors: ["#d8d3ea", "#f2e9df"]
  },
  {
    id: 4,
    title: "Как понять, что коже нужен барьерный крем",
    tag: "Skin",
    readTime: "6 мин",
    date: "25 марта",
    description: "Покраснение, шелушение и реактивность как сигналы на восстановление.",
    colors: ["#d9e8d3", "#fbe9de"]
  },
  {
    id: 5,
    title: "Три способа носить сияющий тон без эффекта маски",
    tag: "Make-up",
    readTime: "8 мин",
    date: "21 марта",
    description: "Техника нанесения пальцами, кистью и влажным спонжем.",
    colors: ["#ecc3b4", "#f0dbc4"]
  },
  {
    id: 6,
    title: "Мини-ритуалы, которые делают магазин запоминающимся",
    tag: "Lifestyle",
    readTime: "5 мин",
    date: "18 марта",
    description: "Атмосфера сервиса, ароматы, карточки рекомендаций и персонализация.",
    colors: ["#d2ddd1", "#f7ebe0"]
  }
];

const stores = [
  {
    id: "moscow",
    city: "Москва",
    address: "Патриаршие пруды, ул. Малая Бронная, 18",
    schedule: "Ежедневно, 10:00-22:00",
    phone: "+7 (495) 555-10-18",
    features: ["Skin bar", "Макияж-зона", "Pickup 2 часа"],
    description:
      "Флагманский бутик с открытым столом тестеров, диагностиками кожи и консультациями визажиста."
  },
  {
    id: "spb",
    city: "Санкт-Петербург",
    address: "Новая Голландия, набережная Адмиралтейского канала, 2",
    schedule: "Ежедневно, 11:00-21:00",
    phone: "+7 (812) 555-44-22",
    features: ["Fragrance corner", "Подарочная упаковка", "Weekend events"],
    description:
      "Пространство с ароматическим корнером, сезонными pop-up стойками и уютной lounge-зоной."
  },
  {
    id: "kazan",
    city: "Казань",
    address: "Кремлевская улица, 9",
    schedule: "Пн-Вс, 10:00-21:00",
    phone: "+7 (843) 555-37-37",
    features: ["Express delivery", "Hair care shelf", "Beauty classes"],
    description:
      "Компактный шоурум для быстрых покупок, мастер-классов и консультаций по домашнему уходу."
  }
];

const routineRecommendations = {
  Dry: {
    Glow: {
      title: "Glow-комплекс для сухой кожи",
      morning: ["Soft Veil Cleansing Oil", "Rose Cloud Essence", "Velvet Dew Cream", "Golden Hour SPF 50"],
      evening: ["Cream cleanser", "Rose Cloud Essence", "Moon Silk Mask"],
      tip: "Ставим акцент на увлажнение и мягкое сияние без активов, которые могут сушить."
    },
    Calm: {
      title: "Успокаивающий барьерный уход",
      morning: ["Soft cleanser", "Oat toner", "Velvet Dew Cream", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Velvet Dew Cream", "Moon Silk Mask"],
      tip: "Ищем керамиды, овес и пантеонол, чтобы убрать чувство стянутости и реактивность."
    },
    Balance: {
      title: "Легкое увлажнение без перегруза",
      morning: ["Soft cleanser", "Rose Cloud Essence", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Petal Jelly Serum", "Velvet Dew Cream"],
      tip: "Даже сухой коже иногда нужен баланс: оставляем комфорт, но уменьшаем плотность формул."
    },
    Lift: {
      title: "Пептидный лифтинг-ритуал",
      morning: ["Soft cleanser", "Rose Cloud Essence", "Velvet Dew Cream", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Peptide serum", "Moon Silk Mask"],
      tip: "Пептиды и насыщенные кремы помогают сделать рельеф более гладким и упругим."
    }
  },
  Oily: {
    Glow: {
      title: "Glow для жирной кожи",
      morning: ["Pure Balance Toner", "Petal Jelly Serum", "Golden Hour SPF 50"],
      evening: ["Soft Veil Cleansing Oil", "Pure Balance Toner", "Petal Jelly Serum"],
      tip: "Сияние строим на легких слоях и водных текстурах, а не на плотных маслах."
    },
    Calm: {
      title: "Успокаивающий баланс",
      morning: ["Pure Balance Toner", "Petal Jelly Serum", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Centella ampoule", "Gel moisturizer"],
      tip: "Убираем раздражение за счет центеллы и мягких кислот без пересушивания."
    },
    Balance: {
      title: "Контроль себума",
      morning: ["Pure Balance Toner", "Petal Jelly Serum", "Golden Hour SPF 50"],
      evening: ["Soft Veil Cleansing Oil", "Pure Balance Toner", "Clay mask 2x week"],
      tip: "Работаем с порами и блеском, но не уходим в агрессивное матирование."
    },
    Lift: {
      title: "Лифтинг в легких формулах",
      morning: ["Pure Balance Toner", "Peptide gel serum", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Petal Jelly Serum", "Gel moisturizer"],
      tip: "Подтягивающий эффект можно собрать и в гелевых текстурах, если коже жарко."
    }
  },
  Combination: {
    Glow: {
      title: "Сбалансированное сияние",
      morning: ["Soft Veil Cleansing Oil", "Rose Cloud Essence", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Petal Jelly Serum", "Velvet Dew Cream"],
      tip: "Комбинируем легкие активы и точечное питание, чтобы зоны чувствовали себя одинаково комфортно."
    },
    Calm: {
      title: "Comfort routine",
      morning: ["Soft cleanser", "Rose Cloud Essence", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Velvet Dew Cream", "Moon Silk Mask"],
      tip: "Успокаиваем чувствительные участки и не перегружаем Т-зону."
    },
    Balance: {
      title: "Равновесие для mixed skin",
      morning: ["Pure Balance Toner", "Petal Jelly Serum", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Pure Balance Toner", "Velvet Dew Cream"],
      tip: "Комбинированной коже важна гибкая схема, а не одна плотность средств на все лицо."
    },
    Lift: {
      title: "Упругость и комфорт",
      morning: ["Rose Cloud Essence", "Peptide serum", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Velvet Dew Cream", "Moon Silk Mask"],
      tip: "Ставим лифтинг-активы в центр схемы, сохраняя комфорт на сухих зонах."
    }
  },
  Sensitive: {
    Glow: {
      title: "Мягкое сияние без раздражения",
      morning: ["Velvet Dew Cream", "Rose Cloud Essence", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Velvet Dew Cream", "Moon Silk Mask"],
      tip: "Сияние создаем на увлажнении и защите барьера, избегая лишних кислот."
    },
    Calm: {
      title: "SOS-ритуал для реактивной кожи",
      morning: ["Soft cleanser", "Velvet Dew Cream", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Velvet Dew Cream", "Moon Silk Mask"],
      tip: "Минимум шагов, максимум комфорта: без сильных отдушек и с барьерной поддержкой."
    },
    Balance: {
      title: "Нежный баланс",
      morning: ["Soft cleanser", "Rose Cloud Essence", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Petal Jelly Serum", "Velvet Dew Cream"],
      tip: "Ищем спокойные формулы для уменьшения жирного блеска без раздражения."
    },
    Lift: {
      title: "Упругость с деликатным подходом",
      morning: ["Rose Cloud Essence", "Velvet Dew Cream", "Golden Hour SPF 50"],
      evening: ["Soft cleanser", "Peptide serum", "Velvet Dew Cream"],
      tip: "Антивозрастной уход тоже может быть мягким, если выбирать щадящие текстуры."
    }
  }
};

const state = {
  activeTab: localStorage.getItem("beauty-active-tab") || "home",
  search: "",
  category: "Все",
  skin: "Все",
  sort: "popular",
  article: "Все",
  showOnlyFavorites: false,
  favorites: JSON.parse(localStorage.getItem("beauty-favorites") || "[]"),
  cart: JSON.parse(localStorage.getItem("beauty-cart") || "[]")
};

const elements = {
  tabButtons: Array.from(document.querySelectorAll(".nav-tab")),
  panels: Array.from(document.querySelectorAll(".tab-panel")),
  jumpButtons: Array.from(document.querySelectorAll("[data-jump]")),
  favoritesCount: document.getElementById("favoritesCount"),
  cartCount: document.getElementById("cartCount"),
  openFavoritesButton: document.getElementById("openFavoritesButton"),
  openCartButton: document.getElementById("openCartButton"),
  closeCartButton: document.getElementById("closeCartButton"),
  drawerBackdrop: document.getElementById("drawerBackdrop"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartItems: document.getElementById("cartItems"),
  cartTotal: document.getElementById("cartTotal"),
  checkoutButton: document.getElementById("checkoutButton"),
  catalogGrid: document.getElementById("catalogGrid"),
  catalogSearch: document.getElementById("catalogSearch"),
  catalogSort: document.getElementById("catalogSort"),
  categoryFilters: Array.from(document.querySelectorAll("#categoryFilters .chip")),
  skinFilters: Array.from(document.querySelectorAll("#skinFilters .chip")),
  showFavoriteProducts: document.getElementById("showFavoriteProducts"),
  favoritesSummary: document.getElementById("favoritesSummary"),
  shippingBarFill: document.getElementById("shippingBarFill"),
  shippingMessage: document.getElementById("shippingMessage"),
  ritualForm: document.getElementById("ritualForm"),
  ritualResult: document.getElementById("ritualResult"),
  spendRange: document.getElementById("clubSpendRange"),
  clubSpendValue: document.getElementById("clubSpendValue"),
  clubCashbackValue: document.getElementById("clubCashbackValue"),
  clubTierValue: document.getElementById("clubTierValue"),
  clubTierFill: document.getElementById("clubTierFill"),
  clubTierHint: document.getElementById("clubTierHint"),
  consultationForm: document.getElementById("consultationForm"),
  consultationSummary: document.getElementById("consultationSummary"),
  articleFilters: Array.from(document.querySelectorAll("#articleFilters .chip")),
  articleGrid: document.getElementById("articleGrid"),
  storeTabs: document.getElementById("storeTabs"),
  storeDetail: document.getElementById("storeDetail"),
  comparisonRange: document.getElementById("comparisonRange"),
  comparisonFrame: document.getElementById("comparisonFrame"),
  saleCountdown: document.getElementById("saleCountdown"),
  newsletterForm: document.getElementById("newsletterForm"),
  newsletterEmail: document.getElementById("newsletterEmail"),
  contactForm: document.getElementById("contactForm"),
  toastContainer: document.getElementById("toastContainer"),
  reveals: Array.from(document.querySelectorAll(".reveal"))
};

function formatPrice(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} RUB`;
}

function persistState() {
  localStorage.setItem("beauty-favorites", JSON.stringify(state.favorites));
  localStorage.setItem("beauty-cart", JSON.stringify(state.cart));
  localStorage.setItem("beauty-active-tab", state.activeTab);
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  elements.toastContainer.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 2800);
}

function setActiveTab(tabName) {
  state.activeTab = tabName;

  elements.tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabName);
  });

  elements.panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === tabName);
  });

  persistState();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getFilteredProducts() {
  let result = [...products];

  if (state.showOnlyFavorites) {
    result = result.filter((product) => state.favorites.includes(product.id));
  }

  if (state.category !== "Все") {
    result = result.filter((product) => product.category === state.category);
  }

  if (state.skin !== "Все") {
    result = result.filter((product) => product.skin === state.skin || product.skin === "Все");
  }

  if (state.search.trim()) {
    const query = state.search.trim().toLowerCase();
    result = result.filter((product) =>
      [product.name, product.badge, product.ingredients, product.description]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }

  switch (state.sort) {
    case "price-asc":
      result.sort((first, second) => second.price - first.price);
      break;
    case "price-desc":
      result.sort((first, second) => first.price - second.price);
      break;
    case "newest":
      result.sort(
        (first, second) =>
          Number(second.isNew) - Number(first.isNew) || second.popularity - first.popularity
      );
      break;
    default:
      result.sort((first, second) => second.popularity - first.popularity);
  }

  return result;
}

function renderCatalog() {
  const filteredProducts = getFilteredProducts();
  elements.catalogGrid.innerHTML = "";

  if (!filteredProducts.length) {
    elements.catalogGrid.innerHTML = `
      <div class="empty-state">
        <strong>Ничего не найдено</strong>
        <p>Попробуйте сбросить фильтры или изменить поисковый запрос.</p>
      </div>
    `;
    return;
  }

  filteredProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-visual" style="--product-a:${product.colors[0]}; --product-b:${product.colors[1]}">
        <div class="product-badge-row">
          <span class="product-tag">${product.tag}</span>
          <button class="favorite-button ${state.favorites.includes(product.id) ? "is-active" : ""}" data-action="favorite" data-id="${product.id}" aria-label="Добавить в избранное">
            ${state.favorites.includes(product.id) ? "♥" : "♡"}
          </button>
        </div>
      </div>
      <div class="product-meta">
        <div class="product-title-row">
          <div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
          <span class="product-tag">${product.badge}</span>
        </div>
        <div class="meta-row">
          <span>${product.category}</span>
          <span>${product.skin}</span>
          <span>★ ${product.rating}</span>
        </div>
        <div class="product-prices">
          <strong>${formatPrice(product.price)}</strong>
          ${product.oldPrice ? `<del>${formatPrice(product.oldPrice)}</del>` : ""}
        </div>
        <div class="product-actions">
          <button class="primary-button full-width" data-action="cart" data-id="${product.id}">В корзину</button>
        </div>
      </div>
    `;
    elements.catalogGrid.appendChild(card);
  });
}

function getCartCount() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateHeaderCounts() {
  elements.favoritesCount.textContent = state.favorites.length;
  elements.cartCount.textContent = getCartCount();
}

function updateFavoritesSummary() {
  if (!state.favorites.length) {
    elements.favoritesSummary.textContent =
      "Пока ничего не добавлено. Отмечай понравившиеся товары сердцем.";
    return;
  }

  const names = products
    .filter((product) => state.favorites.includes(product.id))
    .slice(0, 3)
    .map((product) => product.name);

  const extra = state.favorites.length > 3 ? ` и еще ${state.favorites.length - 3}` : "";
  elements.favoritesSummary.textContent = `Сейчас сохранено: ${names.join(", ")}${extra}.`;
}

function updateShippingProgress() {
  const total = getCartTotal();
  const freeShippingThreshold = 5900;
  const progress = Math.min((total / freeShippingThreshold) * 100, 100);
  elements.shippingBarFill.style.width = `${progress}%`;

  if (total === 0) {
    elements.shippingMessage.textContent = "Добавьте товары в корзину";
    return;
  }

  if (total >= freeShippingThreshold) {
    elements.shippingMessage.textContent = "Бесплатная доставка уже доступна";
    return;
  }

  elements.shippingMessage.textContent = `До бесплатной доставки осталось ${formatPrice(freeShippingThreshold - total)}`;
}

function renderCart() {
  const cartProducts = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  elements.cartItems.innerHTML = "";

  if (!cartProducts.length) {
    elements.cartItems.innerHTML = `
      <div class="empty-state">
        <strong>Корзина пуста</strong>
        <p>Добавьте товары из каталога, чтобы увидеть заказ здесь.</p>
      </div>
    `;
  } else {
    cartProducts.forEach((product) => {
      const card = document.createElement("article");
      card.className = "cart-item";
      card.innerHTML = `
        <div class="cart-item-visual" style="--product-a:${product.colors[0]}; --product-b:${product.colors[1]}"></div>
        <div>
          <strong>${product.name}</strong>
          <p>${formatPrice(product.price)}</p>
          <div class="cart-item-controls">
            <button class="qty-button" data-cart-action="decrease" data-id="${product.id}">-</button>
            <span>${product.quantity}</span>
            <button class="qty-button" data-cart-action="increase" data-id="${product.id}">+</button>
          </div>
        </div>
        <button class="icon-button" data-cart-action="remove" data-id="${product.id}" aria-label="Удалить товар">x</button>
      `;
      elements.cartItems.appendChild(card);
    });
  }

  elements.cartTotal.textContent = formatPrice(getCartTotal());
  updateHeaderCounts();
  updateShippingProgress();
  persistState();
}

function addToCart(productId) {
  const existingItem = state.cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }

  renderCart();
  showToast("Товар добавлен в корзину");
}

function updateCartItem(productId, action) {
  const item = state.cart.find((entry) => entry.id === productId);
  if (!item) {
    return;
  }

  if (action === "increase") {
    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;
  }

  if (action === "remove" || item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== productId);
  }

  renderCart();
}

function toggleFavorite(productId) {
  if (state.favorites.includes(productId)) {
    state.favorites = state.favorites.filter((id) => id !== productId);
    showToast("Товар удален из избранного");
  } else {
    state.favorites.push(productId);
    showToast("Товар добавлен в избранное");
  }

  updateFavoritesSummary();
  updateHeaderCounts();
  renderCatalog();
  persistState();
}

function openCart() {
  elements.cartDrawer.classList.add("is-open");
  elements.drawerBackdrop.classList.add("is-visible");
  elements.cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  elements.cartDrawer.classList.remove("is-open");
  elements.drawerBackdrop.classList.remove("is-visible");
  elements.cartDrawer.setAttribute("aria-hidden", "true");
}

function renderRoutineResult(skinType, goal, texture) {
  const recommendation = routineRecommendations[skinType]?.[goal];

  if (!recommendation) {
    elements.ritualResult.innerHTML = `
      <div class="placeholder-state">
        <strong>Пока нет комбинации</strong>
        <p>Выберите другие параметры, и я соберу новую схему ухода.</p>
      </div>
    `;
    return;
  }

  const textureText = {
    Light: "легких флюидных формул",
    Creamy: "кремовых и сбалансированных текстур",
    Rich: "насыщенных питательных средств"
  }[texture];

  elements.ritualResult.innerHTML = `
    <article class="ritual-card">
      <div>
        <p class="section-kicker">Персональный ритуал</p>
        <h3>${recommendation.title}</h3>
        <p>Схема собрана для ${skinType.toLowerCase()} skin с акцентом на ${goal.toLowerCase()} и любовь к ${textureText}.</p>
      </div>
      <div>
        <strong>Утро</strong>
        <ul>${recommendation.morning.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <strong>Вечер</strong>
        <ul>${recommendation.evening.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <strong>Комментарий</strong>
        <p>${recommendation.tip}</p>
      </div>
    </article>
  `;
}

function updateClubSummary() {
  const amount = Number(elements.spendRange.value);
  const tier = amount >= 9000 ? "Velvet" : amount >= 5000 ? "Glow" : "Blush";
  const percent = tier === "Velvet" ? 8 : tier === "Glow" ? 5 : 3;
  const cashback = Math.round(amount * (percent / 100));
  const progress = Math.min((amount / 9000) * 100, 100);

  elements.clubSpendValue.textContent = formatPrice(amount);
  elements.clubCashbackValue.textContent = `${cashback} бонусов`;
  elements.clubTierValue.textContent = tier;
  elements.clubTierFill.style.width = `${progress}%`;

  if (tier === "Velvet") {
    elements.clubTierHint.textContent = "Максимальный статус уже доступен";
    return;
  }

  const nextLevelTarget = tier === "Glow" ? 9000 : 5000;
  elements.clubTierHint.textContent = `До следующего уровня осталось ${formatPrice(nextLevelTarget - amount)}`;
}

function renderArticles() {
  const filteredArticles =
    state.article === "Все"
      ? articles
      : articles.filter((article) => article.tag === state.article);

  elements.articleGrid.innerHTML = "";

  filteredArticles.forEach((article) => {
    const card = document.createElement("article");
    card.className = "journal-card";
    card.innerHTML = `
      <div class="journal-cover" style="--cover-a:${article.colors[0]}; --cover-b:${article.colors[1]}"></div>
      <div class="journal-meta">
        <span class="journal-tag">${article.tag}</span>
        <span>${article.date}</span>
        <span>${article.readTime}</span>
      </div>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <button class="secondary-button">Читать статью</button>
    `;
    elements.articleGrid.appendChild(card);
  });
}

function renderStores() {
  elements.storeTabs.innerHTML = "";

  stores.forEach((store, index) => {
    const button = document.createElement("button");
    button.className = `store-button ${index === 0 ? "is-active" : ""}`;
    button.textContent = store.city;
    button.dataset.store = index === 1 ? "spbb" : store.id;
    elements.storeTabs.appendChild(button);
  });

  renderStoreDetail(stores[0].id);
}

function renderStoreDetail(storeId) {
  const store = stores.find((entry) => entry.id === storeId);
  if (!store) {
    return;
  }

  elements.storeDetail.innerHTML = `
    <p class="section-kicker">${store.city}</p>
    <h3>${store.address}</h3>
    <div class="store-meta">
      ${store.features.map((feature) => `<span class="store-chip">${feature}</span>`).join("")}
    </div>
    <p>${store.description}</p>
    <strong>${store.schedule}</strong>
    <p>${store.phone}</p>
  `;
}

function updateCountdown() {
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6, 20, 0, 0);
  const diff = target - now;

  if (diff <= 0) {
    elements.saleCountdown.textContent = "Капсула уже обновлена";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  elements.saleCountdown.textContent = `До обновления капсулы: ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.reveals.forEach((element) => observer.observe(element));
}

function bindEvents() {
  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab(button.dataset.tab);
    });
  });

  elements.jumpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTab(button.dataset.jump);
    });
  });

  elements.catalogSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    state.showOnlyFavorites = false;
    renderCatalog();
  });

  elements.catalogSort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderCatalog();
  });

  elements.categoryFilters.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.category = chip.dataset.category;
      elements.categoryFilters.forEach((button) => {
        button.classList.toggle("is-active", button === chip);
      });
      state.showOnlyFavorites = false;
      renderCatalog();
    });
  });

  elements.skinFilters.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.skin = chip.dataset.skin;
      elements.skinFilters.forEach((button) => {
        button.classList.toggle("is-active", button === chip);
      });
      state.showOnlyFavorites = false;
      renderCatalog();
    });
  });

  elements.catalogGrid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) {
      return;
    }

    const productId = Number(target.dataset.id);
    if (target.dataset.action === "favorite") {
      toggleFavorite(productId);
    }

    if (target.dataset.action === "cart") {
      addToCart(productId);
      openCart();
    }
  });

  elements.showFavoriteProducts.addEventListener("click", () => {
    state.showOnlyFavorites = !state.showOnlyFavorites;
    elements.showFavoriteProducts.textContent = state.showOnlyFavorites
      ? "Показать весь каталог"
      : "Показать избранное";
    renderCatalog();
  });

  elements.openFavoritesButton.addEventListener("click", () => {
    state.showOnlyFavorites = true;
    setActiveTab("catalog");
    elements.showFavoriteProducts.textContent = "Показать весь каталог";
    renderCatalog();
  });

  elements.openCartButton.addEventListener("click", openCart);
  elements.closeCartButton.addEventListener("click", closeCart);
  elements.drawerBackdrop.addEventListener("click", closeCart);

  elements.cartItems.addEventListener("click", (event) => {
    const target = event.target.closest("[data-cart-action]");
    if (!target) {
      return;
    }

    updateCartItem(Number(target.dataset.id), target.dataset.cartAction);
  });

  elements.checkoutButton.addEventListener("click", () => {
    if (!state.cart.length) {
      showToast("Сначала добавьте товары в корзину");
      return;
    }

    showToast("Учебный checkout: здесь можно дать студентам новую задачу");
  });

  elements.ritualForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const skinType = document.getElementById("skinType").value;
    const goal = document.getElementById("skinGoal").value;
    const texture = document.getElementById("skinTexture").value;
    renderRoutineResult(skinType, goal, texture);
    showToast("Ритуал подобран");
  });

  elements.spendRange.addEventListener("input", updateClubSummary);

  elements.consultationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = document.getElementById("consultationType").value;
    const date = document.getElementById("consultationDate").value;
    const time = document.getElementById("consultationTime").value;

    elements.consultationSummary.innerHTML = `
      <strong>Запись подтверждена</strong>
      <p>${type}</p>
      <p>${date} в ${time}</p>
      <p>Клиенту можно отправить email-подтверждение или добавить синхронизацию с календарем.</p>
    `;
    showToast("Слот забронирован");
  });

  elements.articleFilters.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.article = chip.dataset.article;
      elements.articleFilters.forEach((button) => {
        button.classList.toggle("is-active", button === chip);
      });
      renderArticles();
    });
  });

  elements.storeTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".store-button");
    if (!button) {
      return;
    }

    Array.from(elements.storeTabs.children).forEach((child) => {
      child.classList.toggle("is-active", child === button);
    });
    renderStoreDetail(button.dataset.store);
  });

  elements.comparisonRange.addEventListener("input", (event) => {
    elements.comparisonFrame.style.setProperty("--split", `${event.target.value}%`);
  });

  elements.newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast(`Подписка оформлена: ${elements.newsletterEmail.value}`);
    elements.newsletterForm.reset();
  });

  elements.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contactName").value;
    showToast(`Сообщение от ${name} отправлено`);
    elements.contactForm.reset();
  });
}

function init() {
  updateHeaderCounts();
  updateFavoritesSummary();
  renderCatalog();
  renderCart();
  renderArticles();
  renderStores();
  updateClubSummary();
  updateCountdown();
  bindEvents();
  setActiveTab(state.activeTab);
  setupRevealObserver();

  window.setInterval(updateCountdown, 1000);
}

init();
