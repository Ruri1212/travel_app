import Sheet from '@mui/joy/Sheet';
import Textarea from '@/components/textarea';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import "@/components/css/registersheet.css";
  
//ユーザの地点登録で使用
interface RegisterMark{
  prefecture: string;
  lng: number;
  lat: number;
  city: string;
  startdate: string;
  enddate: string;
  text: string;
}
export default function MyApp(props:RegisterMark) {

  const {prefecture,city,startdate,enddate} = props;
  
  return (
    <Sheet className='registersheet' variant="outlined" color="neutral" sx={{ p: 4 }}>
        <TextField
          disabled
          id="outlined-disabled"
          label="prefecture"
          defaultValue={prefecture}
        />
        
        <TextField
          disabled
          id="outlined-disabled"
          label="city"
          defaultValue={city}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>                                            
          <DatePicker
          label="startdate"
          value={startdate}
          // onChange={(newValue) => setStartdate(newValue)}
          /> 
          <DatePicker
          label="startdate"
          value={enddate}
          // onChange={(newValue) => setEnddate(newValue)}
          />               
        </LocalizationProvider>       
    </Sheet>
  )
}