import { FC, ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  tooltip: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = ({ clientX }: React.MouseEvent<HTMLDivElement>) => {
    if (!tooltipRef.current || !containerRef.current) return;
    const { left } = containerRef.current.getBoundingClientRect();

    tooltipRef.current.style.left = `${clientX - left}px`;
  };

  return (
    <div ref={containerRef} onMouseEnter={handleMouseEnter} className='group relative inline-block'>
      {children}
      {tooltip && (
        <span
          ref={tooltipRef}
          className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-stone-700 text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap'
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default ToolTip;
