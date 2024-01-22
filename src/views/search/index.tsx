import { Header } from "../../componets/header"
import { Footer } from "../../componets/footer"
import { EmployerBox } from "../../componets/employerBox"
import "./style.scss";

export const Search = () => {
	return (
		<section id="searchPage">
			<Header />

			<div className="wrapper">
				<div className="searchContent">
					<div className="searchBox">
						<div className="searchtitle">
							<h3>Search for:</h3>
							<input type="text" placeholder='What you looking for?' />
							<button id="searchEmployer">Search</button>
						</div>
						<div className="searchPreOption">
							<ul>
								<li><a href="">Eletrician</a></li>
								<li><a href="">Eletrician</a></li>
								<li><a href="">Eletrician</a></li>
								<li><a href="">Eletrician</a></li>
								<li><a href="">Eletrician</a></li>
								<li><a href="">Eletrician</a></li>
								<li><a href="">Eletrician</a></li>
								<li><a href="">Eletrician</a></li>
							</ul>
						</div>
					</div>

					<div className="epmloyerList">
						<EmployerBox />
						<EmployerBox />
						<EmployerBox />
						<EmployerBox />
					</div>
				</div>
			</div>

			<Footer />
		</section>
	)
}

export default Search;