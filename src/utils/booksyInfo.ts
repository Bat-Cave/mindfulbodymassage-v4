import booksyInfo from "./booksyInfo.json";
const getBooksyInfo = () => {
  return booksyInfo.business;
};

const getRelevantInfo = () => {
  const info = getBooksyInfo();
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

export { getBooksyInfo, getRelevantInfo };
