import { db } from "../services/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

export interface MobilColor {
  name: string;
  hex: string;
  image: string;
}

export interface HargaMobil {
  model: string;
  price: number;
  discount?: number;
}

export interface Exterior {
  name: string;
  image: string;
}

export interface Interior {
  name: string;
  image: string;
}

export interface Mobil {
  id: number;
  id_doc: string; // id dokumen dari Firestore
  nama: string;
  slug: string;
  cover?: string;
  colors?: MobilColor[];
  image?: string[];
  deskripsi?: string;
  harga?: HargaMobil[];
  exterior?: Exterior[];
  interior?: Interior[];
}

export const fetchMobils = async (): Promise<Mobil[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "mobil"));
    const data: Mobil[] = querySnapshot.docs.map((doc) => {
      const mobilData = doc.data() as Omit<Mobil, "id_doc" | "colors" | "harga"> & {
        colors?: { [key: string]: { hex: string; image: string } };
        harga?: { [key: string]: { price: number; discount?: number } };
      };

      // colors
      let colorsArray: MobilColor[] = [];
      if (mobilData.colors) {
        colorsArray = Object.entries(mobilData.colors).map(([name, val]) => ({
          name,
          hex: val.hex,
          image: val.image,
        }));
      }

      // harga
      let hargaArray: HargaMobil[] = [];
      if (mobilData.harga) {
        hargaArray = Object.entries(mobilData.harga).map(([model, val]) => ({
          model,
          price: val.price,
          discount: val.discount,
        }));
      }

      return {
        ...mobilData,
        id_doc: doc.id,
        colors: colorsArray,
        harga: hargaArray,
      };
    });

    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

export const fetchMobilBySlug = async (slug: string): Promise<Mobil | null> => {
  try {
    const q = query(
      collection(db, "mobil"),
      where("slug", "==", slug),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return null;

    const docSnap = querySnapshot.docs[0];
    const mobilData = docSnap.data() as Omit<Mobil, "id_doc" | "colors" | "exterior" | "interior"> & {
      colors?: { [key: string]: { hex: string; image: string } };
      exterior?: { name: string; images: string }[]; // langsung array
      interior?: { name: string; images: string }[]; // langsung array
    };

    // colors
    let colorsArray: MobilColor[] = [];
    if (mobilData.colors) {
      colorsArray = Object.entries(mobilData.colors).map(([name, val]) => ({
        name,
        hex: val.hex,
        image: val.image,
      }));
    }

    // exterior (sudah array dari firestore)
    let exteriorArray: Exterior[] = [];
    if (mobilData.exterior) {
      exteriorArray = mobilData.exterior.map((item) => ({
        name: item.name,
        image: item.images, // mapping "images" → "image"
      }));
    }

    let interiorArray: Interior[] = [];
    if (mobilData.interior){
      interiorArray = mobilData.interior.map((item) => ({
        name: item.name,
        image: item.images, // mapping "images" → "image"
      }))
    }

    return {
      ...mobilData,
      id_doc: docSnap.id,
      colors: colorsArray,
      exterior: exteriorArray,
      interior: interiorArray,
    };
  } catch (error) {
    console.error("Error fetching mobil by slug: ", error);
    return null;
  }
};

export const fetchLatestMobil = async (): Promise<Mobil | null> => {
  try {
    const querySnapshot = await getDocs(collection(db, "mobil"));
    if (querySnapshot.empty) return null;

    // Ambil dokumen terakhir (anggap ini mobil terbaru)
    const docSnap = querySnapshot.docs[querySnapshot.docs.length - 1];
    const mobilData = docSnap.data() as Omit<
      Mobil,
      "id_doc" | "colors" | "exterior" | "interior" | "harga"
    > & {
      colors?: any; // bisa array atau object
      exterior?: any;
      interior?: any;
      harga? : any;
    };

    // ✅ Colors bisa array atau object
    let colorsArray: MobilColor[] = [];
    if (mobilData.colors) {
      if (Array.isArray(mobilData.colors)) {
        colorsArray = mobilData.colors.map((item) => ({
          name: item.name,
          hex: item.hex,
          image: item.image,
        }));
      } else {
        colorsArray = Object.entries(mobilData.colors).map(([name, val]: any) => ({
          name,
          hex: val.hex,
          image: val.image,
        }));
      }
    }

     let hargaArray: HargaMobil[] = [];
if (mobilData.harga) {
  if (Array.isArray(mobilData.harga)) {
    // ✅ Kalau array langsung map
    hargaArray = mobilData.harga.map((item) => ({
      model: item.model,
      price: item.price,
      discount: item.discount ?? 0,
    }));
  } else {
    // ✅ Kalau object (misalnya dari Firestore dengan key dinamis)
    hargaArray = Object.entries(mobilData.harga).map(([model, val]: any) => ({
      model,
      price: val.price,
      discount: val.discount ?? 0,
    }));
  }
}


    // ✅ Exterior bisa array atau object
    let exteriorArray: Exterior[] = [];
    if (mobilData.exterior) {
      if (Array.isArray(mobilData.exterior)) {
        exteriorArray = mobilData.exterior.map((item) => ({
          name: item.name,
          image: item.images,
        }));
      } else {
        exteriorArray = Object.entries(mobilData.exterior).map(([name, val]: any) => ({
          name,
          image: val.images,
        }));
      }
    }

    // ✅ Interior bisa array atau object
    let interiorArray: Interior[] = [];
    if (mobilData.interior) {
      if (Array.isArray(mobilData.interior)) {
        interiorArray = mobilData.interior.map((item) => ({
          name: item.name,
          image: item.images,
        }));
      } else {
        interiorArray = Object.entries(mobilData.interior).map(([name, val]: any) => ({
          name,
          image: val.images,
        }));
      }
    }

    return {
      ...mobilData,
      id_doc: docSnap.id,
      colors: colorsArray,
      exterior: exteriorArray,
      interior: interiorArray,
      harga: hargaArray
    };
  } catch (error) {
    console.error("Error fetching latest mobil: ", error);
    return null;
  }
};

