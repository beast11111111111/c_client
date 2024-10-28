import { Card, Rating, Badge } from "flowbite-react";

export default function CardComponent5() {
    return (
        <>
            <div class=" overflow-visible transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white border rounded-lg bg-opacity-20 backdrop-blur-lg border rounded-lg ">
                <img src="https://www.jiomart.com/images/product/original/490000979/bournvita-500-g-product-images-o490000979-p490000979-0-202312291215.jpg?im=Resize=(1000,1000)" style={{height:"250px",width:"183.04px"}}></img>
                <div class="p-6">
                    <div class="text-gray-600 text-xs  uppercase font-semibold tracking-wide">
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                color="warning"
                                size="lg"
                            >
                                Best selling
                            </Badge>
                        </div>
                    </div>
                    <h4 class="font-semibold  text-white italic"> Bournvita </h4>
                    <div class="mt-1">
                        <span class="text-gray-600 text-sm">
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                                <p className="ml-2 text-sm font-medium text-white italic">
                                    4.95 out of 5
                                </p>

                            </Rating></span>
                        <h6 class=" font-semibold text-white italic text-sm">Price 250</h6>
                    </div>
                    <div class="mt-2 flex items-center ">
                        <button className=" font-semibold bg-white text-gray-600  p-0.5 rounded">Shop Now</button>
                        <span class="ml-2 text-white italic text-sm"> reviews</span>
                    </div>
                </div>
            </div>

        </>
    )
}



