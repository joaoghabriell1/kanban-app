import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      "fc-headings": string;
      "fc-inputs": string;
      "fc-text": string;
      "fc-placeholders": string;
      "fc-active-sideber-item": string;
      "fc-primary-button": string;
      "fc-secondary-button": string;
      "bg-main": string;
      "bg-cards": string;
      "bg-disabled-btns": string;
      "bg-primary-btn": string;
      "bg-seconday-btn": string;
      "bg-delete-btn": string;
      "hv-bg-primary-btn": string;
      "hv-bg-sidebar-item": string;
      "hv-bg-delete-btn": string;
      "fc-red": string;
      "fc-main-purple": string;
    };
  }
}
