import styled from 'styled-components';

import { Props } from './index';

export const Title = styled.h3<Props>`
	color: ${(props) => props.theme.mainColor};
	font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
	font-weigth: bold;
	margin-bottom: 16px;
`;
