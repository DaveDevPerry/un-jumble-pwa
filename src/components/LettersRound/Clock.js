import React, { Fragment } from 'react';

const Clock = () => {
	return (
		<Fragment>
			<section className='timer-container'>
				<section className='timer'>
					<div className='clock'>
						<section>
							<p id='new-timer-element-secs'>30</p>
						</section>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

Clock.defaultProps = {
	timerSeconds: 30,
};

export default Clock;
