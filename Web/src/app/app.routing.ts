import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { StudentsComponent } from './screens/students/students.component';
import { AteendanceComponent } from './screens/ateendance/ateendance.component';
import { RoomsComponent } from './screens/rooms/rooms.component';
import { CoursesComponent } from './screens/courses/courses.component';
import { SectionsComponent } from './screens/sections/sections.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes =[
    {
        path: '',
        component:LoginComponent
    },
    {
        path: 'home',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                component:StudentsComponent
            },
            {
                path: 'students',
                component:StudentsComponent
            },
            {
                path: 'attendance',
                component:AteendanceComponent
            },
            {
                path: 'rooms',
                component:RoomsComponent
            },
                {
                path: 'courses',
                component:CoursesComponent
            },
            
            {
                path: 'sections',
                component:SectionsComponent
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'students'
    }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
