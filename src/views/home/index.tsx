import React from 'react'
import { Header } from '../../componets/header';
import { Footer } from '../../componets/footer';
import './style.scss';

const Home = () => {
  return (
    <div id="home">
		<Header />

		<section id="search">
			<div className="titleSearch">
				<h2>Search for what you need</h2>
				<h3>Search for what you need and we'll deliver the best workers to help you!</h3>
			</div>

			<div className="inputSearch">
				<input type="text" placeholder='What are you looking for ?' />
				<button>Serach</button>
			</div>

			<div className="preSelectSearch">
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

			<div className="smartSearchContent">
				<div className="separationLine">
					<p>Or</p>
				</div>

				<div className="smartSearch">
					<h2>Find a professional near you</h2>
					<a href="">Quick search</a>
				</div>
			</div>
		</section>

		<section id='employees'>
			<div className="wrapper">
				<h2>Employees of the week</h2>
				<div className="employeesList">
					<div className="employee">
						<div className="employeeImage">
							<a href="/collaborator"><div className="image"></div></a>
						</div>
						<div className="employeeInfo">
							<h3>Ronald Junger</h3>
							<ul>
								<li><p>Electrian</p></li>
								<li><p>Pinter</p></li>
							</ul>
						</div>
					</div>
					<div className="employee">
						<div className="employeeImage">
							<a href="/collaborator"><div className="image"></div></a>
						</div>
						<div className="employeeInfo">
							<h3>Ronald Junger</h3>
							<ul>
								<li><p>Electrian</p></li>
								<li><p>Pinter</p></li>
							</ul>
						</div>
					</div>
					<div className="employee">
						<div className="employeeImage">
							<a href="/collaborator"><div className="image"></div></a>
						</div>
						<div className="employeeInfo">
							<h3>Ronald Junger</h3>
							<ul>
								<li><p>Electrian</p></li>
								<li><p>Pinter</p></li>
							</ul>
						</div>
					</div>
					<div className="employee">
						<div className="employeeImage">
							<a href="/collaborator"><div className="image"></div></a>
						</div>
						<div className="employeeInfo">
							<h3>Ronald Junger</h3>
							<ul>
								<li><p>Electrian</p></li>
								<li><p>Pinter</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<Footer />
    </div>
  )
}

export default Home;