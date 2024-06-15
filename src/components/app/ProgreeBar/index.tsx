

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className="w-full">
      <div className="w-full h-2 bg-lighterGray rounded-full">
        <div
          className="h-2 bg-textBlue rounded-full"
          style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
export default ProgressBar