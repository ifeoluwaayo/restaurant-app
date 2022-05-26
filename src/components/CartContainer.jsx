import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";

const CartContainer = () => {
	const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
	const [flag, setFlag] = useState(0);
	const [tot, setTot] = useState(0);

	const closeCart = () => {
		dispatch({
			type: actionType.SET_CART_SHOW,
			cartShow: false,
		});
	};

	useEffect(() => {
		let totalPrice = cartItems.reduce(function (accumulator, item) {
			return accumulator + item.price * item.qty;
		}, 0);
		setTot(totalPrice);
		console.log(tot);
	}, [tot, flag, cartItems]);

	const clearCart = () => {
		dispatch({
			type: actionType.SET_CART_ITEMS,
			cartItems: [],
		});

		localStorage.setItem("cartItems", JSON.stringify([]));
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 200 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 200 }}
			className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
			<div className="w-full flex items-center p-4 justify-between ">
				<motion.div
					whileTap={{ scale: 0.75 }}
					className="cursor-pointer"
					onClick={closeCart}>
					<MdOutlineKeyboardBackspace className="text-3xl text-textColor" />
				</motion.div>
				<p className="text-textColor text-lg font-semibold">Cart</p>

				<motion.p
					whileTap={{ scale: 0.75 }}
					className="flex items-center gap-2 p-1 px-2 my-2  bg-gray-100 rounded-md hover:shadow-md
                    cursor-pointer text-textColor text-base"
					onClick={clearCart}>
					Clear <RiRefreshFill />
				</motion.p>
			</div>

			{/* Bottom Section */}
			{cartItems && cartItems.length > 0 ? (
				<div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
					{/* Cart Items section */}
					<div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
						{/* Cart Items */}
						{cartItems.map((item) => (
							<CartItem
								item={item}
								key={item.id}
								flag={flag}
								setFlag={setFlag}
							/>
						))}
					</div>
					{/* Cart total section */}
					<div
						className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center 
                justify-evenly px-8 py-2">
						<div className="w-full flex items-center justify-between">
							<p className="text-lg text-gray-400">Sub Total</p>
							<p className="text-lg text-gray-400">$ {tot}</p>
						</div>
						<div className="w-full flex items-center justify-between">
							<p className="text-lg text-gray-400">Delivery</p>
							<p className="text-lg text-gray-400">$ 2.5</p>
						</div>

						<div className="w-full border-b border-gray-600 my-2"></div>

						<div className="w-full flex items-center justify-between">
							<p className="text-xl font-semibold text-gray-200">
								Total
							</p>
							<p className="text-xl font-semibold text-gray-200">
								$ {tot + 2.5}
							</p>
						</div>

						{user ? (
							<motion.button
								whileTap={{ scale: 0.8 }}
								type="button"
								className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 text-gray-50 text-lg
                         my-2 ease-out to-orange-600 hover:shadow-lg transition-all duration-150">
								Checkout
							</motion.button>
						) : (
							<motion.button
								whileTap={{ scale: 0.8 }}
								type="button"
								className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 text-gray-50 text-lg
                         my-2 ease-out to-orange-600 hover:shadow-lg transition-all duration-150">
								Login to checkout
							</motion.button>
						)}
					</div>
				</div>
			) : (
				<div className="-w-full h-full flex flex-col items-center justify-center gap-6">
					<img src={EmptyCart} className="w-300" alt="" />
					<p className="text-xl text-textColor font-semibold">
						Add some items to your cart
					</p>
				</div>
			)}
		</motion.div>
	);
};

export default CartContainer;
