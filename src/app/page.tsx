import { TestBox } from "@/components/TestBox"
import { FancyHeading } from "@/components/FancyHeading";

export default function Home() {
  return (
    <div className="p-10">
    <h1 className="text-2xl font-bold text-center">CN Function Practice From Home</h1>
    <TestBox large={false} className="flex items-center justify-center text-4xl" />
    <FancyHeading variant="primary" title="We are learning cn() function from FancyHeading"/>
  </div>
  );
}
