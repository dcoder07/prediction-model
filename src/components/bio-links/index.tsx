import React from 'react';
import Image from 'next/image';

import { TwitterCard, PortfolioCard, GitHubCard } from '../cards';

// Images
import Workstation from '../../../public/assets/workstation2.jpg';

const BioLinks = () => {
	return (
		<div className='mb-4 mt-4 flex flex-col gap-8 xl:flex-row'>
			<div className='w-full basis-1/2'>
				<div className='relative'>
					<Image
						src={Workstation}
						alt='Workstation'
						width={500}
						height={500}
						className='w-full max-w-[500px] rounded-[1.75rem]'
					/>
				</div>
			</div>
			<div className='min-h-full w-full basis-1/2'>
				<div className='flex h-full flex-col gap-8'>
					<div className='flex flex-row gap-8'>
						<PortfolioCard />
						<TwitterCard />
					</div>
					<GitHubCard />
				</div>
			</div>
		</div>
	);
};

export default BioLinks;
