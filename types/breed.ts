export interface IBreedData {
  id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
  life_span: string;
  weight: { imperial: string; metric: string };
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  cat_friendly?: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  hypoallergenic: number;
  rare: number;
  hairless: number;
  lap?: number;
  indoor?: number;
  cfa_url?: string;
  wikipedia_url?: string;
  vcahospitals_url?: string;
  reference_image_id?: string;
  alt_names?: string;
  country_code?: string;
}

export interface IBreedImage {
  id: string;
  url: string;
  width: number;
  height: number;
}
