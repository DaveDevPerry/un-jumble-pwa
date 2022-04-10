import styled from 'styled-components';

const PlayerTiles = ({ handleLetter }) => {
	return (
		<StyledPlayerTiles className='tiles word-wrapper'>
			<div className='tile-background'></div>
			<button
				id='l1'
				className='tile  tile-grad'
				data-tile='0'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
			<button
				id='l2'
				className='tile  tile-grad'
				data-tile='1'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
			<button
				id='l3'
				className='tile  tile-grad'
				data-tile='2'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
			<button
				id='l4'
				className='tile  tile-grad'
				data-tile='3'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
			<button
				id='l5'
				className='tile  tile-grad'
				data-tile='4'
				onClick={handleLetter}
			>
				&nbsp;
			</button>
		</StyledPlayerTiles>
	);
};
const StyledPlayerTiles = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 1rem;
	gap: 0.5rem;
	position: relative;
	gap: 1rem;
	.tile-background {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 40px;
		background: ${({ theme }) => theme.bg};
		border-top: 3px solid ${({ theme }) => theme.borderSecondary};
		border-bottom: 3px solid ${({ theme }) => theme.borderSecondary};
		width: 100%;
		transition: all 0.5s linear;
	}
	.tile {
		padding: 0.5rem;
		font-size: 3.2rem;
		background: ${({ theme }) => theme.bgTile};
		font-family: 'Fredoka', sans-serif;
		font-weight: 500;
		text-transform: uppercase;
		flex: 1;
		text-align: center;
		color: ${({ theme }) => theme.textColorSecondary};
		border: 1px solid ${({ theme }) => theme.borderSecondary};
		border-radius: 1rem;
		z-index: 1;
	}
	.tile-grad {
		background-image: linear-gradient(
			to right,
			#8f8e8d 0%,
			#ffffff 51%,
			#c4c0bd 100%
		);
	}
	.tile-grad {
		margin: 0px;
		padding: 1rem;
		text-align: center;
		text-transform: uppercase;
		transition: 0.3s;
		background-size: 200% auto;
		color: ${({ theme }) => theme.textColorSecondary};
		box-shadow: 3px 2px 4px ${({ theme }) => theme.boxShadow};
		border-radius: 10px;
	}

	.tile-grad:hover {
		background-position: right center;
		color: ${({ theme }) => theme.textColorSecondary};
		text-decoration: none;
		cursor: pointer;
		transform: scale(0.8);
	}
	.tile-grad.active {
		background-image: none;
		background: ${({ theme }) => theme.bgTileActive};
		transform: scale(0.8);
		color: white;
	}
`;

export default PlayerTiles;
