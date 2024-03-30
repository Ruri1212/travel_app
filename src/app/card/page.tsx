'use client'
import * as React from 'react';
import Card from '@/components/practice/card';
import Cardlist from '@/components/practice/cardlist';
import Textarea from '@/components/textarea';
import Sheet from '@/components/practice/sheet';
import Datepicker from '@/components/practice/datepicker';


import './layout_card.css'

export default function page() {
    return (
        <div className='dvide'>
            {/* <Container/>
            <Card avatar="A"/> */}
            {/* <Cardlist/> */}
            {/* <Datepicker/>
            <Textarea/> */}
            <Sheet/>
        </div>
    )
}