import Paragraph from '../../components/Paragraph';
import Title from '../../components/Title';
import { GithubSection } from './styles';

const About = () => (
	<section>
		<Title fontSize={16}> About me </Title>
		<Paragraph type={'main'}>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
			recusandae aliquid dolores fugit! Deleniti voluptates voluptatum
			adipisci, maxime, quaerat a veniam, quo commodi rerum obcaecati
			doloremque sunt recusandae asperiores neque!
		</Paragraph>
		<GithubSection>
			<img
				className="img-b"
				src="https://github-readme-stats.vercel.app/api?username=Wil-Fs&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
			/>
			<img
				className="img-a"
				src="https://github-readme-stats.vercel.app/api/top-langs/?username=Wil-Fs&layout=compact&langs_count=7&theme=dracula"
			/>
		</GithubSection>
	</section>
);

export default About;
