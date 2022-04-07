import React, { Fragment } from 'react';

const Clock = ({ timerHours, timerMinutes, timerSeconds }) => {
	return (
		<Fragment>
			<section className='timer-container'>
				<section className='timer'>
					<div className='clock'>
						<section>
							<p>{timerHours < 10 ? `0${timerHours}` : timerHours}</p>
							{/* <small>Hours</small> */}
						</section>{' '}
						<span>:</span>
						<section>
							<p>{timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}</p>
							{/* <small>Minutes</small> */}
						</section>{' '}
						<span>:</span>
						<section>
							<p>{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</p>
							{/* <small>Seconds</small> */}
						</section>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

Clock.defaultProps = {
	timerHours: 0,
	timerMinutes: 0,
	timerSeconds: 0,
};

export default Clock;
