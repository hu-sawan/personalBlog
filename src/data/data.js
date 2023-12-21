const getPosts = async () => {
    const response = await fetch("http://localhost:3001/api/posts");
    const data = await response.json();

    return data;
};

const posts = await getPosts();

console.log(posts);

export { posts };
