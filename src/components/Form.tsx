const Form = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="m-auto flex max-w-[1156px] flex-col items-center justify-between rounded-lg pt-36 pb-36 sm:flex-row sm:pt-24 sm:pt-56">
      <div className="flex flex-col items-center gap-24">
        <h1 className="text-6xl font-bold text-center">
          Your Journey to Coding Conf {currentYear} Stars Here!
        </h1>
        <p className="text-center text-2xl">
          Secure your spot at next year's biggest coding conference
        </p>
      </div>
    </div>
  );
};

export default Form;
