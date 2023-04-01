import styled from 'styled-components';

export const GithubSection = styled.div`
	margin-top: 32px;
	margin-bottom: 64px;

	img {
		height: 157px;
		:last-child {
			margin-left: 4px;

			@media (max-width: 768px) {
				margin: 0;
			}
		}
	}

	@media (max-width: 768px) {
		display: block;
		img {
			width: 100%;
			height: auto;
		}
	}
`;
