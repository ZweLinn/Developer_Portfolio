import MyProjects from "../components/Projects/myProjects";
import TypeForProjects from "../components/Projects/Type";


export default function Projects() {
    return (
        <div className="Projects container-fluid">
            <div className="py-4">
                <h2 className="words text-light">My Recent Works</h2>
                <TypeForProjects />
            </div>

            <MyProjects/>
        </div>
    )
}