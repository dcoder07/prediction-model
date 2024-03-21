import React from 'react';
import { Header, BioLinks, BlogPosts } from '~/components';

const About = () => {
	return (
		<div className='mx-auto max-w-[24rem] py-4 lg:mx-0 lg:max-w-full'>
			<Header title='Algo Aviator 🛫' />
			<BioLinks />
			<Header title='My latest stories 📚' />
			<BlogPosts />
		</div>
	);
};

export default About;
