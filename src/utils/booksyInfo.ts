import booksyInfo from "./booksyInfo.json";
const getBooksyInfo = () => {
  return booksyInfo.business;
};

const getRelevantInfo = () => {
  const info = getBooksyInfo();
  const {
    name,
    location,
    open_hours,
    phone,
    photo,
    reviews,
    service_categories,
    slug,
    subdomain,
    staff,
  } = info;
  return {
    name,
    location,
    open_hours,
    phone: phone.replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", ""),
    photo,
    reviews,
    services: service_categories[0]?.services.filter(
      (service) => service.active
    ),
    slug,
    subdomain,
    staff,
  };
};

export { getBooksyInfo, getRelevantInfo };
