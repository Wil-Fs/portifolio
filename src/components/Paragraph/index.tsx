import { Paragraph as ParagraphStyled } from './styles';

export type Props = {
	children: string;
	type?: 'main' | 'secondary';
	fontSize?: number;
};

const Paragraph = ({ fontSize, children, type = 'main' }: Props) => (
	<ParagraphStyled fontSize={fontSize} type={type}>
		{children}
	</ParagraphStyled>
);

export default Paragraph;
