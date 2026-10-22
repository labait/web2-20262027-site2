import './site.css'
import { createIcons, Sprout, Sparkles, ArrowUpRight, ShoppingBasket, Menu, ArrowRight, MessageCircle, Heart, Flower2, Leaf, Handshake, BadgeCheck, Smile, Check, MessagesSquare, X, Plus, Minus } from 'lucide'

const icons = { Sprout, Sparkles, ArrowUpRight, ShoppingBasket, Menu, ArrowRight, MessageCircle, Heart, Flower2, Leaf, Handshake, BadgeCheck, Smile, Check, MessagesSquare, X, Plus, Minus }
const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
const products = [
  { id: 'mele', name: 'Mele croccanti', detail: 'Dolci, succose, una tira l’altra.', category: 'frutta', price: 220, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=650&q=85' },
  { id: 'pere', name: 'Pere di stagione', detail: 'La dolcezza delle cose semplici.', category: 'frutta', price: 280, image: 'https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=650&q=85' },
  { id: 'zucca', name: 'Zucca deliziosa', detail: 'Il colore più buono dell’autunno.', category: 'verdura', price: 190, image: 'https://images.unsplash.com/photo-1506919258185-6078bba55d2a?auto=format&fit=crop&w=650&q=85' },
  { id: 'broccoli', name: 'Broccoli freschi', detail: 'Verdi, teneri e pieni di bontà.', category: 'verdura', price: 260, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=650&q=85' },
]
const money = (cents) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(cents / 100)
let cart = {}
try {
  const saved = JSON.parse(localStorage.getItem('molinari-cart') || '{}')
  cart = Object.fromEntries(products.filter(product => Number.isInteger(saved?.[product.id]) && saved[product.id] > 0 && saved[product.id] <= 30).map(product => [product.id, saved[product.id]]))
} catch {}
let filter = 'tutti'
const icon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#contenuto">Vai al contenuto</a>
  <div class="announcement flex items-center justify-center gap-2 px-4 text-center">${icon('sparkles')} Una bella novità: da quest’anno ordini anche online! <a href="#come-funziona">Scopri come ${icon('arrow-up-right')}</a></div>
  <header class="site-header">
    <div class="page-width flex items-center justify-between gap-6">
      <a href="#" class="brand" aria-label="Molinari, pagina iniziale">${icon('sprout')}<span>molinari<span class="brand-sub">FRUTTA, VERDURA E SORRISI</span></span><span class="brand-dot">.</span></a>
      <nav class="desktop-nav flex items-center gap-8" aria-label="Navigazione principale"><a href="#filosofia">La nostra bottega</a><a href="#stagione">Di stagione</a><a href="#come-funziona">Come ordinare</a></nav>
      <div class="flex items-center gap-3"><button class="cart-trigger icon-button" aria-label="Apri il cestino" title="Il tuo cestino">${icon('shopping-basket')}<span class="cart-count" hidden>0</span></button><a href="#stagione" class="button button-green header-order">Fai la tua spesa ${icon('arrow-up-right')}</a><button class="menu-toggle icon-button" aria-label="Apri menu" aria-expanded="false" aria-controls="mobile-nav">${icon('menu')}</button></div>
    </div>
    <nav id="mobile-nav" class="mobile-nav" aria-label="Navigazione mobile" hidden><a href="#filosofia">La nostra bottega</a><a href="#stagione">Di stagione</a><a href="#come-funziona">Come ordinare</a></nav>
  </header>
  <main id="contenuto">
    <section class="hero" aria-labelledby="hero-title">
      <img class="hero-photo" src="/molinari-hero.jpg" alt="Un uomo sorridente nel frutteto con un cesto di mele appena raccolte" fetchpriority="high" width="1800" height="1200" />
      <div class="hero-wash"></div>
      <div class="page-width hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">${icon('sprout')} IL TUO FRUTTIVENDOLO DI FIDUCIA</span>
          <h1 id="hero-title">Molinari<span>Buono, fresco,<br>di stagione.</span></h1>
          <p>La natura sceglie la stagione.<br>Noi scegliamo il meglio per te.</p>
          <p class="hero-description">Frutta e verdura di qualità, prezzi giusti e il piacere di conoscerci per nome. Tutto l’anno.</p>
          <div class="hero-actions flex flex-wrap items-center gap-3"><a class="button button-green" href="#stagione">Scopri i prodotti ${icon('arrow-right')}</a><button class="button button-outline whatsapp-action">${icon('message-circle')} Scrivici su WhatsApp</button></div>
          <span class="hero-note">${icon('heart')} Piccole quantità. Grande cura.</span>
        </div>
        <div class="hero-stamp" aria-label="Scelto con cura, ogni giorno"><span>SCELTO CON CURA</span>${icon('flower-2')}<span>BUONO PER DAVVERO</span></div>
        <div class="photo-note"><span>Le cose buone</span><strong>cominciano da qui.</strong></div>
      </div>
    </section>
    <div class="values-strip"><div class="page-width grid grid-cols-2 md:grid-cols-4"><span>${icon('leaf')} Il ritmo delle stagioni</span><span>${icon('handshake')} Rapporti diretti</span><span>${icon('badge-check')} Qualità, senza compromessi</span><span>${icon('smile')} Il prezzo giusto, sempre</span></div></div>
    <section id="stagione" class="season-section page-width section-space" aria-labelledby="season-title">
      <div class="section-heading flex flex-wrap items-end justify-between gap-6"><div><span class="eyebrow">DAL BANCO ALLA TUA TAVOLA</span><h2 id="season-title">Ogni stagione ha il suo <span class="script-word">buono.</span></h2><p>Adesso è il momento di questi piccoli capolavori.</p></div><span class="season-label">${icon('leaf')} La selezione d’autunno</span></div>
      <div class="catalog-toolbar flex flex-wrap items-center justify-between gap-4"><div class="filters flex gap-2" role="group" aria-label="Filtra prodotti"><button data-filter="tutti" aria-pressed="true">Tutto il buono <span>4</span></button><button data-filter="frutta" aria-pressed="false">Frutta</button><button data-filter="verdura" aria-pressed="false">Verdura</button></div><span class="catalog-hint">Selezionati in piccole quantità ${icon('check')}</span></div>
      <div id="products" class="product-grid grid grid-cols-2 lg:grid-cols-4 gap-5"></div>
      <div class="catalog-bottom flex flex-wrap items-center justify-between gap-3"><p>Una piccola anteprima del nostro banco. <strong>Prezzi dimostrativi, da confermare.</strong></p><button class="text-link whatsapp-action">Cerchi qualcosa in particolare? Scrivici ${icon('arrow-up-right')}</button></div>
    </section>
    <section id="filosofia" class="philosophy"><div class="page-width philosophy-grid"><div class="philosophy-image"><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85" alt="Un banco ricco di ortaggi freschi e colorati" loading="lazy" width="1000" height="850" /><span class="image-label">Meno passaggi, più bontà.</span></div><div class="philosophy-copy"><span class="eyebrow">PIACERE, SIAMO MOLINARI</span><h2>Una bottega.<br>Un rapporto <span class="script-word">vero.</span></h2><p>Per noi non sei un numero e la frutta non è tutta uguale. Ci piace scegliere bene, consigliarti meglio e vederti tornare con un sorriso.</p><div class="philosophy-point">${icon('handshake')}<div><h3>Conosciamo chi ci rifornisce.</h3><p>Contatti diretti con i distributori, per scegliere qualità e mantenere prezzi onesti.</p></div></div><div class="philosophy-point">${icon('sprout')}<div><h3>Poco, ma davvero buono.</h3><p>Piccole forniture selezionate con attenzione. La qualità viene prima della quantità.</p></div></div><div class="philosophy-point">${icon('messages-square')}<div><h3>Ci siamo, in prima persona.</h3><p>Un consiglio, una domanda, due parole: il contatto con te è la parte più bella.</p></div></div></div></div></section>
    <section id="come-funziona" class="ordering section-space"><div class="page-width"><div class="ordering-top"><div><span class="eyebrow">LA TUA BOTTEGA, ANCORA PIÙ VICINA</span><h2>La spesa di sempre.<br>Un modo <span class="script-word">nuovo.</span></h2></div><p>Da quest’anno puoi ordinare anche online o su WhatsApp. La stessa cura del banco, con la comodità di scegliere da dove vuoi.</p></div><div class="steps grid md:grid-cols-3"><div><span class="step-number">01</span><h3>Scegli il tuo buono.</h3><p>Dai un’occhiata alla selezione e aggiungi al cestino quello che ti va.</p></div><div><span class="step-number">02</span><h3>Mandaci la tua lista.</h3><p>Invia il cestino su WhatsApp. Preferisci due parole? Scrivici direttamente.</p></div><div><span class="step-number">03</span><h3>Al resto pensiamo noi.</h3><p>Confermiamo disponibilità e prezzo, poi concordiamo come ricevere la tua spesa.</p></div></div><div class="ordering-actions flex flex-wrap gap-3"><a class="button button-green" href="#stagione">Prepara il tuo cestino ${icon('shopping-basket')}</a><button class="button button-outline whatsapp-action">${icon('message-circle')} Parliamone su WhatsApp</button></div></div></section>
    <section class="closing"><div class="page-width flex flex-wrap items-center justify-between gap-6"><div><span class="eyebrow">LE COSE SEMPLICI, FATTE BENE.</span><h2>Ci mettiamo la faccia.<br>E scegliamo il <span class="script-word">meglio.</span></h2></div><a href="#stagione" class="button button-green">Ci vediamo al banco? ${icon('arrow-up-right')}</a></div></section>
  </main>
  <footer><div class="page-width flex flex-wrap items-center justify-between gap-6"><a href="#" class="brand footer-brand">${icon('sprout')}<span>molinari<span class="brand-sub">FRUTTA, VERDURA E SORRISI</span></span><span class="brand-dot">.</span></a><p>Di stagione. Di qualità. Di fiducia.</p><span>© ${new Date().getFullYear()} Molinari</span></div></footer>
  <dialog id="basket-dialog" aria-labelledby="basket-title"><div class="basket-head flex items-center justify-between"><div><span class="eyebrow">LA TUA SPESA</span><h2 id="basket-title">Il tuo cestino</h2></div><button class="icon-button close-dialog" aria-label="Chiudi il cestino">${icon('x')}</button></div><div id="basket-items"></div><div id="basket-summary"></div></dialog>
  <dialog id="contact-dialog" aria-labelledby="contact-title"><div class="flex items-center justify-between gap-4"><h2 id="contact-title">Ci sentiamo presto.</h2><button class="icon-button close-dialog" aria-label="Chiudi contatti">${icon('x')}</button></div><p>Il numero WhatsApp di Molinari non è ancora disponibile su questo sito. Il tuo cestino resta salvato: potrai inviarlo non appena il contatto sarà attivo.</p><button class="button button-green close-dialog">Va bene ${icon('check')}</button></dialog>
  <div id="toast" role="status" aria-live="polite"></div>
`

const refreshIcons = () => createIcons({ icons, attrs: { 'stroke-width': 1.7 } })
const toast = (message) => {
  const element = document.querySelector('#toast')
  element.textContent = message
  element.classList.add('visible')
  clearTimeout(toast.timer)
  toast.timer = setTimeout(() => element.classList.remove('visible'), 2600)
}
const renderProducts = () => {
  document.querySelector('#products').innerHTML = products.filter(product => filter === 'tutti' || product.category === filter).map(product => `
    <article class="product"><div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy" width="650" height="520" /><span class="product-tag">${product.category === 'frutta' ? 'Frutta' : 'Verdura'} di stagione</span></div><div class="product-content"><h3>${product.name}</h3><p>${product.detail}</p><div class="flex items-center justify-between gap-2"><span class="price">${money(product.price)} <small>/ kg</small></span><button data-add="${product.id}" class="add-button" aria-label="Aggiungi 1 kg di ${product.name} al cestino" title="Aggiungi 1 kg">${icon('plus')}</button></div></div></article>
  `).join('')
  refreshIcons()
}
const renderCart = () => {
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)
  const badge = document.querySelector('.cart-count')
  badge.textContent = count
  badge.hidden = count === 0
  document.querySelector('.cart-trigger').setAttribute('aria-label', `Apri il cestino, ${count} kg selezionati`)
  const selected = products.filter(product => cart[product.id])
  document.querySelector('#basket-items').innerHTML = selected.length ? selected.map(product => `<div class="basket-row"><img src="${product.image}" alt="" width="70" height="70" /><div class="basket-product"><h3>${product.name}</h3><p>${money(product.price)} / kg</p><div class="quantity"><button class="icon-button" data-change="${product.id}" data-amount="-1" aria-label="Rimuovi 1 kg di ${product.name}">${icon('minus')}</button><span>${cart[product.id]} kg</span><button class="icon-button" data-change="${product.id}" data-amount="1" aria-label="Aggiungi 1 kg di ${product.name}" ${cart[product.id] >= 30 ? 'disabled' : ''}>${icon('plus')}</button></div></div><strong>${money(product.price * cart[product.id])}</strong></div>`).join('') : `<div class="empty-cart">${icon('shopping-basket')}<h3>Qui c’è posto per qualcosa di buono.</h3><p>La selezione di stagione ti aspetta.</p><button class="button button-green close-dialog">Continua la spesa ${icon('arrow-right')}</button></div>`
  document.querySelector('#basket-summary').innerHTML = selected.length ? `<div class="basket-total flex justify-between"><span>Totale indicativo</span><strong>${money(selected.reduce((sum, product) => sum + product.price * cart[product.id], 0))}</strong></div><p class="basket-note">Prezzi dimostrativi. Disponibilità, peso effettivo e totale saranno confermati dalla bottega.</p><label for="order-notes">Una richiesta per noi? <span>(facoltativo)</span></label><textarea id="order-notes" rows="2" maxlength="500" placeholder="Ad esempio: preferisco le pere più mature…"></textarea><button id="send-order" class="button button-green">${icon('message-circle')} Invia il cestino su WhatsApp ${icon('arrow-up-right')}</button>` : ''
  refreshIcons()
}
const saveCart = () => {
  try { localStorage.setItem('molinari-cart', JSON.stringify(cart)) } catch {}
  renderCart()
}
const openWhatsApp = (order = false) => {
  if (!whatsappNumber) {
    document.querySelector('#basket-dialog').close()
    document.querySelector('#contact-dialog').showModal()
    return
  }
  const lines = products.filter(product => cart[product.id]).map(product => `• ${product.name}: ${cart[product.id]} kg`)
  const notes = document.querySelector('#order-notes')?.value.trim()
  const text = order ? `Ciao Molinari! Vorrei ordinare:\n${lines.join('\n')}\n\nTotale indicativo: ${money(products.reduce((sum, product) => sum + product.price * (cart[product.id] || 0), 0))}.\nPotete confermare disponibilità, prezzo e modalità di ritiro?${notes ? `\n\nNote: ${notes}` : ''}` : 'Ciao Molinari! Vorrei informazioni sui prodotti di stagione.'
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
}

document.addEventListener('click', (event) => {
  const add = event.target.closest('[data-add]')
  if (add) {
    const id = add.dataset.add
    if ((cart[id] || 0) >= 30) return toast('Per quantità superiori a 30 kg, contatta la bottega.')
    cart[id] = (cart[id] || 0) + 1
    saveCart()
    toast(`${products.find(product => product.id === id).name}: 1 kg aggiunto al cestino`)
  }
  const change = event.target.closest('[data-change]')
  if (change) {
    const id = change.dataset.change
    cart[id] = Math.min(30, (cart[id] || 0) + Number(change.dataset.amount))
    if (cart[id] <= 0) delete cart[id]
    saveCart()
    const nextControl = document.querySelector(`[data-change="${id}"][data-amount="${change.dataset.amount}"]`)
    ;(nextControl || document.querySelector('#basket-dialog .close-dialog')).focus()
  }
  const tab = event.target.closest('[data-filter]')
  if (tab) {
    filter = tab.dataset.filter
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button === tab)))
    renderProducts()
  }
  if (event.target.closest('.cart-trigger')) { renderCart(); document.querySelector('#basket-dialog').showModal() }
  if (event.target.closest('.close-dialog')) event.target.closest('dialog').close()
  if (event.target.closest('.whatsapp-action')) openWhatsApp()
  if (event.target.closest('#send-order')) openWhatsApp(true)
  if (event.target.closest('.menu-toggle')) {
    const button = document.querySelector('.menu-toggle')
    const isOpen = button.getAttribute('aria-expanded') === 'true'
    button.setAttribute('aria-expanded', String(!isOpen))
    document.querySelector('#mobile-nav').hidden = isOpen
  }
  if (event.target.closest('#mobile-nav a')) {
    document.querySelector('#mobile-nav').hidden = true
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false')
  }
})
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close() } }))
renderProducts()
renderCart()