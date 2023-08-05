import colors from "./colors";

export default {
  title: "light",

  colors: {
    //font
    "fc-headings": colors.black,
    "fc-inputs": colors.black,
    "fc-text": colors["medium-gray"],
    "fc-placeholders": colors["medium-gray"],
    "fc-active-sideber-item": colors["pure-white"],
    "fc-primary-button": colors["pure-white"],
    "fc-secondary-button": colors["main-purple"],

    //bg
    "bg-main": colors["light-gray-100"],
    "bg-cards": colors["pure-white"],
    "bg-disabled-btns": colors["very-light-purple"],
    "bg-primary-btn": colors["main-purple"],
    "bg-seconday-btn": colors["very-light-purple"],
    "bg-delete-btn": colors.red,

    //hover bg
    "hv-bg-primary-btn": colors["light-purple"],
    "hv-bg-sidebar-item": colors["main-purple"],
    "hv-bg-delete-btn": colors["light-red"],

    //accent
    "fc-red": colors.red,
    "fc-main-purple": colors["main-purple"],
  },
};
