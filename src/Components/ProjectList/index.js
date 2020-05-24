import React from 'react'
import './index.css'

const filterfunc = () =>
    item => {
        return item.id !== 265209848 && item.id !== 250121729

    }

const ProjectList = ({ data }) =>
    <div className="projectList">
        {
            data.filter(filterfunc()).map((item) => (
                <div key={item.id} className="col s12 l4 project-img" >
                    <a href={item.html_url}>
                        <img src={`https://gh-card.dev/repos/${item.full_name}.svg`} />
                    </a>
                </div>

            ))
        }
    </div >

export default ProjectList;