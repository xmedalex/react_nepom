import React from 'react';

function Header() {
	return (
		<nav className='green darken-1'>
			<div className='nav-wrapper'>
				<a
					href='https://www.google.com'
					className='brand-logo'
					target='_blank'
					rel='noreferrer'
				>
					React SPA
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a
							href='https://www.google.com'
							target='_blank'
							rel='noreferrer'
						>
							Sass
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export { Header };
