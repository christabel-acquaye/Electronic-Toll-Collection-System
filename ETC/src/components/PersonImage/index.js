import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const PersonImage = props => (
	<View
		style={{
			width: props.size
		}}
	>
		{props.image && (
			<Image
				source={props.image}
				style={{
					width: props.size,
					height: props.size,
					borderRadius: 12,
					...props.imageStyle
				}}
			/>
		)}
		{!props.image && (
			<View
				style={{
					width: props.size,
					height: props.size,
					backgroundColor: props.color,
					borderRadius: 12,
					alignItems: 'center',
					justifyContent: 'center',
					...props.imageStyle
				}}
			>
				<Text
					style={{
						fontSize: props.displayTextSize,
						color: 'white'
					}}
				>
					{props.character}
				</Text>
			</View>
		)}

		<View style={{ ...styles.ageContainer, width: props.ageSize }}>
			<Text style={{ ...styles.ageText, fontSize: props.textSize }}>{props.age}</Text>
		</View>
	</View>
);

PersonImage.defaultProps = {
	size: 69,
	textSize: 12,
	ageSize: 30,
	displayTextSize: 32
};
export default PersonImage;
