function Nav (props) {

	//let list = props.data;
	//const listItem = list.map( item => <li><a href={item.link}>{item.text}</a></li>);
	return (
		<nav>
			<ul className="main-navigation">
				<li>{props.navigation[0]}</li>
			</ul>
		</nav>
	);
}

export default Nav;