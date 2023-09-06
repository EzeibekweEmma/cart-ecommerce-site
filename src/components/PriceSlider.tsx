"use client";
import Link from "next/link";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { BiDollar } from "react-icons/bi";

const PriceSlider = ({ maxPrice }) => {
    const [sliderValue, setSliderValue] = useState([0, maxPrice]);

    const handleSliderChange = (value) => {
        // Define a function to handle changes in the slider value
        setSliderValue(value);
    };

    return (
        <div className="space-y-2 mt-4">
            <Slider
                range
                min={0}
                max={maxPrice}
                defaultValue={[0, maxPrice]}
                allowCross={false}
                onChange={handleSliderChange}
                value={sliderValue}
                trackStyle={{ backgroundColor: "#0b935b" }}
                handleStyle={{ borderColor: "#0b935b" }}
                railStyle={{ backgroundColor: "#05901133" }}
            />
            <div className="flex justify-between items-center">
                <label className="relative">
                    <input
                        className="w-16 py-1 indent-3 rounded-md text-xs border
                    font-medium outline-none focus:bg-cPrimary/10"
                        type="number"
                        appearance-none
                        value={sliderValue[0]}
                        onChange={(e) => {
                            const newValue = +e.target.value;
                            if (!isNaN(newValue)) {
                                // Ensure newValue is a valid number
                                const newSliderValue = [...sliderValue]; // Create a copy of the current state
                                newSliderValue[0] = newValue; // Update the lower bound
                                setSliderValue(newSliderValue); // Update the state
                            }
                        }}
                    />
                    <BiDollar className="absolute left-0.5 top-[6.8px]" />
                </label>
                <Link
                    href={{
                        pathname: "/",
                        query: {
                            filter: ["price", sliderValue[0], sliderValue[1]],
                        },
                    }}
                    className="py-1 px-2 shadow-lg cursor-pointer text-xs border rounded-lg
                    hover:text-white hover:bg-cPrimary font-semibold text-cPrimary"
                >
                    Apply
                </Link>
                <label className="relative">
                    <input
                        className="w-16 py-1 indent-3 rounded-md text-xs border
                    bg-white font-medium outline-none focus:bg-cPrimary/10"
                        type="number"
                        appearance-none
                        value={sliderValue[1]}
                        onChange={(e) => {
                            const newValue = +e.target.value;
                            if (!isNaN(newValue)) {
                                // Ensure newValue is a valid number
                                const newSliderValue = [...sliderValue]; // Create a copy of the current state
                                newSliderValue[1] = newValue; // Update the lower bound
                                setSliderValue(newSliderValue); // Update the state
                            }
                        }}
                    />
                    <BiDollar className="absolute left-0.5 top-[6.8px]" />
                </label>
            </div>
        </div>
    );
};

export default PriceSlider;
