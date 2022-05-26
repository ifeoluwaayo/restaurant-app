import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import I1 from "../img/i1.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
	return (
		<section
			className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
			id="home">
			<div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
				<div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full ">
					<p className="text-base text-orange-500 font-semibold">
						Bike Delivery
					</p>
					<div className="w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl">
						<img
							src={Delivery}
							alt="delivery"
							className="w-full h-full object-contain"
						/>
					</div>
				</div>

				<p
					className="text-[2.5rem] font-bold tracking-wide text-headingColor w-[80%] md:w-full 
                lg:text-[4.5rem]">
					The Fastest Delivery in{" "}
					<span className="text-orange-600 text-[3rem] lg:text-[5rem]">
						Your City
					</span>
				</p>

				<p className="text-base text-textColor text-center md:text-left md:w-[80%]">
					lorem ipsum dolor sit amet, consectetur adip lorem ipsum
					lorem ipsum dolor sit amet, consectetur adip lorem ipsum
					dolor sit amet, consectetur adip lorem ipsum lorem ipsum
					dolor sit amet, lorem ipsum dolor sit amet, consectetur adip
					lorem ipsum lorem ipsum dolor sit amet, lorem ipsum dolor
					sit amet, consectetur adip lorem.
				</p>

				<button
					type="button"
					className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg
                        hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto">
					Order Now
				</button>
			</div>

			{/* Right Section */}
			<div className="py-2 flex-1 flex items-center relative">
				<img
					src={HeroBg}
					alt="hero-bg"
					className="lg:h-650 h-420 w-full lg:w-auto ml-auto"
				/>
				<div
					className="w-full h-full absolute flex items-center top-0 left-0 1lg:px-20 2xl:grid 2xl:grid-cols-2
                     2xl:gap-0 py-4 justify-center gap-4 flex-wrap">
					{heroData &&
						heroData.map((n) => (
							<div
								key={n.id}
								className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center 
                            justify-center flex-col drop-shadow-xl">
								<img
									src={n.imgSrc}
									alt="I1"
									className="w-20 lg:w-40 -mt-10 lg:-mt-20"
								/>
								<p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
									{n.name}
								</p>

								<p className="text-[12px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
									{n.description}
								</p>
								<p className="text-sm font-semibold text-headingColor">
									<span className="text-xs text-red-600">
										$
									</span>{" "}
									{n.price}
								</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default HomeContainer;
