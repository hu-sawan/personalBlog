// Currently posts are staticly stored in src/data/data.js,
// but after hosting the backend on a hosting service we will fetch the posts from the backend.

// const getPosts = async () => {
//     const response = await fetch("http://localhost:3001/api/posts");
//     const data = await response.json();

//     return data;
// };

// const posts = await getPosts();

// console.log(posts);

// this will be used as static data for now
const posts = [
    {
        _id: "TzNmgRcQ2bj4juBK5assD",
        title: "How I learned React",
        author: "Hussein Sawan",
        time: "2024-01-05T19:12:46.040Z",
        content:
            "Switching from vanilla JS to react was pretty challenging to me but to be honest I would never regret learning it. Since react is popular it have a numerous amount of tools that makes developing UI with it much easier than vanilla JS. While starting my journey in programming I suffered from what is known as tutorial hell, that was giving me fake feeling of success yet destroying me and wasting my time for nothing.\n\n## How I Escaped Tutorial Hell?\nI started my journey with programming with JS (actually I started it with HTML but I think it doesn't count) it was great experience and I enjoyed it but the problem was I only relying on tutorial and never tried to do something by myself which was a temporary joy I was learning stuff but not as intended, I figured the problem late and decided to reinvest some time in boosting my front-end skills. After that I started learning C++ while I was enrolled in a university course. Surprisingly I loved C++ and decided to go deeper in it so I started learning data structures and algorithms to push my technical skills forward I decided to participate in competitive programming contests which was a great choice since I have gained many skills by doing so like logical thinking, problem solving and much more. While starting my C++ journey I decided to not repeat my first mistake, I tried to code and solve as much as I can without looking at any resources and after finishing I see how to do things in the most efficient way to learn the best practices and how to write efficient code, this helped me a lot and made me 10x better programmer than the one I was before C++.\n\n## Starting With React\nWhile learning C++ I made some web projects with vanilla JS and I always wanted to start learning React but I had no time, in December during the holidays vacation of 2023 I decided to start with React, I was always thinking about a website were I have my personal space and share what pops in my mind and that was a personal website the one you are currently reading this from. Before I started I went through React documentation to know how things works. The idea of reusable components and routes was new yet great to learn, the hardest part for me was how to think in react. While planning for this website I figured out that I will need to use some back-end stuff for the Blog part I used nodejs with expressjs to handle the back-end part and used mongoDB and cloud storage using Firebase to store the posts images, I used mongoDB since the database will be very simple and no complexity needed for that reason I didn't choose any SQL database and used cloud storage since posts images will not be updated (probably) ",
        imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/personalblog-364f2.appspot.com/o/posts%2FTzNmgRcQ2bj4juBK5assD.png?alt=media&token=97b25764-e799-477b-adcb-64e8293f463f",
        socialMedia: {
            facebook: "",
            linkedin: "https://www.linkedin.com/in/husseinsawan/",
            youtube: "",
        },
    },
];

export { posts };
