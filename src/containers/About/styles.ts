import styled from 'styled-components';

export const GithubSection = styled.div`
	display: flex;
	margin-top: 32px;
	margin-bottom: 64px;

	img {
		height: 157px;
	}
	.img-a {
		margin-left: -212px;
	}

	@media (max-width: 768px) {
		display: block;
		.img-a,
		.img-b {
			margin: 0;
			width: 100%;
			height: auto;
		}
	}
`;
