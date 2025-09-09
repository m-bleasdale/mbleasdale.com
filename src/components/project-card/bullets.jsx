'use client';

import { useState } from "react";

const maxBullets = 4;

export default function Bullets ({ bullets }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const isTruncated = bullets.length > maxBullets;
    const displayedBullets = isExpanded || !isTruncated ? bullets : bullets.slice(0, maxBullets);

    return (
        <div>
        <ul className="list-disc pl-6">
            {displayedBullets.map((bullet, index) => (
                <li className="leading-relaxed" key={index}>{bullet}</li>
            ))}
        </ul>
            {isTruncated && (
                <button
                onClick={toggleReadMore}
                className="text-muted-foreground text-sm font-medium hover:underline hover:cursor-pointer focus:outline-none"
                >
                {isExpanded ? "Read less" : "Read more"}
                </button>
            )}
        </div>
    )
}