import React, { Fragment } from 'react';

const Clock = ({ timerMinutes, timerSeconds }) => {
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
				{/* <section className='timer'>
					<div className='clock'>
						<section>
							<p id='timer-element-mins'>
								{timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}
							</p>
						</section>
						<span>:</span>
						<section>
							<p id='timer-element-secs'>
								{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
							</p>
						</section>
					</div>
				</section> */}
			</section>
		</Fragment>
	);
};

Clock.defaultProps = {
	// timerHours: 0,
	timerMinutes: 0,
	timerSeconds: 0,
};

export default Clock;
