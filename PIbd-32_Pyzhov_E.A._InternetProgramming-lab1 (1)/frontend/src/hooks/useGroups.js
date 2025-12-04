import { useEffect, useState } from "react";
import * as api from "../api/groupsApi";

export default function useGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api.getAll().then(setGroups);
  }, []);

  return { groups };
}