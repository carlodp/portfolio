import * as React from "react"
import { } from "gatsby"

const ProjectIndex = ({ title, slug, date, description }) => {
    return (
       <div className="project">
            <p>{title}</p>
            <p>{description}</p>
       </div>
    )
}

export default ProjectIndex;