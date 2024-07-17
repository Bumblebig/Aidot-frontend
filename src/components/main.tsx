const Main: React.FC = function () {
  return (
    <section className="bg-red-400 h-screen w-full overflow-hidden">
      <div className="bg-white w-full p-4 fixed top-0 left-0">Menu</div>
      <div className="bg-yellow-900 overflow-y-auto"></div>
      <form className="bg-white w-full fixed bottom-0 left-0 flex justify-between px-3 py-4">
        {/* <input type="text" className="w-4/5 border border-black px-4" /> */}
        <textarea className="w-4/5 border border-black px-4"></textarea>
        <input type="submit" value="Send" className="border border-black p-2" />
      </form>
    </section>
  );
};
export default Main;
