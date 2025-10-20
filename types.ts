
export interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: {
    weekdays: string;
    weekend: string;
  };
  socials?: {
    instagram: string;
    facebook: string;
  };
}
