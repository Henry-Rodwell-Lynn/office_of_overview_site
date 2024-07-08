import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="m-4" id="error-page">
      <h1>Oops! 👀</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <br />
      <a href={`/`} className=" underline text-blue-800">🔗 Return home</a>
    </div>
  );
}