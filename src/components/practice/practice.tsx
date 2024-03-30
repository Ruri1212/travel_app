'use client'
import * as React from 'react';

interface PrintProps {
  content: { date: string; text: string }[];
}

export default function Print(props: PrintProps) {
  const { content } = props;

  return (
    <>
      {content.map((item, index) => (
        <p key={index}>{item.date}{item.text}</p>
      ))}
    </>
  );
}




