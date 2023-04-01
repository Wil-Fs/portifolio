import { Title as TitleStyled } from './styles';

export type Props = {
	children: string;
	fontSize?: number;
};

const Title = ({ fontSize, children }: Props) => (
	<TitleStyled fontSize={fontSize}>{children}</TitleStyled>
);

export default Title;
