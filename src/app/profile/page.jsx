'use client';
import { useAuth } from "@/hooks/useAuth";
import StudentView from "./studentView";
import TeacherView from "./teacherView";
import { redirect } from "next/navigation";

export default function CourseDetailsPage({ params }){
    const { user } = useAuth();

    if(Object.keys(user).length === 0 && user.constructor === Object){
        return <h1>Loading...</h1>
    } else if(user.role === 'student'){
        return <StudentView params={params}/>
    }else if(user.role === 'teacher'){
        return <TeacherView params={params}/>
    }
    else{
        return redirect('/access');
    }
}