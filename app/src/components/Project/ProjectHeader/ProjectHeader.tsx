import { ProjectContext } from "TodoApp";
import { ColorAndIconPicker } from "components/ColorAndIconPicker/ColorAndIconPicker";
import { ProjectOptions } from "components/Project/ProjectOptions/ProjectOptions";
import { text } from "config";
import { IProject, IProjectContext, ITask, LoadingStates } from "interfaces";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { ProjectService } from "services/project.service";

import "./project-header.scss";

interface ProjectHeaderAttrs {
  projectFunctions: {
    updateProject: (partialProject: Partial<IProject>) => any;
    editListName: boolean;
    setEditListName: Dispatch<SetStateAction<boolean>>;
    showCompleted: boolean;
    setShowCompleted: Dispatch<SetStateAction<boolean>>;
    sort: string;
    setSort: (sort: string) => any; // Promise<IProject | void> // Dispatch<SetStateAction<string>>;
  };
  isLoading: LoadingStates;
}

export const ProjectHeader = ({
  projectFunctions,
  isLoading,
}: ProjectHeaderAttrs) => {
  const {
    project,
    reloadProjects,
    changeToProject,
    openAddUserModal,
    reloadProjectTasks,
  } = useContext<IProjectContext>(ProjectContext);
  const [moreDropdown, showMoreDropdown] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<IProject["name"]>(
    project.name
  );

  const psc = projectFunctions.showCompleted;

  const deleteProject = (): Promise<void> | void => {
    if (window.confirm(text.project.delete._)) {
      return ProjectService.deleteProject(project).then(() => {
        changeToProject(null);
        reloadProjects();
      });
    }
  };

  const deleteTasks = (): Promise<ITask[]> | void => {
    if (window.confirm(text.project.delete.tasks)) {
      return ProjectService.deleteProjectTasks(project).then(() =>
        reloadProjectTasks()
      );
    }
  };

  const share = (): Promise<void> | void => {
    showMoreDropdown(false);
    openAddUserModal(project);
  };

  const toggleShowCompleted = (
    showCompleted: boolean
  ): Promise<IProject | void> => {
    projectFunctions.setShowCompleted(showCompleted);
    return ProjectService.updateProject({
      ...project,
      showCompleted,
    }).then(() => {
      reloadProjects();
    });
  };

  const updateColorAndIcon = (
    colorAndIcon: Partial<Pick<IProject, "color" | "icon">>
  ): void => {
    projectFunctions.updateProject(colorAndIcon);
  };

  return projectFunctions.editListName ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        projectFunctions.updateProject(project);
      }}
      className={"flex-row " + (isLoading === "n" ? " loader-input" : "")}
    >
      <input
        className="as-title h5 project-title"
        autoFocus /*onBlur={ project.saveListName }*/
        value={projectName}
        disabled={isLoading === "n"}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <button className="ib material-icons" type="submit">
        save
      </button>
      <button
        className="ib material-icons"
        onClick={() => projectFunctions.setEditListName(false)}
      >
        close
      </button>
    </form>
  ) : (
    <div className="project-title-bar" data-tip={text.project.title._}>
      <div className="project-title">
        <ColorAndIconPicker
          icon={project.icon}
          color={project.color}
          onChangeComplete={updateColorAndIcon}
        />
        <h5
          className="project-header"
          onClick={() => projectFunctions.setEditListName(true)}
        >
          {projectName}
        </h5>
      </div>
      <ProjectOptions
        sort={projectFunctions.sort}
        setSort={projectFunctions.setSort}
        moreDropdown={moreDropdown}
        showMoreDropdown={showMoreDropdown}
      >
        <li className="dropdown-item" key="completed">
          <button
            className="ib w-100 left-align"
            onClick={() => toggleShowCompleted(!psc)}
          >
            <i className="material-icons tiny left btn-pr">
              {psc ? "check_box_outline_blank" : "check_box"}
            </i>
            {psc ? text.hideCompleted : text.showCompleted}
          </button>
        </li>
        <li className="dropdown-item" key="share">
          <button className="ib w-100 left-align" onClick={() => share()}>
            <i className="material-icons tiny left btn-pr">person_add</i>
            {text.project.share}
          </button>
        </li>
        <li className="dropdown-item" key="tasks">
          <button className="ib w-100 left-align" onClick={() => deleteTasks()}>
            <i className="material-icons tiny left btn-pr">delete_forever</i>
            {text.project.delete.tasks}
          </button>
        </li>
        {!project.shared ? (
          <li className="dropdown-item" key="delete">
            <button
              className="ib w-100 left-align"
              onClick={() => deleteProject()}
            >
              <i className="material-icons tiny left btn-pr">delete</i>
              {text.project.delete._}
            </button>
          </li>
        ) : null}
      </ProjectOptions>
    </div>
  );
};
