import React from "react"
import ContentLoader from "react-content-loader"

const InfoSceleton = (props) => (
    <ContentLoader
        speed={2}
        width={375}
        height={230}
        viewBox="0 0 375 230"
        backgroundColor="#c4c4c4"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="87" y="36" rx="0" ry="0" width="284" height="18" />
        <circle cx="41" cy="43" r="32" />
        <rect x="10" y="90" rx="0" ry="0" width="364" height="33" />
        <rect x="10" y="137" rx="0" ry="0" width="364" height="33" />
        <rect x="10" y="183" rx="0" ry="0" width="364" height="33" />
    </ContentLoader>
)

export default InfoSceleton