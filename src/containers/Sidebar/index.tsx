import Avatar from '../../components/Avatar';
import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';
import { ButtonTheme, Description, SideBarContainer } from './styles';

const Sidebar = () => (
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
			<ButtonTheme>Trocar tema</ButtonTheme>
		</SideBarContainer>
	</aside>
);

export default Sidebar;
