import React, { Fragment } from 'react';

const Clock = ({ timerSeconds }) => {
	return (
		<Fragment>
			<section className='timer-container'>
				<section className='timer'>
					<div className='clock'>
						<section>
							<p id='timer-element-secs'>120</p>
						</section>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

Clock.defaultProps = {
	timerSeconds: 120,
};

export default Clock;
