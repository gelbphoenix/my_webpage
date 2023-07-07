import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { db } from '../Assets/database';

const useProject = () => {
  const githubUserName = new URL(
    db.profiles.find(gh => gh.title === 'Github').link
  ).pathname.substring(1);

  const url = `https://api.github.com/users/${githubUserName}/repos`;

  return useQuery({
    queryKey: ['projects'],

    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
};

export default useProject;
