/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
	const rowContainer = useRef();

	const [items, setItems] = useState([]);

	const [{ cartItems }, dispatch] = useStateValue();

	useEffect(() => {
		rowContainer.current.scrollLeft += scrollValue;
	}, [scrollValue]);

	const addToCart = () => {
		dispatch({
			type: actionType.SET_CART_ITEMS,
			cartItems: items,
		});
		localStorage.setItem("cartItems", JSON.stringify(items));
	};

	useEffect(() => {
		addToCart();
	}, [items]);

	return (
		<div
			ref={rowContainer}
			className={`w-full flex items-center my-12 gap-3 md:gap-6 scroll-smooth  ${
				flag
					? "overflow-x-scroll scrollbar-none"
					: "overflow-x-hidden flex-wrap justify-center"
			}`}>
			{data && data.length > 0 ? (
				data.map((item) => (
					<div
						key={item.id}
						className="w-275 min-w-[275px] md:w-300 md:min-w-[300px] my-12 h-[175px] flex flex-col items-center
						 bg-cardOverlay rounded-lg shadow-md py-2 px-4 backdrop-blur-lg hover:drop-shadow-lg justify-evenly 
						 relative">
						<div className="w-full flex items-center justify-between">
							<motion.div
								whileHover={{ scale: 1.2 }}
								className="w-[120px] h-[120px] -mt-8 drop-shadow-2xl">
								<img
									src={item?.imageURL}
									alt=""
									className="w-full h-full object-contain"
								/>
							</motion.div>
							<motion.div
								whileTap={{ scale: 0.75 }}
								onClick={() => setItems([...cartItems, item])}
								className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center cursor-pointer
                    				hover:shadow-md">
								<MdShoppingBasket className="text-white" />
							</motion.div>
						</div>

						<div className="w-full flex items-end justify-end flex-col">
							<p className="text-textColor font-semibold text-base md:text-lg">
								{item?.title}
							</p>
							<p className="mt-1 text-sm text-gray-500">
								{item?.calories} Calories
							</p>
							<div className="flex items-center gap-8">
								<p className="text-lg text-headingColor font-semibold">
									<span className="text-sm text-red-500">
										$
									</span>{" "}
									{item?.price}
								</p>
							</div>
						</div>
					</div>
				))
			) : (
				<div className="w-full flex flex-col items-center justify-center">
					<img src={NotFound} alt="" className="h-340" />
					<p className="text-textColor font-semibold my-2 text-xl">
						Items Not Available
					</p>
				</div>
			)}
		</div>
	);
};

export default RowContainer;
