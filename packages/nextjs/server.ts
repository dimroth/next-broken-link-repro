const offerData = [
  { slug: "un", name: "offre 1" },
  { slug: "deux", name: "offre 2" },
  { slug: "trois", name: "offre 3" },
];

export const getOfferBySlug = (slug: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const selectedOffer = offerData.find((o) => o.slug === slug);
      if (selectedOffer) {
        resolve(selectedOffer);
      } else {
        resolve(null);
      }
    }, 300);
  });

export const getAllOffers = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(offerData);
    }, 300);
  });
