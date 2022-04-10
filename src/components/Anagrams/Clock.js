import React, { Fragment } from 'react';

const Clock = ({ timerSeconds }) => {
	return (
		<Fragment>
			<section className='timer-container'>
				<section className='timer'>
					<div className='clock'>
						<section>
							<p id='timer-element-secs'>
								{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
							</p>
						</section>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

Clock.defaultProps = {
	timerSeconds: 0,
};

export default Clock;
