import Sheet from '@mui/joy/Sheet';
import Textarea from '@/components/textarea';
import Typography from '@mui/material/Typography';
import "@/components/css/recommendsheet.css";
  
interface Mark {
  prefecture: string;
  lng:number;
  lat:number;  
  city: string;
  image: string;
  feature: string;
}
export default function MyApp(props:Mark) {

  const {prefecture,image,city,feature} = props;
  
  return (
    <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
        Prefecture
        <Textarea text={prefecture}/>
        City
        <Textarea text={city}/>
        <Typography variant="h5" gutterBottom>
        {feature}    
        </Typography>

        <img 
        className='image'
          src={`/images/recommend/${image}.png`}
        //   srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt="知床"
        />
        {/* <Cardlist/> */}
    </Sheet>
  )
}