import { useMemo } from "react";
import { useQueryUrlParam } from "utils/url";

export const useProjectSearchParams = () => {
  const [param, setParam] = useQueryUrlParam(["name", "personId"]);
  return [
    useMemo(()=>({
      ...param,
      personId: Number(param.personId) || undefined,
    }),[param]),
    setParam,
  ] as const;
};
