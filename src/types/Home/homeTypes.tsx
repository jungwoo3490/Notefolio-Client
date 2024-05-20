import { ReactNode } from "react";

export interface CarouselImgContainerProps {
  offset: number;
  transition: boolean;
}

export interface BestFolioHomeItemProps {
  imgSrc: string;
  company: string;
  companyLogo: ReactNode;
  viewLogo: ReactNode;
  viewNum: string;
  heartNum: string;
  greyHeartLogo: ReactNode;
}
