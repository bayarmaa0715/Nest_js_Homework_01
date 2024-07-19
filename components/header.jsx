const Header = () => {
  return (
    <header className=" flex justify-center my-32 gap-24">
      <div className="w-1/4">
        <h6 className="text-xs uppercase text-red-700 font-bold mb-5">
          {" "}
          Let’s shift your business
        </h6>
        <h1 className="mb-5 text-6xl font-bold">
          Shift your business fast with Shade Pro.
        </h1>
        <p className="mb-6 text-slate-500">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
        <button className="font-bold text-white bg-indigo-700 px-4 py-2.5  rounded-lg">
          Get started a project
        </button>
      </div>
      <div>
        <img src="/images/img1.png" alt="" className="rounded-full w-96 h-96" />
      </div>
    </header>
  );
};

export default Header;
