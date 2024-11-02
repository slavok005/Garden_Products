import React from "react";
import s from './index.module.scss'

export default function Skeleton({ count }) {
    return (
        <div className={s.skeleton}>
            {Array.from({ length: count }).map((_, index) => 
            <div key={index} />
            )}
        </div>
    )
}