import { ThemeProvider } from 'styled-components';

import Sidebar from './containers/Sidebar';
import GlobalStyle, { Container } from './styles';
import About from './containers/About';
import Projects from './containers/Projects';
import themeLight from './themes/light';
import themeDark from './themes/dark';
import { useState } from 'react';

function App() {
	const [usingThemeDark, setUsingThemeDark] = useState(true);

	function setTheme() {
		setUsingThemeDark(!usingThemeDark);
	}

	return (
		<ThemeProvider theme={usingThemeDark ? themeDark : themeLight}>
			<GlobalStyle />
			<Container>
				<Sidebar setTheme={setTheme} />
				<main>
					<About />
					<Projects />
				</main>
			</Container>
		</ThemeProvider>
	);
}

export default App;
