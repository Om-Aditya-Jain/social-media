import React from "react";
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";
import WidgetWrapper from "../WidgetWrapper";

const AdvertWidget = () => {
	const { palette } = useTheme();
	const dark = palette.neutral.dark;
	const main = palette.neutral.main;
	const medium = palette.neutral.medium;

	return (
		<WidgetWrapper>
			<FlexBetween>
				<Typography color={dark} variant="h5" fontWeight="500">
					Sponsered
				</Typography>
				<Typography color={medium}>Create Ad</Typography>
			</FlexBetween>
			<img
				width="100%"
				height="auto"
				src="http://localhost:3001/assets/info4.jpeg"
				alt="advertisement"
				style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
			/>
			<FlexBetween>
				<Typography color={main}>Mika Cosmetics</Typography>
				<Typography color={medium}>mikacosmetics.com</Typography>
			</FlexBetween>
			<Typography color={medium} m="0.5rem 0">
				Your pathway to stunning and immaculate beauty and made sure your skin
				is exfoliating skin and shining like light.
			</Typography>
		</WidgetWrapper>
	);
};

export default AdvertWidget;
