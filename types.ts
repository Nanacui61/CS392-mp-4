export type MuseumRecord = {
    id: number;
    title: string;
    primaryimageurl?: string;
    dated?: string;
    people: {
      name: string;
    }[];
  };
  