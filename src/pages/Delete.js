import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';

const Delete = () => {
	let navigate = useNavigate();

	const handleDelete = (key) => {
		localStorage.setItem(`${key}`, JSON.stringify([]));
	};
	return (
		<StyledDeletePage>
			<ul>
				<li
					onClick={() => {
						handleDelete('conundrums');
					}}
				>
					<MdDeleteForever size='50px' />
					<p>Delete Conundrum Data</p>
				</li>
				<li
					onClick={() => {
						handleDelete('anagramRound');
					}}
				>
					<MdDeleteForever size='50px' />
					<p>Delete Anagram Data</p>
				</li>
				<li
					onClick={() => {
						handleDelete('letterRounds');
					}}
				>
					<MdDeleteForever size='50px' />
					<p>Delete Letter Round Data</p>
				</li>
			</ul>
			<button
				onClick={() => {
					navigate('/');
				}}
			>
				back
			</button>
		</StyledDeletePage>
	);
};
const StyledDeletePage = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	flex: 1;
	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		row-gap: 2rem;
		li {
			background-color: ${({ theme }) => theme.bgTile};
			border-radius: 5px;
			padding: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex: 1;
			cursor: pointer;
		}
	}
`;

export default Delete;
