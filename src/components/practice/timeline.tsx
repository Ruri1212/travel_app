import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import Timepicker from '@/components/timepicker';

export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent>         
          <Timepicker/>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />         
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

// export default function OppositeContentTimeline() {
//   return (
//     <Timeline position="alternate">
//       <TimelineItem>
//         <TimelineOppositeContent color="text.secondary">
//           09:30 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Eat</TimelineContent>
//       </TimelineItem>

//       <TimelineItem>
//         <TimelineOppositeContent>Code</TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>        
//         <TimelineContent color="text.secondary">
//           10:00 am
//         </TimelineContent>
//       </TimelineItem>

//       <TimelineItem>
//         <TimelineOppositeContent color="text.secondary">
//           12:00 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Sleep</TimelineContent>
//       </TimelineItem>

//       <TimelineItem>
//         <TimelineOppositeContent>Code</TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot />
//           <TimelineConnector />
//         </TimelineSeparator>        
//         <TimelineContent color="text.secondary">
//           10:00 am
//         </TimelineContent>
//       </TimelineItem>
      

//     </Timeline>
//   );
// }