import { Button } from "@/components/ui/button";

const Counter = () => {
  return (
    <div>
      Count is {count}
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
};
