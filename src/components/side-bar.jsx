import React from "react"

function SideBar () {
    return (
        <React.Fragment>
            <svg stroke="var(--c-black)" height="100" width="100" viewBox="0 0 100 100">
                <line
                    x1="20" x2="80" y1="40" y2="40"
                    strokeWidth="10"
                ></line>
                <line
                    x1="20" x2="60" y1="60" y2="60"
                    strokeWidth="10"
                ></line>
            </svg>
            <span>

            </span>
        </React.Fragment>
    )
}

export default SideBar