import { Card, Rating, Badge } from "flowbite-react";

export default function CardComponent1() {
    return (
        <>
            <div class=" overflow-visible transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white bg-opacity-20 backdrop-blur-lg border rounded-lg ">
                <img src="https://images.ctfassets.net/6azfn76zuilv/2x4ezbqRTsMtIcDkKanhf9/8f7ac122392d775209ae9069a25cd8f6/file.png" style={{height:"250px",width:"183.04px"}}></img>
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
                    <h4 class="font-semibold  text-white italic"> Tooth Brush </h4>
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
                        <h6 class=" font-semibold text-white italic text-sm">Price 200</h6>
                    </div>
                    <div class="mt-2 flex items-center ">
                        <button className=" font-semibold bg-white text-gray-600  p-0.5 rounded italic">Shop Now</button>
                        <span class="ml-2 text-white italic text-sm"> reviews</span>
                    </div>
                </div>
            </div>

        </>
    )
}



