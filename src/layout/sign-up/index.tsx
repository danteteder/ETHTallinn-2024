import { FC } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import forgetful_grandma from 'assets/images/forgetful_grandma.png';
import { Divider, Grid, ListItem, TextField, Typography } from "@mui/material";

interface MainContentProps {
  isDarkMode: boolean;
}

const CreateAccountPage: FC<MainContentProps> = ({ isDarkMode }) => {
  const styles = {
    content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "stretch", 
      height: "100vh",
      overflow: "auto",
      color: isDarkMode ? "white" : "black" 
    },
    half: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center", 
      padding: "50px",
      color: isDarkMode ? "white" : "black" 
    },
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: isDarkMode ? "white" : "black" ,
      fontSize: '40px' 
    }
  } as const;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const form = useForm<any>({
    defaultValues: {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
    },
  });

    return (
       <>
      <div style={styles.center}><h2>Forgetful account<img src={forgetful_grandma} alt="Logo" width="120" height="102" /></h2>
        <div style={styles.content}>
            <FormProvider {...form}>
                <Typography variant="h6">Let's get your personality registered</Typography>
                    <Grid container sx={{ paddingTop: 2 }} columnSpacing={4} rowSpacing={4}>
                      <ListItem>
                        <Typography sx={{ paddingTop: 1 }} color="dimgray">
                            Question 1
                        </Typography>
                           <TextField id="outlined-basic" label="Outlined" variant="standard" sx={{ backgroundColor: isDarkMode ? 'white' : 'black', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}/>
                      </ListItem>
                        <Divider />
                      <ListItem  >
                        <Typography sx={{ paddingTop: 1 }} color="dimgray">
                            Question
                        </Typography>
                           <TextField id="outlined-basic" label="Outlined" variant="standard" sx={{ backgroundColor: isDarkMode ? 'white' : 'black', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}/>
                      </ListItem>
                        <Divider />
                      <ListItem  >
                        <Typography sx={{ paddingTop: 1 }} color="dimgray">
                            Question
                        </Typography>
                           <TextField id="outlined-basic" label="Outlined" variant="standard" sx={{ backgroundColor: isDarkMode ? 'white' : 'black', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}/>
                      </ListItem>
                        <Divider />
                      <ListItem  >
                        <Typography sx={{ paddingTop: 1 }} color="dimgray">
                            Question
                        </Typography>
                           <TextField id="outlined-basic" label="Outlined" variant="standard" sx={{ backgroundColor: isDarkMode ? 'white' : 'black', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}/>
                      </ListItem>
                        <Divider />
                      <ListItem  >
                        <Typography sx={{ paddingTop: 1 }} color="dimgray">
                            Question
                        </Typography>
                           <TextField id="outlined-basic" label="Outlined" variant="standard" sx={{ backgroundColor: isDarkMode ? 'white' : 'black', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}/>
                      </ListItem>
                    </Grid>
            </FormProvider>
        </div>
      </div>
    </>
    )
}

export default CreateAccountPage;