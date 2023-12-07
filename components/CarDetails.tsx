import React from "react";
import { CarProps } from "@/types";

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
function CarDetails({ isOpen, closeModal, car }: CardDetailsProps) {
  return <div>CarDetails</div>;
}

export default CarDetails;
