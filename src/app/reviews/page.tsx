import { format, isBefore } from "date-fns";
import Image from "next/image";
import BooksyWidget from "~/components/BooksyWidget";
import PageTitle from "~/components/PageTitle";
import { getInitials } from "~/utils/getInitials";
import { getGoogleReviews } from "~/utils/reviews";

const Reviews = async () => {
  const googleReviews = await getGoogleReviews();

  // TODO: Refactor so that all reviews are merged and sorted by date.

  return (
    <>
      <section className="mx-auto w-full max-w-7xl bg-white py-24 text-primary-content">
        <PageTitle>Reviews</PageTitle>
        <div className="mx-auto mb-12 flex flex-wrap justify-center gap-2 sm:gap-6">
          <a
            href="https://maps.app.goo.gl/xrtaXNj6cttpM6mM7"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-lg border-2 border-primary px-4 py-2 shadow-xl"
          >
            <Image
              src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg"
              alt="Google Logo"
              width={64}
              height={40}
              className="translate-y-[2px]"
            />{" "}
            <span className="sr-only">Google</span>
            Reviews
          </a>
        </div>
        <div className="mx-auto flex flex-col gap-4 px-2">
          {/* {booksyReviews
            .sort((a, b) => {
              if (typeof a === "string" || typeof b === "string") {
                return 1;
              }
              return isBefore(new Date(a.created), new Date(b.created))
                ? 1
                : -1;
            })
            .map((rvw) => {
              const { id, review, user, created } = rvw;
              return (
                <div
                  key={id}
                  className="flex w-full flex-col gap-1 rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full">
                        {user.avatar ? (
                          <Image
                            src={user.avatar}
                            alt={user.first_name}
                            width={64}
                            height={64}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-primary text-xl font-bold text-white">
                            {getInitials(user.first_name, user.last_name)}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div>
                        <p className="capitalize">{user.first_name}</p>
                        <p className="text-xs">
                          {format(new Date(created), "MM/dd/yyyy")}
                        </p>
                      </div>
                      <p className="hidden sm:block">
                        <Image
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAAdVBMVEUCz6cAAAD///8F0KhK3cAAAwICzKUC3bL7/v4C2rAC1KsBXkyK6dcBcVsC164CxqAADgsCvZnL9e1X38UAGRQBm30d1LABi3ABY1AAIhsBtpMBqYgBTD0Bf2YARDem7uDa+PIAFBAAMikAOS7w/Ppq48t65tHIPAEtAAAHhklEQVR4nO2dC5uqLBCAcVkxME0r81q72e73/3/iB5oJ3inZ5DnOec5eWtK3cRhmRgTw0SGbDfv6s//a/h4+/0wOv9uv/U99/qaAbtDNfvt5guDPBZ4+t/tNN2wLlTX63p7u7/xjKc962n53wTZRaYP9ARaUf69TUJ0XHvYFygAq0+iBNX0P5gOX/j98N2GBSLphl/7NoEwgM4ONyAoE0u/PRYAyoRif3wIr4Em/TksBZQLB6YtnBRzpdjEqLYXCbDlWUJP+9260LvmvZgUc6aJUWgrkWEF99RdIylgfNgCqHrVMUsZa9S1w91KndyP1y+nus0rUzedSlcrU+rl5oC7WUEupzBUUl3/BoExgYQIF6mHJSmVqPZSom4/9okGZwD3FBMtXaqVWsHxLZcKsFSy8+5dSOAFqAIuK/LqFxoPMVvfv5pgme4qqwfUvLQB8LHhMrYWOrh/gZ8GBCi+nH7B8/18K3IOvdzNMlS+gRa8q+hX41QX1Fyw+ACiFhgFAC19VeKsVdXZZUVXIP4qK7jcOEJrlcE2ZERVisGOCXDzH4drHnw2V7LL4yCS+ha4Kvc6Giqyz8ZCEvH7AlsyIGplmwUm/hZYCtc6IahslKv3mrKgr6uyyoq6oK+rssqKuqCvq7LKiaomKWFLIZk4h9GJ6qBYVAYItzLIXyH5wX0pmFaIiRCw3CaNLHh/j+JZFYYosDJ+GVYdKc2zfuXkGJ2acBcgiT8IqQyU4zbwiKayF/fEYJU/CqkLFfmYWyasgBa4X+U85CDWo2c7xDKPBWeFSzYbuEyarApXi9ILeYbOdfAFGDeoQaPnXOMGyrKpQR8Q0vFSW9U2oz7D+AWrppcyGNzCNayJnr6pRBUDxFyNGUgVDtajshevFCYMgOEd5wy1QnyZlAkpR6e+3cIctC2P6xfWd2BC9xFlmLFCJSi9xQOgoWgmx4PkqNPJ8CRNQqlUbYSHqQ8DyL1wragISalWHyi5va/hExOWbmWY63QsoQ+0xRKpYfgA2LtN7lrqBtTe/woINTFerIlTTuLl9DQk6Plqahj3ZWlVp1Ut642eEA7NGPaKpJ1cUBA6m18jiTSCYaq2KtHrdDThM5Kbch4qmWsBE1CKJh4T+Az3pPI86dn6Eb3XGkPcZ9TOolM2lg2NxsxdBlth30IoGMNyvkRXWbQcvgBwqAtiC6dm+xEfP8475JQp912rRCrlVPPLhic8l3VPd1RgqHbhBYMfikOndzn4zQxbTwLGuQvK6cTixXw2jImgV4VCZzhvcD1e7kc4LqGNdBVmZfC1uEJVGG87VaKfzxQueLaTzUpVAZDnTP9cEVKrSMO7grE5hXENcK1Y4+zjquW48dbzqR0UE2oNJcpHO13ZG/PjeegIqDiUMewwVuX7ep9EaNk6thysgu0v50SbY6pyolDQeUml1HtN51HRoLOqY7D1TDGA+VEQ6SDt0TF+5PIyAxqJpXvgIKVudmgn0oEKYi6QVZtsZFEZQIbiQ1dVG564IffC1boVwJpAWFniN46vZpmVG8KhFs+zJ9vKxsZI7/ot+lbs+j8scpjuEdkmYHY2GXxA9ASLYHy9FCKPVK6jEv4qau6TYctkcOhq27MK86cNET0C93OhZd3wM8EK3al3+M3bvoR/9Bi03aMIWnmB62ZzzVRK1gA5UFvnyCZ0ZWGI2jzBplB4KE5leNhdMNZ9atehCFVPKDltinSdrKVYYZwdJ3YTLAibngW1UPp3oPRTtPOFxqHcNonK5lflKbiWG82ZPlIwQq+k0YeOgXVDpIOUs1Tjuns9YkZtzN5v6XQlV7NnrUKwFxsb/xOPe8UodAOGIO3vWb/RUscmtWTI1jiHBQ3dSKSlvOa9VVyBJz85dgkEfiVwStceDW8p8W+/HSzlSqWpw5xBAHf1dRqYiU1cQNHpX4bdSjEEXLeuNvNGYpsT9gO6BtZax9yO8a/cuChvQkaJBy2rBidBYol7Rhyojjyi1ARs7CWFTAR6fmWCcREI/ZDcuJM78eiGImV8rti0isDwKfIjvlgST8NK8byFTCJ6nZkUT2+bYVYWKXn6xWfeMstwzWoYidddinvIagji8NlnbgW3TSmy524EzVQJRo8NwfPy8BYE0m1pXmxeV9S6q2PHEsdawLUk6Y30VldHWJFjayJF+emTGZ1iofy9i7vGU3DSOgfyckFkfYqIxN8tmhs3ALMJw6YkLcz9vRQdaUML20bLX80AiuVGFWsCSoJq11FRn8UIewidUqgC1qHJj/3zxKjzBV8VZSsYC2r9Dvc+w80M7PwpKPV6cFLEg5snDKno2kNJii+zS4OxEtm1HTpgmiNUSXpi/qO4xRhZMufgR+GICX5wVqvaJSyQR+Y7KP/pwqGJZUVXIiqpCVlQVsqKqkBVVhayoKoSharTwjkbLGWm0SJRGS29ptKCZRsvEabT4nk5LGmq0UKQ+y29qtKipRkvFarQAr07LGi9frY/FonVaglujhc11Wi5ep0X4NdraYMHm2towQqdtOHTa3ESnLWN02ohHp+2NdNo0SqetuD402uDsQ6dt4z402oyvgl3eFof/Azk7d9GD59zkAAAAAElFTkSuQmCC"
                          alt="booksy logo"
                          width={16}
                          height={16}
                          className="mt-1"
                        />
                        <span className="sr-only">
                          {user.first_name} {user.last_name}&apos;s Review from
                          Booksy
                        </span>
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm">{review}</p>
                </div>
              );
            })} */}
          {googleReviews?.reviews
            ?.sort((a, b) => {
              if (typeof a === "string" || typeof b === "string") {
                return 1;
              }
              return isBefore(new Date(a.time), new Date(b.time)) ? 1 : -1;
            })
            .map((review) => {
              return (
                <div
                  key={review.text}
                  className="flex w-full flex-col gap-1 rounded-lg p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full">
                        {review.profile_photo_url ? (
                          <Image
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            width={64}
                            height={64}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-primary text-xl font-bold text-white">
                            {getInitials(
                              review.author_name.split(" ")[0] ?? "",
                              review.author_name.split(" ")[1] ?? ""
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <p className="capitalize">{review.author_name}</p>
                        <p className="text-xs">
                          {format(new Date(review.time * 1000), "MM/dd/yyyy")}
                        </p>
                      </div>
                      <a className="hidden sm:block" href={review.author_url}>
                        <Image
                          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                          alt="booksy logo"
                          width={16}
                          height={16}
                          className="mt-1"
                        />
                        <span className="sr-only">
                          {review.author_name}&apos;s Google Review Profile
                        </span>
                      </a>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="h-4 w-4 text-yellow-300 sm:h-6 sm:w-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm">{review.text}</p>
                </div>
              );
            })}
        </div>

        <div className="mx-auto my-12 flex flex-wrap justify-center gap-2 sm:gap-6">
          <a
            href="https://www.massagebook.com/therapists/the-mindful-body-massage/reviews?src=massagebook"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-lg border-2 border-primary px-4 py-2 shadow-xl"
          >
            <svg
              data-v-fa302388=""
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 0 1000 205"
              aria-label="Massage Therapy &amp; Online Booking - MassageBook"
              role="presentation"
            >
              <title
                id="Massage-Therapy &amp; Online Booking - MassageBook"
                lang="en"
              >
                Massage Therapy &amp; Online Booking - MassageBook
              </title>{" "}
              <g fill="currentColor">
                <g id="MbLogo">
                  <g id="Text">
                    <path
                      id="Fill-1"
                      d="M203.58,71.18h14.61V77a30.86,30.86,0,0,1,7.21-6,17.51,17.51,0,0,1,8-1.62q10.71,0,17,9.35A22,22,0,0,1,269,69.43q21.36,0,21.36,25.91v39.1H275.67V99.3q0-9.09-2.21-12.85T266,82.61q-6,0-8.8,4.55t-2.76,14.61v32.67H239.75V99.5q0-16.89-9.74-16.89-6.16,0-9,4.62t-2.83,14.54v32.67H203.58Z"
                      fill="#4A4C51"
                    ></path>{" "}
                    <path
                      id="Fill-3"
                      d="M318.07,102.62q0,9.09,4.87,14.8a16,16,0,0,0,12.6,5.78,16.78,16.78,0,0,0,13.12-5.58q5-5.79,5-14.68t-5-14.67a16.52,16.52,0,0,0-13-5.66,16.17,16.17,0,0,0-12.6,5.72A21.07,21.07,0,0,0,318.07,102.62Zm34.68-31.43h14.68v63.25H352.75v-6.63q-9,8.44-19.42,8.45a27.93,27.93,0,0,1-21.68-9.49q-8.52-9.67-8.51-24.15,0-14.24,8.51-23.71A27.42,27.42,0,0,1,333,69.43q11,0,19.8,9.09Z"
                      fill="#4A4C51"
                    ></path>{" "}
                    <path
                      id="Fill-5"
                      d="M420,82l-12.08,6.42q-2.86-5.83-7.08-5.84a4.85,4.85,0,0,0-3.44,1.33,4.46,4.46,0,0,0-1.43,3.41q0,3.64,8.44,7.21,11.63,5,15.65,9.22t4,11.36a19.92,19.92,0,0,1-6.75,15.33,23,23,0,0,1-15.85,5.85q-15.91,0-22.53-15.52L391.39,115a27.44,27.44,0,0,0,4,5.79,9,9,0,0,0,6.36,2.46q7.41,0,7.4-6.75,0-3.9-5.71-7.28c-1.47-.73-3-1.45-4.42-2.14s-3-1.4-4.48-2.14q-6.36-3.12-9-6.24a15.32,15.32,0,0,1-3.31-10.19,18,18,0,0,1,5.65-13.64,19.83,19.83,0,0,1,14-5.39Q414.05,69.43,420,82"
                      fill="#4A4C51"
                    ></path>{" "}
                    <path
                      id="Fill-7"
                      d="M471.27,82l-12.08,6.42q-2.85-5.83-7.07-5.84a4.88,4.88,0,0,0-3.45,1.33,4.45,4.45,0,0,0-1.42,3.41q0,3.64,8.44,7.21,11.63,5,15.65,9.22t4,11.36a19.92,19.92,0,0,1-6.75,15.33,23,23,0,0,1-15.84,5.85q-15.91,0-22.54-15.52L442.7,115a27.14,27.14,0,0,0,4,5.79A9.07,9.07,0,0,0,453,123.2q7.39,0,7.4-6.75,0-3.9-5.72-7.28c-1.47-.73-2.94-1.45-4.41-2.14s-3-1.4-4.48-2.14c-4.25-2.08-7.23-4.16-9-6.24a15.38,15.38,0,0,1-3.31-10.19,18.08,18.08,0,0,1,5.65-13.64,19.85,19.85,0,0,1,14-5.39q12.15,0,18,12.54"
                      fill="#4A4C51"
                    ></path>{" "}
                    <path
                      id="Fill-9"
                      d="M497.77,102.62q0,9.09,4.87,14.8a16,16,0,0,0,12.6,5.78,16.78,16.78,0,0,0,13.12-5.58q5-5.79,5-14.68t-5-14.67a16.52,16.52,0,0,0-13-5.66,16.17,16.17,0,0,0-12.6,5.72A21.07,21.07,0,0,0,497.77,102.62Zm34.68-31.43h14.68v63.25H532.45v-6.63q-9,8.44-19.42,8.45a28,28,0,0,1-21.69-9.49q-8.5-9.67-8.5-24.15,0-14.24,8.5-23.71a27.42,27.42,0,0,1,21.3-9.48q11,0,19.81,9.09Z"
                      fill="#4A4C51"
                    ></path>{" "}
                    <path
                      id="Fill-11"
                      d="M610.06,102.94q0-9.22-4.94-14.74a16.3,16.3,0,0,0-12.79-5.65,15.74,15.74,0,0,0-13.12,6.17q-4.35,5.52-4.35,14.29t4.35,14.15q4.74,6,13.12,6a16.05,16.05,0,0,0,13.25-6.1Q610.05,111.58,610.06,102.94Zm14,30c0,3-.09,5.62-.29,7.89a52.66,52.66,0,0,1-.81,6,26.75,26.75,0,0,1-6.1,12.27Q608.3,169,593.3,169q-12.66,0-20.84-6.82-8.44-7-9.75-19.42h14.68a16.7,16.7,0,0,0,2.79,7.21q4.55,5.91,13.25,5.91,16.05,0,16-19.68v-8.83q-8.7,8.89-20.06,8.9-12.93,0-21.17-9.36t-8.32-23.7q0-13.83,7.73-23.51,8.31-10.26,22-10.26a25.49,25.49,0,0,1,19.87,8.9V71.19h14.61Z"
                      fill="#4A4C51"
                    ></path>{" "}
                    <path
                      id="Fill-13"
                      d="M682.47,94.3q-3.06-11.68-14.74-11.69a15.15,15.15,0,0,0-5,.82,14.48,14.48,0,0,0-4.26,2.33,15,15,0,0,0-3.28,3.67,17,17,0,0,0-2.07,4.87Zm15,12H652.14q.58,7.8,5.07,12.41a15.41,15.41,0,0,0,11.49,4.54,14.9,14.9,0,0,0,9-2.6q3.51-2.59,8-9.61l12.33,6.89a48.34,48.34,0,0,1-6,8.34,32.25,32.25,0,0,1-6.81,5.72,27.78,27.78,0,0,1-7.86,3.28,38.45,38.45,0,0,1-9.16,1q-14.16,0-22.73-9.1t-8.57-24.28q0-15,8.31-24.29t22.21-9.16q14,0,22.08,8.9t8,24.48Z"
                      fill="#4A4C51"
                    ></path>{" "}
                    <path
                      id="Fill-15"
                      d="M760.14,103.27q0-9.1-4.94-14.81a15.8,15.8,0,0,0-12.53-5.85,16.83,16.83,0,0,0-13.12,5.65q-5,5.59-5,14.55,0,9.22,4.94,14.74a16.4,16.4,0,0,0,13,5.65,16.08,16.08,0,0,0,12.59-5.65A20.73,20.73,0,0,0,760.14,103.27ZM725.4,24.75V78.52q8.76-9.09,19.87-9.09A27.32,27.32,0,0,1,766.57,79q8.5,9.48,8.51,23.64,0,14.61-8.58,24.15A27.6,27.6,0,0,1,745,136.26q-11,0-19.61-8.45v6.63H710.78V24.75Z"
                      fill="#00BCC0"
                    ></path>{" "}
                    <path
                      id="Fill-17"
                      d="M799.82,102.62q0,9.48,5.07,15t13.7,5.58q8.56,0,13.7-5.52t5.13-14.74q0-9.22-5.13-14.74t-13.7-5.59A17.67,17.67,0,0,0,805,88.2q-5.21,5.58-5.2,14.42m-14.93-.26A31.42,31.42,0,0,1,794.69,79a34.6,34.6,0,0,1,47.93.07,32.21,32.21,0,0,1,9.74,23.77,32,32,0,0,1-9.81,23.83,33.52,33.52,0,0,1-24.22,9.55,32.11,32.11,0,0,1-23.83-9.75q-9.62-9.6-9.61-24.15"
                      fill="#00BCC0"
                    ></path>{" "}
                    <path
                      id="Fill-19"
                      d="M877.1,102.62q0,9.48,5.07,15t13.7,5.58q8.58,0,13.7-5.52t5.13-14.74q0-9.22-5.13-14.74t-13.7-5.59A17.69,17.69,0,0,0,882.3,88.2q-5.2,5.58-5.2,14.42m-14.93-.26A31.46,31.46,0,0,1,872,79a34.6,34.6,0,0,1,47.93.07,32.21,32.21,0,0,1,9.74,23.77,32,32,0,0,1-9.81,23.83,33.52,33.52,0,0,1-24.22,9.55,32.13,32.13,0,0,1-23.83-9.75q-9.62-9.6-9.61-24.15"
                      fill="#00BCC0"
                    ></path>{" "}
                    <polygon
                      id="Fill-21"
                      points="957.05 23.77 957.05 90.66 977.63 70.2 997.25 70.2 969.77 96.76 999.26 133.45 980.3 133.45 959.38 106.76 957.05 109.1 957.05 133.45 942.43 133.45 942.43 23.77 957.05 23.77"
                      fill="#00BCC0"
                    ></polygon>
                  </g>{" "}
                  <g id="Icon">
                    <path
                      id="MbIcon-Background"
                      d="M84.54,185.84c-5.85-15.28-37.42-37.43-50.16-50.17a70.93,70.93,0,1,1,100.32,0C119.73,150.64,91,170.89,84.54,185.84Z"
                      fill="#FFFFFF"
                    ></path>{" "}
                    <path
                      id="MbIcon-Border"
                      d="M144.33,25.75A84.55,84.55,0,0,0,24.76,145.31c16.06,16.06,49.55,40.29,59.78,59.78,10.24-19.53,42.83-42.82,59.79-59.78A84.55,84.55,0,0,0,144.33,25.75ZM134.7,135.67c-15,15-43.66,35.22-50.16,50.17-5.85-15.28-37.42-37.43-50.16-50.17a70.93,70.93,0,1,1,100.32,0Z"
                      fill="#00BCC0"
                    ></path>{" "}
                    <path
                      id="MbIcon-Man"
                      d="M142.09,84.93c0,.15,0,.3,0,.45v.3a57.36,57.36,0,0,1-16.85,40.38c-12.14,12.15-34.85,26.4-40.7,40.71-5.85-14.31-30.37-30.37-40.7-40.71A57.33,57.33,0,0,1,27,85.76a3.38,3.38,0,0,1,0-.45,2.38,2.38,0,0,1,0-.38,11.86,11.86,0,0,1,3.48-7.84,12,12,0,0,1,16.93,0,12.15,12.15,0,0,1,3.52,7.84,33.61,33.61,0,1,0,67.21.75v-.37c0-.13,0-.26,0-.38a11.83,11.83,0,0,1,3.48-7.85,12,12,0,0,1,20.45,7.85ZM69.66,70.63a21,21,0,1,1,0,29.76A21.06,21.06,0,0,1,69.66,70.63Z"
                      fill="#4A4C51"
                    ></path>{" "}
                    <path
                      id="MbIcon-OverMan"
                      d="M124.28,43.88a57.55,57.55,0,0,0-80.44.93A12,12,0,0,0,60.79,61.75l.25-.27a33.61,33.61,0,0,1,47.27.26l.12.12.11-.1a11.95,11.95,0,0,0,16.92-16.87A12.37,12.37,0,0,0,124.28,43.88Z"
                      fill="#00BCC0"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>{" "}
            <span className="sr-only">Massage Book</span> Reviews
          </a>
        </div>
        <iframe
          src="https://www.massagebook.com/therapists/the-mindful-body-massage/widget/reviews"
          frameBorder="0"
          width="100%"
          height="1000"
          className="mt-4"
        ></iframe>
        <div className="mt-12 flex justify-center">
          <BooksyWidget />
        </div>
      </section>
    </>
  );
};

export const metadata = {
  title: "Reviews | The Mindful Body Massage",
  description: `5/5 stars - Read other's experiences with The Mindful Body Massage.`,
};

export default Reviews;
