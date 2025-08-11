import DragNDrop from "./DragNDrop";

const htmlForm = () => {
  const currentYear = new Date().getFullYear();
  const inputStyle = "border border-neutral-700 rounded-xl p-6 w-[500px]";

  return (
    <div className="m-auto flex max-w-[1156px] flex-col gap-36 items-center justify-between rounded-lg pt-36 pb-36">
      <div className="flex flex-col items-center gap-24">
        <h1 className="text-6xl font-bold text-center">
          Your Journey to Coding Conf {currentYear} Stars Here!
        </h1>
        <p className="text-center text-2xl text-neutral-300">
          Secure your spot at next year's biggest coding conference
        </p>
      </div>
      <section className="flex flex-col gap-24">
        <DragNDrop />
        <div className="flex flex-col gap-12">
          <label htmlFor="name">Full Name</label>
          <input
            className={inputStyle}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="flex flex-col gap-12">
          <label htmlFor="email">Email Adress</label>
          <input
            className={inputStyle}
            type="text"
            id="email"
            name="email"
            required
            placeholder="example@email.com"
          />
        </div>
        <div className="flex flex-col gap-12">
          <label htmlFor="username">GitHub Username</label>
          <input
            className={inputStyle}
            type="text"
            id="username"
            name="username"
            required
            placeholder="@yourusername"
          />
        </div>
        <button
          className="bg-orange-500 p-12 rounded-2xl text-neutral-800 font-bold w-[500px]"
          type="submit"
        >
          Generate my ticket
        </button>
      </section>
    </div>
  );
};

export default htmlForm;
