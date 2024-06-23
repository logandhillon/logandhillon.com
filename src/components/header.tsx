import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
	return <header className={`text-gray-600 body-font shadow-lg transition-transform duration-500 ease-out bg-neutral-50 ${className}`}>
		<div className="body-font container mx-auto flex flex-wrap p-5 md:flex-row">
			<Image
				src="/memoji.jpg"
				width={48}
				height={48}
				alt="Avatar of Logan Dhillon"
				className='rounded-full'
			/>
			<div className="ml-3">
				<p className='text-xl text-neutral-950'>Logan Dhillon</p>
				<p className="text-sm text-gray-500 hover:text-gray-800"><i className="fa-brands fa-github"/> logandhillon</p>
			</div>

			<nav className="ml-auto hidden sm:flex flex-wrap items-center text-base justify-center">
				<a className="mr-5 hover:text-gray-900 transition-transform hover:underline hover:scale-125" href="#about">about</a>
				<a className="mr-5 hover:text-gray-900 transition-transform hover:underline hover:scale-125" href="mailto:logandhi64@gmail.com">email</a>
				<a className="mr-5 hover:text-gray-900 transition-transform hover:underline hover:scale-125" href="#socials">socials</a>
				<a className="mr-5 hover:text-gray-900 transition-transform hover:underline hover:scale-125" href="https://github.com/logandhillon?tab=repositories">projects</a>
			</nav>
		</div>
	</header>;
}

export default Header;