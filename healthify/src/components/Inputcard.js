import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from 'react-select';
import './Inputcard.css';

const symptoms = [
    { value: '1', label: 'Fever'},
    { value: '2', label: 'Nausea'},
    { value: '3', label: 'Headache'},
    { value: '4', label: 'Nose Bleed'},
    { value: '5', label: 'Cough'},
    { value: '6', label: 'Shivers'},
    { value: '7', label: 'Diarhea'},
    { value: '8', label: 'Chest Pain'},
];

export default function MediaCard() {
    return (
        <div>
            <Card className='input-card'>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" >
                        Enter Your Symptoms:
                    </Typography>
                    <Typography variant="body2" color="black">
                        Enter as many symptoms matches for accurate result.
                    </Typography>
                </CardContent>
                <div className="select-container">
                    <Select
                        // defaultValue={[symptomItem[1]]}
                        isMulti
                        name="symptoms"
                        options= {symptoms}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
                <CardActions>
                    <Button size="small" style={{color: 'white', backgroundColor: '#017561'}}>Submit</Button>
                </CardActions>
            </Card>

        </div>
    );
}