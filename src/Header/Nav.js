

function Nav (props) {

	let list = props.nav.map((e) => <li key={e.link}><a href={e.link}>{e.text}</a></li>);

	return (
		<nav>
			<ul className="main-navigation">
				{list}
			</ul>
		</nav>
	);
}

export default Nav;