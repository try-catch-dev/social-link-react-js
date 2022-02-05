import React, { useState } from 'react';
import ParticlesBg from "particles-bg";
import './App.css';
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import TextLoop from "react-text-loop";
import Typist from 'react-typist';

function App() {
	const config_cursor = {
		show: true,
		blink: true,
		element: '🔨',
		hideWhenDone: true,
	}

	const [darkmode, setdarkmode] = useState(false);

	return (
		<div>
			<div className={`card ${darkmode ? 'dark' : ''}`}>
				<div className="toggle-btn" onClick={() => setdarkmode(!darkmode)}></div>
				<div className="dark-mode"></div>
				<div className="card_body">
					<div className="profile text-center ">
						<img src="/logo192.png" className="avatar" alt="avatar" />
						<div className="bg_content rd_12 p_8">
							<h1>@TryCatch</h1>
							<p className='mt-16'>Seputar Programming</p>
							<Typist cursor={config_cursor}>
								Terima Jasa Pembuatan Website, Android Apps & IOS Apps
							</Typist>
						</div>

						<div className="bg_content rd_12 p_8 mt-16">
							Familiar with{' '}
							<TextLoop interval={800}>
								<span className='higthlight'>Laravel</span>
								<span className='higthlight'>Lumen</span>
								<span className='higthlight'>React JS</span>
								<span className='higthlight'>Next JS</span>
								<span className='higthlight'>Node JS</span>
								<span className='higthlight'>Mysql</span>
								<span className='higthlight'>Flutter</span>
							</TextLoop>
						</div>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="/some-url">
							<BsInstagram />
							<span>Instagram</span>
						</a>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="/some-url">
							<FaTiktok />
							<span>Tiktok</span>
						</a>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="/some-url">
							<FiYoutube />
							<span>Youtube</span>
						</a>
					</div>

				</div>
			</div>
			<ParticlesBg type="thick" bg={true} />
		</div>
	);
}

export default App;
