const reviews = [
  "Not exagerating, best massage I've ever had. You have such a gift! Thank you!",
  "Phenomenal massage! I love the relaxing atmosphere and the pressure was perfect. I also felt very comforted and safe/respected throughout the massage. Thank you!",
  "I have had a lot of massages. I will be back! One of the best I have had.",
  "12/10 - wonderful experience",
  "Loved the use of hot towels, peppermint, and CDD. Pressure was perfect. I felt you cared about my needs and really focused on making sure  I felt okay throughout. Thank you! ❤️",
  "Always an amazing experience.",
  "Overall great experience! Will be coming back! She knows what she is doing and has awesome communication skills. Loved it!",
  "You are amazing at what you do! 5 ⭐'s",
];

const featuredReviews = [
  "You are amazing at what you do! 5 ⭐'s",
  "Loved the use of hot towels, peppermint, and CDD. Pressure was perfect. I felt you cared about my needs and really focused on making sure  I felt okay throughout. Thank you! ❤️",
  "12/10 - wonderful experience",
];

interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

interface GooglePlaceDetails {
  result: {
    name: string;
    rating: number;
    reviews: GoogleReview[];
  };
  status: string;
}

const placeId = process.env.GOOGLE_PLACE_ID;
const googleApiKey = process.env.GOOGLE_API_KEY;

// Unlimited Daily Requests
// 6000 Requests a minute

async function getGoogleReviews(): Promise<GooglePlaceDetails["result"]> {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,review&key=${googleApiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error("Failed to fetch place details");
    }
    const data = (await response.json()) as GooglePlaceDetails;
    return data.result;
  } catch (error) {
    console.error("Error fetching place details:", error);
    throw error;
  }
}

export { featuredReviews, getGoogleReviews };
export default reviews;
