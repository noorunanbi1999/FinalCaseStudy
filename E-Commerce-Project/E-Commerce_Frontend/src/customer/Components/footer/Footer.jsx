import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      className="text-white"
      sx={{ bgcolor: 'black', py: 3, textAlign: 'center', mt: 10,  color: 'white' }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={6} md={3} sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
          Company
        </Typography>
        <Typography variant="body2" component="p" gutterBottom sx={{ color: 'white' }}>
          About
        </Typography>
        <Typography variant="body2" component="p" gutterBottom sx={{ color: 'white' }}>
          Blog
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
          Legal
        </Typography>
        <Typography variant="body2" component="p" gutterBottom sx={{ color: 'white' }}>
          Claim
        </Typography>
        <Typography variant="body2" component="p" gutterBottom sx={{ color: 'white' }}>
          Privacy
        </Typography>
        <Typography variant="body2" component="p" gutterBottom sx={{ color: 'white' }}>
          Terms
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="p" sx={{ color: 'white' }}>
          &copy; 2024 Sonata eStore. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
