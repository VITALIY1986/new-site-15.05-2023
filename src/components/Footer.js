import {Facebook, Instagram, Twitter, Youtube} from "./icons";

const Footer = () => (
	<div className="footer bg-blue p-6 text-white">
		<div className="container mx-auto">
			<div className="md:grid  md:grid-cols-6 gap-4 font-thin">
				<div className="col-start-1 col-end-4 ">
					<h3 className="mt-5 text-3xl text-white">НАШІ КОМПАНІЇ</h3>
					<div className=" flex mt-5 ">
						<div className="flex-1 opacity-75 " >
					     <p className="mb-3">З БЯЗІ</p>
					     <p className="mb-3">З РАНФОРСУ</p>
					     <p className="mb-3">З САТИНУ</p>
						 </div>
						 <div className="flex-1 opacity-75">
					     <p className="mb-3">ДИТЯЧІ</p>
					     <p className="mb-3">ТЕКСТИЛЬ </p>
					     <p className="mb-3">ІНФОРМАЦІЯ</p>
						 </div>
					</div>
			    </div>
				<div className="col-start-4 col-end-6 ">
					<h3 className="mt-5 text-3xl text-white ">КОНТАКТИ</h3>
					<div className="mt-5 opacity-75 ">
						<p>Mенеджер (Київ): +38 (097) 860 06 06 </p>
						<p>Mенеджер (Київ): +38 (068) 706 70 67 </p>
						<p>Mенеджер (регіони): +38 (097) 209 54 45</p>
						<p>Mенеджер (Beyond): +38 (067) 328-74-26</p>
						<p>м. Київ, провулок Західний 3Ц </p>
						<p>info@4prof.com.ua</p>
					</div>
				</div>
				<div className="col-start-6 col-end-6">
				     <h3 className="mt-5 text-3xl text-white">МИ В СОЦ.МЕРЕЖАХ</h3>
				     <ul className="social-links flex  mt-5 ">
				        <li><a href="/" className="" target="_blank"><Facebook/></a></li>
				        
				        <li className="ml-2 mt-1"><a href="/" className="fa fa-youtube" target="_blank"><Youtube/></a></li>
				        <li className="ml-2"><a href="/" className="fa fa-instagram" target="_blank"><Instagram/></a></li>
			        </ul>
			   </div>
			</div>
			
		</div>
	</div>
);

export default Footer;
