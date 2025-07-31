import RestaurantCard from "./RestaurantCard";
import "./Body.css";

const Body = () => {
  let listOfRestaurants = [
    {
      info: {
        id: "506982",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/8af8806a-476e-4f67-8766-205f084fc646_506982.JPG",
        locality: "Narayan Peth",
        areaName: "Shaniwar Peth",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.6,
        parentId: "630",
        avgRatingString: "4.6",
        totalRatingsString: "2.6K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 00:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹119",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/mcdonalds-narayan-peth-shaniwar-peth-rest506982",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "24437",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/ec82bc28-336a-4f1b-a893-d7e8da3ce008_24437.JPG",
        locality: "Perugate",
        areaName: "Sadashiv Peth",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        parentId: "2456",
        avgRatingString: "4.1",
        totalRatingsString: "5.8K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹79",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/dominos-pizza-perugate-sadashiv-peth-rest24437",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "243625",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4c1906b4-f727-434b-8496-a2e669269dde_243625.JPG",
        locality: "Deccan Gymkhana",
        areaName: "Deccan Gymkhana",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
        avgRating: 4.3,
        parentId: "547",
        avgRatingString: "4.3",
        totalRatingsString: "3.8K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹59",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "4.7K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/kfc-deccan-gymkhana-rest243625",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "21001",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/5bcb6fe3-3b47-46e9-b3ed-45c3ad817b81_21001.JPG",
        locality: "F.C. Road",
        areaName: "Shivajinagar",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,
        parentId: "721",
        avgRatingString: "4.2",
        totalRatingsString: "12K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "5.0K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/pizza-hut-f-c-road-shivajinagar-rest21001",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "42581",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b94bd788-14eb-45ab-b1ed-cb984521d7ff_42581.jpg",
        locality: "The Pavillion Mall",
        areaName: "Shivajinagar",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.1,
        parentId: "166",
        avgRatingString: "4.1",
        totalRatingsString: "13K+",
        sla: {
          deliveryTime: 42,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "40-50 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹59",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/burger-king-the-pavillion-mall-shivajinagar-rest42581",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "326931",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "Late GA Kulkarni Path",
        areaName: "Kothrud",
        costForTwo: "₹300 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.3,
        parentId: "61955",
        avgRatingString: "4.3",
        totalRatingsString: "11K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹129",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/chinese-wok-late-ga-kulkarni-path-kothrud-rest326931",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "33848",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d30e906d-c10a-4ae9-bb8a-e35f2424cdba_33848.JPG",
        locality: "JM Road",
        areaName: "JM Road",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.7,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.7",
        totalRatingsString: "7.4K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 05:29:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "1.3K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/the-belgian-waffle-co-jm-road-rest33848",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "862315",
        name: "Olio - The Wood Fired Pizzeria",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/7e67c576-a922-4f22-baef-6480242622ab_862315.JPG",
        locality: "Ghole Road",
        areaName: "SHIVAJI NAGAR",
        costForTwo: "₹300 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Fast Food",
          "Snacks",
          "Beverages",
          "Desserts",
        ],
        avgRating: 4.1,
        parentId: "11633",
        avgRatingString: "4.1",
        totalRatingsString: "532",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 0.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "0.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/olio-the-wood-fired-pizzeria-ghole-road-shivaji-nagar-rest862315",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "386176",
        name: "NIC Ice Creams",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/4dc551f8-f797-4484-9f8e-3ec0f7d67446_386176.JPG",
        locality: "Prabhat Road",
        areaName: "Shivaji Nagar",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.7,
        veg: true,
        parentId: "6249",
        avgRatingString: "4.7",
        totalRatingsString: "2.0K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 0.7,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹124",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/nic-ice-creams-prabhat-road-shivaji-nagar-rest386176",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "507940",
        name: "EatFit",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/2f90a737-0434-4ab9-9245-b6995a37ce4b_507940.jpg",
        locality: "Ghole Road",
        areaName: "Shivajinagar",
        costForTwo: "₹270 for two",
        cuisines: [
          "Chinese",
          "Healthy Food",
          "Tandoor",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani",
        ],
        avgRating: 4.4,
        parentId: "76139",
        avgRatingString: "4.4",
        totalRatingsString: "2.5K+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 0.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "0.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹149",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/eatfit-ghole-road-shivajinagar-rest507940",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "340132",
        name: "Mad Over Donuts",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/30/39d48511-b904-4093-adbf-0ed893afd474_340132.JPG",
        locality: "Law College Road",
        areaName: "Erandwane",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Sweets", "Bakery"],
        avgRating: 4.4,
        veg: true,
        parentId: "611",
        avgRatingString: "4.4",
        totalRatingsString: "1.4K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/mad-over-donuts-law-college-road-erandwane-rest340132",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "442828",
        name: "The Dessert Heaven - Pastry, Brownie and Cakes",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/a68d073d-226d-4132-b5bc-5e6c34f3b33c_442828.jpg",
        locality: "Congress House Road",
        areaName: "Ghole Road",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
        avgRating: 4.4,
        veg: true,
        parentId: "506176",
        avgRatingString: "4.4",
        totalRatingsString: "556",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 0.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "0.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/the-dessert-heaven-pastry-brownie-and-cakes-congress-house-road-ghole-road-rest442828",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "429523",
        name: "Bikkgane Biryani",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/b7df41ac-06da-43d1-8625-6e4244c388db_429523.jpg",
        locality: "Guruganesh Nagar",
        areaName: "Kothrud",
        costForTwo: "₹350 for two",
        cuisines: [
          "Biryani",
          "Hyderabadi",
          "Andhra",
          "South Indian",
          "North Indian",
          "Mughlai",
          "Kebabs",
        ],
        avgRating: 4.3,
        parentId: "5070",
        avgRatingString: "4.3",
        totalRatingsString: "6.6K+",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 6.8,
          serviceability: "SERVICEABLE",
          slaString: "40-50 mins",
          lastMileTravelString: "6.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Biryani.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Biryani.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/bikkgane-biryani-guruganesh-nagar-kothrud-rest429523",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "394784",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/a9025443-b51c-4873-88c4-9f62a190ae82_394784.JPG",
        locality: "Shivaji Nagar",
        areaName: "Shivaji Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.6,
        parentId: "1040",
        avgRatingString: "4.6",
        totalRatingsString: "2.8K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "15% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.9",
            ratingCount: "545",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/theobroma-shivaji-nagar-rest394784",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "5624",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/9178c225-800c-4c49-9ce9-f9bd0dbcec91_5624.jpg",
        locality: "F.C. Road",
        areaName: "Prabhat Road",
        costForTwo: "₹350 for two",
        cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
        avgRating: 4.3,
        parentId: "2",
        avgRatingString: "4.3",
        totalRatingsString: "19K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.9",
            ratingCount: "1.3K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/subway-f-c-road-prabhat-road-rest5624",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "5370",
        name: "Cafe Goodluck",
        cloudinaryImageId: "jsxy3zkxvxzkuqqpvjgd",
        locality: "Deccan Gymkhana",
        areaName: "Deccan Gymkhana",
        costForTwo: "₹199 for two",
        cuisines: ["Biryani", "Cafe", "North Indian", "Bakery", "Snacks"],
        avgRating: 4.5,
        parentId: "6539",
        avgRatingString: "4.5",
        totalRatingsString: "47K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "50K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/cafe-goodluck-deccan-gymkhana-rest5370",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "29639",
        name: "Eatsome- Wraps & Rolls",
        cloudinaryImageId: "e56240a4b58956f47a5a1f8392470fbe",
        locality: "J.M.Road",
        areaName: "Shivajinagar",
        costForTwo: "₹300 for two",
        cuisines: ["Rolls & Wraps", "Street Food", "Beverages"],
        avgRating: 4.5,
        parentId: "471587",
        avgRatingString: "4.5",
        totalRatingsString: "6.4K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.9",
            ratingCount: "227",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/eatsome-wraps-and-rolls-j-m-road-shivajinagar-rest29639",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "562873",
        name: "Taco Bell",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/dcd4a52c-f4cc-44a4-bec3-bd7a045cae6d_562873.JPG",
        locality: "Prabhat Road",
        areaName: "F.C. Road",
        costForTwo: "₹300 for two",
        cuisines: ["Mexican", "Fast Food", "Snacks"],
        avgRating: 4.2,
        parentId: "1557",
        avgRatingString: "4.2",
        totalRatingsString: "2.8K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-01 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹19",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.6",
            ratingCount: "621",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/taco-bell-prabhat-road-f-c-road-rest562873",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "288388",
        name: "Starbucks Coffee",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/3559a935-3a34-4f80-8147-3b1e28fc9b07_288388.JPG",
        locality: "F.C. Road",
        areaName: "F.C. Road",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.7,
        parentId: "195515",
        avgRatingString: "4.7",
        totalRatingsString: "1.5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "10K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/starbucks-coffee-f-c-road-rest288388",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "639449",
        name: "Dum Safar Biryani",
        cloudinaryImageId: "fx0dti223czabpykykua",
        locality: "Jangali Maharaj Rd",
        areaName: "DECCAN MALL",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Kebabs", "Tandoor", "Indian", "Desserts"],
        avgRating: 4.3,
        parentId: "351013",
        avgRatingString: "4.3",
        totalRatingsString: "392",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-07-31 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹179",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-ec16096b-3af7-42be-b092-afb4d6862502",
      },
      cta: {
        link: "https://www.swiggy.com/city/pune/dum-safar-biryani-jangali-maharaj-rd-deccan-mall-rest639449",
        type: "WEBLINK",
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.6
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} data={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
