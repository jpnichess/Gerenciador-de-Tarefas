function Button(props) {
  return (
    <button
      className="bg-orange-400 hover:bg-orange-600 p-2 rounded-md text-white transition"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;