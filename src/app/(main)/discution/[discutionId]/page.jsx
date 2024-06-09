'use client';

import { useAuth } from "@/hooks/useAuth";
import StudentView from './StudentView';
import TeacherView from './TeacherView';

export default function ForumPage({ params }){
    const { user } = useAuth();

    if(user.role === 'student'){
        return <StudentView params={params}/>
    }else if(user.role === 'teacher'){
        return <TeacherView params={params}/>
    }
}