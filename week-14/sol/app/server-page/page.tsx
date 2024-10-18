export default () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-neutral-900">
        welcome to the server page
      </div>
      <div className="text-xl text-neutral-500">
        This page is genereated statically using nextJs this page is rendered on
        the server and then displayed to the client{" "}
      </div>
    </div>
  );
};
