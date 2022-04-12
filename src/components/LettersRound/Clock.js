import React, { Fragment } from 'react';

const Clock = ({ timerSeconds }) => {
	return (
		<Fragment>
			<section className='timer-container'>
				<section className='timer'>
					<div className='clock'>
						<section>
							<p id='new-timer-element-secs'>30</p>
							{/* <p id='new-timer-element-secs'>
								{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
							</p> */}
						</section>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

Clock.defaultProps = {
	// timerHours: 10,
	// timerMinutes: 10,
	timerSeconds: 30,
};

export default Clock;
