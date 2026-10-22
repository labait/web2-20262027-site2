# Molinari

Landing page in italiano, costruita con Vite, Tailwind CSS 4 e Lucide.

## Avvio

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Prima della pubblicazione

- Impostare `VITE_WHATSAPP_NUMBER` nel proprio ambiente, nel formato internazionale senza simboli (prefisso incluso), e riavviare il server o ricompilare. Il numero e pubblico, non e una credenziale.
- Aggiornare prodotti e prezzi dimostrativi nell'array `products` in `src/app.js`.
- Sostituire la foto dimostrativa con una foto del titolare e aggiungere indirizzo, orari, dati legali e informativa privacy verificati.
- Senza numero configurato, i pulsanti WhatsApp spiegano che il contatto non e ancora disponibile e non inviano ordini.
- Il carrello e salvato nel browser. L'invio apre WhatsApp con il riepilogo; disponibilita, prezzo finale e ritiro richiedono la conferma della bottega. Non sono integrati pagamenti o gestione automatica degli ordini.

## Fotografie

Foto principale: Gustavo Fring, [Pexels](https://www.pexels.com/photo/man-in-white-long-sleeve-shirt-standing-near-green-trees-5163448/). Foto di prodotti e banco: Unsplash. Fotografie illustrative, non ritratti del titolare o fotografie della sua attivita.