interface RecentBoxProps {
  value: string;
}
const RecentBox = (props: RecentBoxProps) => {
  return (
    <span className="text-[#2C58DB] bg-[#EEF6FF] mx-3 px-3 py-1 rounded-lg font-semibold flex-shrink-0  h-7  m-4 text-sm ">
      {props.value}
    </span>
  );
};
export default RecentBox;
