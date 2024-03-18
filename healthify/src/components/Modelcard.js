import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './Modelcard.css';


export default function Modelcard() {
    return (
            <Card className='model-card'>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}} >
                        Chat with Language Model
                    </Typography>
                    <Typography variant="body2" color="black" sx={{textAlign: 'justify'}}>
                        You can ask about common and important rare health conditions, diseases, psychology disorders; 
                        Their diagnosis, treatment, symptoms and more:
                    </Typography>
                    <TextField fullWidth id="model-symptoms" color='success' placeholder='e.g. What are the symptoms of stroke?' variant="outlined" sx={{marginTop: '3%', backgroundColor: 'white', borderRadius: '5px'}} />
                </CardContent>
                <CardActions>
                    <Button size="small" style={{color: 'white', backgroundColor: '#017561'}}>Ask</Button>
                </CardActions>
            </Card>
    );
}