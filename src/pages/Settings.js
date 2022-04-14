import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ImFacebook2 } from 'react-icons/im';
import Toggle from '../components/Global/Toggler';

const Settings = ({ setPageTitle, theme, themeToggler }) => {
	let navigate = useNavigate();

	useEffect(() => {
		setPageTitle('un-jumble');
	}, [setPageTitle]);

	return (
		<StyledSettings>
			<div className='settings-page-container'>
				<div className='settings-header'>
					<MdOutlineClose size='25px' id='close-settings-blank' />
					<p className='settings-title'>settings</p>
					<div
						className='close-settings-btn'
						onClick={() => {
							navigate('/');
						}}
					>
						<MdOutlineClose size='25px' color='#1b2877' />
					</div>
				</div>

				<div className='settings-list-container'>
					<ul className='settings-list'>
						<li>
							<p className='setting-name'>Dark Theme</p>
							<div className='settings-action'>
								<Toggle theme={theme} toggleTheme={themeToggler} />
							</div>
						</li>
						<li>
							<p className='setting-name'>Feedback</p>
							<div className='settings-action'>
								<a href='mailto:daveperry.log@gmail.com' id='email-link'>
									Email
								</a>
							</div>
						</li>
						<li>
							<p className='setting-name'>Community</p>
							<div className='settings-action'>
								<ImFacebook2 size='22px' />
							</div>
						</li>
					</ul>
				</div>
				<p className='settings-footer'>
					@ 2022 The Silly Sausage Games Company
				</p>
			</div>
		</StyledSettings>
	);
};
const StyledSettings = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.settings-page-container {
		/* background-color: ${({ theme }) => theme.bgTile}; */
		background-color: white;
		border-radius: 5px;
		/* padding: 1rem; */
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 2rem;
		.settings-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			#close-settings-blank {
				opacity: 0;
			}
			.settings-title {
				text-transform: uppercase;
				font-family: 'Bebas Neue', cursive;
				font-size: 2.2rem;
				color: ${({ theme }) => theme.bgChosen};
				/* width: 100%; */
			}
			#close-settings-btn {
				justify-self: flex-end;
			}
		}
		.settings-list-container {
			/* display: flex;
			justify-content: space-evenly;
			align-items: flex-start; */
			width: 100%;
			/* border-top: 2px solid ${({ theme }) => theme.bgContainer};
			border-bottom: 2px solid ${({ theme }) => theme.bgContainer}; */
			padding: 1rem;
			.settings-list {
				li {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 1rem 0rem;
					border-bottom: 1px solid ${({ theme }) => theme.bgChosen};
					p {
						color: ${({ theme }) => theme.bgChosen};
						font-weight: 800;
						font-size: 1.6rem;
					}
					.settings-action {
						color: ${({ theme }) => theme.bgChosen};
						display: grid;
						place-content: center;
					}
				}
			}
		}
		.settings-footer {
			color: ${({ theme }) => theme.bgChosen};
			font-size: 1.2rem;
			text-align: center;
			margin-top: 1rem;
			font-weight: 600;
		}
	}
	#email-link {
		color: ${({ theme }) => theme.bgChosen};
		font-size: 1.8rem;
	}
	#toggle-switch {
		padding: 0rem 0.5rem;
		border-radius: 3px;
		font-size: 1.8rem;
		font-weight: 100;
		color: ${({ theme }) => theme.syntax};
		background-color: ${({ theme }) => theme.bgChosen};

		letter-spacing: initial;
	}
`;

export default Settings;
