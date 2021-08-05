import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { isAuthenticated } from "utils";

const CommonRoute = ({
  component: MyComponent,
  ...rest
}: {
  component:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>;
  rest: unknown;
}) => (
  <Route
    {...rest}
    render={(props) =>
      !!isAuthenticated() ? (
        <MyComponent {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {from: props.location}
          }}
        />
      )
    }
  />
);

export default CommonRoute;
