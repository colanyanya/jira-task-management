import React, { ReactNode } from "react";

type FallBackRender = (props: { error: Error | null }) => React.ReactElement;

type Props = React.PropsWithChildren<{
  fallbackRender: FallBackRender;
}>;

type State = {
  error: Error | null;
};
export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    error: null,
  };

  //
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
