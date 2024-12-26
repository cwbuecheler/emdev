import React, { useEffect, useRef, useState } from 'react';
import { useOverrideConfig } from '@embeddable.com/react';

// import { Container } from 'vanilla-components';

const Container = (props: { title?: string; children: React.ReactNode }) => {
  return (
    <div className="w-full p-4 bg-[#F5F7F9] rounded-xl">
      {props.title && (
        <div className="text-[#6B778C] text-sm font-medium">{props.title}</div>
      )}
      {props.children}
    </div>
  );
};

type Props = {
  onChange: (v: string) => void;
  title?: string;
  value?: string;
  placeholder: string;
};

export default (props: Props) => {
  const overrides: any = useOverrideConfig();
  const { theme } = overrides;

  return (
    <Container title={props.title}>
      <div className="w-full relative rounded-xl bg-white border border-[#DADCE1] pr-8 h-10">
        Test
      </div>
    </Container>
  );
};
