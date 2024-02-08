import Nav from "./Nav";
import React, { useState, useEffect } from "react"
const Header = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
	  window.addEventListener("scroll", () => {
		setScroll(window.scrollY > 300);
	  });
	}, []);
	return (
		<>
		{/*<div className="flex bg-gray-300 justify-end font-thin "><p className="hidden lg:block mr-3 py-3 text-white">Mенеджер (Київ): (097) 860 06 06</p><p className="hidden lg:block mr-3 py-3 text-white">  Mенеджер (Київ): (068) 706 70 67</p><a href="/search"><div className="bg-gray-500 text-white py-3 px-3">ПОШУК<span></span></div></a><a href="/registration/register/" ><div className="hidden lg:block bg-blue text-white py-3 px-3">ВХІД ДЛЯ КОСМЕТОЛОГІВ </div><div className="block lg:hidden bg-blue text-white py-3 px-3">ІДХ </div></a></div>*/}
		<div className={scroll ? "bg-white w-full fixed z-50 duration-300 py-0 shadow top-0 " : "bg-white relative duration-300 shadow"}>
			<Nav/>
		</div>
		</>
	)
};

export default Header;
