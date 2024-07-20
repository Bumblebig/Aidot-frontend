import { Prompt, ChatDisplay } from "..";
import { Menu } from "../../assets";

const Main: React.FC = function () {
  return (
    <section className="bg-white h-full w-full overflow-hidden pt-14 pb-24 relative md:pt-3">
      <div className="w-full p-4 absolute top-0 left-0 shadow-lg cursor-pointer md:hidden">
        <Menu />
      </div>

      <ChatDisplay />
      <Prompt />
    </section>
  );
};

export default Main;
