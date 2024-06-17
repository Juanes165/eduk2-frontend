'use client';
import { useAuth } from "@/hooks/useAuth";
import StudentView from "./studentView";
import TeacherView from "./teacherView";
import { redirect } from "next/navigation";

export default function CourseDetailsPage({ params }){
    const { user } = useAuth();
    console.log(user);

    if(user.role === 'student'){
        return <StudentView params={params}/>
    }else if(user.role === 'teacher'){
        return <TeacherView params={params}/>
    }
    else{
        console.log('No tienes permisos para acceder a esta página');
        //return redirect('/access');
    }
}