const getPosts = async () => {
    const response = await fetch("http://localhost:3001/api/posts");
    const data = await response.json();

    return data;
};

const posts = await getPosts();

// console.log(posts);

// this will be used as static data for now
// const posts = [
//     {
//         content: "Hello there",
//         imageUrl: "",
//         socialMedia: {
//             facebook: "",
//             linkedin: "",
//             youtube: "",
//         },
//         time: "2023-12-21T20:22:44.787Z",
//         title: "a",
//         writer: "a",
//         _id: "akh5YMFkdnwNZC7PQmV4f",
//     },
//     {
//         content: "Greetings!",
//         imageUrl: "",
//         socialMedia: {
//             facebook: "",
//             linkedin: "",
//             youtube: "",
//         },
//         time: "2023-12-21T20:25:12.345Z",
//         title: "Mock Post 2",
//         writer: "John Doe",
//         _id: "xyz123",
//     },
//     {
//         content: "Hi everyone!",
//         imageUrl: "",
//         socialMedia: {
//             facebook: "",
//             linkedin: "",
//             youtube: "",
//         },
//         time: "2023-12-21T20:30:01.000Z",
//         title: "Mock Post 3",
//         writer: "Jane Doe",
//         _id: "abc789",
//     },
//     {
//         content: "How are you doing?",
//         imageUrl: "",
//         socialMedia: {
//             facebook: "",
//             linkedin: "",
//             youtube: "",
//         },
//         time: "2023-12-21T20:40:30.987Z",
//         title: "Mock Post 4",
//         writer: "Alice",
//         _id: "def456",
//     },
//     {
//         content: "Just a test post!",
//         imageUrl: "",
//         socialMedia: {
//             facebook: "",
//             linkedin: "",
//             youtube: "",
//         },
//         time: "2023-12-21T20:50:59.123Z",
//         title: "Mock Post 5",
//         writer: "Bob",
//         _id: "ghi789",
//     },
// ];

export { posts };
