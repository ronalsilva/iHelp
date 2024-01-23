import { Header } from "../../componets/header"
import { Footer } from "../../componets/footer"
import { CarouselContent } from "../../componets/carousel"
import { Comments } from "../../componets/comment"
import "./style.scss";
import { useState } from "react";

export const Collaborator = () => {

	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index:any) => {
	  	setActiveTab(index);
	};

	return (
		<section id="Collaborator">
			<Header />

			<div className="wrapper">
				<h3 className="collaboratorTitle">My service information:</h3>
				<div className="collaboratorContent">
					<div className="collaboratorData">
						<a href="" className='favorite'>favorite</a>
						<p className='evaluation'>4.5</p>

						<div className="collaboratorPicture">
							<div className="image"></div>
						</div>
						<div className="collaboratorBaseInfo">
							<h2><span className="name">Ronald Junger</span> <span className="price">$24,45</span></h2>
							<p>Pinter - Pinter - Pinter - Pinter</p>
						</div>
						<div className="collaboratorDecription">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ...</p>
						</div>
						<div className="collaborationContact">
							<p className="phoneNumber">Phone: <span>(345) 321-2353</span></p>
							<p className="phoneEmail">Email: <a href=""><span>ronaldjunger@gmail.com</span></a></p>
							<p className="phoneWebsite">Email: <a href=""><span>www.site.ca</span></a></p>
						</div>
						<button>Contratar</button>
					</div>
					<div className="collaboratorExtraInfo">
						<CarouselContent />
					</div>
				</div>

				<div className="collaboratorSecondaryContent">
					<div className="collaboratorSecondaryDescriptiom">
						<div className="optionsTab">
							<ul>
								<li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
									About me
								</li>
								<li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
									My work as a professional
								</li>
								<li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
									My working style
								</li>
							</ul>
						</div>
						<div className="optionsText">
							<div className={activeTab === 0 ? 'active optionsItem' : 'optionsItem'}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh venenatis cras sed. A arcu cursus vitae congue. Mattis pellentesque id nibh tortor id aliquet lectus. Nunc aliquet bibendum enim facilisis gravida. Molestie nunc non blandit massa enim nec dui. Tristique magna sit amet purus gravida. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Risus viverra adipiscing at in tellus integer feugiat. Sit amet porttitor eget dolor morbi. Vitae tortor condimentum lacinia quis vel eros. Mi eget mauris pharetra et ultrices neque. Sem integer vitae justo eget magna. Nisl tincidunt eget nullam non nisi. Morbi tempus iaculis urna id volutpat lacus laoreet non.
Diam maecenas sed enim ut sem viverra aliquet eget sit. Morbi enim nunc faucibus a pellentesque. Ut enim blandit volutpat maecenas. Dolor sit amet consectetur adipiscing. Ut tellus elementum sagittis vitae. Integer quis auctor elit sed vulputate mi sit amet. Cras fermentum odio eu feugiat pretium nibh ipsum. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Tincidunt ornare massa eget egestas purus viverra. Nec feugiat nisl pretium fusce id velit ut. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Eget nunc scelerisque viverra mauris in aliquam. Nisl purus in mollis nunc sed. Tincidunt dui ut ornare lectus sit amet est placerat. Id consectetur purus ut faucibus pulvinar. Fringilla ut morbi tincidunt augue interdum velit euismod. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet nisl purus in mollis nunc sed id. Ultrices vitae auctor eu augue ut lectus arcu bibendum at.</p>
							</div>
							<div className={activeTab === 1 ? 'active optionsItem' : 'optionsItem'}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh venenatis cras sed.</p>
							</div>
							<div className={activeTab === 2 ? 'active optionsItem' : 'optionsItem'}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh venenatis cras sed. A arcu cursus vitae congue. Mattis pellentesque id nibh tortor id aliquet lectus. Nunc aliquet bibendum enim facilisis gravida. Molestie nunc non blandit massa enim nec dui. Tristique magna sit amet purus gravida. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Risus viverra adipiscing at in tellus integer feugiat. Sit amet porttitor eget dolor morbi. Vitae tortor condimentum lacinia quis vel eros. </p>
							</div>
						</div>
					</div>
				</div>

				<div className="commetsContent">
					<div className="commetsTitle">
						<h4>Comments:</h4>
					</div>
					<div className="usersComments">
						<Comments />
						<Comments />
						<Comments />
						<Comments />
						<Comments />
						<Comments />
						<Comments />
						<Comments />
					</div>
				</div>
			</div>

			<Footer />
		</section>
	)
}

export default Collaborator;