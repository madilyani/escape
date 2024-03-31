import { bedIcon, foodIcon } from "./SVG";

export const roomModul = [
  {
    cancelation: true,
    id: "1",
    title: "Stanza Doppia",
    note: "Cancellazione gratuita entro il 25/05/2024",
    categories: [
      {
        id: "1",
        title: "Pensione Completa",
        icon: foodIcon,
        total: 1.279,
        demand: true,
        info: "Prezzo per 7 notti e per 2 adulti",
        addons: [
          {
            id: "1",
            value: "Vista Mare",
            price: 70,
          },
          {
            id: "1",
            total: 1.22,
            value: "Culla",
            price: 25,
          },
        ],
      },
      {
        id: "2",
        total: 1.134,
        title: "solo pernottamento",
        info: "Prezzo per 7 notti e per 2 adulti",
        icon: bedIcon,
      },
      {
        id: "3",
        title: "Pensione Completa e Bevande incluse",
        total: 1.584,
        info: "Prezzo per 7 notti e per 2 adulti",
      },
    ],
  },
  {
    id: "2",
    title: "Stanza Deluxe",
    note: "Cancellazione gratuita entro il 25/05/2024",
    categories: [
      {
        id: "1",
        title: "Pensione Completa",
        icon: foodIcon,
        total: 1.279,
        info: "Prezzo per 7 notti e per 2 adulti",
      },
      {
        id: "2",
        total: 1.134,
        title: "solo pernottamento",
        info: "Prezzo per 7 notti e per 2 adulti",
        icon: bedIcon,
      },
      {
        id: "3",
        title: "Pensione Completa e Bevande incluse",
        total: 2.584,
        info: "Prezzo per 7 notti e per 2 adulti",
      },
    ],
  },
];
