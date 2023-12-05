"use client";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import React from "react";
import Image from "next/image";

function SearchManufacturer({
  manufacturer,
  setmanufacturer,
}: SearchManufacturerProps) {
  return (
    <div className="search-manufacture">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
