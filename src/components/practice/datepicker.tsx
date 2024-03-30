import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function Label({
    componentName,
    valueType,
    isProOnly,
  }: {
    componentName: string;
    valueType: string;
    isProOnly?: boolean;
  }) {
    const content = (
      <span>
        <strong>{componentName}</strong> {valueType} 
      </span>
    );
    return  content;
}

export default function CommonlyUsedComponents({text}:{text:string}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
            components={[
                'DatePicker',        
            ]}
            >
                <DemoItem label={<Label componentName={text} valueType="date" />}>
                {/* <DemoItem label="text"> */}
                    <DatePicker />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}