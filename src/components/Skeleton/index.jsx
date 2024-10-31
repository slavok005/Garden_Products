import React from "react";

export default function Skeleton() {
    return (
        <div>
            {Array.from({ length: count }).map((_, index) => 
            <div key={index} />
            )}
        </div>
    )
}