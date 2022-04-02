import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const OrderCard = ({ name, price, quantity, index, handleAdd, handleReset}) => (
    <Card sx={{ minWidth: 275, maxWidth: 300, minHeight:200, mb: 2.5}}>
        <CardContent>
            <Typography variant="h4" sx={{ mb: 1.5}} component="div">
                {name}
            </Typography>
            <Typography variant="h4" sx={{ mb: 1.5}} color="text.secondary">
                {`$${price}`}
            </Typography>
            <Typography variant="h5" color="text.secondary">
                {`Added ${quantity} to cart`}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => handleAdd(index)}>Add one more</Button>
            <Button onClick={() => handleReset(index)}>Reset</Button>
      </CardActions>
    </Card>
)

export default OrderCard;