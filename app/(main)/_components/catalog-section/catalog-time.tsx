export const CatalogTime = ({
  initialTime,
}: {
  initialTime: { titleTime: string; time: string }[];
}) => {
  return (
    <div className=" flex gap-5">
      {initialTime.map((t, index) => (
        <div className=" " key={index}>
          <span className=" text-sm">{t.titleTime}</span>
          <h2 className=" text-4xl font-bold">{t.time}</h2>
        </div>
      ))}
    </div>
  );
};
