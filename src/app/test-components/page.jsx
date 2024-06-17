'use client';
import Header from '@/components/Nav/Header';
import { FirstComment, NewUser, FirstCourse, FirstAnswer, FirstPlace } from '@/utils/icons/badges';
import { PdfIcon } from '@/utils/icons/icons';
import BadgesContainer from '@/components/Badges/BadgesContainer'
import BadgesEduk2Container from '@/components/Badges/BadgesEduk2Container';


export default function Page() {

    return (
        <>
            <Header />
            <BadgesContainer obtained={true}>
                <NewUser className='w-8 h-8' />
            </BadgesContainer>
            <BadgesContainer obtained={false}>
                <FirstComment className='w-8 h-8' />
            </BadgesContainer>
            <BadgesContainer obtained={true}>
                <FirstCourse className='w-8 h-8' />
            </BadgesContainer>
            <BadgesContainer obtained={false}>
                <PdfIcon className='w-8 h-8' />
            </BadgesContainer>
            <BadgesContainer obtained={false}>
                <FirstAnswer className='w-8 h-8' />
            </BadgesContainer>
            <BadgesContainer obtained={false}>
                <FirstPlace className='w-8 h-8' />
            </BadgesContainer>
            <BadgesEduk2Container level={1} />
        </>
    );
}