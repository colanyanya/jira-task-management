import { useAsync } from "./use-async";
import { Project } from "screens/project-list/inter";
import { useEffect } from "react";
import { cleanObject } from "utils";
import { useHttp } from "./http";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
