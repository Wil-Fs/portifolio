import styled from 'styled-components';

type PropsButton = {
	primary?: boolean;
	fontSize?: string;
};

const Button = styled.button<PropsButton>`
	padding: 8px;
	background-color: ${(props) => (props.primary ? 'green' : 'blue')};
	font-size: ${(props) => props.fontSize || '16px'};
	:hover {
		cursor: pointer;
		font-size: 16px;
	}
`;

const DangerButton = styled(Button)`
	background-color: red;
	color: #fff;

	span {
		text-decoration: line-through;
	}
`;

const Test = () => {
	return (
		<div>
			<h1>GoodLuck</h1>
			<Button fontSize="18px" primary>
				Ignore it!
			</Button>
			<Button primary={false}>Click!</Button>
			<DangerButton as="a">
				<span>Dont click here!</span>
			</DangerButton>
		</div>
	);
};

export default Test;
