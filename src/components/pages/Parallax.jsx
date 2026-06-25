export default function Parallax(){
    return(
        <>
            {/* <section className="sk__parallax-background-section sk__parallax-fixer-section sk__parallax-fixer-ignore-height overflow-hidden">
					<div className="sk__parallax-background-element"></div>
				</section> */}


				{/* Parallax Rings Section (massive step forward)
				================================================== */}
				<section className="sk__rings-section sk__image-back-cover dark-shade-1-bg overflow-hidden">

					{/* parallax area */}
					<div id="sk__parallax-layers-1" className="container sk__full-height position-relative hue-rotator duration-2s">
						{/* gradient ring 1 */}
						<div data-depth="1.20" className="sk__absolute">
							<div className="sk__flex-center ring-l-container sk__absolute">
								<div className="ring-l sk__gradient-back-v1 dark-shade-1-bg-after"></div>
							</div>
						</div>
						{/*  gradient ring 2  */}
						<div data-depth="1.10" className="sk__absolute">
							<div className="sk__flex-center ring-m-container sk__absolute">
								<div className="ring-m sk__gradient-back-v1 dark-shade-1-bg-after"></div>
							</div>
						</div>
						{/* <!-- gradient ring 3 --> */}
						<div data-depth="0.90" className="sk__absolute">
							<div className="sk__flex-center ring-s-container sk__absolute">
								<div className="ring-s sk__gradient-back-v1 dark-shade-1-bg-after"></div>
							</div>
						</div>
						{/* white rectangle deco 1 */}
						<div data-depth="1.00" className="sk__absolute">
							<div className="sk__flex-center sk__absolute">
								<div className="sk__rectangles">
									<div className="sk__rectangle-white-1 sk__absolute"></div>
								</div>
							</div>
						</div>
						{/* white rectangle deco 2 */}
						<div data-depth="0.90" className="sk__absolute">
							<div className="sk__flex-center sk__absolute">
								<div className="sk__rectangles">
									<div className="sk__rectangle-white-2 sk__absolute"></div>
								</div>
							</div>
						</div>
						{/* black rectangle deco */}
						<div data-depth="0.75" className="sk__absolute">
							<div className="sk__flex-center sk__absolute">
								<div className="sk__rectangles">
									<div className="sk__rectangle-black sk__absolute"></div>
								</div>
							</div>
						</div>
						{/* heading & subheading Shadows */}
						<div data-depth="0.65" className="sk__absolute">
							<div className="sk__flex-center sk__absolute px-15px">
								<div className="flex-child">
									<h1 className="shadowed super-heading text-center">Advanced Resilience Architecture</h1>
									<h2 className="shadowed h2-small text-center">Every protocol, every architecture, and every solution is built with precision, discretion, and proven expertise. </h2>
								</div>
							</div>
						</div>
						{/* heading & subheading */}
						<div data-depth="0.65" className="sk__absolute">
							<div className="sk__flex-center sk__absolute px-15px">
								<div className="flex-child text-center">
									<h1 className="super-heading sk__clipped-text sk__gradient-back-v1">Advanced Resilience Architecture</h1>
									<h2 className="h2-small">Every protocol, every architecture, and every solution is built with precision, discretion, and proven expertise. </h2>
								</div>
							</div>
						</div>

					</div>
					{/* #sk__parallax-layers-1 */}
					
				</section>
				{/* .sk__rings-section */}
        </>
    );
}