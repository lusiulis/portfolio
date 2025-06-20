const GapBlock = ({ isFull = false }) => {
  return <div className={`gap${isFull ? ' full' : ''}`} />;
};

export default GapBlock;
