import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';
export default function Reveal({children,className='',direction='up'}:{children:ReactNode;className?:string;direction?:'up'|'left'|'right'|'fade'}){
 const {ref,inView}=useInView();
 const animations={up:'animate-fade-up',left:'animate-praxis-slide-left',right:'animate-praxis-slide-right',fade:'animate-praxis-fade'};
 return <div ref={ref} className={`${className} ${inView?animations[direction]:'reveal-pending'}`}>{children}</div>;
}
