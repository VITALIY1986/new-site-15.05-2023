import Link from 'next/link';
import Image from "../../../image";
import {DEFAULT_CATEGORY_IMG_URL} from "../../../constants/urls";
import { isEmpty } from 'lodash';

const ParentCategoryBlock = ( props ) => {

	const { category } = props;
	if (category?.image ===  null) {
        return (<div className='hidden'></div>)
    }
	else {
 return (
		
			<Link href={`/tag/${category?.slug}`}>
				<a>
				
					
					<h3 className=" top-2 left-2 text-white bg-bottons   px-2  rounded-full mt-3 mb-3 py-3 pl-3">{category?.name}</h3>
					
				</a>
			</Link>
		
	);}
}

export default ParentCategoryBlock;
