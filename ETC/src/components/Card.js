// @flow

import * as React from 'react';
import { View, StyleSheet, ColorPropType } from 'react-native';
import type { ViewStyleProp } from '../resources/constants';

const styles = StyleSheet.create({
	card: {
		flexWrap: 'wrap',
		width: '97%',
		minHeight: 100,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		borderRadius: 5,
		margin: 5,

		elevation: 5
	},
	content: { flex: 1, flexDirection: 'row' }
});

type CardProps = {
	children: React.Node,
	style?: ViewStyleProp
};

type StyledCardProps = {
	cardStyle?: ViewStyleProp,
	children: React.Node,
	color: ColorPropType,
	contentStyle?: ViewStyleProp
};

export const Card = ({ children, style }: CardProps): React.Node => (
	<View style={{ ...styles.card, ...style }}>{children}</View>
);

export const StyledCard = ({
	children,
	contentStyle,
	cardStyle,
	color
}: StyledCardProps): React.Node => (
	<Card style={cardStyle}>
		<View style={styles.content}>
			<View
				style={{
					width: '2%',
					height: '100%',
					backgroundColor: color,
					borderTopLeftRadius: 5,
					borderBottomLeftRadius: 5
				}}
			/>
			<View style={contentStyle}>{children}</View>
		</View>
	</Card>
);
