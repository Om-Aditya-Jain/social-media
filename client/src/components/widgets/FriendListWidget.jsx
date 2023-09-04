import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../Friend";
import WidgetWrapper from "../WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state";

const FriendListWidget = ({ userId }) => {
	const [friendsData, setFriendsData] = useState([]);
	const dispatch = useDispatch();
	const { palette } = useTheme();
	const token = useSelector((state) => state.token);
	const friends = useSelector((state) => state.user.friends);
	const loggedInUserId = useSelector((state) => state.user._id);

	const getFriends = async () => {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/users/${userId}/friends`,
			{
				method: "GET",
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		const data = await response.json();
		setFriendsData(data);
		if (userId === loggedInUserId) {
			dispatch(setFriends({ friends: data }));
		}
	};

	useEffect(() => {
		getFriends();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<WidgetWrapper>
			<Typography
				color={palette.neutral.dark}
				variant="h5"
				fontWeight="500"
				sx={{ mb: "1.5rem" }}
			>
				Friend List
			</Typography>
			<Box display="flex" flexDirection="column" gap="1.5rem">
				{userId === loggedInUserId
					? friends?.map((friend) => (
							<Friend
								key={friend._id}
								friendId={friend._id}
								name={`${friend.firstName} ${friend.lastName}`}
								subtitle={friend.occupation}
								userPicturePath={friend.picturePath}
								postId={0}
							/>
					  ))
					: friendsData?.map((friend) => (
							<Friend
								key={friend._id}
								friendId={friend._id}
								name={`${friend.firstName} ${friend.lastName}`}
								subtitle={friend.occupation}
								userPicturePath={friend.picturePath}
								postId={0}
							/>
					  ))}
			</Box>
		</WidgetWrapper>
	);
};

export default FriendListWidget;
