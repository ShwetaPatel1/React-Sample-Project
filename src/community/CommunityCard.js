import React, {Component} from "react";

function communityCard(props) {
	return (
		<div className='wrapper'>
			<div className='comm-img'>
				{props.community.imgUrl ? (
					<img
						src={props.community.imgUrl}
						height='420'
						width='327'
						alt={props.community.name}
					/>
				) : (
					<>
						<br />
						<h1>{props.community.name}</h1> <hr />
					</>
				)}
			</div>
			<div className='comm-info'>
				<div className='comm-text'>
					<h1>{props.community.name}</h1>
					<h2>{props.community.group}</h2>
					<hr />

					{props.homes.length > 0 ? (
						props.homes.map(home => (
							<>
								<div className='home'>
									<p>
										<span> House Type : </span>
										{home.type} <br />
										<span> Area : </span> {home.area} Sqft
										<br />
										<span> Average Price : </span> ${home.price} <br />
									</p>
									<br />
								</div>
							</>
						))
					) : (
						<h6 className='msg'>
							Currently the average prices for houses in this community is not
							available.
						</h6>
					)}
				</div>
			</div>
		</div>
	);
}

export default communityCard;
