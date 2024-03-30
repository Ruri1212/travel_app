import Sheet from '@mui/joy/Sheet';
import Textarea from '@/components/textarea';
import Datepicker from '@/components/practice/datepicker';
import Timepicker from '@/components/practice/timepicker';
import Timeline from '@/components/practice/timeline';
import Cardjoy from '@/components/practice/card_joy';
import Cardlist from '@/components/practice/cardlist';

import "@/components/css/sheet.css";

export default function MyApp() {

  const label = ["start","end"];
      
  return (
    <Sheet className = "sheet" variant="outlined" color="neutral" sx={{ p: 4 }}>
        Prefecture
        <Textarea text="Type in here"/>
        City
        <Textarea text="Type in here"/>
        <div className='date'>
          {label.map((text) => (
            <Datepicker key={text} text={text} />
            ))}                
        </div>
        <Cardlist/>
    </Sheet>
  )
}