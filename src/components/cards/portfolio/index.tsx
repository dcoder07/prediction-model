import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '~/components/card';

import PortfolioFavicon from '../../../../public/assets/portfolio-favicon.png';

const PortfolioCard = () => {
	return (
		<Link href='https://www.linkedin.com/in/dishank-patil-366059258/' target='_blank' className='w-full'>
			<Card className='flex aspect-square max-w-[230px] items-center justify-center py-1'>
				<div className='flex h-full w-full flex-col items-center justify-center gap-2'>
					<Image
						src={PortfolioFavicon}
						alt='Portfolio Favicon'
						width={48}
						height={48}
						className='rounded-lg'
					/>
					<span>LinkedIn</span>
					<div className='text-[14px] font-medium text-gray-500'>Dishank Patil</div>
				</div>
			</Card>
		</Link>
	);
};

export default PortfolioCard;
