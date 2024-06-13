"use client";

import useWindowSize from "~/utils/hooks/useWindowSize";

const BookWidget = () => {
  const { height } = useWindowSize();

  return (
    <iframe
      title="Massage Book Booking Page"
      src="https://www.massagebook.com/therapists/the-mindful-body-massage/widget/services"
      frameBorder="0"
      width="100%"
      height={height > 0 ? height - 72 : 800}
    />
  );
};

export default BookWidget;
