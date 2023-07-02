import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { db } from '../Assets/database';

const useProject = () => {
  const userName = new URL(db.profiles[4].link).pathname;

  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.github.com/users${userName}/repos`
      );
      return data;
    },
  });
};

export default useProject;
