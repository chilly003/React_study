import Sidebar from "./component/Sidebar.jsx";
import NewProject from "./component/NewProject.jsx";
import NoProSelected from './component/NoProSelected.jsx'
import SelectedP from './component/SelectedP.jsx'
import { useState } from "react";

function App() {
  const [projectsState, setprojectsState] = useState({
    selectedProjectId: undefined, //프로젝트가 하나도 선택되어 있지 않을 때
    projectes: [],
    tasks:[]
  })

  function handleAddT(text) {
    setprojectsState(prevState => {
      const tasktId = Math.random()
      const NewTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: tasktId
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, NewTask]
      }
    })
  }

  function handleDeleteT(id) {
    setprojectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((tasks) => tasks.id !== id),
      }
    })
  }

  function handleSelctProject(id) {
    setprojectsState(prevState => {
      return {
        ...prevState, //변경하지 않는 것들
        selectedProjectId: id //프로젝트를 추가할 때 이제 null 상태로준다.
      }
    })
  }
  

  function handleStartAdd() {
    setprojectsState(prevState => {
      return {
        ...prevState, //변경하지 않는 것들
        selectedProjectId: null //프로젝트를 추가할 때 이제 null 상태로준다.
      }
    })
  }

  function handleCancelAddProjects() {
    setprojectsState(prevState => {
      return {
        ...prevState, //변경하지 않는 것들
        selectedProjectId: undefined
      }
    })
  }

  function handleAddProjects(projectData) {
    setprojectsState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projectes: [...prevState.projectes, newProject]
      }
    })
  }

  function handleDeleteProject() {//? 이거 왜 !== 이걸로 완료하는거임
    setprojectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projectes: prevState.projectes.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projectes.find(
    (project) => project.id === projectsState.selectedProjectId
  )

  let content = 
  <SelectedP 
  project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddT}
  onDeleteTask={handleDeleteT}
  tasks={projectsState.tasks}
  />

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProjects} onCancel={handleCancelAddProjects}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProSelected onStartAdd={handleStartAdd} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
    <Sidebar onStartAdd={handleStartAdd} 
    projects={projectsState.projectes} 
    onSelectProject={handleSelctProject}
    selectedProjectId={projectsState.selectedProjectId}
    />
    {content}
    </main>
  );
}

export default App;
