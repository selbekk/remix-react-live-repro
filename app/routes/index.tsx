import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

export default function Index() {
  return (
    <div>
      <h1>Remix and React Live bug repro</h1>
      <p>Here is a simple reproduction. Steps taken:</p>
      <ol>
        <li>
          Run <code>npx create-remix@latest</code>
        </li>
        <li>Choose Remix App Server, install deps and enter folder</li>
        <li>
          Run <code>npm install react-live@next</code>
        </li>
        <li>Add the code below to show a very basic live code editor</li>
      </ol>
      <p>
        This crashes because of some weird compilation error. It says the{" "}
        <code>import_NameManager.default</code> is not a constructor. That's
        correct (even though it should be) - it's an object containing the a
        default property, which in turn includes the NameManager constructor.
      </p>
      <p>To make matters worse, this works on Remix 1.1.3, but not 1.2.3.</p>
      <LiveProvider code={`<h1>Hello world</h1>`}>
        <LiveEditor />
        <LivePreview />
        <LiveError />
      </LiveProvider>
    </div>
  );
}
