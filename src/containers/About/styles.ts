import styled from 'styled-components';

export const GithubSection = styled.div`
	display: flex;
	margin-top: 32px;
	margin-bottom: 64px;

	img {
		height: 157px;
	}

	@media (max-width: 768px) {
		display: block;
		img {
			width: 100%;
			height: auto;
		}
	}
`;
