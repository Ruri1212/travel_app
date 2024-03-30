import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

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
        <strong>{componentName}</strong> for {valueType} editing
      </span>
    );
    return  content;
}

export default function CommonlyUsedComponents() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
            components={[
                'TimePicker',        
            ]}
            >
                {/* <DemoItem label={<Label componentName="TimePicker" valueType="time" />}> */}
                <DemoItem>
                    <TimePicker />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}