import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "../../components/form";

const Login = () => {
	const theme = useTheme();
	const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
	return (
		<Box>
			<Box
				width="100%"
				backgroundColor={theme.palette.background.alt}
				p="1rem 6%"
				textAlign="center"
			>
				<Typography fontWeight="Bold" fontSize="32px" color="primary">
					Social World
				</Typography>
			</Box>
			<Box
				width={isNonMobileScreens ? "53%" : "93%"}
				p="2rem"
				m="2rem auto"
				borderRadius="1.5rem"
				backgroundColor={theme.palette.background.alt}
			>
				<Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
					Welcome to Social Media, share your stories!
				</Typography>
				<Form />
			</Box>
		</Box>
	);
};

export default Login;
