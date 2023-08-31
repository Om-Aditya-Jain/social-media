import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../../state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);
	const token = useSelector((state) => state.token);

	const getPosts = async () => {
		const response = await fetch(`http://localhost:3001/posts`, {
			method: "GET",
			headers: { Authorizaton: `Bearer ${token}` },
		});
		const data = response.json();
		dispatch(setPosts({ posts: data }));
	};
	const getUserPosts = async () => {
		const response = await fetch(`http://localhost:3001/${userId}/posts`, {
			method: "GET",
			headers: { Authorizaton: `Bearer ${token}` },
		});
		const data = response.json();
		dispatch(setPosts({ posts: data }));
	};

	return <div>PostsWidget</div>;
};

export default PostsWidget;
