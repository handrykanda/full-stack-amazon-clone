import React from "react";
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Footer({ order }) {
  const preventDefault = (event) => event.preventDefault();
  return (
    <div>
      <div className="footer-top-container">
        <Grid
          style={{ maxWidth: "80%", margin: "auto" }}
          container
          justify="center"
        >
          <Grid item md={3} sm={3} xs={12}>
            <Typography className="footer-item" variant="h6" gutterBottom>
              Get to Know Us
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Careers
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Blog
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                About Amazon
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Investor Relations
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Amazon Devices
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Amazon Tours
              </Link>
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Typography className="footer-item" variant="h6" gutterBottom>
              Make Money with Us
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Sell products on Amazon
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Sell apps on Amazon
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Become an Affiliate
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Advertise Your Products
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Self-Publish with Us
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Host an Amazon Hub
              </Link>
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Typography className="footer-item" variant="h6" gutterBottom>
              Amazon Payment Products
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Amazon Business Card
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Shop with Points
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Reload Your Balance
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Amazon Currency Converter
              </Link>
            </Typography>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Typography className="footer-item" variant="h6" gutterBottom>
              Let Us Help You
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Amazon and COVID-19
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Your Account
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="/orders" onClick={preventDefault} color="inherit">
                Your Orders
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Shipping Rates & Policies
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Returns & Replacements
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Manage Your Content and Devices
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Amazon Assistant
              </Link>
            </Typography>
            <Typography className="footer-item" variant="body1" gutterBottom>
              <Link href="#" onClick={preventDefault} color="inherit">
                Help
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Grid
        className="footer-bottom-container"
        container
        justify="center"
        alignItems="center"
      >
        <Grid style={{ textAlign: "center" }} item md={4} sm={4} xs={12}></Grid>
        <Grid style={{ textAlign: "center" }} item md={1} sm={1} xs={12}>
          <Typography className="footer-item" variant="caption" gutterBottom>
            <Link href="#" onClick={preventDefault} color="inherit">
              Conditions of Use
            </Link>
          </Typography>
        </Grid>
        <Grid style={{ textAlign: "center" }} item md={1} sm={1} xs={12}>
          <Typography className="footer-item" variant="caption" gutterBottom>
            <Link href="#" onClick={preventDefault} color="inherit">
              Privacy Notice
            </Link>
          </Typography>
        </Grid>
        <Grid style={{ textAlign: "center" }} item md={1} sm={1} xs={12}>
          <Typography className="footer-item" variant="caption" gutterBottom>
            <Link href="#" onClick={preventDefault} color="inherit">
              Interest-Based Ads
            </Link>
          </Typography>
        </Grid>
        <Grid style={{ textAlign: "center" }} item md={4} sm={4} xs={12}>
          <Typography
            style={{ color: "#999999" }}
            className="footer-item"
            variant="caption"
            gutterBottom
          >
            &copy; 1996-{1900 + new Date().getYear()}, Amazon.com, Inc. or its
            affiliates
          </Typography>
        </Grid>
        <Grid style={{ textAlign: "center" }} item md={1} sm={1} xs={12}></Grid>
      </Grid>
    </div>
  );
}

export default Footer;
