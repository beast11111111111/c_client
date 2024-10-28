import { Carousel } from "flowbite-react"

export default function CarouselComponent() {
    return (
        <>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                       <img src="https://www.shutterstock.com/image-vector/diwali-big-dhamaka-sale-offer-600nw-2060787011.jpg"></img>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://ih1.redbubble.net/image.775778356.5806/st,small,507x507-pad,600x600,f8f8f8.u8.jpg"></img>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQct3pJu8YhUwO2qIg4fKJ7leZ0IT6CHINBng&s"></img>
                    </div>
                </Carousel>
            </div>
        </>
    )
}