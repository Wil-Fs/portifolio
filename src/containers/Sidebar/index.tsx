import Avatar from '../../components/Avatar';
import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';
import { ButtonTheme, Description, SideBarContainer } from './styles';

type Props = {
	setTheme: () => void;
};

const Sidebar = (props: Props) => (
	<aside>
		<SideBarContainer>
			<Avatar />
			<Title fontSize={20}>William Ferreira</Title>
			<Paragraph type={'secondary'} fontSize={16}>
				Wil-Fs
			</Paragraph>
			<Description type={'main'} fontSize={12}>
				Desenvolvedor Full Stack em formação
			</Description>
			<ButtonTheme onClick={props.setTheme}>Trocar tema</ButtonTheme>
		</SideBarContainer>
	</aside>
);

export default Sidebar;
