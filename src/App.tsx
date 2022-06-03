import React from "react";
import "./App.css";
import { useAuth } from "./context/auth-context";
import { UnauthenticatedApp } from "./unauthenticated-app";
import { AuthenticatedApp } from "./authenticated-app";
import { ErrorBoundary } from "components/error-boundary";
import { FullPageErrorFullback } from "components/lib";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFullback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
