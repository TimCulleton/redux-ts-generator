import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import * as ReactDOM from "react-dom";

export class QueryField extends React.Component {
  public state = { };

  public render() {
      return (
          <TextField
          id="rdf-endpoint"
          className="queryField"
          select
          label="Native select"
          SelectProps={{
            native: true,
          }}
          helperText="RDF Endpoint"
          margin="normal">

          </TextField>
      );
    }
}

export class UserContextField extends React.Component {
  public state = { };

  public render() {
      return (
          <TextField
          id="rdf-endpoint"
          className="userField"
          select
          label="Native select"
          SelectProps={{
            native: true,
          }}
          helperText="RDF Endpoint"
          margin="normal">

          </TextField>
      );
    }
}

export class ContentContainer extends React.Component {
  public render() {
    return (
      <Paper className="content-container">
        <Typography variant="display2" gutterBottom>RDF Developer Tools</Typography>

        <QueryConfig>

        </QueryConfig>
        <TextField></TextField>
      </Paper>
    );
  }
}

export class QueryConfig extends React.Component {
  public render() {
    return (
      <Paper id="endpoint-config-container" className="endpoint-config-container">
      <div >
        <QueryField></QueryField>
      </div>
      <div >
        <UserContextField></UserContextField>
      </div>
      </Paper>
    );
  }
}

ReactDOM.render(
  <ContentContainer />,
  document.getElementById("reactRoot"),
);
