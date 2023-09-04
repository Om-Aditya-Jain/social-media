import React from "react";
import {
	DeleteOutline,
	PersonAddOutlined,
	PersonRemoveOutlined,
} from "@mui/icons-material";
import {
	Box,
	IconButton,
	Typography,
	responsiveFontSizes,
	useTheme,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends, setPosts } from "../state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

const Friend = ({ friendId, name, subtitle, userPicturePath, postId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { _id } = useSelector((state) => state.user);
	const token = useSelector((state) => state.token);
	const friends = useSelector((state) => state.user.friends);

	const { palette } = useTheme();
	const primaryLight = palette.primary.light;
	const primaryDark = palette.primary.dark;
	const main = palette.neutral.main;
	const medium = palette.neutral.medium;

	const isFriend = friends.find((friend) => friend._id === friendId);

	const patchFriend = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/users/${_id}/${friendId}`,
			{
				method: "PATCH",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		dispatch(setFriends({ friends: data }));
	};

	const deletePost = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/posts/${postId}/delete`,
			{
				method: "DELETE",
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const data = await response.json();
		dispatch(setPosts({ posts: data }));
	};

	return (
		<FlexBetween>
			<FlexBetween gap="1rem">
				<UserImage image={userPicturePath} size="55px" />
				<Box
					onClick={() => {
						navigate(`/profile/${friendId}`);
						navigate(0);
					}}
				>
					<Typography
						color={main}
						variant="h5"
						fontWeight="500"
						sx={{
							"&:hover": {
								color: palette.primary.main,
								cursor: "pointer",
							},
						}}
					>
						{name}
					</Typography>
					<Typography color={medium} fontSize="0.75rem">
						{subtitle}
					</Typography>
				</Box>
			</FlexBetween>
			{_id !== friendId ? (
				<IconButton
					onClick={() => patchFriend()}
					sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
				>
					{isFriend ? (
						<PersonRemoveOutlined sx={{ color: primaryDark }} />
					) : (
						<PersonAddOutlined sx={{ color: primaryDark }} />
					)}
				</IconButton>
			) : (
				postId !== 0 && (
					<IconButton
						onClick={() => deletePost()}
						sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
					>
						<DeleteOutline sx={{ color: primaryDark }} />
					</IconButton>
				)
			)}
		</FlexBetween>
	);
};

export default Friend;
