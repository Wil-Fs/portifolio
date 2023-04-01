import styled from 'styled-components';
import { Paragraph } from '../../components/Paragraph/styles';

export const Description = styled(Paragraph)`
	margin-top: 24px;
	margin-bottom: 40px;
`;

export const ButtonTheme = styled.button`
	font-size: 10px;
	font-weight: bold;
	color: ${(props) => props.theme.bgColorMain};
	background-color: ${(props) => props.theme.mainColor};
	padding: 8px;
	border: 1px solid ${(props) => props.theme.mainColor};
	border-radius: 12px;
	cursor: pointer;
`;

export const SideBarContainer = styled.div`
	position: sticky;
	top: 80px;
	left: 0;

	@media (max-width: 768px) {
		margin-bottom: 40px;
		text-align: center;
	}
`;
