import { ReactComponent as XCorpSvg } from 'Assets/xcorp.svg';

const XCorpIcon = ({ size }) => {
  return (
    <XCorpSvg
      width={size}
      height={size}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
    />
  );
};

export default XCorpIcon;
