'use client';
import { useAuth } from '@/hooks/useAuth';
import StudentView from './studentView';
import TeacherView from './teacherView';

export default function HomePage() {
    const { user } = useAuth();

    if(user.role === 'student') {
        return <StudentView />
    }else if(user.role === 'teacher') {
        return <TeacherView />
    }
}