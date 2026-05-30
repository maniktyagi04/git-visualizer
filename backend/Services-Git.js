// // const simpleGit = require('simple-git');
// import simpleGit from "simple-git";

// export async function GitData(repoPath) {

//     const git = simpleGit(repoPath);
//     const log = await git.log();

//     const branches = await git.branch();

//     return {
//         commits: log.all,
//         branches: branches.all,
//         currentBranch: branches.current,
//     };
// }

export async function GitData() {
    return {
        currentBranch: "main",
        branches: ["main", "dev", "feature-auth"],
        commits: [
            {
                hash: "a1b2c3",
                message: "initial project setup",
                author_name: "Manik",
                date: "2026-05-29"
            },
            {
                hash: "a1s2d3f4",
                message: "Added Login Page",
                author_name: "Manik",
                date: "2026-05-29"
            },
            {
                hash: "q1w2e3r4",
                message: "Added SignUp Page",
                author_name: "Manik",
                date: "2026-05-29"
            },
        ]
    }
}

