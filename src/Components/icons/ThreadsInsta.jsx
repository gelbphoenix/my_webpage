import { ReactComponent as ThreadsLogo } from '../../Assets/threads.svg';

const ThreadsInsta = ({ size }) => {
  return (
    <ThreadsLogo
      width={size}
      height={size}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
    />
  );
};

export default ThreadsInsta;
