import React, { Component, PureComponent, Fragment } from "react";
import {
	Text,
	View,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	Dimensions
} from "react-native";
import { connect } from "react-redux";
import { DrawerItems } from "react-navigation";
import DrawerImage from "../../../assets/cover.png";
import UserImage from "../../../assets/user.png";
import MultiColorLine from "../MultiColorLine";
import PersonImage from "../PersonImage";
import styles from "./styles";

class DrawerContent extends PureComponent {
	render() {
		const { width, height } = Dimensions.get("window");
		const screenMode = width < Dimensions.get("window").height ? "portrait" : "landscape";
		return (
			<ScrollView>
				<ImageBackground
					source={DrawerImage}
					style={{
						height: screenMode === "portrait" ? width / 2 + 20 : height / 2 + 20
						// marginBottom: 20,
					}}
				>
					<View style={styles.drawerContainer}>
						<TouchableOpacity>
							<PersonImage
								age={21}
								color={this.props.color}
								character={"A"}
								image={UserImage}
							/>
							{this.props.user && (
								<Fragment>
									<Text style={{ color: "white", fontSize: 21, marginTop: 10 }}>
										{`${this.props.user.firstName} ${this.props.user.lastName}`}
									</Text>
									<Text style={styles.name}>{this.props.user.email}</Text>
								</Fragment>
							)}
						</TouchableOpacity>
					</View>
					<MultiColorLine />
				</ImageBackground>
				<DrawerItems {...this.props} />
			</ScrollView>
		);
	}
}

DrawerContent.defaultProps = {};
const mapStateToProps = state => {
	return { user: state.user.user };
};
export default connect(mapStateToProps)(DrawerContent);
