import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(8),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const PersonalCenter = ({
  personalCenterInfo,
  personalCenterHandleSubmit,
  isEdit,
  isPersonalCenterRender,
  personalCenterHandleChange,
}) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline>
        {isPersonalCenterRender && !isEdit && (
          <main>
            <Container className={classes.cardGrid} maxWidth="md">
              <form autoComplete="off" noValidate>
                <Card>
                  <CardHeader title="个人信息" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          helperText="Please specify the first name"
                          label="学号"
                          name="username"
                          onChange={personalCenterHandleChange}
                          required
                          value={personalCenterInfo.username}
                          variant="outlined"
                          disabled={true}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          helperText="Please specify the first name"
                          label="姓名"
                          name="name"
                          onChange={personalCenterHandleChange}
                          required
                          value={personalCenterInfo.name}
                          variant="outlined"
                          disabled={!isEdit}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="手机号"
                          name="phone"
                          onChange={personalCenterHandleChange}
                          required
                          value={personalCenterInfo.phone}
                          variant="outlined"
                          disabled={!isEdit}
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="昵称"
                          name="nickname"
                          onChange={personalCenterHandleChange}
                          required
                          value={personalCenterInfo.nickname}
                          variant="outlined"
                          disabled={!isEdit}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    <Button
                      className={classes.heroButtons}
                      color="primary"
                      variant="contained"
                      onClick={personalCenterHandleSubmit}
                    >
                      修改
                    </Button>
                  </Box>
                </Card>
              </form>
            </Container>
          </main>
        )}
        {isPersonalCenterRender && isEdit && (
          <main>
            <Container className={classes.cardGrid} maxWidth="md">
              <form autoComplete="off" noValidate>
                <Card>
                  <CardHeader title="个人信息" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          helperText="Please specify the first name"
                          label="姓名"
                          name="name"
                          onChange={personalCenterHandleChange}
                          required
                          value={personalCenterInfo.name}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="手机号"
                          name="phone"
                          onChange={personalCenterHandleChange}
                          required
                          value={personalCenterInfo.phone}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <TextField
                          fullWidth
                          label="昵称"
                          name="nickname"
                          onChange={personalCenterHandleChange}
                          required
                          value={personalCenterInfo.nickname}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      p: 2,
                    }}
                  >
                    <Button
                      className={classes.heroButtons}
                      color="primary"
                      variant="contained"
                      onClick={personalCenterHandleSubmit}
                    >
                      保存
                    </Button>
                  </Box>
                </Card>
              </form>
            </Container>
          </main>
        )}
      </CssBaseline>
    </>
  );
};

export default PersonalCenter;
