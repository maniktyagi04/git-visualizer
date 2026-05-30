// import ReactFlow from "reactflow";
// import "reactflow/dist/style.css";

// export default function GitGraph({commits}) {
//     const nodes = commits.map((commit, index) => ({
//         id: commit.hash,
//         position: {
//             x: 250,
//             y: index * 120,
//         },
//         data: {
//             label: (
//                 <div>
//                     <strong>{commit.hash.slice(0, 7)}</strong>
//                     <br /> 
//                     {commit.message}
//                 </div>
//             ),
//         },

//     }));

//     const edges = commits.slice(1).map((commit, index) => ({

//         id: `e-${index}`,
//         source: commits[index].hash,
//         target: commit.hash,
//     }));


//     return (
//         <div style={{ height: "700px" }}>
//             <ReactFlow nodes={nodes} edges={edges} />

//         </div>
//     );
// }


export default function GitGraph({ commits }) {
    return (
        <div>
            {commits.map((commit) => (
                <div key={commit.hash}
                style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "8px"
                }}
                >
                    <h3>{commit.message}</h3>
                    <p><b>Hash:</b> {commit.hash}</p>
                    <p><b>Author: </b>{commit.author_name}</p>
                    <p>Date: {commit.date}</p>
                </div>
            ))}
        </div>
    )
}