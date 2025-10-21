import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ButtonBase } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";

const StyledAppBar = styled(AppBar)(() => ({
  top: "auto",
  bottom: 0,
}));

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <StyledAppBar position="fixed" color="default">
          <Grid
            container
            spacing={8}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography
                variant="h6"
                style={{
                  textAlign: "left",
                  width: "100%",
                  paddingLeft: "20px",
                }}
              >
                Gallereasy POC web app
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                style={{
                  textAlign: "right",
                  width: "100%",
                  paddingRight: "20px",
                }}
              >
                <ButtonBase
                  onClick={() => {
                    window
                      .open("https://github.com/AkshayHere", "_blank")
                      .focus();
                  }}
                >
                  &copy;&nbsp;AkshayHere
                </ButtonBase>
              </Typography>
            </Grid>
          </Grid>
        </StyledAppBar>
      </React.Fragment>
    );
  }
}

//Define the Properties Type
FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
