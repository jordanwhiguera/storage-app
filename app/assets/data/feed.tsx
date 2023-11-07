export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface FeedItem {
  id: string;
  image: string;
  type: string;
  title: string;
  distance: number;
  price: number;
  carType: string; // Change to number if necessary
  deliveryPrice: number;
  stars: number;
  numReviews: number;
  coordinate: Coordinate;
}

const feedData: FeedItem[] = [
  {
    id: "0",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
  {
    id: "1",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2291304,
    },
  },
  {
    id: "2",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.2515637,
      longitude: -16.3991304,
    },
  },
  {
    id: "3",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2991304,
    },
  },
  {
    id: "4",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
  {
    id: "5",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2291304,
    },
  },
  {
    id: "6",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.2515637,
      longitude: -16.3991304,
    },
  },
  {
    id: "7",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg",
    type: "Entire Flat",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2991304,
    },
  },
  {
    id: "8",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
  {
    id: "9",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2291304,
    },
  },
  {
    id: "10",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg",
    type: "Private Property",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.2515637,
      longitude: -16.3991304,
    },
  },
  {
    id: "11",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg",
    type: "Entire Flat",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2991304,
    },
  },
  {
    id: "12",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.3915637,
      longitude: -16.6291304,
    },
  },
  {
    id: "13",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2291304,
    },
  },
  {
    id: "14",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.2515637,
      longitude: -16.3991304,
    },
  },
  {
    id: "15",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/4.jpg",
    type: "20' x 20' Garage",
    title:
      "Great concrete space to store your vehicle! Protected from the sun by at least 50%. ",
    distance: 2,
    price: 3,
    carType: "Courier+",
    deliveryPrice: 20,
    stars: 120,
    numReviews: 13,
    coordinate: {
      latitude: 28.4815637,
      longitude: -16.2991304,
    },
  },
];
export default feedData;
