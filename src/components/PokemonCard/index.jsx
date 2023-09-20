import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { typeHandler } from '../../utils';

export default function PokemonCard({ name, image, types }) {

  return (
    <CardActionArea>
    <Card style={{ cursor: 'pointer' }}>
        <CardMedia component="img" sx={{ height: 200 }} image={image} title="green iguana"/>
        <CardContent >
          <Box display="flex" justifyContent="space-between" >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" display={'flex'} alignItems={'center'} justifyContent={'center'}>
              {typeHandler(types) }
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
