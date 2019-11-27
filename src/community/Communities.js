import React, {Component} from "react";
import CommunityCard from "./CommunityCard";

class Community extends Component {
	constructor(props) {
		super(props);
		this.state = {
			communities: [],
			homes: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch(
			"https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities"
		)
			.then(res => res.json())
			.then(json => {
				json.sort((a, b) => a.name.localeCompare(b.name));
				this.setState({
					communities: json
				});
			});

		fetch("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes")
			.then(res => res.json())
			.then(homePrices => {
				homePrices.sort((a, b) => a.communityId.localeCompare(b.communityId));
				this.setState({
					isLoaded: true,
					homes: homePrices
				});
			});
	}

	render() {
		return this.state.isLoaded ? (
			<div className='App'>
				<h1>OpenHouse</h1>
				<p className='headerText'>
					Confused about the communities in Calgary? Let us help you make better
					informed decision by providing the tailored information that you need.{" "}
				</p>
				{this.state.communities &&
					this.state.communities.map((i, {id, name, group}) => (
						<>
							<CommunityCard
								community={i}
								homes={this.state.homes.filter(k => k.communityId === i.id)}
							/>
						</>
					))}
			</div>
		) : (
			<div className='App'> Please wait for data to be loaded. </div>
		);
	}
}

export default Community;
