export interface TreatmentShowcase {
  Images?: { data: { attributes: TreatmentImages }};
  title: string;
  slug: string;
  Content: string;
  parent: TreatmentShowcase;
}

export interface TreatmentImages {
  name: string;
  url: string;
  formats: {
    large: {
      url: string;
    },
    small: {
      url: string;
    },
  };
}
