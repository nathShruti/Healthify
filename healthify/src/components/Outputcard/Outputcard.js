import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Outputcard.css';

export default function OutputCard({ selectedValue ,displayData}) {
    return (
        <Card className='output-card'>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                    Your Results:
                </Typography>
                <Typography variant="body2" color="black">
                    Enter as many symptoms matches for accurate result.
                    Enter as many symptoms matches for accurate result.
                    Enter as many symptoms matches for accurate result.
                    <ul>
                        {displayData && selectedValue?.map((option) => (
                            <li key={option.value}>{option.label}</li>
                        ))}
                    </ul>
                </Typography>
            </CardContent>
        </Card>
    );
}