import { ProjectContext } from "TodoApp";
import { NoProject } from "components/NoProject/NoProject";
import { ProjectHeader } from "components/Project/ProjectHeader/ProjectHeader";
import { Task } from "components/Project/Task/Task";
import { text } from "config";
import { useContext, useEffect, useMemo, useState } from "react";
import { ProjectService } from "services/project.service";
import {
  IProject,
  IProjectContext,
  ITask,
  LoadingStates,
  SpecialProjectUrl,
} from "../../interfaces";
import { NewTask } from "./Task/NewTask";
import "./_project.scss";
import { reservedKey } from "functions/reserved-key";
import { Observable, switchMap, tap } from "rxjs";

interface ProjectAttrs {
  tasks: ITask[];
  specialUrl?: SpecialProjectUrl;
}

export const Project = ({ tasks, specialUrl }: ProjectAttrs) => {
  const { project, reloadProjects, reloadProjectTasks, setProject } =
    useContext<IProjectContext>(ProjectContext);

  const [sort, setSort] = useState(project.sort);
  const [isLoading, setIsLoading] = useState<LoadingStates>("yes");
  const [showCompleted, setShowCompleted] = useState(project.showCompleted);
  // const [projectName, setProjectName] = useState(
  //   project.name || text.project.noName
  // );
  const [editListName, setEditListName] = useState(false);

  const open = tasks.filter((task: ITask) => !task.done);
  const completed = tasks.filter((task: ITask) => !!task.done);

  console.log(completed.length, open.length, showCompleted);

  const allCompleted = useMemo(() => {
    if (
      !open.length &&
      ((completed.length && !showCompleted) || !!specialUrl)
    ) {
      return (
        <li>
          <NoProject className="o-1" inspireText={text.allTasksCompleted()} />
        </li>
      );
    }
    return "";
  }, [tasks, showCompleted]);

  useEffect(() => {
    // setProjectName(project.name);
    setShowCompleted(project.showCompleted);
    setIsLoading("p");

    reloadTasks().subscribe();
  }, [project.secret]);

  const reloadTasks = (): Observable<ITask[]> => {
    return reloadProjectTasks().pipe(
      tap((tasks: ITask[]) => {
        setIsLoading("");
        return tasks;
      })
    );
  };

  const changedSort = (newSort: string): Observable<ITask[]> => {
    setSort(newSort);

    setProject({ ...project, sort: newSort });

    return ProjectService.updateProject({ ...project, sort: newSort }).pipe(
      switchMap(() => reloadProjectTasks())
    );
  };

  const updateProject = (
    partialProject: Partial<IProject>
  ): Observable<IProject[]> => {
    setIsLoading("n");
    return ProjectService.updateProject({
      ...project,
      ...partialProject,
    }).pipe(
      switchMap((p: IProject | void) => {
        setEditListName(false);
        setIsLoading("");
        setProject(p as IProject);
        return reloadProjects();
      })
    );
  };

  return (
    <div className={isLoading === "p" ? "loader-input cover" : ""}>
      <ProjectHeader
        pf={{
          updateProject,
          editListName,
          setEditListName,
          showCompleted,
          setShowCompleted,
          sort,
          setSort: changedSort,
          canEdit: !specialUrl,
          isLoading,
        }}
      />

      <ul>
        {open.map((task) => (
          <Task
            key={task.id}
            task={task}
            level={0}
            showDot={reservedKey(project.secret)}
          />
        ))}
        {specialUrl ? null : (
          <>
            {showCompleted &&
              completed.map((task) => <Task key={task.id} task={task} />)}

            <NewTask
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              reloadTasks={reloadTasks}
            />
          </>
        )}
        {allCompleted}
      </ul>
    </div>
  );
};
