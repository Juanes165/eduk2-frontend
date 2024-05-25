'use client';

import { useAuth } from "@/hooks/useAuth";
import StudentView from "./studentView";
import TeacherView from "./teacherView";

export default function CourseDetailsPage({ params }){
    const { user } = useAuth();

    if(user.role === 'student'){
        return <StudentView params={params}/>
    }else if(user.role === 'teacher'){
        return <TeacherView/>
    }
}