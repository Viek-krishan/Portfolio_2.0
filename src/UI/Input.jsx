export default function Input({
  id,
  type = "text",
  placeholder = "Enter",
  name="name...",
}) {
  return (
    <div className="Name w-72 m-5">
      <input
        id={`${id}`}
        type={`${type}`}
        className=" border-l-2 border-b-2 backdrop-blur-xl border-gray-900/30 txt-light-brown text-sm rounded-lg block phone:w-5/6 laptop:w-full p-2.5 dark:placeholder-gray-900 dark:text-black drop-shadow-xl focus:outline-none  "
        placeholder={`${placeholder}`}
        name={`${name}`}
        required
      />
    </div>
  );
}
