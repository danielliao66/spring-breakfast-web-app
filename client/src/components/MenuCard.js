import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MenuCard = ({ name, price }) => (
    <Card sx={{ minWidth: 275, maxWidth: 300, minHeight:200, mb: 2.5}}>
        <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5}} component="div">
            {name}
        </Typography>
        <Typography variant="h4" color="text.secondary">
            {`$${price}`}
        </Typography>
        </CardContent>
    </Card>
)

export default MenuCard;