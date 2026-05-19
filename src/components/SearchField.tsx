import { Button } from "@/components/ui/button"
import { Car, Hotel, Plane } from "lucide-react"
import { useState } from "react"
import { ButtonGroup } from "./ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

const SearchField = () => {
    const [activeButton, setActiveButton] = useState(0)
    const handleClick = (buttonIndex: number) => {
        setActiveButton(buttonIndex)
    }
    return (
        <div className="mt-28 w-full  mx-auto">
            <div className="mx-auto max-w-6xl sm: px-3">
                <ButtonGroup aria-label="Button group" className="mb-3">
                    <Button
                        type="button"
                        variant="outline"
                        className="text-primary border border-primary"
                        onClick={() => handleClick(0)}
                    >
                        <Plane />
                        Flight
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        className="text-primary border border-primary"
                        onClick={() => handleClick(1)}
                    >
                        <Hotel />
                        Flight + Hotel
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        className="text-primary border border-primary"
                        onClick={() => handleClick(2)}
                    >
                        <Car />
                        Flight + Car
                    </Button>
                </ButtonGroup>
                {activeButton === 0 ? (
                    <form>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="tripType">Trip type</FieldLabel>
                                <NativeSelect
                                    id="tripType"
                                    name="tripType"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="">Select trip</NativeSelectOption>
                                    <NativeSelectOption value="single-trip">
                                        Single Trip
                                    </NativeSelectOption>
                                    <NativeSelectOption value="return-trip">
                                        Return Trip
                                    </NativeSelectOption>
                                </NativeSelect>
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="departureCity">From</FieldLabel>
                                <Input
                                    id="departureCity"
                                    name="departureCity"
                                    placeholder="Departing city"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="arrivalCity">To</FieldLabel>
                                <Input
                                    id="arrivalCity"
                                    name="arrivalCity"
                                    placeholder="Arriving city"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="departingDate">Departing date</FieldLabel>
                                <Input
                                    id="departingDate"
                                    name="departingDate"
                                    type="date"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="returningDate">Returning date</FieldLabel>
                                <Input
                                    id="returningDate"
                                    name="returningDate"
                                    type="date"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="travelClass">Travel class</FieldLabel>
                                <NativeSelect
                                    id="travelClass"
                                    name="travelClass"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="economy">Economy</NativeSelectOption>
                                    <NativeSelectOption value="premium-economy">
                                        Premium Economy
                                    </NativeSelectOption>
                                    <NativeSelectOption value="business">
                                        Business
                                    </NativeSelectOption>
                                    <NativeSelectOption value="first">First</NativeSelectOption>
                                </NativeSelect>
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="passengers">Select passengers</FieldLabel>
                                <NativeSelect
                                    id="passengers"
                                    name="passengers"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="1">1 Adult</NativeSelectOption>
                                    <NativeSelectOption value="2">2 Adults</NativeSelectOption>
                                    <NativeSelectOption value="3">3 Adults</NativeSelectOption>
                                    <NativeSelectOption value="4">4 Adults</NativeSelectOption>
                                </NativeSelect>
                            </Field>

                            <div className="flex items-end lg:col-span-1">
                                <Button
                                    type="submit"
                                    className="w-full shadow-none focus:shadow-none"
                                >
                                    Find flights
                                </Button>
                            </div>
                        </div>
                    </form>
                ) : activeButton === 1 ? (
                    <form>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="tripType">Trip type</FieldLabel>
                                <NativeSelect
                                    id="tripType"
                                    name="tripType"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="">Select trip</NativeSelectOption>
                                    <NativeSelectOption value="single-trip">
                                        Single Trip
                                    </NativeSelectOption>
                                    <NativeSelectOption value="return-trip">
                                        Return Trip
                                    </NativeSelectOption>
                                </NativeSelect>
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="departureCity">From</FieldLabel>
                                <Input
                                    id="departureCity"
                                    name="departureCity"
                                    placeholder="Departing city"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="arrivalCity">To</FieldLabel>
                                <Input
                                    id="arrivalCity"
                                    name="arrivalCity"
                                    placeholder="Arriving city"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="departingDate">Departing date</FieldLabel>
                                <Input
                                    id="departingDate"
                                    name="departingDate"
                                    type="date"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>
                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="returningDate">Returning date</FieldLabel>
                                <Input
                                    id="returningDate"
                                    name="returningDate"
                                    type="date"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="travelClass">Travel class</FieldLabel>
                                <NativeSelect
                                    id="travelClass"
                                    name="travelClass"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="economy">Economy</NativeSelectOption>
                                    <NativeSelectOption value="premium-economy">
                                        Premium Economy
                                    </NativeSelectOption>
                                    <NativeSelectOption value="business">
                                        Business
                                    </NativeSelectOption>
                                    <NativeSelectOption value="first">First</NativeSelectOption>
                                </NativeSelect>
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="passengers">Select passengers</FieldLabel>
                                <NativeSelect
                                    id="passengers"
                                    name="passengers"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="1">1 Adult</NativeSelectOption>
                                    <NativeSelectOption value="2">2 Adults</NativeSelectOption>
                                    <NativeSelectOption value="3">3 Adults</NativeSelectOption>
                                    <NativeSelectOption value="4">4 Adults</NativeSelectOption>
                                </NativeSelect>
                            </Field>
                            <Field className="shadow-none lg:col-span-2">
                                <FieldLabel htmlFor="hotelDestination">
                                    Hotel destination
                                </FieldLabel>
                                <Input
                                    id="hotelDestination"
                                    name="hotelDestination"
                                    placeholder="City or hotel area"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>
                            <Field className="shadow-none lg:col-span-1">
                                <FieldLabel htmlFor="checkInDate">Check-in date</FieldLabel>
                                <Input
                                    id="checkInDate"
                                    name="checkInDate"
                                    type="date"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
                            <Field className="shadow-none lg:col-span-1">
                                <FieldLabel htmlFor="checkOutDate">Check-out date</FieldLabel>
                                <Input
                                    id="checkOutDate"
                                    name="checkOutDate"
                                    type="date"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>

                            <Field className="shadow-none lg:col-span-1">
                                <FieldLabel htmlFor="guests">Guests</FieldLabel>
                                <NativeSelect
                                    id="guests"
                                    name="guests"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="1">1 Guest</NativeSelectOption>
                                    <NativeSelectOption value="2">2 Guests</NativeSelectOption>
                                    <NativeSelectOption value="3">3 Guests</NativeSelectOption>
                                    <NativeSelectOption value="4">4 Guests</NativeSelectOption>
                                </NativeSelect>
                            </Field>

                            <Field className="shadow-none lg:col-span-1">
                                <FieldLabel htmlFor="roomType">Room type</FieldLabel>
                                <NativeSelect
                                    id="roomType"
                                    name="roomType"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="">Any room</NativeSelectOption>
                                    <NativeSelectOption value="standard">
                                        Standard
                                    </NativeSelectOption>
                                    <NativeSelectOption value="deluxe">Deluxe</NativeSelectOption>
                                    <NativeSelectOption value="suite">Suite</NativeSelectOption>
                                </NativeSelect>
                            </Field>

                            <div className="flex items-end lg:col-span-1">
                                <Button
                                    type="submit"
                                    className="w-full shadow-none focus:shadow-none"
                                >
                                    Find flights
                                </Button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <form>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="tripType">Trip type</FieldLabel>
                                <NativeSelect
                                    id="tripType"
                                    name="tripType"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="">Select trip</NativeSelectOption>
                                    <NativeSelectOption value="single-trip">
                                        Single Trip
                                    </NativeSelectOption>
                                    <NativeSelectOption value="return-trip">
                                        Return Trip
                                    </NativeSelectOption>
                                </NativeSelect>
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="departureCity">From</FieldLabel>
                                <Input
                                    id="departureCity"
                                    name="departureCity"
                                    placeholder="Departing city"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="arrivalCity">To</FieldLabel>
                                <Input
                                    id="arrivalCity"
                                    name="arrivalCity"
                                    placeholder="Arriving city"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="departingDate">Departing date</FieldLabel>
                                <Input
                                    id="departingDate"
                                    name="departingDate"
                                    type="date"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>
                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="returningDate">Returning date</FieldLabel>
                                <Input
                                    id="returningDate"
                                    name="returningDate"
                                    type="date"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                />
                            </Field>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="travelClass">Travel class</FieldLabel>
                                <NativeSelect
                                    id="travelClass"
                                    name="travelClass"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="economy">Economy</NativeSelectOption>
                                    <NativeSelectOption value="premium-economy">
                                        Premium Economy
                                    </NativeSelectOption>
                                    <NativeSelectOption value="business">
                                        Business
                                    </NativeSelectOption>
                                    <NativeSelectOption value="first">First</NativeSelectOption>
                                </NativeSelect>
                            </Field>

                            <Field className="lg:col-span-1">
                                <FieldLabel htmlFor="passengers">Select passengers</FieldLabel>
                                <NativeSelect
                                    id="passengers"
                                    name="passengers"
                                    className="w-full shadow-none focus:shadow-none focus:ring-0 focus:outline-none"
                                >
                                    <NativeSelectOption value="1">1 Adult</NativeSelectOption>
                                    <NativeSelectOption value="2">2 Adults</NativeSelectOption>
                                    <NativeSelectOption value="3">3 Adults</NativeSelectOption>
                                    <NativeSelectOption value="4">4 Adults</NativeSelectOption>
                                </NativeSelect>
                            </Field>
                            <Field className="shadow-none lg:col-span-2">
                                <FieldLabel htmlFor="carLocation">Pickup location</FieldLabel>
                                <Input
                                    id="carLocation"
                                    name="carLocation"
                                    placeholder="City or airport"
                                />
                            </Field>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-3 lg:grid-cols-6">
                            <Field className="shadow-none lg:col-span-1">
                                <FieldLabel htmlFor="pickupDate">Pickup date</FieldLabel>
                                <Input id="pickupDate" name="pickupDate" type="date" />
                            </Field>

                            <Field className="shadow-none lg:col-span-1">
                                <FieldLabel htmlFor="dropoffDate">Drop-off date</FieldLabel>
                                <Input id="dropoffDate" name="dropoffDate" type="date" />
                            </Field>

                            <Field className="shadow-none lg:col-span-1">
                                <FieldLabel htmlFor="carType">Car type</FieldLabel>
                                <NativeSelect id="carType" name="carType">
                                    <NativeSelectOption value="">Any car</NativeSelectOption>
                                    <NativeSelectOption value="economy">Economy</NativeSelectOption>
                                    <NativeSelectOption value="compact">Compact</NativeSelectOption>
                                    <NativeSelectOption value="suv">SUV</NativeSelectOption>
                                    <NativeSelectOption value="luxury">Luxury</NativeSelectOption>
                                </NativeSelect>
                            </Field>
                            <div className="flex items-end lg:col-span-1">
                                <Button
                                    type="submit"
                                    className="w-full shadow-none focus:shadow-none"
                                >
                                    Find flights
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default SearchField
