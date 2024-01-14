import booksyInfo from "./booksyInfo.json";

// MOVE to  ENV
const url =
  "https://us.booksy.com/api/us/2/customer_api/businesses/1042065/?with_combos=1&with_markdown=1";

const headers = new Headers({
  "X-Api-Key": "widget-efab2853-7166-492f-b78f-925d33698cd4",
});

type BooksyInfoType = typeof booksyInfo;

const getBooksyInfo = async () => {
  let res = booksyInfo.business;

  try {
    const booksyRes = (await fetch(url, { method: "GET", headers }).then(
      (res) => res.json()
    )) as BooksyInfoType;
    res = booksyRes.business;
  } catch (err) {
    res = booksyInfo.business;
    console.log(err);
  }
  return res;
};

const getRelevantInfo = async () => {
  const info = await getBooksyInfo();

  const {
    booking_policy,
    deposit_policy,
    description,
    images,
    location,
    name,
    open_hours,
    phone,
    photo,
    reviews,
    reviews_rank,
    reviews_count,
    reviews_stars,
    service_categories,
    slug,
    subdomain,
    staff,
  } = info;
  return {
    booking_policy,
    deposit_policy,
    description,
    images,
    location,
    name,
    open_hours,
    phone: phone.replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", ""),
    photo,
    reviews,
    reviews_rank,
    reviews_count,
    reviews_stars,
    services: service_categories[0]?.services.filter(
      (service) => service.active
    ),
    slug,
    subdomain,
    staff,
  };
};

interface ProductType {
  padding_type: string;
  note: string;
  treatment: { name: string; id: number };
  description_type: string;
  active: boolean;
  description: string;
  treatment_id: number;
  is_online_service: boolean;
  variants: {
    duration: number;
    deposit_tax: number;
    prepayment_tax: number;
    price: number;
    deposit: number;
    id: number;
    label: string;
    type: string;
    combo_children: number[];
    staffer_id: number[];
    prepayment: 0;
    promotion: null;
    service_price: string;
    omnibus_price: null;
  }[];
  type: string;
  staffer_id: number[];
  photos: [];
  is_available_for_customer_booking: boolean;
  suggest_services: {
    input: string[];
    contexts: {
      business_categories: string[];
      is_b_listing: false;
      location: "40.36164951,-111.74894728";
    };
  };
  price: number;
  treatment_parent_id: number;
  name: string;
  id: number;
  combo_type: null;
  addons_available: boolean;
  is_traveling_service: boolean;
  order: number;
  service_price: string;
}

export type { ProductType };
export { getBooksyInfo, getRelevantInfo };
