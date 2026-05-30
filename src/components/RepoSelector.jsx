import { useState } from "react";

export default function RepoSelector({onLoad}) {
    const [path, setPath] = useState('');


    return (
        <div>
            <input
            
                type = "text"
                placeholder = "Enter Your Repo's Path"
                value={path}
                onChange={(e) => 
                    setPath(e.target.value)}
            />

            <button onClick={() => onLoad(path)}> 
                Load Repository
            </button>
        </div>

    );

}