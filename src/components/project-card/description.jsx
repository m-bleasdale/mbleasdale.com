'use client';

import { useState } from "react";

const maxLength = 200;

export default function Description ({ text }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const isTruncated = text.length > maxLength;
    const displayedText = isExpanded || !isTruncated ? text : text.slice(0, maxLength) + "...";

    return (
        <p>
            {displayedText}<br/>
            {isTruncated && (
                <button
                onClick={toggleReadMore}
                className="text-muted-foreground text-sm font-medium hover:underline hover:cursor-pointer focus:outline-none"
                >
                {isExpanded ? "Read less" : "Read more"}
                </button>
            )}
        </p>
    )
}